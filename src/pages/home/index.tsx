import { BookItem } from "components/book-item"
import demo from "assets/demo.jpg"
import styles from "./index.module.css"

export const Home = () => {
  const mock = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  return (
    <main className={styles["main"]}>
      <div className={styles["book-list"]}>
        {mock.map(() => {
          return <BookItem src={demo} />
        })}
      </div>
    </main>
  )
}
