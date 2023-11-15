import React from 'react'
import styles from './contact.module.css'

const Contact = () => {
  return (
    // <div className='contact'>Contact pakai css global </div> 
    <div className={styles.contact}>Contact pakai css modul di contact </div> 
  )
}

export default Contact