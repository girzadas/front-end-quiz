import React, { useState, useEffect } from 'react';
import '../App.css';
const axios = require('axios')

function AppView() {
    /*
    const [state, setState] = useState();
  useEffect(() => {
    axios.get("/browse").then(
        res => setState(res.data)
    )
  });
  */
  return (
    <div>
      <h1 className='App-welcome'>Browse our awesome products!</h1>
      <div>
        {/*state.items && state.items.map((item) => 
           <div>{item.title}</div>
        )*/}
      </div>
    </div>
  );
}

export default AppView;
