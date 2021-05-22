import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Login from '../src/Components/Login';
import Register from '../src/Components/Register';
import AddProduct from '../src/Components/AddProduct';
import UpdateProduct from '../src/Components/UpdateProduct'
import ListeProduct from "./Components/ListeProduct";
function App() {
    return (
        <div className="App">
            <BrowserRouter>
             <Route path="/login">
                  <Login />
             </Route>
             <Route path="/Register">
                <Register />
             </Route>
            <Route path="/add">
                <AddProduct />
            </Route>
            <Route path="/update/:id">
                <UpdateProduct />
            </Route>
            <Route path='/list'>
                <ListeProduct />
            </Route>
            </BrowserRouter>
        </div>
    );
}

export default App;