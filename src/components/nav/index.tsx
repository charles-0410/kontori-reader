import React from "react"
import styles from "./index.module.css"
import { Icon } from "@iconify/react"
import clsx from "clsx"

export const Nav = () => {
  return (
    <div className={styles["nav"]}>
      <div className={styles["nav-container"]}>
        <div className={clsx(styles["nav-item"], styles["active"])}>
          <Icon icon="bx:bxs-book-add" fontSize="22" />
          <span>书架</span>
        </div>
        <div className={styles["nav-item"]}>
          <Icon icon="fluent:history-16-filled" fontSize="22" />
          <span>历史</span>
        </div>
        <div className={styles["nav-item"]}>
          <Icon icon="carbon:user-avatar-filled" fontSize="22" />
          <span>我的</span>
        </div>
      </div>
    </div>
  )
}
