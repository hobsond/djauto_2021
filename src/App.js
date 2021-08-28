import './App.css';
import { Switch, Route } from 'react-router'
import styled from 'styled-components'
import { useEffect } from 'react'
/*================== Pages =================*/
import Home from './pages/Home'
import Inventory from './pages/Inventory';
import Contact from './pages/Contact'
import About from './pages/About'

/*================== Components =================*/
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import gsap from 'gsap/gsap-core';

gsap.registerPlugin(ScrollToPlugin)

const Main = styled.main`
background:black;
/* height:100vh; */
overflow-x:hidden;
overflow-y: hidden;
`

function App() {
  const url = process.env.REACT_APP_DBURL
  console.log({url})
 
  return (
    <div className="App">
      <Navbar />

      <Main>
      <Switch>
        <Route path={'/inventory'} component={Inventory}/>
        <Route path={'/About'} component={About}/>
        <Route path={'/contact'} component={Contact}/>
        <Route exact path='/' component={Home} />
        </Switch>
      <Footer/>

      </Main>
        

    </div>
  );
}

export default App;
