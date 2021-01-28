import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <h3>HOME</h3>
            <ul>
                <li>
                    <Link to="/counter">Counter</Link>
                </li>
                <li>
                    <Link to="/userlist">UserList</Link>
                </li>
            </ul>
        </>
    );
  };
  
  export default Home;