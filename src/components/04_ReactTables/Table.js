
// 04_ReactTable deck: creating React tables from html table element.
import { useState } from "react";

const Row = (props) => {
    const {city, temperature} = props;
    return(
        <tr>
            <td>{city}</td>
            <td>{temperature}</td>
        </tr>
    ) 
}

const Table = (props) => {
    const rows = props.data;
    return(
        <table>
            <tbody>
        {rows.map((row) => 
            <Row city={row.city} temperature={row.temperature} key={row.city}/>
            )}
            </tbody>
            </table>
    )
}

const tableList = [
    { city: 'New York', temperature: '52F'},
    { city: 'New Delhi', temperature: '50F'},
    { city: 'London', temperature: '30F'}
]
const TableMain = () => {
    const [ tableData, setTableData] = useState(tableList);
    return(
        <Table data={tableData} />
    )
}

export default TableMain;