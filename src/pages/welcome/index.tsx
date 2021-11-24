import React from 'react'
import styles from './index.module.css'

export const Welcome = () => {
  return (
    <div className={styles['welcome']}>
      <div className={styles['container']}>
        <h1>Welcome!</h1>
        <h5>What is This?</h5>
        <h5>This is an open source novel reader that you will love</h5>
        <div className="container-middle">
          <div className="left-box"></div>
          <div className="right-box"></div>
        </div>
        <div className="container-bottom"></div>
      </div>
      <div className={styles['footer']}></div>
    </div>
  )
}
