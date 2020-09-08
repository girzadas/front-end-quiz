import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap'; 
import BrowseItem from './BrowseItem';
import './Browse.css';
const axios = require('axios')

function Browse() {

  const [state, setState] = useState([]);
  const [setError] = useState('');

  useEffect(() => {
    let isCancelled = false;
    axios.get("/browse").then(res => {
        if (!isCancelled) {
            setState(res.data)
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
    <Container className='browse-container'>
      <h1 className='App-welcome'>Browse our awesome products!</h1>
      <Row>
          {state.items && state.items.map((item) => 
            <Col xs="12" md="6" lg="4" key={item.id}>
                <BrowseItem item={item}></BrowseItem>
            </Col>
          )}
      </Row>
      <Button variant="warning" className='load-more-button'>Load More</Button>
    </Container>
  );

}

export default Browse;
