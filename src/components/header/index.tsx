import React from 'react'
import styles from './index.module.css'
import { Icon } from '@iconify/react'

export const Header = () => {
  return (
    <div className={styles['header']}>
      <div className={styles['header-container']}>
        <div className={styles['menu-btn']}>
          <Icon icon="dashicons:menu-alt3" fontSize="18" />
        </div>
        <div className={styles['title']}>
          <Icon icon="bx:bxs-cube" fontSize="28" />
          <span>Kontori Reader</span>
        </div>
        <div className={styles['search-btn']}>
          <Icon icon="ion:search" fontSize="22" />
        </div>
      </div>
    </div>
  )
}
