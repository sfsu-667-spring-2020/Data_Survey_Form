import React from 'react';
//import './App.css';
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {setAddressLine,setCity,setEducationLevel,setEmail,setFeet,SetLastName,
  setFirstName,setInches,setState,setZipCode,setBirthDate,setPhoneNumber}
from './redux/actions/userActions';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DatePicker from "react-datepicker";
import  ResultsVerify from "./pages/ResultsVerify";
import { Redirect } from "react-router-dom";


// import  example from "./example1";

import "react-datepicker/dist/react-datepicker.css";
import example1 from './pages/example1';
import example2 from './pages/example2';


// Import Bootstrap components






const App=({dispatch})=> {

  const [startDate, setStartDate] = React.useState(null);
  const handleChange = (e) => {
    setBirthDate(e);

  }
  // const handleSubmit = () => {
  //   alert("sample")
  //   return <Redirect to="/ResultsVerify"/>;

  // }

  return (
    //style={{ "padding-top": "2%" }}
    <Router>
      <Link to="/example1">example1</Link>

<Switch>
    <Route path="/ResultsVerify" component={ResultsVerify} />
    <Route path="/example1" component={example1} />
    <Route exact path="/" component={example2} />


</Switch>
</Router>
  );
}


const mapStateToProps = (state) => {
  return {
    firstName: state.userReducer.firstName,
    lastName: state.userReducer.lastName,
    city: state.userReducer.city,
    state: state.userReducer.state,
    addressLine: state.userReducer.addressLine,
    zipCode: state.userReducer.zipCode,
    phoneNumber: state.userReducer.phoneNumber,
    email: state.userReducer.email,
    feet: state.userReducer.feet,
    inches: state.userReducer.inches,
    birthDate: state.userReducer.birthDate,

  };
};
export default connect(mapStateToProps)(App);
