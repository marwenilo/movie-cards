import React from 'react'
import { Card } from 'antd';
import {movies} from './data';
import Rate from './Rate'
const { Meta } = Card;
 const Cardd=()=> {
    return (
        <div className="cardContainer">
          {movies.map(el=>(
            
            <Card
            
            hoverable
            style={{ width: 240, marginLeft: 10,marginRight: 10 }}
            cover={<img className="movieImg" alt="movie img" src={el.img} />}
          >
          <Meta title={el.name} description={el.discription} />
          <div className="cardRate">
          <Rate rate={el.star} />
          <span className="rate">{el.star}</span>
          </div>
   
          </Card>
         
          ))}
             
        </div>
    )
}

export default Cardd





