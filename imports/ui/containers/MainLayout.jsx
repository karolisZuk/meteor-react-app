import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from '../components/Header.jsx';
import Home from '../pages/Home.jsx';
import NotFound from '../pages/NotFound.jsx';
import Register from '../components/Login/Register';

export default class MainLayout extends React.Component {
  render() {
    return (

        <div>
          <Header />
          <div className="container">

            </div>
        </div>

    );
  }
}
