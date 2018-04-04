import React from 'react'
import ReactDOM from 'react-dom'

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import Loadable from 'react-loadable'

import helpStore from './views/Store/Store';


///////////////// Api

import {MainApi} from './views/Api/'

/////////////////////// Header + Footer

import Header from './components/Header/'
//import Footer from './components/Footer/'


/////////////////////// Code Splitting

import Loading from './Loading'
import fakeDelay from './fakeDelay'





const Home = Loadable({
 loader: () => fakeDelay(500).then(() => import('./views/Home/')),
  loading: Loading,
  timeout: 10000, // 10 second
});


const Help = Loadable({
 loader: () => fakeDelay(500).then(() => import('./views/Help/')),
  loading: Loading,
  timeout: 10000, // 10 seconds

});


const Privacy = Loadable({
 loader: () => fakeDelay(500).then(() => import('./views/Privacy/')),
  loading: Loading,
  timeout: 10000, // 10 seconds

});

const Terms = Loadable({
 loader: () => fakeDelay(1500).then(() => import('./views/Terms/')),
  loading: Loading,
  timeout: 10000, // 10 seconds

});

const NotFound = Loadable({
 loader: () => fakeDelay(1500).then(() => import('./views/404/')),
  loading: Loading,
  timeout: 10000, // 10 seconds

});


// __SIMPLE_API_ENDPOINT__ looks like: 'https://api.graph.cool/simple/v1/__SERVICE_ID__'
const httpLink = new HttpLink({ uri: MainApi })

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
       <div>
     
          <main>
            <Header />
            <Switch>
		        <Route exact path='/' component={Home} />
		        <Route path='/help' component={Help} />
            <Route path='/about-us' component={Home} />
		        <Route path='/privacy' component={Privacy} />
		        <Route path='/terms' component={Terms} />
		        <Route path='*' component={NotFound} />		     
		      </Switch>
		  </main>

      </div>
    </Router>
  </ApolloProvider>,
  document.getElementById('root'),
)
