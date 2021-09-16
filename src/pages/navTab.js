import {React, useContext} from 'react'
import {  Container } from 'react-bootstrap'
import { globalItem } from '../component/global/global'
import { Redirect } from 'react-router-dom'
import TableButton from '../component/tables/tableButton'


const NavTab = ({auth}) => {
    const {user ,quoteData} = useContext(globalItem);

    if(!auth){
        return <Redirect to="/"/>
      }else{

      
    return (
        <Container>
            <TableButton data={quoteData} />
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
