import React from 'react';
import weth from '../assets/assets/weth.png'
import './collectioncard.css'

const CollectionCard = ({id,name,traits,image}) => {
  return (
  <div className='collectioncard'>
      <img src={image} alt='' />
      <div className="details">
      <div className="name">
          {name}
          <div className="id">.#{id}</div>
      </div>
     
       <div className="pricecontaner">
           <img src={weth} className='wethImage' />
           <div className="price">{traits[0]?.value}</div>
       </div>
       </div>


  </div>
  );
};

export default CollectionCard;
