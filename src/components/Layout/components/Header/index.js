import { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faSpinner, faMagnifyingGlass, faEllipsisVertical, faEarthAsia, faCircleQuestion, faKeyboard, faUser, faCoins, faGear, faSignOut} from '@fortawesome/free-solid-svg-icons'
import Tippy from '@tippyjs/react'
import HeadlessTippy from '@tippyjs/react/headless'
import 'tippy.js/dist/tippy.css'

import Button from '~/components/Button'
import { Wrapper as PopperWrapper } from '~/components/Popper'
import styles from './Header.module.scss'
import images from '~/assets/images'
import AccountItem from '~/components/AccountItem'
import Menu from '~/components/Popper/Menu'
import { UploadIcon } from '~/components/Icons'
import Image from '~/components/Image'


const cx = classNames.bind(styles)

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia}/>,
    title: 'English',
    children: {
      title: 'Language',
      data: [
        {
          type: 'language',
          code: 'en',
          title: 'English'
        },
        {
          type: 'language',
          code: 'vi',
          title: 'Tiếng Việt'
        }
      ], 
    }
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion}/>,
    title: 'Feedback and help',
    to: '/feedback'
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard}/>,
    title: 'Keyboard shortcuts',
  },
  
]

function Header() {
  const [searchResult, setSearchResult] = useState([])

  const currentUser = true

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([])
    }, 0)
  }, [])

  // Handle logic
  const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
      case 'language':
        //Handle change language
        break;
      default:
    }
  }

  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser}/>,
      title: 'View profile',
      to: '/@CR7'
    },
    {
      icon: <FontAwesomeIcon icon={faCoins}/>,
      title: 'Get coins',
      to: '/coin'
    },
    {
      icon: <FontAwesomeIcon icon={faGear}/>,
      title: 'Settings',
      to: '/settings'
    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faSignOut}/>,
      title: 'Log out',
      to: '/logout',
      separate: true
    },
  ]

  return  <header className={cx('wrapper')}>
    <div className={cx('inner')}>

      <img src={images.logo} alt='Tiktok'/>

      <HeadlessTippy
        interactive
        visible={searchResult.length > 0}
        render={attrs => (
          <div className={cx('search-result')} tabIndex="-1" {...attrs}>
            <PopperWrapper>
              <h4 className={cx('search-title')}>
                Accounts
              </h4>
              <AccountItem />
              <AccountItem />
              <AccountItem />
              <AccountItem />
            </PopperWrapper>
          </div>
        )}
        >
        <div className={cx('search')}>
          <input
            placeholder='Search accounts and videos' spellCheck={false}
          />
          <button className={cx('clear')}>
            <FontAwesomeIcon icon= {faCircleXmark} />
          </button>
          <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
      
          <button className={cx('search-btn')}>
            <FontAwesomeIcon icon= {faMagnifyingGlass} />
          </button>
        </div>
      </HeadlessTippy>

      <div className={cx('actions')}>
      {currentUser ? (
        <>
          <Tippy delay={[0,200]} content="Upload video" placement='bottom'>
            <button className={cx('action-btn')}>
              <UploadIcon />
            </button>
          </Tippy>
        </>
      ) : (
        <>
          <Button text>Upload</Button>
          <Button primary >Log in</Button>
        </>
      )}

      <Menu
        items={currentUser ? userMenu : MENU_ITEMS}
        onChange={handleMenuChange}
      >
        {currentUser ? (
          <Image 
            src='https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/f475993531c5ebf9a1eeb435b39a99aa~tplv-tiktokx-cropcenter:100:100.jpeg?dr=14579&refresh_token=8566cb25&x-expires=1759323600&x-signature=M8MHKs2%2FNlF67Dmyj%2BBeRxCwX%2Bg%3D&t=4d5b0474&ps=13740610&shp=30310797&shcp=c1333099&idc=my2' 
            className={cx('user-avatar')} 
            alt="Nguyen Van A"
            fallback = "src=https://files.fullstack.edu.vn/f8-prod/user_avatars/1/623d4b2d95cec.png"
          />
        ) : (
          <button className={cx('more-btn')}>
            <FontAwesomeIcon icon={faEllipsisVertical}/>
          </button>
        )}
      </Menu>
      </div>
    </div>
  </header>
  
}

export default Header