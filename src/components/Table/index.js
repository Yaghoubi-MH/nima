import React from "react";

const Table = ({tableData, style}) => {
    return(
        <table className={style.container}>
            <thead>
                <tr>
                    { Object.keys(tableData[0]).map((i, index) => <th rowSpan="10" className={style.table_header} key={index}>
                        {i}
                    </th>) }
                </tr>
            </thead>
            <tbody className={style.th}>
                { tableData.map((i, index) => <tr key={index}>
                    {Object.values(i).map((i, index) => <td  className={style.tr} key={index}>{i}</td>)}
                </tr>) }
            </tbody>
        </table>
    )
}

export default Table
