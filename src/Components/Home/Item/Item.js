import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from './../../Hooks/useAuth';
import './item.css';

const Item = ({item}) => {
  const {name,img,price,des}=item;
  const {user}=useAuth();
  const email=user?.email;
  item.email=email;
  //handel order
  const handelOrder=(id)=>{
    fetch(`https://scary-vault-96759.herokuapp.com/addorder/`,{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(item)
    })
    .then(res=>res.json())
    .then(result=>{
      if(result.acknowledged){
        alert('added your order')
      }
      else{
        alert("already you added")
      }
    })
    
  }
  
 
  return (
    <div>
      <Col>
          <Card>
          <Card.Img variant="top" src={img} />
          <Card.Body className='item'>
          <Card.Title>{name}</Card.Title>
              <h3>{price}</h3>
              <p>{des}</p>                            
          </Card.Body>                               
          </Card>
          <Card.Footer>
          {user?.email ? (
              <Button className='btn btn-danger' onClick={()=>handelOrder(item._id)} >
              Order Now
              </Button>
            ) : (
              <Link  to="/login">
                <Button>
                  {name}
                </Button>
              </Link>
            )}
            
          </Card.Footer>
        </Col>
    </div>
  );
};

export default Item;