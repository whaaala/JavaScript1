'use strict';
import "regenerator-runtime/runtime"; // this is for polyfilling Async/Await

export const loginUserDetails = async function(userDetail){
    return sendJSON(`http://127.0.0.1:8080/api/login?username=${userDetail.username}&password=${userDetail.password}`)
}
   

const sendJSON = async function(url){
    try{
        const sendUserDetails = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        const res = await Promise.race([sendUserDetails,timeout(10)])
        const data = await res.json();
        if(!res.ok) throw new Error(`${data.message} (${res.status})`)
        console.log(data);
        return data
    }catch(err){
        throw err
    }
}





const timeout = function (s) {
    return new Promise(function (_, reject) {
      setTimeout(function () {
        reject(new Error(`Request took too long! Timeout after ${s} second`));
      }, s * 1000);
    });
  };