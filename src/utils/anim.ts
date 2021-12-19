import { gsap } from "gsap"

export const FABExpand = (ref: React.MutableRefObject<null>) => {
  return gsap.timeline().to(ref.current, {
    width: 260,
    height: 260,
    top: -90,
    left: -90,
  })
}

export const rotateTo45 = (ref: React.MutableRefObject<null>) => {
  return gsap.timeline().to(ref.current, {
    rotate: 45,
    backgroundColor: "white",
    color: "#ff007a",
  })
}
