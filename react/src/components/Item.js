import React, { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container'; 
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
//import Button from 'react-bootstrap/Button';
import './Item.css';
const axios = require('axios')

function Item() {
    let { id } = useParams();

    const [item, setItem] = useState({});
    const [setError] = useState('');

    useEffect(() => {
        let isCancelled = false;
        axios.get(`/item/${id}`).then(res => {
            if (!isCancelled) {
                setItem(res.data)
            }
        }
        ).catch(err => {
            setError(err);
        });
        return function cleanup() {
            isCancelled = true;
        }
    });

    return (
        <Container className='single-item-container'>
            <Row>
                <Col xs="12" className='item-seller-company'>
                    <Link to='/' className='single-item-home-button'><span>{"<"}</span>Home</Link>
                    {item.seller && <h3><strong>{item.seller.company}</strong></h3>}
                </Col>
            </Row>
            <Row>
                <Col xs="12" md="6" lg="4" className='single-item'>
                    <div className='single-item-image'style={{
                        backgroundImage:`url(${item.image})`
                    }}>
                    </div>
                    <FontAwesomeIcon icon={faHeart} className='single-item-icon' />
                </Col>
                <Col xs="12" md="6" lg="8">
                    <div className='single-item-details'>
                        {item.title && <h3><strong>{item.title}</strong></h3>}
                        <h4 className='signle-item-price'> {item.price ? item.price.amounts.USD : "Price Upon Request"}</h4>
                        {item.measurements && 
                            <div>
                                Measurements:
                                <p>{item.measurements.display}</p>
                            </div>
                        }
                        <Row>
                            <Col xs="6">
                                <div className="single-item-button">Purchase</div>
                            </Col>
                            <Col xs="6">
                                <div className="single-item-button">Make Offer</div>
                            </Col>
                        </Row>
                    </div>
                    <div className='single-item-description'>
                        {item.description && <p>{item.description}</p>}
                        {item.creators && <p><strong>Creator: {item.creators}</strong></p>}
                    </div>
                </Col>
            </Row>
        </Container>
    );
  
}

export default Item;




