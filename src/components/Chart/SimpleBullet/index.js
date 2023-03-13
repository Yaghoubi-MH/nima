import React from "react";
import styles from "./SimpleBullet.module.css";

const SimpleBullet = ({list, calculateLeftHandler, height}) => {

    return(
        <>
            {list.map((i,index) => (
                <span key={index}
                      style={{
                          left: calculateLeftHandler(i.score),
                          backgroundColor: i.color,
                          width: height,
                          height: height,
                          borderRadius: height / 2
                      }}
                      className={styles.bullet}></span>
            ))}</>
    )
}

export default SimpleBullet
