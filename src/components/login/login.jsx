import React from 'react'
import './login.css'
export default function login() {
  return (
    <div class="container">
    

    <div class="login-content">
        <form action="index.html" autoComplete='off'>
            
            <h2 class="title">Login</h2>
               <div class="input-div one">
                  <div class="i">
                          <i class="fas fa-user"></i>
                  </div>
                  <div class="div">
                          <h5>Email</h5>
                          <input type="text" class="input"/>
                  </div>
               </div>
               <div class="input-div pass">
                  <div class="i"> 
                       <i class="fas fa-lock"></i>
                  </div>
                  <div class="div">
                       <h5>Password</h5>
                       <input type="password" class="input"/>
               </div>
            </div>
            <input type="submit" class="btn" value="Login"/>
            <a href="/signup.html" class="newto">New to Pixious ?</a>
        </form>
    </div>
</div>
  )
}
