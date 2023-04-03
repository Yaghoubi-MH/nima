import React, { useState } from 'react';
import styles from './DropDown.module.css';
import arrowIcon from './dropdown-arrow.svg';

function Dropdown({ options, onSelect, withCheckBox }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isRotated, setIsRotated] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    function handleOptionClick(e,option) {
        setSelectedOption(option);
        setIsRotated(false);
        setIsOpen(false);
        onSelect(option);
        // console.log(e.target.value)
    }

    function handleToggleClick() {
        setIsOpen(!isOpen);
        setIsRotated(!isRotated);
    }

    function selectOnlyThis(e){
        const myCheckbox = document.getElementsByName("myCheckbox");
        console.log(e.target.tagName)
        Array.prototype.forEach.call(myCheckbox,function(el){
            el.checked = false;
        });
        if(e.target.tagName === 'INPUT' || e.target.tagName === 'LABEL'){
            e.target.checked = true;
        }else{
            e.target.previousElementSibling.checked = true
        }
    }

    return (
        <div className={styles.dropdown}>
            <div style={isOpen ? {borderColor:'#3f3fde'} : {borderColor:'#555555'}}
                 className={styles['dropdown-container']}
                 onClick={() => handleToggleClick()}>
                <div>
                    {!isOpen && !selectedOption ? '' : <div className={styles['little-energy']}>Energy Glass</div>}
                    <button className={styles['dropdown-toggle']}>
                        {isOpen ? 'All' : selectedOption ? selectedOption.label : 'Energy glass'}
                    </button>
                </div>
                <img
                    alt='arrow'
                    src={arrowIcon}
                    className={`${styles['dropdown-arrow']} ${isRotated ? styles['dropdown-arrow--rotated'] : ''}`} />
            </div>
            <ul style={isOpen? {opacity: 1} : {opacity: 0}} className={styles['dropdown-menu']}>
                {options.map((option) => (
                    <li key={option.value} onClick={(e) =>{
                        handleOptionClick(e,option)
                        selectOnlyThis(e)
                    } } >
                        <label htmlFor={option.label}>
                            {withCheckBox ? <input
                                id={option.label}
                                value={option.label}
                                className={styles.checkbox}
                                type='checkbox'
                                name="myCheckbox"
                            /> : ''}
                            <p
                                style={withCheckBox ? {marginLeft: '10px'} : {marginLeft: 0}}
                                >
                                {option.label}
                            </p>
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Dropdown;
