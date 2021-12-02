import React, { useState } from 'react'
import styles from './index.module.css'
import { Icon } from '@iconify/react'

export const Header = () => {
  const [showSearch, setShowSearch] = useState(false)

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
        <div
          className={styles['search-btn']}
          onClick={() => setShowSearch(true)}
        >
          <Icon icon="ion:search" fontSize="22" />
        </div>
        {showSearch && (
          <div className={styles['search-box']}>
            <div
              className={styles['search-close']}
              onClick={() => setShowSearch(false)}
            >
              <Icon icon="eva:close-outline" fontSize="28" />
            </div>
            <div className={styles['search-main']}>
              <Icon
                icon="ion:search"
                fontSize="22"
                className={styles['search-icon']}
              />
              <input type="text" placeholder="ぼくがみて" />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
