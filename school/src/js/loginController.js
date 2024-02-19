'use strict'
import * as model from "./loginModel.js";
import loginView from "./view/loginView.js";
//import "lodash-es";
//import "core-js/stable"; // this is for polyfilling in general
//import "regenerator-runtime/runtime"; // this is for polyfilling Async/Await

if (module.hot) {
    module.hot.accept();
}

let access_token;
let refresh_token;

const loginControl = async function(loginData){
    const userName = loginData.username;
    const userPassword = loginData.password;

    if(userName){
        const data = await model.loginUserDetails(loginData);
        access_token = data.access_token;
        refresh_token = data.refresh_token;
        console.log("access_token: " + access_token);
        console.log("refresh_token: " + refresh_token);
        debugger;
      
        if(access_token !== ""){
            window.location.replace('att.html');
        }
}


}

const init = function(){
    try{
        loginView.addLoginHandler(loginControl);    
       
    }catch(err){
        console.error(err);
    }
}
init();
