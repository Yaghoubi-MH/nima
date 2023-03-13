import React from "react";

import styles from "./AdvanceBullet.module.css"

const AdvanceBullet = ({style, calculateLeftHandler}) => {

    const list = [
        {score: 550, color: '#d53737', text: 'red'},
        {score: 608, color: '#3764d5', text: 'blue'},
        {score: 750, color: '#209e67', text: 'green'}]

    return(
        <>
            {list.map((i, index)=>(
                <div key={index} style={{left: calculateLeftHandler(i.score)}} className={styles.Advance_bullet_container}>
                    <div style={{backgroundColor: i.color}} className={style.advance_bullet}></div>
                    <div className={style.line_text_container}>
                        <div className={style.line}></div>
                        <div className={style.text}>{i.text}</div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default AdvanceBullet
