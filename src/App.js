import { useState, useEffect } from 'react';
import { socket } from "./component/global/socket";
import {globalItem} from "./component/global/global";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoginPage from "./pages/loginPage"
import "./App.css"
import NavTab from './pages/navTab';

function App() {
  const [buttonData, setButtonData] = useState([])
  const [user, setUser] = useState("");
  const [color , setColor] = useState("#f9c5d1");
  const [auth, setAuth] = useState(false)

  useEffect(() =>{
    document.body.style.backgroundColor = color
    socket.on("getAllQuote" , data=>{

      setButtonData(data.filter((btn) => (
        btn.QUOTATION_TYPE === "Button"
    )))
        
    })
  })
  return (
  <div className="Background">
    <globalItem.Provider value={{buttonData , user , setUser , setColor , auth, setAuth}}>
      <Router>
        <Switch>    
          <Route exact path="/">
            <LoginPage />
          </Route>
          <Route exact path="/Tabs" component={() =><NavTab auth={auth} />} />
        </Switch>
      </Router>
    </globalItem.Provider>
  </div>);
}

export default App;
