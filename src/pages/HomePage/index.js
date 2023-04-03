import React from "react";
import {Link} from "react-router-dom";
import styles from "./HomePage.module.css"
import {
    Input,
    Table,
    BulletChart,
    DropDown,
} from "../../components";

const HomePage = ({style}) => {

    const tableList = [
        {id:1, name:'mohammad hassan yaghoubi', job: 'react developer'},
        {id:2, name:'nima bakhshi', job: 'django developer'}
    ]

    const chartList = [500, 600, 625, 680, 750, 1000]

    const bulletList = [
        {score: 550, color: '#d53737', text: 'red'},
        {score: 608, color: '#3764d5', text: 'blue'},
        {score: 750, color: '#209e67', text: 'green'}
    ]
    const options = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
    ];

    function handleSelect(option) {
        console.log('Selected option:', option);
    }
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
            <DropDown options={options} onSelect={handleSelect} withCheckBox={true}/>
        </>
    )
}

export default HomePage
