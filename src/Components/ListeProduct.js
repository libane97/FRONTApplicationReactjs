import {Hearder} from "./Hearder";
import React,{useEffect,useState} from "react";
import {Form, Table} from "react-bootstrap";
import {Link} from "react-router-dom";

function ListeProduct() {
    const [data,setData] = useState([]);
    useEffect(async ()=>{
        RefreshData();
    },[]);

   async function deleted(id) {
      let result = await fetch('http://127.0.0.1:8000/api/delete/'+id,{
            method:'DELETE'
        });
        result = result.json();
        console.warn(result);
        RefreshData();
    }
   async function RefreshData() {
        let result = await fetch('http://127.0.0.1:8000/api/list')
        result = await result.json();
        setData(result);
        console.log("data: ", result);
    }
  async function search(key){
       if (key == ''){
            RefreshData();
       }
       else{
           let result = await fetch('http://127.0.0.1:8000/api/search/'+key)
           result = await result.json();
           setData(result);
           console.log("data: ", result);
       }
   }
    return(
         <div>
             <Hearder />
             <h1>Liste Product</h1>
             <div className='container'>
                 <div className='row'>
                      <div className='col-md-6 offset-3 mb-3'>
                          <Form>
                              <Form.Group controlId="formBasicEmail">
                                  <Form.Label>libelle</Form.Label>
                                  <Form.Control type="text" onChange={(e)=>search(e.target.value)} placeholder="Search libelle"  />
                              </Form.Group>
                          </Form>
                      </div>
                 </div>
             </div>
             <Table striped bordered hover>
                 <thead>
                 <tr>
                     <th>id</th>
                     <th>image</th>
                     <th>libelle</th>
                     <th>description</th>
                     <th>price</th>
                     <th>Action</th>
                 </tr>
                 </thead>
                 <tbody>
                 {
                     data.map((item)=>
                         <tr>
                             <td>{item.id}</td>
                             <td><img width="50px" height="50px" src={item.image} alt=""/></td>
                             <td>{item.libelle}</td>
                             <td>{item.description}</td>
                             <td>{item.price}</td>
                             <td>
                                 <button className="btn btn-danger" onClick={()=>{deleted(item.id)}}>Delete</button>
                                 <Link to={"/update/"+item.id} className="btn btn-primary">Update</Link>
                             </td>
                         </tr>
                     )
                 }
                 </tbody>
             </Table>
         </div>
    )
}

export default ListeProduct;