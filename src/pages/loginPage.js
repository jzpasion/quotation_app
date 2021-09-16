import { useContext , useState } from "react";
import { globalItem } from "../component/global/global";
import { useHistory } from 'react-router-dom';
import { Container , Row , Col ,Form ,Button  } from "react-bootstrap";
import noImg from "../component/img/q.png"
import sirFred from "../component/img/SirFred.PNG"
import mamCams from "../component/img/test.PNG"

import "../component/css/login.css"
import Swal from 'sweetalert2'

const LoginPage = () =>{
    const {user , setUser , setColor , setAuth} = useContext(globalItem);
    const history = useHistory();

    const changeColor = () =>{
        if(user === ""){
        Swal.fire({
            icon: 'error',
            title: 'Who are you?!',
            })
        }else{
            setAuth(true);
            history.push('/Tabs')
        }
    }

    return(
        <Container>
            <Row>
                <Col lg={5}  className="pt-5 m-auto">
                    <div className="loginBox">
                        <img className="loginImg" src={user === ""? noImg:user === "1"? sirFred:mamCams} alt="Avatar" />
                        <h1>Hello</h1>
                        <Form>
                            <Form.Group className="m-4" >
                            <Form.Select aria-label="Default select example"
                                    value={user}
                                    onChange={(e) =>{setUser(e.target.value)}}>
                                <option value="">Who are you?</option>
                                <option value="1">Fred</option>
                                <option value="2">Cams</option>
                            </Form.Select>
                                
                            <Button className="mt-3" style={{width: "100%" , fontFamily: "PoppinsBlack"}} onClick={changeColor} variant="success">
                                Let me in!
                            </Button>    
                            </Form.Group>       
                        </Form>      
                        
                                
                    </div>
                </Col>
            </Row>
        </Container>)
}

export default LoginPage;