import React from 'react'
import { Table } from 'react-bootstrap'

const TableBreaker = ({data}) => {
    return (
        <div>
            <Table striped bordered hover responsive style={{marginTop: 15}}>
                <thead>
                    <tr>
                        <th>Item No</th>
                        <th>Type</th>
                        <th>Current</th>
                        <th>Poles</th>
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
                            
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default TableBreaker
