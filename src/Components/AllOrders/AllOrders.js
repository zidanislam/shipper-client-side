import React from 'react';
import { useEffect,useState } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import useAuth from './../Hooks/useAuth';
const AllOrders = () => {
  const {isLodding}=useAuth();
  const [allOrders,setAllOrders]=useState([]);
  const [isDelete,setIsDelet]=useState(null);
  const [isOrderActive,setIsOrderActive]=useState(null);
  useEffect(()=>{
    fetch('https://scary-vault-96759.herokuapp.com/allorders')
    .then(res=>res.json())
    .then(data=>{
      setAllOrders(data)
    })
  },[{isDelete,isOrderActive}])

  //handel order from all order list
  const handelDeleteOrder=(id)=>{
    fetch(`https://scary-vault-96759.herokuapp.com/deleteOrder/${id}`,{
      method:'DELETE',
      headers:{
        'content-type':'application/json'
      },

    })
    .then(res=>res.json())
    .then(result=>{
      if(result){
        alert('your order delete successfully');
        setIsDelet(true);
      }
      else{
        setIsDelet(false)
      }
    })
  };
  //updet order statud
  const handelUpdetOrder=(id)=>{
    fetch(`https://scary-vault-96759.herokuapp.com/updetOrder/${id}`,{
      method:'PUT',
      headers:{
        'content-type':'application/json'
      },
    })
    .then(res=>res.json())
    .then(result=>{
       if(result){
         alert('your order active now');
         setIsOrderActive(true)
       }
       else{
         setIsOrderActive(false)
       }
    })
  }
  
  return (
    <div>
        
        <h2 className="p-lg-4">All order list</h2>
          <table class="table table-bordered">
            <thead>
              <tr>
                <th scope="col">Item Name</th>
                <th scope="col">Ordered By</th>
                <th scope="col">Current status</th>
                <th scope="col">Delete</th>
                <th scope="col">Updates order</th>
              </tr>
            </thead>
            {
                    allOrders.map(orders=><tbody>
                <tr>
                <td scope="row"> {orders.name}</td>
                <td>{orders.email}</td>
                <td>{orders.status}...</td>
                <td><Button onClick={()=>handelDeleteOrder(orders._id)}>Delete</Button></td>
                <td><Button onClick={()=>handelUpdetOrder(orders._id)}>Updates status</Button></td>
              </tr>
              </tbody>
                    )
                      
                  }

          </table>
    </div>
  );
};

export default AllOrders;