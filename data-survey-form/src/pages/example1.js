import React from 'react';
import { FormGroup,ControlLabel,HelpBlock } from 'react-datepicker';
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {setAddressLine,setCity,setEducationLevel,setEmail,setFeet,SetLastName,
  setFirstName,setInches,setState,setZipCode,setBirthDate,setPhoneNumber}
from '../redux/actions/userActions';
import DatePicker from "react-datepicker";
import { Redirect } from "react-router-dom";
//import resultsVerify from  './ResultsVerify';

// import DatePicker from "react-bootstrap-date-picker";



const Example1= ({dispatch,email})=>{
  const [startDate, setStartDate] = React.useState(null);
  const [birthDate, setBirthDate] = React.useState(new Date());
  const [validatePage ,setValidatePage]=React.useState(false);
  const[confirmEmail,setConfirmEmail]=React.useState(null);
  const[errorMessage,setErrorMessage]=React.useState(null);
  const handleChange = (e) => {
    setBirthDate(e);
  }
  const handleSubmit = () => {
    console.log(email);
    console.log(confirmEmail);

    if(email!=confirmEmail){
      setErrorMessage("Email ids dont match. Please reenter");
    }
    else{
      setValidatePage(true);
    }

  }

  if (validatePage) {
    return <Redirect to="/ResultsVerify"/>;
  } 
//   $('.datepicker').datepicker({
//     startDate: '-3d'
// });
    return(
       
<div class="container" style={{"align": "center"}}>
{/* <div class="card" border="secondary" style={{"width": "30rem"}}> */}
<div class="card" style={{"width": "1px;"}}>
  <div class="card-header text-center">
  CSC 642 Summer 2020 Individual Assignment Swetha Govindu
  </div>
  {/* <div class="row no-gutters">
    {/* <div class="col-md-4">
      <img src="..." class="card-img" alt="..."></img>
    </div> 
   <div class="col-md-8"> */}

  <div class="card-body">
    <h5 class="card-title">Data Survey Form Summary</h5>
    <div class="card-text">
    <form>
      
  <div class="form-group">
    {/* <div class="form-group col-md-6"> */}
      <label for="inputEmail4">First Name<span style={{ "color": "red" }}>*</span></label>
      <input type="inputfirstName" class="form-control" id="inputFirstName" onChange={(event) => dispatch(setFirstName(event.target.value))} pattern = "[A-Za-z\s]+" placeholder="First Name"  required></input>
      <span class="form-text small text-muted">
       Name must contain letters only.
       </span>
    </div>
    <div class="form-group">
      <label for="inputLastName">Last Name <span style={{ "color": "red" }}>*</span></label>
      <input type="lastName" class="form-control" id="inputLastName" onChange={(event) => dispatch(SetLastName(event.target.value))} pattern = "[A-Za-z\s]+" placeholder="First name"  required></input>
      <span class="form-text small text-muted">
       Name must contain letters only.
       </span>
  </div>
  <div class="form-group">
    <label for="inputAddress">Address <span style={{ "color": "red" }}>*</span></label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" maxlength="40"  onChange={(event) => dispatch(setAddressLine(event.target.value))} pattern="[0-9]+[A-Za-z\s]+[A-Za-z\s]"></input>
  </div>
  <div class="form-group">
  <label for="inputCity">City <span style={{ "color": "red" }}>*</span></label>
      <input type="text" class="form-control" onChange={(event) => dispatch(setCity(event.target.value))} id="inputCity"></input>
      <div class="valid-feedback">
        Looks good!
      </div>
  </div>
  <div class="form-row">
    {/* <div class="form-group col-md-6">
      
    </div> */}
    <div class="form-group col-md-6">
      <label for="inputState">State <span style={{ "color": "red" }}>*</span></label>
      <select id="inputState" class="form-control" onChange={(event) => dispatch(setState(event.target.value))}>
        <option selected>Choose...</option>
        <option value=""></option>
                  <option value="AS">American Samoa</option>
                  <option value="GU">Guam</option>
                  <option value="MP">Northern Mariana Islands</option>
                  <option value="PR">Puerto Rico</option>
                  <option value="UM">United States Minor Outlying Islands</option>
                  <option value="VI">Virgin Islands</option>
                  <option value="AL">Alabama</option>
                  <option value="AK">Alaska</option>
                  <option value="AZ">Arizona</option>
                  <option value="AR">Arkansas</option>
                  <option value="CA">California</option>
                  <option value="CO">Colorado</option>
                  <option value="CT">Connecticut</option>
                  <option value="DE">Delaware</option>
                  <option value="DC">District Of Columbia</option>
                  <option value="FL">Florida</option>
                  <option value="GA">Georgia</option>
                  <option value="HI">Hawaii</option>
                  <option value="ID">Idaho</option>
                  <option value="IL">Illinois</option>
                  <option value="IN">Indiana</option>
                  <option value="IA">Iowa</option>
                  <option value="KS">Kansas</option>
                  <option value="KY">Kentucky</option>
                  <option value="LA">Louisiana</option>
                  <option value="ME">Maine</option>
                  <option value="MD">Maryland</option>
                  <option value="MA">Massachusetts</option>
                  <option value="MI">Michigan</option>
                  <option value="MN">Minnesota</option>
                  <option value="MS">Mississippi</option>
                  <option value="MO">Missouri</option>
                  <option value="MT">Montana</option>
                  <option value="NE">Nebraska</option>
                  <option value="NV">Nevada</option>
                  <option value="NH">New Hampshire</option>
                  <option value="NJ">New Jersey</option>
                  <option value="NM">New Mexico</option>
                  <option value="NY">New York</option>
                  <option value="NC">North Carolina</option>
                  <option value="ND">North Dakota</option>
                  <option value="OH">Ohio</option>
                  <option value="OK">Oklahoma</option>
                  <option value="OR">Oregon</option>
                  <option value="PA">Pennsylvania</option>
                  <option value="RI">Rhode Island</option>
                  <option value="SC">South Carolina</option>
                  <option value="SD">South Dakota</option>
                  <option value="TN">Tennessee</option>
                  <option value="TX">Texas</option>
                  <option value="UT">Utah</option>
                  <option value="VT">Vermont</option>
                  <option value="VA">Virginia</option>
                  <option value="WA">Washington</option>
                  <option value="WV">West Virginia</option>
                  <option value="WI">Wisconsin</option>
                  <option value="WY">Wyoming</option>
      </select>
    </div>
    <div class="form-group col-md-6">
      <label for="inputZip">Zip <span style={{ "color": "red" }}>*</span></label>
      <input type="text" class="form-control" id="inputZip" onChange={(event) => dispatch(setZipCode(event.target.value))}></input>
    </div>
  </div>
  <div class="form-group">
      <label for="inputBirthDate">Birth date  <span style={{ "color": "red" }}>*</span></label>
      {/* <input type="text" class="datepicker" data-date-format="dd/mm/yyyy" id="user_dob" name="user[dob]" placeholder="dd/mm/yyyy" readonly="readonly"  type="text"></input> */}
      <div class="form-control">

      <DatePicker type="date" selected={startDate} onChange={date => setStartDate(date)} placeholder="Bith Date"/>

</div>
  </div>
  {/* <div class="form-group"
                <label  for="user_date_of_birth">Date of Birth <span style={{ "color": "red" }}>*</span></label>
                <div class="controls">
                <DatePicker
              selected={startDate}
              onChange={handleChange}
              // onChange={(event) => dispatch(setBirthDate(event.target.value))}
              name="startDate"
              dateFormat="MM/dd/yyyy" placeholder={startDate}></DatePicker>
                </div> <span class="input-group-addon">
                    <span class="glyphicon glyphicon-calendar">
                    </span>
                </span>
              </div>
              <div class="form-group">
                <div class='input-group date' id='datetimepicker1'>
                    <input type='text' class="form-control" />
                    <span class="input-group-addon">
                        <span class="glyphicon glyphicon-calendar"></span>
                    </span>
                </div>
                <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
            </div>
           */}
  <div class="form-group">
    <label for="inputEducationLevel">Education Level</label>
    <select id="inputEducation" name="Education" class="form-control" onChange={(event) => dispatch(setEducationLevel(event.target.value))} placeholder="Education">
                  <option></option>
                  <option>High School</option>
                  <option>College</option>
                  <option>Graduate Study</option>
                  <option>PHD</option>
    </select>
  </div>
  <div class="form-row">
  <label for="inputHeight">Height </label> 
    </div>

  <div class="form-row">
    
    <div class="form-group col-md-6">

    <input type="number"  min="1" class="form-control" placeholder="Feet"   onChange={event=> dispatch(setFeet(event.target.value))} id="inputFeet"></input>

      </div>
      <div class="form-group col-md-6">
      <input type="number"  min="1" class="form-control" placeholder="Inches" placeholder="Inches"
                 onChange={event=> dispatch(setInches(event.target.value))} id="inputCm"></input>
      </div>
      </div>
  
  <div class="form-group">
      <label for="inputPhone">Enter your phone number <span style={{ "color": "red" }}>*(7 digits number)</span></label>
      <input type="text" name="Phone" pattern = "^\d{7}$"id="inputPhone" class="form-control" onChange={(event) => dispatch(setPhoneNumber(event.target.value))} placeholder="Phone number" required></input>
  </div>
  <div class="form-group">
      <label for="inputEmail">Email Address <span style={{ "color": "red" }}>*</span></label>
     
      <div class="input-group-prepend">
      <span class="input-group-text" id="basiaddon1">@</span>
      <input type="text" name="email" id="inputPhone" class="form-control" onChange={(event) => dispatch(setEmail(event.target.value))} placeholder="Email Address" required></input>

  </div>
  </div>
  <div class="form-group">
      <label for="inputEmail">Confirm Email Address <span style={{ "color": "red" }}>*</span></label>
      <input type="text" name="email" id="inputPhone" class="form-control" onChange={(event) => (setConfirmEmail(event.target.value))} placeholder="Confirm Email Address" required></input>
      <div class="invalid-feedback">
        {errorMessage}
       </div>
  </div>
  {/* <div class="form-group">
                            <div class="g-recaptcha" data-sitekey="6LfKURIUAAAAAO50vlwWZkyK_G2ywqE52NU7YO0S" data-callback="verifyRecaptchaCallback" data-expired-callback="expiredRecaptchaCallback"></div>
                            <input class="form-control d-none" data-recaptcha="true" required data-error="Please complete the Captcha" />
                            <div class="help-block with-errors"></div>
    </div>  */}
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck" required></input>
      <label class="form-check-label" for="gridCheck">
      I Agree to Terms & Conditions<span style={{ "color": "red" }}>*</span>
            </label>
    </div>
  </div>
  <button type="submit" class="btn btn-primary" onClick={handleSubmit}>Submit</button>
</form>
  {/* <div class="card-footer text-muted">
    2 days ago
  </div> */}
</div></div></div></div>

    )
};
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
export default connect(mapStateToProps) (Example1);