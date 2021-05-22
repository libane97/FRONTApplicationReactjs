import {Hearder} from "./Hearder";
import {Button, Form} from "react-bootstrap";
import React,{useState,useEffect} from "react";
import {useHistory} from "react-router-dom";
function AddProduct() {
    const[libelle,setLibelle]=useState("");
    const[description,setDescription]=useState("");
    const[image,setImage]=useState("");
    const[price,setPrice]=useState("");
    const history = useHistory();
    async function add() {
       let item = {libelle,description,image,price};
        console.warn('data avant ',libelle,description,image,price);
        const formData = new FormData();
        formData.append('libelle',libelle);
        formData.append('description',description);
        formData.append('image',image);
        formData.append('price',price);
        let result = await fetch('http://127.0.0.1:8000/api/store',{
            method:'POST',
            body:formData
        });
        history.push('/list');

    }
    return(
         <div>
             <Hearder />
              <h1>Ajouter Product</h1>
             <div className="col-md-6 offset-3">
                 <Form>
                     <Form.Group controlId="formBasicEmail">
                         <Form.Label>libelle</Form.Label>
                         <Form.Control type="text"  onChange={(e)=>setLibelle(e.target.value)} placeholder="Enter libelle" />
                         <Form.Label>description</Form.Label>
                         <Form.Control type="email" onChange={(e)=>setDescription(e.target.value)} placeholder="Enter Email" />
                         <Form.Label>Image</Form.Label>
                         <Form.Control type="file"  onChange={(e)=>setImage(e.target.files[0])} placeholder="Enter image" />
                            <br/>
                         <Form.Label>Prix</Form.Label>
                         <Form.Control type="number"  onChange={(e)=>setPrice(e.target.value)} placeholder="Enter Price" />
                     </Form.Group>
                     <Button onClick={add}>
                         Submit
                     </Button>
                 </Form>
             </div>
         </div>
    )
}

export default AddProduct;