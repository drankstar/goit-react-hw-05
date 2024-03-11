import { Hourglass } from "react-loader-spinner"
import styles from "./Loader.module.css"

const Loader = () => {
  return (
    <div className={styles.loder}>
      <Hourglass
        visible={true}
        height='80'
        width='80'
        ariaLabel='hourglass-loading'
        wrapperStyle={{}}
        wrapperClass='loder'
        colors={["rgb(255, 60, 0)"]}
      />
    </div>
  )
}

export default Loader
