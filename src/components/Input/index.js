import React, {useState} from "react";

import styles from './input.module.css'

const Input = ({style, disabled, icon}) => {
    const [text, setText] = useState('')

    const containerClasses = `${styles.container} ${style || styles.default_container}`
    const finalClasses = `${containerClasses} ${disabled && styles.disabled}`
    const labelActive = `${styles.label} ${text && styles.label_active}`

    return(
        <form className={finalClasses}>
            <svg opacity={icon ? 1 : 0} className={styles.input_icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M416 208c0 45.9-14.9
                         88.3-40 122.7L502.6 457.4c12.5 12.5 12.5
                         32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4
                         25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1
                         0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0
                         0-288 144 144 0 1 0 0 288z"/>
            </svg>
            <div>
                <label className={labelActive}>input label</label>
                <input
                    disabled={disabled}
                    className={styles.input}
                    onChange={(e)=> setText(e.target.value)}
                    placeholder='Text' />
            </div>
        </form>
    )
}

export default Input
