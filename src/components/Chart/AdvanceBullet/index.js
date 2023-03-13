import React from "react";

import styles from "./AdvanceBullet.module.css"

const AdvanceBullet = ({style, calculateLeftHandler, list}) => {


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
