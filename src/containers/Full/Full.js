import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import {Container} from 'reactstrap';
import Header from '../../components/Header/';
import Footer from '../../components/Footer/';


import Home from '../../views/Home/';
import About from '../../views/About/';



class Full extends Component {
  render() {
    return (
         <div>
          <main>
          <Header />
            <Container>
              <Switch>
                <Route path="/" name="Dashboard" component={Home}/>
                <Route exact path="/about" name="About" component={About}/>
                
              </Switch>
            </Container>
            <Footer />
          </main>
        </div>
    );
  }
}

export default Full;
