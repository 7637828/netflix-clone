import React from 'react';
import Header from './components/Header';
import HomeBanner from './components/HomeBanner';
import Login from './components/Login';
import List from './components/List';
import Banner from './components/Banner';
import Overview from './components/Overview';
import Signup from './components/Signup';
import Recommendation from './components/Recommendation';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import './App.css';
function App() {
  return (

    <React.Fragment>
      <Router>
        <Routes>
        <Route path='/' element={<React.Fragment>
          <Header name={"Sign-In"}></Header>
          <HomeBanner></HomeBanner>
        </React.Fragment>}></Route>

        <Route path='/login' element={<React.Fragment>
          <Header name={"Sign-In"}></Header>
          {/* <Login page="log-in" already="new to netflix?"> </Login> */}
          <Login></Login>
        </React.Fragment>}></Route>

        <Route path='/register' element={<React.Fragment>
          <Header name={"Sign-In"}></Header>
         {/* <Login page="register" already="user already exist?"></Login> */}
      <Signup></Signup>
        </React.Fragment>}></Route>
        
        

        {/* <Route path='/dashboard' element={ 
          <React.Fragment>
            <Header></Header>
            <Banner title="Netflix Originals" param="originals"></Banner>
          <List></List>
          </React.Fragment>
          
         }></Route> */}
         <Route  path="/dashboard" element={
            <React.Fragment>
              <Header name={"Sign-Out"}/>
              <Banner title="Netflix Originals" param="trending"/>
              <List title="Netflix Originals" param="originals"/>
              {/* <List title="Trending Now" param="trending"/>
              <List title="Now Playing" param="now_playing"/>
              <List title="popular" param="popular"/>
              <List title="Top Rated" param="top_rated"/>
              <List title="Upcoming" param="upcoming"/> */}
            </React.Fragment>
          }/>
          <Route path='/overview/:id' element={ 
          <React.Fragment>
            <Header name={"Sign-Out"}></Header>
            <Overview></Overview>
          </React.Fragment>
          }/>

          <Route path='/recommendation/:id' element={ 
          <React.Fragment>
            <Header name={"Sign-Out"}></Header>
            <Recommendation></Recommendation>
          </React.Fragment>
          }/>
        </Routes>
      </Router>
    </React.Fragment>
    // <div className="App">
    //   <Header></Header>
    //   <HomeBanner></HomeBanner>
    // </div>
  );
}

export default App;
