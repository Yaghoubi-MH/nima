import React from "react";
import HeaderTable from "./HeaderTable";
import BodyTable from "./BodyTable";

const Table = ({tableData, style}) => {

    const keys = Object.keys(tableData[0])

    return(
        <table className={style.table_container}>
            <HeaderTable style={style} data={keys} />
            <BodyTable style={style} data={tableData} />
        </table>
    )
}

export default Table
