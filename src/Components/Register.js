import {Form, Button} from "react-bootstrap";
import React,{useState,useEffect} from "react";
import {useHistory} from "react-router-dom";
import {Hearder} from "./Hearder";

function Register() {
    useEffect(()=>{
         if (localStorage.getItem('user')){
             history.push('./add');
         }
    },[])
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const history = useHistory();
    async function SignUp() {
        let item = {name,email,password};
        console.warn('data avant ',item);
        let result = await fetch('http://127.0.0.1:8000/api/register',{
            method:'POST',
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body:JSON.stringify(item)
        });
        result = await result.json();
        console.log('data apres ',result);
       localStorage.setItem("user", JSON.stringify(item));
        history.push('/add');
    }
    return (

             <div>
                 <Hearder />
                  <h1>Register User</h1>
                   <div className="col-md-6 offset-3">
                       <Form>
                           <Form.Group controlId="formBasicEmail">
                               <Form.Label>Name Full User</Form.Label>
                               <Form.Control type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter user" />
                               <Form.Label>Email address</Form.Label>
                               <Form.Control type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email" />
                               <Form.Label>Password</Form.Label>
                               <Form.Control type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter password" />
                           </Form.Group>
                           <Button onClick={SignUp}>
                               Submit
                           </Button>
                       </Form>
                   </div>
             </div>
        )
}
export default Register;