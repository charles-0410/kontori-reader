import React from 'react'
import styles from './index.module.css'
import { Icon } from '@iconify/react'

export const Welcome = () => {
  return (
    <div className={styles['welcome']}>
      <div className={styles['welcome-wrap']}>
        <div className={styles['header']}>
          <div className={styles['header-logo']}>
            <div className={styles['logo-icon']}>
              <Icon icon="bx:bxs-cube" fontSize="30" />
            </div>
            <span>Kontori Reader</span>
          </div>
          <div className={styles['language-box']}>
            A/あ <span>English</span>
          </div>
        </div>
        <div className={styles['container']}>
          <h1>Welcome !</h1>
          <h4>What is This ?</h4>
          <h4>This is an open source novel reader that you will love </h4>
          <div className={styles['download-box']}>
            <div className={styles['download-title']}>You Can</div>
            <div className={styles['download-main']}>
              <div className={styles['download-list']}>
                <div className={styles['list-item']}>
                  <Icon icon="fontisto:earth" fontSize="24" />
                  <a href="#">Enter the web client</a>
                </div>
                <div className={styles['list-item']}>
                  <Icon icon="ic:outline-android" fontSize="24" />
                  <a href="#">Download android app</a>
                </div>
                <div className={styles['list-item']}>
                  <Icon icon="ci:apple" fontSize="24" />
                  <a href="#">Download ios app</a>
                </div>
              </div>
              <div className={styles['download-icon']}>
                <Icon icon="bx:bxs-cube" fontSize="230" />
              </div>
            </div>
          </div>
          <div className={styles['tips']}>
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
          <div className={styles['icon-box']}>
            <div className={styles['icon-item']}>
              <Icon icon="entypo-social:twitter-with-circle" fontSize="28" />
            </div>
            <div className={styles['icon-item']}>
              <Icon icon="entypo-social:facebook-with-circle" fontSize="28" />
            </div>
            <div className={styles['icon-item']}>
              <Icon icon="entypo-social:instagram-with-circle" fontSize="28" />
            </div>
          </div>
          <div className={styles['text-box']}>
            If you like this app, you can share it with others This will drive
            us to make it better, thank you.
          </div>
        </div>
      </div>
    </div>
  )
}
