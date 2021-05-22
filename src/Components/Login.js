import {Hearder} from "./Hearder";
import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import {Button, Form} from "react-bootstrap";

function Login() {
    useEffect(()=>{
        if (localStorage.getItem('user')){
            history.push('./add');
        }
    },[]);
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const history = useHistory();

 async function login() {
        let item = {email,password};
       // console.warn('data avant ',item);
        let result = await fetch('http://127.0.0.1:8000/api/login',{
            method:'POST',
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body:JSON.stringify(item)
        });
        result = await result.json();
      //  console.log('data apres ',result);
        localStorage.setItem("user", JSON.stringify(result));
        history.push('/add');
    }

    return (
         <div>
             <Hearder />
              <h1>login Page</h1>
             <div className="col-md-6 offset-3">
                 <Form>
                     <Form.Group controlId="formBasicEmail">
                         <Form.Label>Email address</Form.Label>
                         <Form.Control type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email" />
                         <Form.Label>Password</Form.Label>
                         <Form.Control type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter password" />
                     </Form.Group>
                     <Button onClick={login}>
                         Submit
                     </Button>
                 </Form>
             </div>
         </div>
    )
}

export default Login;