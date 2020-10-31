import React from 'react';
import ReactDOM from 'react-dom';
import Header  from './view/Header';
import Main from './view/Main';
import Footer from './view/Footer';

function Naver(){
  return (
     <div>  
       <Header/>
       <Main/>
       <Footer/>
    </div>
  )
}

ReactDOM.render(
  <Naver/>,document.getElementById('root')
);

