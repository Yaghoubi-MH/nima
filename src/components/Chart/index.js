import React from 'react';

import styles from './Chart.module.css'
import SimpleBullet from "./SimpleBullet";
import AdvanceBullet from "./AdvanceBullet";

const BulletChart = ({style , width, list, componentSimpleBullet}) => {
    console.log(componentSimpleBullet)
    const bullets = [
        {score: 580, color: '#472e8b'},
        {score: 610, color: '#920e53'},
        {score: 940, color: '#0fc4bc'},
    ]

    const calculateLeftHandler = (value) => {
         return (width / (list[list.length - 1] - list[0])) * (value - list[0])
    }

    return (
        <div className={style.chart_container}>
            <div className={style.gage_container}>
                { componentSimpleBullet ?
                    <SimpleBullet bullets={bullets} calculateLeftHandler={calculateLeftHandler} height={10} />
                    : <AdvanceBullet style={style} calculateLeftHandler={calculateLeftHandler} /> }
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
