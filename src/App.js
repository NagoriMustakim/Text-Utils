import { useState } from 'react';
import { Alert } from './components/Alert';
// import { Darkmode } from './components/Darkmode';
import Navbar from './components/Navbar';
// import { Popup } from './components/Popup';
import { TestForm } from './components/TestForm';
function App() {
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
  }
  const salert = () => {
    showAlert("You Click on Primary Button", "danger")
  }
  return (
    <>

      <Navbar></Navbar>
      {/* <Child name="react" resources="newtwon school"></Child>
      <Child name="javascript" resources="code with harry"></Child>
      <Child name="python" resources="telusko"></Child>
      <Child name="khan"></Child>
      <Child name="sachin"></Child> */}
      {/* <Popup></Popup> */}
      {/* <Darkmode></Darkmode> */}
      <TestForm heading="Enter Text to check"></TestForm>

      <Alert alert={alert}></Alert>
      <button type="button" className="btn btn-primary" onClick={salert}>Primary</button>



    </>
  )
}

export default App;
