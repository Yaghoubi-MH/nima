import React from "react";
import Input from "../../components/Input";
import {Link} from "react-router-dom";
import Table from "../../components/Table";
import styles from "./Table.module.css"

const HomePage = ({style}) => {

    const tableList = [{id:1, name:'mohammad hassan yaghoubi', job: 'react developer'},{id:2, name:'nima bakhshi', job: 'django developer'}]
    return(
        <>
            <Input style={style} />
            <h2>
                <Link to='/tp'>testing page</Link>
            </h2>
            <Table tableData={tableList} style={styles} />
        </>
    )
}

export default HomePage
