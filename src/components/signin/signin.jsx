import React from 'react'
import '../login/login.css'
import { Link } from 'react-router-dom'
export default function signin() {
  return (
    <div class="container">
       

		<div class="login-content">
			<form action="index.html">
				
				<h2 class="title">sign up</h2>
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
           		<div class="input-div pass">
           		   <div class="i"> 
           		    	<i class="fas fa-lock"></i>
           		   </div>
           		   <div class="div">
           		    	<h5>Confirm Password</h5>
           		    	<input type="password" class="input"/>
            	   </div>
            	</div>
            	
            	<input type="submit" class="btn" value="Login"/>
                <Link  to="/login" class="newto">Already a user ?</Link>

            </form>
        </div>
    </div>
  )
}
