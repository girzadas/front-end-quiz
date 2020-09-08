import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import './BrowseItem.css';

function BrowseItem(props) {

  return (
    <div className='grid-item'>
        <Link to={`/item/${props.item.integerId}`}>
            <div className='grid-item-image'style={{
                backgroundImage:`url(${props.item.image})`
            }}>
            </div>
            <div className='grid-item-description'>
            <h3 className='grid-item-price'>{props.item.price ? props.item.price.amounts.USD : "Price Upon Request"}</h3>
            <FontAwesomeIcon icon={faHeart} className='grid-item-icon' />
            </div>
        </Link>
  </div>
  );
}

export default BrowseItem;

