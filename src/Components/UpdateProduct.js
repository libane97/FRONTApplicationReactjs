import {Hearder} from "./Hearder";
import {useHistory, withRouter} from 'react-router-dom'
import React, {useEffect,useState} from "react";
import {Button, Form} from "react-bootstrap";

function UpdateProduct(props) {
    const history = useHistory();
    const id = props.match.params.id;
    const[data, setData] = useState([]);
    const[libelle,setLibelle]=useState("");
    const[description,setDescription]=useState("");
    const[image,setImage]=useState("");
    const[price,setPrice]=useState("");
    useEffect(async ()=>{
         let result = await fetch('http://127.0.0.1:8000/api/show/'+id);
          result = await result.json();
          console.log(result);
          setData(result);
          setLibelle(data.libelle);
          setDescription(data.description);
          setImage(data.image);
          setPrice(data.price);
    },[]);

   async function update(id) {
        const formData = new FormData();
        formData.append('libelle',libelle);
        formData.append('description',description);
        formData.append('image',image);
        formData.append('price',price);
        let result = await fetch("http://127.0.0.1:8000/api/update/"+id+"?_method=PUT",{
            method:'POST',
            body:formData
        });
       alert('ce bon');
       history.push('/list');
    }

    return (
         <div>
             <Hearder />
              <h1>Update Product</h1>
             <div className="col-md-6 offset-3">
                 <Form>
                     <Form.Group controlId="formBasicEmail">
                         <Form.Label>libelle</Form.Label>
                         <Form.Control type="text" onChange={(e)=>setLibelle(e.target.value)} defaultValue={data.libelle}  placeholder="Enter libelle"  />
                         <Form.Label>description</Form.Label>
                         <Form.Control type="email" onChange={(e)=>setDescription(e.target.value)}  defaultValue={data.description} placeholder="Enter description" />
                         <Form.Label>Image</Form.Label>
                         <Form.Control type="file"  onChange={(e)=>setImage(e.target.files[0])}   defaultValue={data.image} placeholder="Enter image" />
                         <img src={data.image} width="50px" height="50px" alt=""/>
                         <br/>
                         <Form.Label>Prix</Form.Label>
                         <Form.Control type="number" onChange={(e)=>setPrice(e.target.value)} defaultValue={data.price} placeholder="Enter Price" />
                     </Form.Group>
                     <Button onClick={()=>{update(data.id)}}>
                         update
                     </Button>
                 </Form>
             </div>
         </div>
    )
}

export default withRouter(UpdateProduct);