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
  const [indicatorData, setIndicatorData] = useState([])
  const [accessoriesData, setAccessoriesData] = useState([])
  const [audioData, setAudioData] = useState([])
  const [breakerData, setBreakerData] = useState([])
  const [connectorsData, setConnectorsData] = useState([])
  const [consumableData, setConsumableData] = useState([])
  const [contactorData, setContactorData] = useState([])
  const [controllerData, setControllerData] = useState([])
  const [counterData, setCounterData] = useState([])
  const [disconnectSwitchData, setDisconnectSwitchData] = useState([])
  const [enclosureData, setEnclosureData] = useState([])
  const [ethernetData, setEthernetData] = useState([])
  const [lightData, setLightData] = useState([])
  const [motorAccesoryData, setMotorAccessoryData] = useState([])
  const [motorDriverData, setMotorDriverData] = useState([])
  const [motorData, setMotorData] = useState([])
  const [powerSupplyData, setPowerSupplyData] = useState([])
  const [relayData, setRelayData] = useState([])
  const [sensorData, setSensorData] = useState([])
  const [switchData, setSwitchData] = useState([])
  const [tempControlData, setTempControlData] = useState([])
  const [timerData, setTimerData] = useState([])
  const [toolsData, setToolsData] = useState([])
  const [waterEffectsData, setWaterEffectsData] = useState([])
  const [wireData, setWireData] = useState([])
  const [user, setUser] = useState("");
  const [color , setColor] = useState("#f9c5d1");
  const [auth, setAuth] = useState(false) 

  useEffect(() =>{
    document.body.style.backgroundColor = color
    socket.on("getAllQuote" , data=>{

      setButtonData(data.filter((btn) => (
        btn.QUOTATION_TYPE === "Button"
    )))
        
    setIndicatorData(data.filter((indicator) =>(
          indicator.QUOTATION_TYPE === "Indicator"
        )))

        setAccessoriesData(data.filter((acc) =>(
          acc.QUOTATION_TYPE === "Accessory"
        )))

        setAudioData(data.filter((audio) =>(
          audio.QUOTATION_TYPE === "Audio"
        )))

        setBreakerData(data.filter((brkr) =>(
          brkr.QUOTATION_TYPE === "Circuit Breaker"
        )))

        setConnectorsData(data.filter((cnnctr) =>(
          cnnctr.QUOTATION_TYPE === "Connectors"
        )))

        setConsumableData(data.filter((cons) =>(
          cons.QUOTATION_TYPE === "Consumables"
        )))

        setContactorData(data.filter((cont) =>(
          cont.QUOTATION_TYPE === "Contactor"
        )))

        setControllerData(data.filter((cntrllr) =>(
          cntrllr.QUOTATION_TYPE === "Controller"
        )))

        setCounterData(data.filter((counter) =>(
          counter.QUOTATION_TYPE === "Counter"
        )))

        setDisconnectSwitchData(data.filter((dswitch) =>(
          dswitch.QUOTATION_TYPE === "Disconnect Switch"
        )))

        setEnclosureData(data.filter((enclosure) =>(
          enclosure.QUOTATION_TYPE === "Enclosure"
        )))

        setEthernetData(data.filter((ethernet) =>(
          ethernet.QUOTATION_TYPE === "Ethernet"
        )))

        setLightData(data.filter((light) =>(
          light.QUOTATION_TYPE === "Light Fixture"
        )))

        setMotorAccessoryData(data.filter((motoracc) =>(
          motoracc.QUOTATION_TYPE === "Motor Accessories"
        )))

        setMotorDriverData(data.filter((motordrvr) =>(
          motordrvr.QUOTATION_TYPE === "Motor Driver"
        )))

        setMotorData(data.filter((motor) =>(
          motor.QUOTATION_TYPE === "Motor"
        )))

        setPowerSupplyData(data.filter((ps) =>(
          ps.QUOTATION_TYPE === "Power Supply"
        )))

        setRelayData(data.filter((relay) =>(
          relay.QUOTATION_TYPE === "Relay"
        )))

        setSensorData(data.filter((sensor) =>(
          sensor.QUOTATION_TYPE === "Sensor"
        )))

        setSwitchData(data.filter((swtch) =>(
          swtch.QUOTATION_TYPE === "Switch"
        )))

        setTempControlData(data.filter((tempctrl) =>(
          tempctrl.QUOTATION_TYPE === "Temperature Control"
        )))

        setTimerData(data.filter((timer) =>(
          timer.QUOTATION_TYPE === "Timer"
        )))

        setToolsData(data.filter((tools) =>(
          tools.QUOTATION_TYPE === "Tools"
        )))

        setWaterEffectsData(data.filter((wtreffects) =>(
          wtreffects.QUOTATION_TYPE === "Water Effects"
        )))

        setWireData(data.filter((wire) =>(
          wire.QUOTATION_TYPE === "Cable"
        )))

        
    })
  })
  return (
  <div className="Background">
    <globalItem.Provider value={{buttonData , user , setUser , setColor , auth, setAuth ,indicatorData,accessoriesData,audioData,breakerData,connectorsData,consumableData,contactorData,controllerData, counterData, disconnectSwitchData, enclosureData, ethernetData, lightData, motorAccesoryData, motorDriverData, motorData, powerSupplyData, relayData, sensorData, switchData, tempControlData, timerData, toolsData, waterEffectsData, wireData }}>
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
