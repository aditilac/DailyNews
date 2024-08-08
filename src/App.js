// import logo from './logo.svg';
import './App.css';
import LoadingBar from 'react-top-loading-bar'
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
// import NewsItem from './components/NewsItem';
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
 
} from "react-router-dom";
export default class App extends Component {
  pageSize=12
 
state={
  progress:0
}
setProgress= (progress)=>{
this.setState({
  progress:progress
})
}
  render() {
    
    return (
      <div>
        <Navbar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}
        
      />
        <BrowserRouter>
        <Routes>
          <Route exact path="/" element={ <News setprogress= {this.setProgress} apikey={this.apikey} pageSize={this.pageSize} key="" country="in" category=""/>} > </Route> 
          </Routes>
        <Routes>
          <Route exact path="/science" element={ <News setprogress= {this.setProgress} apikey={this.apikey} pageSize={this.pageSize} key="science" country="in" category="science"/>} > </Route> 
          </Routes>
          <Routes>
          <Route exact path="/business" element={ <News setprogress= {this.setProgress} apikey={this.apikey} pageSize={this.pageSize} key="business" country="in" category="business"/>}> </Route>
          </Routes>
          <Routes>
          <Route exact path="/entertainment" element={ <News setprogress= {this.setProgress}  apikey={this.apikey}pageSize={this.pageSize} key="entertainment" country="in" category="entertainment"/>}> </Route>
          </Routes>
          <Routes>
          <Route exact path="/general" element={ <News setprogress= {this.setProgress}  apikey={this.apikey}pageSize={this.pageSize} key="general" country="in" category="general"/>}> </Route>
          </Routes>
          <Routes>
          <Route exact path="/health" element={ <News setprogress= {this.setProgress} apikey={this.apikey} pageSize={this.pageSize} key="health" country="in" category="health"/>}> </Route>
          </Routes>
          <Routes>
          <Route exact  path="/sports" element={ <News setprogress= {this.setProgress} apikey={this.apikey} pageSize={this.pageSize} key="sports" country="in" category="sports"/>}> </Route>
          </Routes>
          <Routes>
          <Route exact path="/technology" element={ <News setprogress= {this.setProgress}apikey={this.apikey} pageSize={this.pageSize} key="technology" country="in" category="technology"/>}> </Route>
          </Routes>
        </BrowserRouter>
       
        {/*  <News setprogress= {this.setProgress}Item/> */}
  
      </div>
    )
  }
}
