import {Navbar,Nav,NavDropdown} from "react-bootstrap";
import { Link,useHistory } from "react-router-dom";
export function Hearder() {
    const history = useHistory();
    const user = JSON.parse(localStorage.getItem('user'));
   // console.log(user)

    function logout() {
        localStorage.clear();
        history.push('/register');
    }

    return (
         <div>
             <Navbar bg="dark" variant="dark">
                 <Navbar.Brand href="#home"></Navbar.Brand>
                 <Nav className="mr-auto nav_bar_wrapper">
                     {
                         localStorage.getItem('user') ?
                             <>
                                 <Link to="/add">Ajouter Produit</Link>
                                 <Link to="/update"></Link>
                                 <Link to="/list">Liste Produit</Link>
                             </>
                             :
                             <>
                                 <Link to="/login">login</Link>
                                 <Link to="/Register">Register</Link>
                             </>
                     }

                 </Nav>
                 <Nav>
                     {
                          localStorage.getItem('user') ?
                              <>
                                  <NavDropdown title={user && user.name}>
                                      <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                                      <NavDropdown.Item>Profile</NavDropdown.Item>
                                  </NavDropdown>
                              </>:null
                     }
                 </Nav>
             </Navbar>
             <br />
         </div>
    )
}

export default Hearder;