import React, {Component} from "react";

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
                <th>Actions</th>
            </tr>
        </thead>
    );
};

const TableBody = (props) => {
    const rows = props.data.map((v, i) => {
        return(
            <tr key={i}>
                <td>{v.name}</td>
                <td>{v.job}</td>
                <td>
                    <button onClick={()=> props.remover(i)}>Purge</button>
                </td>
            </tr>
        );
    });

    return (
        <tbody>
            {rows}
        </tbody>
    );
};

const Table = (props) => {
    const {data, remover} = props;

    return (
        <table>
            <TableHeader/>
            <TableBody data={data} remover={remover}/>
        </table>
    );
};

export default Table