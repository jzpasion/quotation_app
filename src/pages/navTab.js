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
    const {user ,buttonData , indicatorData,accessoriesData,audioData,breakerData,connectorsData,consumableData,contactorData,
        controllerData, counterData, disconnectSwitchData, enclosureData, ethernetData, lightData, motorAccesoryData, motorDriverData,
         motorData, powerSupplyData, relayData, sensorData, switchData, tempControlData, timerData, toolsData, waterEffectsData, wireData} = useContext(globalItem);
    console.log(contactorData);
    if(!auth){
        return <Redirect to="/"/>
      }else{ 
        const ButtonDataSet = [
            {
                columns:[
                    {title: "Item No.",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Type",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Color",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Description",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Part No",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Manufacturer",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Supplier",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "TU (EUR)",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Price (PHP)",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Price (EUR)",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Price (USD)",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Weight",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Datasheet",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}}
                ],
                data: buttonData.map((data) =>[
                    {value: data.ITEM_NUMBER, style: {font: {sz: "13"}}},
                    {value: data.TYPE, style: {font: {sz: "13"}}},
                    {value: data.COLOR, style: {font: {sz: "13"}}},
                    {value: data.DESCRIPTION, style: {font: {sz: "13"}}},
                    {value: data.PART_NUMBER, style: {font: {sz: "13"}}},
                    {value: data.MANUFACTURER, style: {font: {sz: "13"}}},
                    {value: data.SUPPLIER, style: {font: {sz: "13"}}},
                    {value: data.TU_EUR, style: {font: {sz: "13"}}},
                    {value: data.PRICE_PHP, style: {font: {sz: "13"}}},
                    {value: data.PRICE_EUR, style: {font: {sz: "13"}}},
                    {value: data.PRICE_USD, style: {font: {sz: "13"}}},
                    {value: data.WEIGHT, style: {font: {sz: "13"}}},
                    {value: data.DATASHEET, style: {font: {sz: "13"}}}
                ])
            }
        ]

        const IndicatorDataSet = [
            {
                columns:[
                    {title: "Item No.",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Type",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Color",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Voltage",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Description",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Part No",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Manufacturer",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Supplier",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "TU (EUR)",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Price (PHP)",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Price (EUR)",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Price (USD)",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Weight",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Datasheet",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}}
                ],
                data: indicatorData.map((data) =>[
                    {value: data.ITEM_NUMBER, style: {font: {sz: "13"}}},
                    {value: data.TYPE, style: {font: {sz: "13"}}},
                    {value: data.COLOR, style: {font: {sz: "13"}}},
                    {value: data.VOLTAGE, style: {font: {sz: "13"}}},
                    {value: data.DESCRIPTION, style: {font: {sz: "13"}}},
                    {value: data.PART_NUMBER, style: {font: {sz: "13"}}},
                    {value: data.MANUFACTURER, style: {font: {sz: "13"}}},
                    {value: data.SUPPLIER, style: {font: {sz: "13"}}},
                    {value: data.TU_EUR, style: {font: {sz: "13"}}},
                    {value: data.PRICE_PHP, style: {font: {sz: "13"}}},
                    {value: data.PRICE_EUR, style: {font: {sz: "13"}}},
                    {value: data.PRICE_USD, style: {font: {sz: "13"}}},
                    {value: data.WEIGHT, style: {font: {sz: "13"}}},
                    {value: data.DATASHEET, style: {font: {sz: "13"}}}
                ])
            }
        ]

        const AccessoriesDataSet = [
            {
                columns:[
                    {title: "Item No.",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Type",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Size",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Description",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Part No",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Manufacturer",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Supplier",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "TU (EUR)",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Price (PHP)",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Price (EUR)",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Price (USD)",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Weight",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Datasheet",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}}
                ],
                data: accessoriesData.map((data) =>[
                    {value: data.ITEM_NUMBER, style: {font: {sz: "13"}}},
                    {value: data.TYPE, style: {font: {sz: "13"}}},
                    {value: data.SIZE, style: {font: {sz: "13"}}},
                    {value: data.DESCRIPTION, style: {font: {sz: "13"}}},
                    {value: data.PART_NUMBER, style: {font: {sz: "13"}}},
                    {value: data.MANUFACTURER, style: {font: {sz: "13"}}},
                    {value: data.SUPPLIER, style: {font: {sz: "13"}}},
                    {value: data.TU_EUR, style: {font: {sz: "13"}}},
                    {value: data.PRICE_PHP, style: {font: {sz: "13"}}},
                    {value: data.PRICE_EUR, style: {font: {sz: "13"}}},
                    {value: data.PRICE_USD, style: {font: {sz: "13"}}},
                    {value: data.WEIGHT, style: {font: {sz: "13"}}},
                    {value: data.DATASHEET, style: {font: {sz: "13"}}}
                ])
            }
        ]

        const AudioDataSet = [
            {
                columns:[
                    {title: "Item No.",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Type",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Description",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Part No",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Manufacturer",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Supplier",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "TU (EUR)",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Price (PHP)",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Price (EUR)",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Price (USD)",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Weight",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Datasheet",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}}
                ],
                data: audioData.map((data) =>[
                    {value: data.ITEM_NUMBER, style: {font: {sz: "13"}}},
                    {value: data.TYPE, style: {font: {sz: "13"}}},
                    {value: data.DESCRIPTION, style: {font: {sz: "13"}}},
                    {value: data.PART_NUMBER, style: {font: {sz: "13"}}},
                    {value: data.MANUFACTURER, style: {font: {sz: "13"}}},
                    {value: data.SUPPLIER, style: {font: {sz: "13"}}},
                    {value: data.TU_EUR, style: {font: {sz: "13"}}},
                    {value: data.PRICE_PHP, style: {font: {sz: "13"}}},
                    {value: data.PRICE_EUR, style: {font: {sz: "13"}}},
                    {value: data.PRICE_USD, style: {font: {sz: "13"}}},
                    {value: data.WEIGHT, style: {font: {sz: "13"}}},
                    {value: data.DATASHEET, style: {font: {sz: "13"}}}
                ])
            }
        ]

        const BreakerDataSet = [
            {
                columns:[
                    {title: "Item No.",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Type",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Current",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Poles",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Description",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Part No",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Manufacturer",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Supplier",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "TU (EUR)",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Price (PHP)",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Price (EUR)",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Price (USD)",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Weight",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Datasheet",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}}
                ],
                data: breakerData.map((data) =>[
                    {value: data.ITEM_NUMBER, style: {font: {sz: "13"}}},
                    {value: data.TYPE, style: {font: {sz: "13"}}},
                    {value: data.CURRENT, style: {font: {sz: "13"}}},
                    {value: data.POLES, style: {font: {sz: "13"}}},
                    {value: data.DESCRIPTION, style: {font: {sz: "13"}}},
                    {value: data.PART_NUMBER, style: {font: {sz: "13"}}},
                    {value: data.MANUFACTURER, style: {font: {sz: "13"}}},
                    {value: data.SUPPLIER, style: {font: {sz: "13"}}},
                    {value: data.TU_EUR, style: {font: {sz: "13"}}},
                    {value: data.PRICE_PHP, style: {font: {sz: "13"}}},
                    {value: data.PRICE_EUR, style: {font: {sz: "13"}}},
                    {value: data.PRICE_USD, style: {font: {sz: "13"}}},
                    {value: data.WEIGHT, style: {font: {sz: "13"}}},
                    {value: data.DATASHEET, style: {font: {sz: "13"}}}
                ])
            }
        ]

        const ConnectorDataSet = [
            {
                columns:[
                    {title: "Item No.",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Type",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Contacts",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Mounting",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Gender",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Description",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Part No",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Manufacturer",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Supplier",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "TU (EUR)",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Price (PHP)",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Price (EUR)",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Price (USD)",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Weight",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Datasheet",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}}
                ],
                data: connectorsData.map((data) =>[
                    {value: data.ITEM_NUMBER, style: {font: {sz: "13"}}},
                    {value: data.TYPE, style: {font: {sz: "13"}}},
                    {value: data.CONTACTS, style: {font: {sz: "13"}}},
                    {value: data.MOUNTING, style: {font: {sz: "13"}}},
                    {value: data.GENDER, style: {font: {sz: "13"}}},
                    {value: data.DESCRIPTION, style: {font: {sz: "13"}}},
                    {value: data.PART_NUMBER, style: {font: {sz: "13"}}},
                    {value: data.MANUFACTURER, style: {font: {sz: "13"}}},
                    {value: data.SUPPLIER, style: {font: {sz: "13"}}},
                    {value: data.TU_EUR, style: {font: {sz: "13"}}},
                    {value: data.PRICE_PHP, style: {font: {sz: "13"}}},
                    {value: data.PRICE_EUR, style: {font: {sz: "13"}}},
                    {value: data.PRICE_USD, style: {font: {sz: "13"}}},
                    {value: data.WEIGHT, style: {font: {sz: "13"}}},
                    {value: data.DATASHEET, style: {font: {sz: "13"}}}
                ])
            }
        ]
      
        const ConsumableDataSet = [
            {
                columns:[
                    {title: "Item No.",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Type",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Color",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Size",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Description",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Part No",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Manufacturer",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Supplier",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "TU (EUR)",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Price (PHP)",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Price (EUR)",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Price (USD)",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Weight",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Datasheet",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}}
                ],
                data: consumableData.map((data) =>[
                    {value: data.ITEM_NUMBER, style: {font: {sz: "13"}}},
                    {value: data.TYPE, style: {font: {sz: "13"}}},
                    {value: data.COLOR, style: {font: {sz: "13"}}},
                    {value: data.SIZE, style: {font: {sz: "13"}}},
                    {value: data.DESCRIPTION, style: {font: {sz: "13"}}},
                    {value: data.PART_NUMBER, style: {font: {sz: "13"}}},
                    {value: data.MANUFACTURER, style: {font: {sz: "13"}}},
                    {value: data.SUPPLIER, style: {font: {sz: "13"}}},
                    {value: data.TU_EUR, style: {font: {sz: "13"}}},
                    {value: data.PRICE_PHP, style: {font: {sz: "13"}}},
                    {value: data.PRICE_EUR, style: {font: {sz: "13"}}},
                    {value: data.PRICE_USD, style: {font: {sz: "13"}}},
                    {value: data.WEIGHT, style: {font: {sz: "13"}}},
                    {value: data.DATASHEET, style: {font: {sz: "13"}}}
                ])
            }
        ]

        const ContactorDataSet = [
            {
                columns:[
                    {title: "Item No.",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Type",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Poles",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Current",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Description",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Part No",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Manufacturer",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Supplier",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "TU (EUR)",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Price (PHP)",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Price (EUR)",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Price (USD)",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Weight",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Datasheet",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}}
                ],
                data: contactorData.map((data) =>[
                    {value: data.ITEM_NUMBER, style: {font: {sz: "13"}}},
                    {value: data.TYPE, style: {font: {sz: "13"}}},
                    {value: data.POLES, style: {font: {sz: "13"}}},
                    {value: data.CURRENT, style: {font: {sz: "13"}}},
                    {value: data.DESCRIPTION, style: {font: {sz: "13"}}},
                    {value: data.PART_NUMBER, style: {font: {sz: "13"}}},
                    {value: data.MANUFACTURER, style: {font: {sz: "13"}}},
                    {value: data.SUPPLIER, style: {font: {sz: "13"}}},
                    {value: data.TU_EUR, style: {font: {sz: "13"}}},
                    {value: data.PRICE_PHP, style: {font: {sz: "13"}}},
                    {value: data.PRICE_EUR, style: {font: {sz: "13"}}},
                    {value: data.PRICE_USD, style: {font: {sz: "13"}}},
                    {value: data.WEIGHT, style: {font: {sz: "13"}}},
                    {value: data.DATASHEET, style: {font: {sz: "13"}}}
                ])
            }
        ]


        const ControllerDataSet = [
            {
                columns:[
                    {title: "Item No.",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Type",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Description",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Part No",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Manufacturer",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Supplier",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "TU (EUR)",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Price (PHP)",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Price (EUR)",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Price (USD)",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Weight",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Datasheet",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}}
                ],
                data: controllerData.map((data) =>[
                    {value: data.ITEM_NUMBER, style: {font: {sz: "13"}}},
                    {value: data.TYPE, style: {font: {sz: "13"}}},
                    {value: data.DESCRIPTION, style: {font: {sz: "13"}}},
                    {value: data.PART_NUMBER, style: {font: {sz: "13"}}},
                    {value: data.MANUFACTURER, style: {font: {sz: "13"}}},
                    {value: data.SUPPLIER, style: {font: {sz: "13"}}},
                    {value: data.TU_EUR, style: {font: {sz: "13"}}},
                    {value: data.PRICE_PHP, style: {font: {sz: "13"}}},
                    {value: data.PRICE_EUR, style: {font: {sz: "13"}}},
                    {value: data.PRICE_USD, style: {font: {sz: "13"}}},
                    {value: data.WEIGHT, style: {font: {sz: "13"}}},
                    {value: data.DATASHEET, style: {font: {sz: "13"}}}
                ])
            }
        ]

        const CounterDataSet = [
            {
                columns:[
                    {title: "Item No.",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Type",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Description",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Part No",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Manufacturer",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Supplier",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "TU (EUR)",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Price (PHP)",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Price (EUR)",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Price (USD)",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Weight",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Datasheet",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}}
                ],
                data: counterData.map((data) =>[
                    {value: data.ITEM_NUMBER, style: {font: {sz: "13"}}},
                    {value: data.TYPE, style: {font: {sz: "13"}}},
                    {value: data.DESCRIPTION, style: {font: {sz: "13"}}},
                    {value: data.PART_NUMBER, style: {font: {sz: "13"}}},
                    {value: data.MANUFACTURER, style: {font: {sz: "13"}}},
                    {value: data.SUPPLIER, style: {font: {sz: "13"}}},
                    {value: data.TU_EUR, style: {font: {sz: "13"}}},
                    {value: data.PRICE_PHP, style: {font: {sz: "13"}}},
                    {value: data.PRICE_EUR, style: {font: {sz: "13"}}},
                    {value: data.PRICE_USD, style: {font: {sz: "13"}}},
                    {value: data.WEIGHT, style: {font: {sz: "13"}}},
                    {value: data.DATASHEET, style: {font: {sz: "13"}}}
                ])
            }
        ]

        const DisconnectSwitchDataSet = [
            {
                columns:[
                    {title: "Item No.",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Type",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Current",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Poles",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Description",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Part No",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Manufacturer",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Supplier",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "TU (EUR)",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Price (PHP)",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Price (EUR)",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Price (USD)",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Weight",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Datasheet",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}}
                ],
                data: disconnectSwitchData.map((data) =>[
                    {value: data.ITEM_NUMBER, style: {font: {sz: "13"}}},
                    {value: data.TYPE, style: {font: {sz: "13"}}},
                    {value: data.CURRENT, style: {font: {sz: "13"}}},
                    {value: data.POLES, style: {font: {sz: "13"}}},
                    {value: data.DESCRIPTION, style: {font: {sz: "13"}}},
                    {value: data.PART_NUMBER, style: {font: {sz: "13"}}},
                    {value: data.MANUFACTURER, style: {font: {sz: "13"}}},
                    {value: data.SUPPLIER, style: {font: {sz: "13"}}},
                    {value: data.TU_EUR, style: {font: {sz: "13"}}},
                    {value: data.PRICE_PHP, style: {font: {sz: "13"}}},
                    {value: data.PRICE_EUR, style: {font: {sz: "13"}}},
                    {value: data.PRICE_USD, style: {font: {sz: "13"}}},
                    {value: data.WEIGHT, style: {font: {sz: "13"}}},
                    {value: data.DATASHEET, style: {font: {sz: "13"}}}
                ])
            }
        ]

        const EnclosureDataSet = [
            {
                columns:[
                    {title: "Item No.",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Type",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Size",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Description",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Part No",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Manufacturer",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Supplier",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "TU (EUR)",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Price (PHP)",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Price (EUR)",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Price (USD)",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Weight",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Datasheet",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}}
                ],
                data: enclosureData.map((data) =>[
                    {value: data.ITEM_NUMBER, style: {font: {sz: "13"}}},
                    {value: data.TYPE, style: {font: {sz: "13"}}},
                    {value: data.SIZE, style: {font: {sz: "13"}}},
                    {value: data.DESCRIPTION, style: {font: {sz: "13"}}},
                    {value: data.PART_NUMBER, style: {font: {sz: "13"}}},
                    {value: data.MANUFACTURER, style: {font: {sz: "13"}}},
                    {value: data.SUPPLIER, style: {font: {sz: "13"}}},
                    {value: data.TU_EUR, style: {font: {sz: "13"}}},
                    {value: data.PRICE_PHP, style: {font: {sz: "13"}}},
                    {value: data.PRICE_EUR, style: {font: {sz: "13"}}},
                    {value: data.PRICE_USD, style: {font: {sz: "13"}}},
                    {value: data.WEIGHT, style: {font: {sz: "13"}}},
                    {value: data.DATASHEET, style: {font: {sz: "13"}}}
                ])
            }
        ]

        const EthernetDataSet = [
            {
                columns:[
                    {title: "Item No.",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Type",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Ports",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Description",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Part No",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Manufacturer",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Supplier",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "TU (EUR)",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Price (PHP)",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Price (EUR)",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Price (USD)",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Weight",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Datasheet",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}}
                ],
                data: ethernetData.map((data) =>[
                    {value: data.ITEM_NUMBER, style: {font: {sz: "13"}}},
                    {value: data.TYPE, style: {font: {sz: "13"}}},
                    {value: data.PORTS, style: {font: {sz: "13"}}},
                    {value: data.DESCRIPTION, style: {font: {sz: "13"}}},
                    {value: data.PART_NUMBER, style: {font: {sz: "13"}}},
                    {value: data.MANUFACTURER, style: {font: {sz: "13"}}},
                    {value: data.SUPPLIER, style: {font: {sz: "13"}}},
                    {value: data.TU_EUR, style: {font: {sz: "13"}}},
                    {value: data.PRICE_PHP, style: {font: {sz: "13"}}},
                    {value: data.PRICE_EUR, style: {font: {sz: "13"}}},
                    {value: data.PRICE_USD, style: {font: {sz: "13"}}},
                    {value: data.WEIGHT, style: {font: {sz: "13"}}},
                    {value: data.DATASHEET, style: {font: {sz: "13"}}}
                ])
            }
        ]

        const LightDataSet = [
            {
                columns:[
                    {title: "Item No.",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Type",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Description",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Part No",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Manufacturer",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Supplier",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "TU (EUR)",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Price (PHP)",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Price (EUR)",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Price (USD)",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Weight",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Datasheet",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}}
                ],
                data: lightData.map((data) =>[
                    {value: data.ITEM_NUMBER, style: {font: {sz: "13"}}},
                    {value: data.TYPE, style: {font: {sz: "13"}}},
                    {value: data.DESCRIPTION, style: {font: {sz: "13"}}},
                    {value: data.PART_NUMBER, style: {font: {sz: "13"}}},
                    {value: data.MANUFACTURER, style: {font: {sz: "13"}}},
                    {value: data.SUPPLIER, style: {font: {sz: "13"}}},
                    {value: data.TU_EUR, style: {font: {sz: "13"}}},
                    {value: data.PRICE_PHP, style: {font: {sz: "13"}}},
                    {value: data.PRICE_EUR, style: {font: {sz: "13"}}},
                    {value: data.PRICE_USD, style: {font: {sz: "13"}}},
                    {value: data.WEIGHT, style: {font: {sz: "13"}}},
                    {value: data.DATASHEET, style: {font: {sz: "13"}}}
                ])
            }
        ]

        const MotorAccessoryDataSet = [
            {
                columns:[
                    {title: "Item No.",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Type",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Description",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Part No",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Manufacturer",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Supplier",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "TU (EUR)",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Price (PHP)",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Price (EUR)",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Price (USD)",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Weight",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Datasheet",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}}
                ],
                data: motorAccesoryData.map((data) =>[
                    {value: data.ITEM_NUMBER, style: {font: {sz: "13"}}},
                    {value: data.TYPE, style: {font: {sz: "13"}}},
                    {value: data.DESCRIPTION, style: {font: {sz: "13"}}},
                    {value: data.PART_NUMBER, style: {font: {sz: "13"}}},
                    {value: data.MANUFACTURER, style: {font: {sz: "13"}}},
                    {value: data.SUPPLIER, style: {font: {sz: "13"}}},
                    {value: data.TU_EUR, style: {font: {sz: "13"}}},
                    {value: data.PRICE_PHP, style: {font: {sz: "13"}}},
                    {value: data.PRICE_EUR, style: {font: {sz: "13"}}},
                    {value: data.PRICE_USD, style: {font: {sz: "13"}}},
                    {value: data.WEIGHT, style: {font: {sz: "13"}}},
                    {value: data.DATASHEET, style: {font: {sz: "13"}}}
                ])
            }
        ]

        const MotorDriverDataSet = [
            {
                columns:[
                   
                    {title: "Item No.",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Type",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Power",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Voltage",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Description",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Part No",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Manufacturer",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Supplier",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "TU (EUR)",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Price (PHP)",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Price (EUR)",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Price (USD)",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Weight",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Datasheet",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}}
                ],
                data: motorDriverData.map((data) =>[
                    {value: data.ITEM_NUMBER, style: {font: {sz: "13"}}},
                    {value: data.TYPE, style: {font: {sz: "13"}}},                    
                    {value: data.POWER, style: {font: {sz: "13"}}},
                    {value: data.VOLTAGE, style: {font: {sz: "13"}}},
                    {value: data.DESCRIPTION, style: {font: {sz: "13"}}},
                    {value: data.PART_NUMBER, style: {font: {sz: "13"}}},
                    {value: data.MANUFACTURER, style: {font: {sz: "13"}}},
                    {value: data.SUPPLIER, style: {font: {sz: "13"}}},
                    {value: data.TU_EUR, style: {font: {sz: "13"}}},
                    {value: data.PRICE_PHP, style: {font: {sz: "13"}}},
                    {value: data.PRICE_EUR, style: {font: {sz: "13"}}},
                    {value: data.PRICE_USD, style: {font: {sz: "13"}}},
                    {value: data.WEIGHT, style: {font: {sz: "13"}}},
                    {value: data.DATASHEET, style: {font: {sz: "13"}}}
                ])
            }
        ]

        const MotorDataSet = [
            {
                columns:[
                   
                    {title: "Item No.",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Type",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Power",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Voltage",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Description",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Part No",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Manufacturer",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Supplier",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "TU (EUR)",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Price (PHP)",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Price (EUR)",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Price (USD)",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Weight",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Datasheet",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}}
                ],
                data: motorData.map((data) =>[
                    {value: data.ITEM_NUMBER, style: {font: {sz: "13"}}},
                    {value: data.TYPE, style: {font: {sz: "13"}}},                    
                    {value: data.POWER, style: {font: {sz: "13"}}},
                    {value: data.VOLTAGE, style: {font: {sz: "13"}}},
                    {value: data.DESCRIPTION, style: {font: {sz: "13"}}},
                    {value: data.PART_NUMBER, style: {font: {sz: "13"}}},
                    {value: data.MANUFACTURER, style: {font: {sz: "13"}}},
                    {value: data.SUPPLIER, style: {font: {sz: "13"}}},
                    {value: data.TU_EUR, style: {font: {sz: "13"}}},
                    {value: data.PRICE_PHP, style: {font: {sz: "13"}}},
                    {value: data.PRICE_EUR, style: {font: {sz: "13"}}},
                    {value: data.PRICE_USD, style: {font: {sz: "13"}}},
                    {value: data.WEIGHT, style: {font: {sz: "13"}}},
                    {value: data.DATASHEET, style: {font: {sz: "13"}}}
                ])
            }
        ]

        const PowerSupplyDataSet = [
            {
                columns:[
                   
                    {title: "Item No.",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Type",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Vin",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Vout",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Power",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Current",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Description",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Part No",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Manufacturer",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Supplier",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "TU (EUR)",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Price (PHP)",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Price (EUR)",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Price (USD)",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Weight",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Datasheet",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}}
                ],
                data: powerSupplyData.map((data) =>[
                    {value: data.ITEM_NUMBER, style: {font: {sz: "13"}}},
                    {value: data.TYPE, style: {font: {sz: "13"}}},                    
                    {value: data.VIN, style: {font: {sz: "13"}}},
                    {value: data.VOUT, style: {font: {sz: "13"}}},
                    {value: data.POWER, style: {font: {sz: "13"}}},
                    {value: data.CURRENT, style: {font: {sz: "13"}}},
                    {value: data.DESCRIPTION, style: {font: {sz: "13"}}},
                    {value: data.PART_NUMBER, style: {font: {sz: "13"}}},
                    {value: data.MANUFACTURER, style: {font: {sz: "13"}}},
                    {value: data.SUPPLIER, style: {font: {sz: "13"}}},
                    {value: data.TU_EUR, style: {font: {sz: "13"}}},
                    {value: data.PRICE_PHP, style: {font: {sz: "13"}}},
                    {value: data.PRICE_EUR, style: {font: {sz: "13"}}},
                    {value: data.PRICE_USD, style: {font: {sz: "13"}}},
                    {value: data.WEIGHT, style: {font: {sz: "13"}}},
                    {value: data.DATASHEET, style: {font: {sz: "13"}}}
                ])
            }
        ]

        const RelayDataSet = [
            {
                columns:[
                   
                    {title: "Item No.",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Type",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Current",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Voltage",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},                   
                    {title: "Description",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Part No",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Manufacturer",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Supplier",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "TU (EUR)",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Price (PHP)",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Price (EUR)",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Price (USD)",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Weight",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Datasheet",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}}
                ],
                data: relayData.map((data) =>[
                    {value: data.ITEM_NUMBER, style: {font: {sz: "13"}}},
                    {value: data.TYPE, style: {font: {sz: "13"}}},                    
                    {value: data.CURRENT, style: {font: {sz: "13"}}},
                    {value: data.VOLTAGE, style: {font: {sz: "13"}}},
                    {value: data.DESCRIPTION, style: {font: {sz: "13"}}},
                    {value: data.PART_NUMBER, style: {font: {sz: "13"}}},
                    {value: data.MANUFACTURER, style: {font: {sz: "13"}}},
                    {value: data.SUPPLIER, style: {font: {sz: "13"}}},
                    {value: data.TU_EUR, style: {font: {sz: "13"}}},
                    {value: data.PRICE_PHP, style: {font: {sz: "13"}}},
                    {value: data.PRICE_EUR, style: {font: {sz: "13"}}},
                    {value: data.PRICE_USD, style: {font: {sz: "13"}}},
                    {value: data.WEIGHT, style: {font: {sz: "13"}}},
                    {value: data.DATASHEET, style: {font: {sz: "13"}}}
                ])
            }
        ]

        const SensorDataSet = [
            {
                columns:[
                   
                    {title: "Item No.",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Type",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},                 
                    {title: "Description",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Part No",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Manufacturer",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Supplier",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "TU (EUR)",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Price (PHP)",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Price (EUR)",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Price (USD)",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Weight",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Datasheet",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}}
                ],
                data: sensorData.map((data) =>[
                    {value: data.ITEM_NUMBER, style: {font: {sz: "13"}}},
                    {value: data.TYPE, style: {font: {sz: "13"}}},   
                    {value: data.DESCRIPTION, style: {font: {sz: "13"}}},
                    {value: data.PART_NUMBER, style: {font: {sz: "13"}}},
                    {value: data.MANUFACTURER, style: {font: {sz: "13"}}},
                    {value: data.SUPPLIER, style: {font: {sz: "13"}}},
                    {value: data.TU_EUR, style: {font: {sz: "13"}}},
                    {value: data.PRICE_PHP, style: {font: {sz: "13"}}},
                    {value: data.PRICE_EUR, style: {font: {sz: "13"}}},
                    {value: data.PRICE_USD, style: {font: {sz: "13"}}},
                    {value: data.WEIGHT, style: {font: {sz: "13"}}},
                    {value: data.DATASHEET, style: {font: {sz: "13"}}}
                ])
            }
        ]
        
        const SwitchDataSet = [
            {
                columns:[
                   
                    {title: "Item No.",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Type",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Color",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},               
                    {title: "Description",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Part No",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Manufacturer",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Supplier",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "TU (EUR)",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Price (PHP)",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Price (EUR)",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Price (USD)",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Weight",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Datasheet",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}}
                ],
                data: switchData.map((data) =>[
                    {value: data.ITEM_NUMBER, style: {font: {sz: "13"}}},
                    {value: data.TYPE, style: {font: {sz: "13"}}},                    
                    {value: data.COLOR, style: {font: {sz: "13"}}},
                    {value: data.DESCRIPTION, style: {font: {sz: "13"}}},
                    {value: data.PART_NUMBER, style: {font: {sz: "13"}}},
                    {value: data.MANUFACTURER, style: {font: {sz: "13"}}},
                    {value: data.SUPPLIER, style: {font: {sz: "13"}}},
                    {value: data.TU_EUR, style: {font: {sz: "13"}}},
                    {value: data.PRICE_PHP, style: {font: {sz: "13"}}},
                    {value: data.PRICE_EUR, style: {font: {sz: "13"}}},
                    {value: data.PRICE_USD, style: {font: {sz: "13"}}},
                    {value: data.WEIGHT, style: {font: {sz: "13"}}},
                    {value: data.DATASHEET, style: {font: {sz: "13"}}}
                ])
            }
        ]

        const TempControlDataSet = [
            {
                columns:[
                   
                    {title: "Item No.",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Type",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},           
                    {title: "Description",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Part No",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Manufacturer",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Supplier",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "TU (EUR)",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Price (PHP)",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Price (EUR)",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Price (USD)",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Weight",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Datasheet",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}}
                ],
                data: tempControlData.map((data) =>[
                    {value: data.ITEM_NUMBER, style: {font: {sz: "13"}}},
                    {value: data.TYPE, style: {font: {sz: "13"}}},   
                    {value: data.DESCRIPTION, style: {font: {sz: "13"}}},
                    {value: data.PART_NUMBER, style: {font: {sz: "13"}}},
                    {value: data.MANUFACTURER, style: {font: {sz: "13"}}},
                    {value: data.SUPPLIER, style: {font: {sz: "13"}}},
                    {value: data.TU_EUR, style: {font: {sz: "13"}}},
                    {value: data.PRICE_PHP, style: {font: {sz: "13"}}},
                    {value: data.PRICE_EUR, style: {font: {sz: "13"}}},
                    {value: data.PRICE_USD, style: {font: {sz: "13"}}},
                    {value: data.WEIGHT, style: {font: {sz: "13"}}},
                    {value: data.DATASHEET, style: {font: {sz: "13"}}}
                ])
            }
        ]

        const TimerDataSet = [
            {
                columns:[
                   
                    {title: "Item No.",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Type",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},                 
                    {title: "Description",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Part No",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Manufacturer",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Supplier",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "TU (EUR)",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Price (PHP)",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Price (EUR)",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Price (USD)",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Weight",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Datasheet",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}}
                ],
                data: timerData.map((data) =>[
                    {value: data.ITEM_NUMBER, style: {font: {sz: "13"}}},
                    {value: data.TYPE, style: {font: {sz: "13"}}},
                    {value: data.DESCRIPTION, style: {font: {sz: "13"}}},
                    {value: data.PART_NUMBER, style: {font: {sz: "13"}}},
                    {value: data.MANUFACTURER, style: {font: {sz: "13"}}},
                    {value: data.SUPPLIER, style: {font: {sz: "13"}}},
                    {value: data.TU_EUR, style: {font: {sz: "13"}}},
                    {value: data.PRICE_PHP, style: {font: {sz: "13"}}},
                    {value: data.PRICE_EUR, style: {font: {sz: "13"}}},
                    {value: data.PRICE_USD, style: {font: {sz: "13"}}},
                    {value: data.WEIGHT, style: {font: {sz: "13"}}},
                    {value: data.DATASHEET, style: {font: {sz: "13"}}}
                ])
            }
        ]

        const ToolsDataSet = [
            {
                columns:[
                   
                    {title: "Item No.",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Type",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},                  
                    {title: "Description",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Part No",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Manufacturer",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Supplier",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "TU (EUR)",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Price (PHP)",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Price (EUR)",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Price (USD)",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Weight",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Datasheet",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}}
                ],
                data: toolsData.map((data) =>[
                    {value: data.ITEM_NUMBER, style: {font: {sz: "13"}}},
                    {value: data.TYPE, style: {font: {sz: "13"}}}, 
                    {value: data.DESCRIPTION, style: {font: {sz: "13"}}},
                    {value: data.PART_NUMBER, style: {font: {sz: "13"}}},
                    {value: data.MANUFACTURER, style: {font: {sz: "13"}}},
                    {value: data.SUPPLIER, style: {font: {sz: "13"}}},
                    {value: data.TU_EUR, style: {font: {sz: "13"}}},
                    {value: data.PRICE_PHP, style: {font: {sz: "13"}}},
                    {value: data.PRICE_EUR, style: {font: {sz: "13"}}},
                    {value: data.PRICE_USD, style: {font: {sz: "13"}}},
                    {value: data.WEIGHT, style: {font: {sz: "13"}}},
                    {value: data.DATASHEET, style: {font: {sz: "13"}}}
                ])
            }
        ]

        const WaterEffectDataSet = [
            {
                columns:[
                   
                    {title: "Item No.",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Type",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},                  
                    {title: "Description",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Part No",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Manufacturer",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Supplier",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "TU (EUR)",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Price (PHP)",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Price (EUR)",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Price (USD)",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Weight",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Datasheet",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}}
                ],
                data: waterEffectsData.map((data) =>[
                    {value: data.ITEM_NUMBER, style: {font: {sz: "13"}}},
                    {value: data.TYPE, style: {font: {sz: "13"}}}, 
                    {value: data.DESCRIPTION, style: {font: {sz: "13"}}},
                    {value: data.PART_NUMBER, style: {font: {sz: "13"}}},
                    {value: data.MANUFACTURER, style: {font: {sz: "13"}}},
                    {value: data.SUPPLIER, style: {font: {sz: "13"}}},
                    {value: data.TU_EUR, style: {font: {sz: "13"}}},
                    {value: data.PRICE_PHP, style: {font: {sz: "13"}}},
                    {value: data.PRICE_EUR, style: {font: {sz: "13"}}},
                    {value: data.PRICE_USD, style: {font: {sz: "13"}}},
                    {value: data.WEIGHT, style: {font: {sz: "13"}}},
                    {value: data.DATASHEET, style: {font: {sz: "13"}}}
                ])
            }
        ]

        const WireDataSet = [
            {
                columns:[
                   
                    {title: "Item No.",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Type",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},  
                    {title: "AWG",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Color",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},                   
                    {title: "Description",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Part No",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Manufacturer",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Supplier",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "TU (EUR)",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Price (PHP)",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Price (EUR)",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Price (USD)",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Weight",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}},
                    {title: "Datasheet",style: {font: {sz: "15", bold: true}}, width: {wpx: 125}}
                ],
                data: wireData.map((data) =>[
                    {value: data.ITEM_NUMBER, style: {font: {sz: "13"}}},
                    {value: data.TYPE, style: {font: {sz: "13"}}}, 
                    {value: data.AWG, style: {font: {sz: "13"}}},
                    {value: data.COLOR, style: {font: {sz: "13"}}}, 
                    {value: data.DESCRIPTION, style: {font: {sz: "13"}}},
                    {value: data.PART_NUMBER, style: {font: {sz: "13"}}},
                    {value: data.MANUFACTURER, style: {font: {sz: "13"}}},
                    {value: data.SUPPLIER, style: {font: {sz: "13"}}},
                    {value: data.TU_EUR, style: {font: {sz: "13"}}},
                    {value: data.PRICE_PHP, style: {font: {sz: "13"}}},
                    {value: data.PRICE_EUR, style: {font: {sz: "13"}}},
                    {value: data.PRICE_USD, style: {font: {sz: "13"}}},
                    {value: data.WEIGHT, style: {font: {sz: "13"}}},
                    {value: data.DATASHEET, style: {font: {sz: "13"}}}
                ])
            }
        ]


        
        

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
