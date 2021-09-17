import React from 'react'
import { Table } from 'react-bootstrap'

const TableEthernet = ({data}) => {
    return (
        <div>
            <Table striped bordered hover responsive style={{marginTop: 15}}>
                <thead>
                    <tr>
                        <th>Item No</th>
                        <th>Type</th>
                        <th>Ports</th>
                        <th>Description</th>
                        <th>Part No</th>
                        <th>Manufacturer</th>
                        <th>Supplier</th>
                        <th>TU (EUR)</th>
                        <th>Price (PHP)</th>
                        <th>Price (EUR)</th>
                        <th>Price (USD)</th>
                        <th>Weight</th>
                        <th>Datasheet</th>
                    </tr> 
                </thead>
                <tbody>
                    {data.map((resdata , index) =>(
                        <tr key={index}>
                            <td>{resdata.ITEM_NUMBER}</td>
                            <td>{resdata.TYPE}</td>
                            <td>{resdata.PORTS}</td>
                            <td>{resdata.DESCRIPTION}</td>
                            <td>{resdata.PART_NUMBER}</td>
                            <td>{resdata.MANUFACTURER}</td>
                            <td>{resdata.SUPPLIER}</td>
                            <td>{resdata.TU_EUR}</td>
                            <td>{resdata.PRICE_PHP}</td>
                            <td>{resdata.PRICE_EUR}</td>
                            <td>{resdata.PRICE_USD}</td>
                            <td>{resdata.WEIGHT}</td>
                            <td>{resdata.DATASHEET}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default TableEthernet
