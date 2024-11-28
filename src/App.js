
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode ,setMode] =useState('light');

  // const [btn , btnText]= useState('Enable to Dark mode') 
  const [btncolor, btnColor] =useState({
      color:'white',
      backgroundColor:'blue'
  })


  const [alert, setAlert]= useState(null);

  const showAlert =(message, type)=>{
    setAlert({
        msg:message,
        type:type
    }
    )
    setTimeout(()=>{
        setAlert(null);
    },3000);
  }

  const toggleMode =()=>{
    if ( mode==='light') {
      setMode('dark');
      document.body.style.backgroundColor='#004462'
      btnColor({
        color:'black',
        backgroundColor:'white'
      })
      showAlert("Dark mode had been enabled", "success");


    }
    else{
      setMode('light');
      document.body.style.backgroundColor='#FFFFFF'
      btnColor({
        color:'white',
        backgroundColor:'blue'
    });
    showAlert("Light mode had been enabled", "success");

    }
  }



  return (
      <>
      <Router>
      <Navbar  mode={mode} toggleMode={toggleMode}></Navbar>
      
      <div className="container my-3">
      <Alert alert={alert}></Alert>
      
          <Routes>
          <Route path="/about" element={<About/>}/>
          
          <Route path="/"  element={<TextForm heading="Enter the text to analyz" showAlert={showAlert} mode={mode} toggleMode={toggleMode} btncolor={btncolor}></TextForm>  }/>
        </Routes>


      </div>

        </Router>
      </>
  );
}

export default App;
