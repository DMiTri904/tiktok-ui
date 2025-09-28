import classNames from "classnames/bind"
import styles from './Button.module.scss'
import { Link } from "react-router-dom"

const cx = classNames.bind(styles)
function Button({ to,
  href,
  primary = false,
  outline = false,
  text = false,
  rounded = false,
  disable = false,
  small = false,
  large = false,
  children,
  onClick,
  className,
  leftIcons,
  rightIcons,
  ...passProps 
}) {


  let Comp = 'button'
  const props = {
    onClick,
    ...passProps
  }

// Remove event listener when btn is disable
  if (disable) {
    // delete props.onClick
    Object.keys(props).forEach(key => {
      if(key.startsWith('on') && typeof props[key] === 'function') {
        delete props[key]
      }
    })
  }

  if (to) {
    props.to = to
    Comp = Link
  } else if (href) {
    props.href = href
    Comp = 'a'
  }
  
  const classes = cx('wrapper', {
    primary,
    outline,
    text,
    rounded,
    disable,
    small,
    [className]: className,
    large
    
  })
  return (
    <Comp className={classes} {...props}>
      {leftIcons && <span className={cx('icon')}>{leftIcons}</span>}
      <span className={cx('title')}>{children}</span>
      {rightIcons && <span className={cx('icon')}>{rightIcons}</span>}
    </Comp>
  )
}

export default Button