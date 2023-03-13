import React from "react";
import Input from "../../components/Input";
import {Link} from "react-router-dom";
import Table from "../../components/Table";
import styles from "./HomePage.module.css"
import BulletChart from "../../components/Chart";
import SimpleBullet from "../../components/Chart/SimpleBullet";

const HomePage = ({style}) => {

    const tableList = [
        {id:1, name:'mohammad hassan yaghoubi', job: 'react developer'},
        {id:2, name:'nima bakhshi', job: 'django developer'}
    ]

    const chartList = [500, 600, 625, 680, 750, 1000]

    const bulletList = [
        {score: 550, color: '#d53737', text: 'red'},
        {score: 608, color: '#3764d5', text: 'blue'},
        {score: 750, color: '#209e67', text: 'green'}]

    return(
        <>
            <Input style={style} />
            <h2>
                <Link to='/tp'>testing page</Link>
            </h2>
            <Table tableData={tableList} style={styles} />
            <BulletChart
                style={styles}
                width={1000}
                list={chartList}
                bulletList={bulletList}
                bulletHeight={20}
                componentSimpleBullet={true}/>
        </>
    )
}

export default HomePage
