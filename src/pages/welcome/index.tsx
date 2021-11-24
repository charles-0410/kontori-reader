import React from 'react'
import styles from './index.module.css'
import { Icon } from '@iconify/react'

export const Welcome = () => {
  return (
    <div className={styles['welcome']}>
      <div className={styles['welcome-warp']}>
        <div className={styles['header']}>
          <div className={styles['header-wrap']}>
            <div className={styles['logo-box']}>
              <div className={styles['logo-icon']}>
                <Icon icon="bx:bxs-cube" fontSize="30" />
              </div>
              <span>Kontori Reader</span>
            </div>
            <div className={styles['language-box']}>
              A/あ <span>English</span>
            </div>
          </div>
        </div>
        <div className={styles['container']}>
          <h1>Welcome!</h1>
          <h5>What is This?</h5>
          <h5>This is an open source novel reader that you will love</h5>
          <div className={styles['container-middle']}>
            <div className={styles['left-box']}>
              <div className={styles['left-box-title']}>You Can</div>
              <div className={styles['link-list']}>
                <div className={styles['link-item']}>
                  <Icon icon="fontisto:earth" fontSize="24" />
                  <a href="#">Enter the web client</a>
                </div>
                <div className={styles['link-item']}>
                  <Icon icon="ic:outline-android" fontSize="24" />
                  <a href="#">Download android app</a>
                </div>
                <div className={styles['link-item']}>
                  <Icon icon="ci:apple" fontSize="24" />
                  <a href="#">Download ios app</a>
                </div>
              </div>
            </div>
            <div className={styles['right-box']}>
              <Icon icon="bx:bxs-cube" fontSize="230" />
            </div>
          </div>
          <div className={styles['container-bottom']}>
            In addition, you can also view our project code on
            <Icon
              icon="bx:bxl-github"
              fontSize="24"
              className={styles['icon']}
            />
            github
          </div>
        </div>
        <div className={styles['footer']}>
          <div className={styles['footer-wrap']}>
            <div className={styles['icon-box']}>
              <div className={styles['icon-item']}>
                <Icon icon="entypo-social:twitter-with-circle" fontSize="28" />
              </div>
              <div className={styles['icon-item']}>
                <Icon icon="entypo-social:facebook-with-circle" fontSize="28" />
              </div>
              <div className={styles['icon-item']}>
                <Icon
                  icon="entypo-social:instagram-with-circle"
                  fontSize="28"
                />
              </div>
            </div>
            <div className={styles['text-box']}>
              If you like this app, you can share it with others This will drive
              us to make it better, thank you.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
