import React from "react";

const HeaderTable = ({data, style}) => {

    return(
        <thead>
            <tr>
                { data.map((i, index) => (
                    <th rowSpan="10" className={style.table_header} key={index}>
                        {i}
                    </th>
                )) }
            </tr>
        </thead>
    )
}

export default HeaderTable
