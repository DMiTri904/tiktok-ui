import classNames from "classnames/bind"
import Header from "~/components/Layout/components/Header"
import Sideabar from "./Sidebar"
import styles from './DefaultLayout.module.scss'

const cx = classNames.bind(styles)

function DefaultLayout({ children }) {
  return (
    <div className={cx('wrapper')}>
      <Header />
      <div className={cx('container')}>
        <Sideabar />
        <div className={cx('content')}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default DefaultLayout