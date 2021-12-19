import React, { useRef, useState, useCallback } from 'react'
import styles from './index.module.css'
import { gsap } from 'gsap'

export const CreateBtn = () => {
  const [isOpen, setIsOpen] = useState(false)
  const optionPanelRef = useRef(null)
  const createBtnRef = useRef(null)
  const changeBtn = (flag: boolean) => {
    setIsOpen(flag)
    if (flag) {
      gsap.fromTo(
        optionPanelRef.current,
        0.6,
        { width: '60px', height: '60px', bottom: 0, right: 0 },
        {
          width: '260px',
          height: '260px',
          bottom: '-160%',
          right: '-160%',
        }
      )
      gsap.fromTo(
        createBtnRef.current,
        0.6,
        {
          backgroundColor: '#ff007a',
          transform: 'rotate(0deg)',
          color: '#fff',
        },
        {
          backgroundColor: '#fff',
          transform: 'rotate(45deg)',
          color: '#ff007a',
        }
      )
    } else {
      gsap.fromTo(
        optionPanelRef.current,
        0.6,
        {
          width: '260px',
          height: '260px',
          bottom: '-160%',
          right: '-160%',
        },
        { width: '60px', height: '60px', bottom: 0, right: 0 }
      )
      gsap.fromTo(
        createBtnRef.current,
        0.6,
        {
          backgroundColor: '#fff',
          transform: 'rotate(45deg)',
          color: '#ff007a',
        },
        {
          backgroundColor: '#ff007a',
          transform: 'rotate(0deg)',
          color: '#fff',
        }
      )
    }
  }

  return (
    <div className={styles['create-btn-wrap']}>
      <div className={styles['option-Panel']} ref={optionPanelRef}></div>
      <div
        className={styles['create-btn']}
        ref={createBtnRef}
        onClick={() => changeBtn(!isOpen)}
      >
        +
      </div>
    </div>
  )
}
