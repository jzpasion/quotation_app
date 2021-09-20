import {React, useContext} from 'react'
import {  Container } from 'react-bootstrap'
import { globalItem } from '../component/global/global'
import { Redirect } from 'react-router-dom'
import TableButton from '../component/tables/tableButton'
import TableIndicator from '../component/tables/tableIndicator'
import TableAccessories from '../component/tables/tableAccessories'
import TableAudio from '../component/tables/tableAudio'
import TableBreaker from '../component/tables/tableBreaker'
import TableConnectors from '../component/tables/tableConnectors'
import TableConsumable from '../component/tables/tableConsumable'
import TableContactor from '../component/tables/tableContactor'
import TableController from '../component/tables/tableController'
import TableCounter from '../component/tables/tableCounter'
import TableDisconnectSwitch from '../component/tables/tableDisconnectSwitch'
import TableEnclosure from '../component/tables/tableEnclosure'
import TableEthernet from '../component/tables/tableEthernet'
import TableLight from '../component/tables/tableLight'
import TableMotorAccessory from '../component/tables/tableMotorAccessory'
import TableMotorDriver from '../component/tables/tableMotorDriver'
import TableMotors from '../component/tables/tableMotors'
import TablePowerSupply from '../component/tables/tablePowerSupply'
import TableRelay from '../component/tables/tableRelay'
import TableSensor from '../component/tables/tableSensor'
import TableSwitch from '../component/tables/tableSwitch'
import TableTempControl from '../component/tables/tableTempControl'
import TableTimer from '../component/tables/tableTimer'
import TableTools from '../component/tables/tableTools'
import TableWaterEffects from '../component/tables/tableWaterEffects'
import TableWire from '../component/tables/tableWire'




const NavTab = ({auth}) => {
    const {user ,buttonData , indicatorData,accessoriesData,audioData,breakerData,connectorsData,consumableData,contactorData,controllerData, counterData, disconnectSwitchData, enclosureData, ethernetData, lightData, motorAccesoryData, motorDriverData, motorData, powerSupplyData, relayData, sensorData, switchData, tempControlData, timerData, toolsData, waterEffectsData, wireData} = useContext(globalItem);
    console.log(contactorData);
    if(!auth){
        return <Redirect to="/"/>
      }else{

      
    return (
        <Container>
            <TableContactor data={contactorData} />
        </Container>
    //     <Tabs fill defaultActiveKey="inventory" id="uncontrolled-tab-example" className="mb-3">
    //         <Tab eventKey="inventory" title="Buttons">

    //         </Tab>
    //         <Tab eventKey="inventory" title="Indicators">

    //         </Tab>
    //         <Tab eventKey="inventory" title="Switches">

    //         </Tab>
    //         <Tab eventKey="inventory" title="Connectors">

    //         </Tab>
    //         <Tab eventKey="inventory" title="Disconnect Switch">

    //         </Tab>
    //         <Tab eventKey="inventory" title="Relays">

    //         </Tab>
    //         <Tab eventKey="inventory" title="Contactor">

    //         </Tab>
    //         <Tab eventKey="inventory" title="Counter and Timer">

    //         </Tab>
    //         <Tab eventKey="inventory" title="Water Effects">

    //         </Tab>
    //         <Tab eventKey="inventory" title="Temperature Control">

    //         </Tab>
    //         <Tab eventKey="inventory" title="Power Supply">

    //         </Tab>
    //         <Tab eventKey="inventory" title="Motors">

    //         </Tab>
    //         <Tab eventKey="inventory" title="Audio">

    //         </Tab>
    //         <Tab eventKey="inventory" title="Circuit Breaker">

    //         </Tab>
    //         <Tab eventKey="inventory" title="Enclosure">

    //         </Tab>
    //         <Tab eventKey="inventory" title="Controllers">

    //         </Tab>
    //         <Tab eventKey="inventory" title="Wires Cables">

    //         </Tab>
    //         <Tab eventKey="inventory" title="Sensors">

    //         </Tab>
    //         <Tab eventKey="inventory" title="Light Fixture">

    //         </Tab>
    //         <Tab eventKey="inventory" title="Consumables">

    //         </Tab>
    //         <Tab eventKey="inventory" title="Accessories">

    //         </Tab>
    //         <Tab eventKey="inventory" title="Tools">

    //         </Tab>

    //    </Tabs>
    )
}
}

export default NavTab
