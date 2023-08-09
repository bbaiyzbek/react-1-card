import React from 'react';
import CardDesc from './components/description'
import img from './components/assets/rectangle.png'


const App = () => {
  return (
    <div className="App">
     <div className="card">
       <div className="row">
       <div className="col-6">
         <div className="box">
           <img src={img} alt=""/>
         </div>
       </div>
       <div className="col-6">
         <div className="box">
           <CardDesc/>
         </div>
       </div>
     </div></div>


    </div>
  );
}

export default App;
