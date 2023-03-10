import React from "react";

const BodyTable = ({style, data}) => {
    return(
        <tbody className={style.add_row_after_header} >{
        }>
            { data.map((i, index) => (
                <tr key={index}>
                    {Object.values(i).map((i, index) => <td  className={style.body_cell_table} key={index}>{i}</td>)}
                </tr>
            )) }
        </tbody>
    )
}

export default BodyTable
