import React, { Component } from "react";

class Login extends Component {
    render() {
        return (
   <div>
       <form method = "POST" action = "/signup"> 
           <input type = "text" name = "email" placeholder = 'Email Address'></input>
           <input type = "password" name = 'password' placeholder='Password'></input>
           <input type = "submit" value = 'sign up'></input>
       </form>
   </div>

        )
    }
}

export default Login;