import React from "react";

const BodyTable = ({style, data}) => {
    return(
        <tbody className={style.th}>
            { data.map((i, index) => (
                <tr key={index}>
                    {Object.values(i).map((i, index) => <td  className={style.tr} key={index}>{i}</td>)}
                </tr>
            )) }
        </tbody>
    )
}

export default BodyTable
