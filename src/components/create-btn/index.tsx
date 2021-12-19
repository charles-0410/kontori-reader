import React, { useRef, useState, useEffect } from "react"
import styles from "./index.module.css"
import { FABExpand, rotateTo45 } from "utils/anim"
import { gsap } from "gsap"

export const CreateBtn = () => {
  const [isExpand, setIsExpand] = useState(false)
  const optionPanelRef = useRef(null)
  const createBtnRef = useRef(null)
  const panelAnimRef = useRef(gsap.timeline())
  const btnAnimRef = useRef(gsap.timeline())

  useEffect(() => {
    panelAnimRef.current = FABExpand(optionPanelRef)
    btnAnimRef.current = rotateTo45(createBtnRef)
  }, [])

  useEffect(() => {
    panelAnimRef.current.reversed(isExpand)
    btnAnimRef.current.reversed(isExpand)
  }, [isExpand])

  return (
    <div className={styles["create-btn-wrap"]}>
      <div className={styles["option-Panel"]} ref={optionPanelRef}></div>
      <div
        className={styles["create-btn"]}
        ref={createBtnRef}
        onClick={() => {
          setIsExpand(!isExpand)
        }}
      >
        +
      </div>
    </div>
  )
}
