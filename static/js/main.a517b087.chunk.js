(this["webpackJsonpdata-survey-form"]=this["webpackJsonpdata-survey-form"]||[]).push([[0],{156:function(e,a,t){e.exports=t(360)},360:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(38),c=t.n(l),o=t(25),i=t(68),s=t(4),m=t(30),u=t(48),d=Object(o.b)((function(e){return{firstName:e.userReducer.firstName,lastName:e.userReducer.lastName,city:e.userReducer.city,state:e.userReducer.state,addressLine:e.userReducer.addressLine,zipCode:e.userReducer.zipCode,phoneNumber:e.userReducer.phoneNumber,email:e.userReducer.email,feet:e.userReducer.feet,inches:e.userReducer.inches,birthDate:e.userReducer.birthDate,educationLevel:e.userReducer.educationLevel}}))((function(e){e.dispatch;var a=e.firstName,t=e.lastName,n=e.city,l=e.state,c=e.zipCode,o=e.addressLine,i=e.phoneNumber,s=e.email,m=e.feet,d=e.inches,p=e.birthDate,E=e.educationLevel,v=Object(u.withScriptjs)(Object(u.withGoogleMap)((function(e){return r.a.createElement(u.GoogleMap,{defaultZoom:8,defaultCenter:{lat:37.7241,lng:122.4799}},e.isMarkerShown&&r.a.createElement(u.Marker,{position:{lat:-34.397,lng:150.644}}))})));return r.a.createElement("div",{class:"container"},r.a.createElement("div",{class:"card text-center"},r.a.createElement("div",{class:"card-header"},"CSC 642 Summer 2020 Individual Assignment Swetha Govindu"),r.a.createElement("div",{class:"card-body"},r.a.createElement("h5",{class:"card-title"},"Data survey Form Summary"),r.a.createElement("div",{class:"card-text"},r.a.createElement("div",{class:"form-label-group"},r.a.createElement("label",{for:"inputFirstName"},"First Name"),a),r.a.createElement("div",{class:"form-label-group"},r.a.createElement("label",{for:"inputLastName"},"Last Name "),t),r.a.createElement("div",{class:"form-label-group"},r.a.createElement("label",{for:"inputAddress"},"Address"),o),r.a.createElement("div",{class:"form-label-group"},r.a.createElement("label",{for:"inputCity"},"City "),n),r.a.createElement("div",{class:"form-label-group"},r.a.createElement("label",{for:"inputState"},"State "),l),r.a.createElement("div",{class:"form-label-group"},r.a.createElement("label",{for:"inputZip"},"Zip "),c),r.a.createElement("div",{class:"form-label-group"},r.a.createElement("label",{for:"inputBirthDate"},"Birth date  "),p),r.a.createElement("div",{class:"form-label-group"},r.a.createElement("label",{for:"inputEducationLevel"},"Education Level"),E),m&&r.a.createElement("div",{class:"form-label-group"},r.a.createElement("label",{for:"inputHeight"},"Height ")," ",m," feet ",d," inches"),r.a.createElement("div",{class:"form-label-group"},r.a.createElement("label",{for:"inputPhone"},"Phone number "),i),r.a.createElement("div",{class:"form-label-group"},r.a.createElement("label",{for:"inputEmail"},"Email Address "),s),r.a.createElement(v,{isMarkerShown:!0,googleMapURL:"https://maps.googleapis.com/maps/api/geocode/json?address=high+st+hasting&components=country:GB\r &key=AIzaSyDKthUAQZzDQWjiDSwp20RitR8-d9qP1Bw",loadingElement:r.a.createElement("div",{style:{height:"100%"}}),containerElement:r.a.createElement("div",{style:{height:"400px"}}),mapElement:r.a.createElement("div",{style:{height:"100%"}})})))))})),p=t(41),E=Object(o.b)((function(e){return{firstName:e.userReducer.firstName,lastName:e.userReducer.lastName,city:e.userReducer.city,state:e.userReducer.state,addressLine:e.userReducer.addressLine,zipCode:e.userReducer.zipCode,phoneNumber:e.userReducer.phoneNumber,email:e.userReducer.email,feet:e.userReducer.feet,inches:e.userReducer.inches,birthDate:e.userReducer.birthDate}}))((function(e){var a,t=e.dispatch,n=e.email,l=r.a.useState(new Date),c=Object(m.a)(l,2),o=(c[0],c[1],r.a.useState(!1)),i=Object(m.a)(o,2),u=i[0],d=i[1],E=r.a.useState(null),v=Object(m.a)(E,2),h=v[0],b=v[1],f=r.a.useState(null),g=Object(m.a)(f,2),y=(g[0],g[1]);return u?r.a.createElement(s.a,{to:"/ResultsVerify"}):r.a.createElement("div",{class:"container"},r.a.createElement("div",{class:"card"},r.a.createElement("div",{class:"card-header text-center"},"CSC 642 Summer 2020 Individual Assignment Swetha Govindu"),r.a.createElement("div",{class:"py-5 text-center"},r.a.createElement("h2",null,"Data Survey Form")),r.a.createElement("div",{class:"row"}),r.a.createElement("div",{class:"col-md-8 mx-auto"},r.a.createElement("span",{class:"form-text small text-muted"},r.a.createElement("span",{style:{color:"red"}},"*")," fields are mandatory"),r.a.createElement("form",{class:"justify-content-center",novalidate:!0},r.a.createElement("div",{class:"row",style:{float:"center"}},r.a.createElement("div",{class:"col-md-6 mb-3"},r.a.createElement("label",{for:"firstName"},"First name",r.a.createElement("span",{style:{color:"red"}},"*")),r.a.createElement("input",{type:"inputfirstName",class:"form-control",id:"inputFirstName",onChange:function(e){return t({type:"SET_FIRST_NAME",firstName:e.target.value})},pattern:"[A-Za-z\\s]+",placeholder:"First Name",required:!0}),r.a.createElement("span",{class:"form-text small text-muted"},"Name must contain letters only."),r.a.createElement("div",{class:"invalid-feedback"},"Valid first name is .")),r.a.createElement("div",{class:"col-md-6 mb-3"},r.a.createElement("label",{for:"lastName"},"Last name ",r.a.createElement("span",{style:{color:"red"}},"*")),r.a.createElement("input",{type:"lastName",class:"form-control",id:"inputLastName",onChange:function(e){return t({type:"SET_LAST_NAME",lastName:e.target.value})},pattern:"[A-Za-z\\s]+",placeholder:"Last name",required:!0}),r.a.createElement("div",{class:"invalid-feedback"},"Valid last name is ."))),r.a.createElement("div",{class:"mb-3"},r.a.createElement("label",{for:"address"},"Address ",r.a.createElement("span",{style:{color:"red"}},"*")),r.a.createElement("input",{type:"text",class:"form-control",id:"inputAddress",placeholder:"1234 Main St",maxlength:"40",onChange:function(e){return t({type:"SET_ADDRESS_LINE",addressLine:e.target.value})},pattern:"[0-9]+[A-Za-z\\s]+[A-Za-z\\s]"}),r.a.createElement("div",{class:"invalid-feedback"},"Please enter your  address.")),r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"col-md-5 mb-3"},r.a.createElement("label",{for:"city"},"City ",r.a.createElement("span",{style:{color:"red"}},"*")),r.a.createElement("input",{type:"text",class:"form-control",onChange:function(e){return t({type:"SET_CITY",city:e.target.value})},id:"inputCity"}),r.a.createElement("div",{class:"valid-feedback"},"Looks good!")),r.a.createElement("div",{class:"col-md-4 mb-3"},r.a.createElement("label",{for:"state"},"State ",r.a.createElement("span",{style:{color:"red"}},"*")),r.a.createElement("select",{id:"inputState",class:"form-control",onChange:function(e){return t({type:"SET_STATE",state:e.target.value})}},r.a.createElement("option",{selected:!0},"Choose..."),r.a.createElement("option",{value:""}),r.a.createElement("option",{value:"AS"},"American Samoa"),r.a.createElement("option",{value:"GU"},"Guam"),r.a.createElement("option",{value:"MP"},"Northern Mariana Islands"),r.a.createElement("option",{value:"PR"},"Puerto Rico"),r.a.createElement("option",{value:"UM"},"United States Minor Outlying Islands"),r.a.createElement("option",{value:"VI"},"Virgin Islands"),r.a.createElement("option",{value:"AL"},"Alabama"),r.a.createElement("option",{value:"AK"},"Alaska"),r.a.createElement("option",{value:"AZ"},"Arizona"),r.a.createElement("option",{value:"AR"},"Arkansas"),r.a.createElement("option",{value:"CA"},"California"),r.a.createElement("option",{value:"CO"},"Colorado"),r.a.createElement("option",{value:"CT"},"Connecticut"),r.a.createElement("option",{value:"DE"},"Delaware"),r.a.createElement("option",{value:"DC"},"District Of Columbia"),r.a.createElement("option",{value:"FL"},"Florida"),r.a.createElement("option",{value:"GA"},"Georgia"),r.a.createElement("option",{value:"HI"},"Hawaii"),r.a.createElement("option",{value:"ID"},"Idaho"),r.a.createElement("option",{value:"IL"},"Illinois"),r.a.createElement("option",{value:"IN"},"Indiana"),r.a.createElement("option",{value:"IA"},"Iowa"),r.a.createElement("option",{value:"KS"},"Kansas"),r.a.createElement("option",{value:"KY"},"Kentucky"),r.a.createElement("option",{value:"LA"},"Louisiana"),r.a.createElement("option",{value:"ME"},"Maine"),r.a.createElement("option",{value:"MD"},"Maryland"),r.a.createElement("option",{value:"MA"},"Massachusetts"),r.a.createElement("option",{value:"MI"},"Michigan"),r.a.createElement("option",{value:"MN"},"Minnesota"),r.a.createElement("option",{value:"MS"},"Mississippi"),r.a.createElement("option",{value:"MO"},"Missouri"),r.a.createElement("option",{value:"MT"},"Montana"),r.a.createElement("option",{value:"NE"},"Nebraska"),r.a.createElement("option",{value:"NV"},"Nevada"),r.a.createElement("option",{value:"NH"},"New Hampshire"),r.a.createElement("option",{value:"NJ"},"New Jersey"),r.a.createElement("option",{value:"NM"},"New Mexico"),r.a.createElement("option",{value:"NY"},"New York"),r.a.createElement("option",{value:"NC"},"North Carolina"),r.a.createElement("option",{value:"ND"},"North Dakota"),r.a.createElement("option",{value:"OH"},"Ohio"),r.a.createElement("option",{value:"OK"},"Oklahoma"),r.a.createElement("option",{value:"OR"},"Oregon"),r.a.createElement("option",{value:"PA"},"Pennsylvania"),r.a.createElement("option",{value:"RI"},"Rhode Island"),r.a.createElement("option",{value:"SC"},"South Carolina"),r.a.createElement("option",{value:"SD"},"South Dakota"),r.a.createElement("option",{value:"TN"},"Tennessee"),r.a.createElement("option",{value:"TX"},"Texas"),r.a.createElement("option",{value:"UT"},"Utah"),r.a.createElement("option",{value:"VT"},"Vermont"),r.a.createElement("option",{value:"VA"},"Virginia"),r.a.createElement("option",{value:"WA"},"Washington"),r.a.createElement("option",{value:"WV"},"West Virginia"),r.a.createElement("option",{value:"WI"},"Wisconsin"),r.a.createElement("option",{value:"WY"},"Wyoming")),r.a.createElement("div",{class:"invalid-feedback"},"Please provide a valid state.")),r.a.createElement("div",{class:"col-md-3 mb-3"},r.a.createElement("label",{for:"zip"},"Zip ",r.a.createElement("span",{style:{color:"red"}},"*")),r.a.createElement("input",{type:"text",class:"form-control",id:"zip",placeholder:""}),r.a.createElement("span",{class:"form-text small text-muted"},"ZipCode must contain five positive digits."),r.a.createElement("div",{class:"invalid-feedback"},"Zip code ."))),r.a.createElement("div",{class:"mb-3"},r.a.createElement("label",{for:"username"},"Birth date ",r.a.createElement("span",{style:{color:"red"}},"*")),r.a.createElement("div",{class:"input-group"},r.a.createElement("input",{type:"date",class:"form-control",id:"Email",placeholder:"Email"}))),r.a.createElement("div",{class:"mb-3"},r.a.createElement("label",{for:"inputEducationLevel"},"Education level ",r.a.createElement("span",{class:"text-muted"},"  (Optional)")),r.a.createElement("div",{class:"input-group"},r.a.createElement("select",{id:"inputEducation",name:"Education",class:"form-control",onChange:function(e){return t({type:"SET_EDUCATION_LEVEL",educationLevel:e.target.value})},placeholder:"Education"},r.a.createElement("option",null),r.a.createElement("option",null,"High School"),r.a.createElement("option",null,"College"),r.a.createElement("option",null,"Graduate Study"),r.a.createElement("option",null,"PHD")))),r.a.createElement("div",{class:"mb-3"},r.a.createElement("label",{for:"inputHeight"},"Height",r.a.createElement("span",{class:"text-muted"},"  (Optional)"),"  "),r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"col-md-6"},r.a.createElement("input",{type:"number",min:"1",class:"form-control",placeholder:"Feet",onChange:function(e){return t({type:"SET_FEET",feet:e.target.value})},id:"inputFeet"})),r.a.createElement("div",{class:"col-md-6"},r.a.createElement("input",(a={type:"number",min:"0",class:"form-control",placeholder:"Inches"},Object(p.a)(a,"placeholder","Inches"),Object(p.a)(a,"onChange",(function(e){return t({type:"SET_INCHES",inches:e.target.value})})),Object(p.a)(a,"id","inputCm"),a))))),r.a.createElement("div",{class:"mb-3"},r.a.createElement("label",{for:"phoneNumber"},"Phone number ",r.a.createElement("span",{style:{color:"red"}},"*")),r.a.createElement("div",{class:"input-group"},r.a.createElement("input",{type:"text",name:"Phone",pattern:"^\\d{7}$",id:"inputPhone",class:"form-control",onChange:function(e){return t({type:"SET_PHONE_NUMBER",phoneNumber:e.target.value})},placeholder:"Phone number",required:!0}),r.a.createElement("div",{class:"input-group-append"},r.a.createElement("span",{class:"input-group-text",id:"basic-addon2"},r.a.createElement("i",{class:"fa fa-phone","aria-hidden":"true"})))),r.a.createElement("span",{class:"form-text small text-muted"},"Phone Number  must contain seven positive digits .")),r.a.createElement("div",{class:"mb-3"},r.a.createElement("label",{for:"email"},"Email address ",r.a.createElement("span",{style:{color:"red"}},"*")),r.a.createElement("div",{class:"input-group"},r.a.createElement("input",{type:"text",name:"email",id:"inputPhone",class:"form-control",onChange:function(e){return t(function(e){return{type:"SET_EMAIL",email:e}}(e.target.value))},placeholder:"Email Address",required:!0}),r.a.createElement("div",{class:"input-group-append"},r.a.createElement("span",{class:"input-group-text",id:"basic-addon2"},r.a.createElement("i",{class:"fa fa-envelope","aria-hidden":"true"}))))),r.a.createElement("div",{class:"mb-3"},r.a.createElement("label",{for:"email"},"Confirm email address ",r.a.createElement("span",{style:{color:"red"}},"*")),r.a.createElement("div",{class:"input-group"},r.a.createElement("input",{type:"text",name:"email",id:"inputPhone",class:"form-control",onChange:function(e){return b(e.target.value)},placeholder:"Confirm Email Address",required:!0}),r.a.createElement("div",{class:"input-group-append"},r.a.createElement("span",{class:"input-group-text",id:"basic-addon2"},r.a.createElement("i",{class:"fa fa-envelope","aria-hidden":"true"}))))),r.a.createElement("div",{class:"form-group"},r.a.createElement("div",{class:"form-check"},r.a.createElement("input",{class:"form-check-input",type:"checkbox",id:"gridCheck",required:!0}),r.a.createElement("label",{class:"form-check-label",for:"gridCheck"},"I Agree to Terms & Conditions",r.a.createElement("span",{style:{color:"red"}},"*")))),r.a.createElement("div",{class:"form-group"},r.a.createElement("div",{class:"g-recaptcha","data-sitekey":"6LfKURIUAAAAAO50vlwWZkyK_G2ywqE52NU7YO0S","data-callback":"verifyRecaptchaCallback","data-expired-callback":"expiredRecaptchaCallback"}),r.a.createElement("input",{class:"form-control d-none","data-recaptcha":"true",required:!0,"data-error":"Please complete the Captcha"}),r.a.createElement("div",{class:"help-block with-errors"})),r.a.createElement("button",{class:"btn btn-primary btn-lg btn-block",type:"submit",onClick:function(){console.log(n),console.log(h),n!=h?y("Email ids dont match. Please reenter"):d(!0)}},"Submit")))))})),v=Object(o.b)((function(e){return{firstName:e.userReducer.firstName,lastName:e.userReducer.lastName,city:e.userReducer.city,state:e.userReducer.state,addressLine:e.userReducer.addressLine,zipCode:e.userReducer.zipCode,phoneNumber:e.userReducer.phoneNumber,email:e.userReducer.email,feet:e.userReducer.feet,inches:e.userReducer.inches,birthDate:e.userReducer.birthDate}}))((function(e){e.dispatch;return r.a.createElement(i.a,null,r.a.createElement(s.d,null,r.a.createElement(s.b,{path:"/ResultsVerify",component:d}),r.a.createElement(s.b,{exact:!0,path:"/",component:E})))})),h=t(39),b=t(2),f={firstName:"",lastName:"",city:"",state:"",addressLine:"",zipCode:"",phoneNumber:null,email:"",educationLevel:"",feet:0,inches:0,birthDate:null},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_FIRST_NAME":return Object(b.a)(Object(b.a)({},e),{},{firstName:a.firstName});case"SET_LAST_NAME":return Object(b.a)(Object(b.a)({},e),{},{lastName:a.lastName});case"SET_CITY":return Object(b.a)(Object(b.a)({},e),{},{city:a.city});case"SET_STATE":return Object(b.a)(Object(b.a)({},e),{},{state:a.state});case"SET_ADDRESS_LINE":return Object(b.a)(Object(b.a)({},e),{},{addressLine:a.addressLine});case"SET_ZIPCODE":return Object(b.a)(Object(b.a)({},e),{},{zipCode:a.zipCode});case"SET_PHONE_NUMBER":return Object(b.a)(Object(b.a)({},e),{},{phoneNumber:a.phoneNumber});case"SET_EMAIL":return Object(b.a)(Object(b.a)({},e),{},{email:a.email});case"SET_BIRTH_DATE":return Object(b.a)(Object(b.a)({},e),{},{birthDate:a.birthDate});case"SET_EDUCATION_LEVEL":return Object(b.a)(Object(b.a)({},e),{},{educationLevel:a.educationLevel});case"SET_FEET":return Object(b.a)(Object(b.a)({},e),{},{feet:a.feet});case"SET_INCHES":return Object(b.a)(Object(b.a)({},e),{},{inches:a.inches});default:return e}},y=Object(h.b)({userReducer:g});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var N=Object(h.c)(y);c.a.render(r.a.createElement(o.a,{store:N},r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[156,1,2]]]);
//# sourceMappingURL=main.a517b087.chunk.js.map