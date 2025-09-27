import classNames from 'classnames/bind'
import styles from './AccountItem.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

const cx = classNames.bind(styles)

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img className={cx('avatar')} src='https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/f475993531c5ebf9a1eeb435b39a99aa~tplv-tiktokx-cropcenter:100:100.jpeg?dr=14579&refresh_token=07d31d07&x-expires=1759078800&x-signature=C%2BOGQtf5v7gaVk%2FGy1hXrsQk3H8%3D&t=4d5b0474&ps=13740610&shp=30310797&shcp=c1333099&idc=my2' alt='Hoaa'/>
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span>Dang Minh Tri </span>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>
        </h4>
        <span className={cx('username')}>dangminhtri</span>
      </div>
    </div>
  )
}

export default AccountItem