import React from 'react';

import styles from './Chart.module.css'
import SimpleBullet from "./SimpleBullet";
import AdvanceBullet from "./AdvanceBullet";

const BulletChart = ({style , width, list, componentSimpleBullet, bulletList}) => {
    console.log(componentSimpleBullet)

    const calculateLeftHandler = (value) => {
         return (width / (list[list.length - 1] - list[0])) * (value - list[0])
    }

    return (
        <div className={style.chart_container}>
            <div className={style.gage_container}>
                { componentSimpleBullet ?
                    <SimpleBullet list={bulletList} calculateLeftHandler={calculateLeftHandler} height={10} />
                    : <AdvanceBullet list={bulletList} style={style} calculateLeftHandler={calculateLeftHandler} /> }
            </div>
            <div className={styles.num_container}>
                {
                    list.map((i, index) => (
                        <span
                            key={index}
                            style={{left: `${calculateLeftHandler(i)}px`}}
                            className={`${styles.number} ${style.number}`}>{i}</span>
                    ))
                }
            </div>
        </div>
    )
}

export default BulletChart
