import styles from './styles.module.css'

type ColorKey = 'default' | 'primary' | 'secondary' | 'danger'
type SizeKey = 'sm' | 'md' | 'lg'
type VariantKey = 'outline' | 'text'

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  color?: ColorKey
  size?: SizeKey
  variant?: VariantKey
  disabled?: boolean
  disableShadow?: boolean
  className?: string
}

export const Button: React.FC<ButtonProps> = ({ color = 'primary', size = 'md', variant, disabled = false, disableShadow = false, onClick, children, className, ...props }) => {
  const cnSize = styles[size]
  const typeButton = variant === undefined ? styles[color] : `${styles[color]} ${styles[variant]}`
  const isDisabled = disabled ? variant === undefined ? styles.disabledBg : styles.disabledText : typeButton
  const shadow = disableShadow ? `bg-${color}-2 cursor-not-allowed` : ''
  const buttonClasses = `${styles.button} ${cnSize} ${isDisabled} ${shadow} ${className ?? ''}`
  console.log(buttonClasses)
  return (
    <button className={buttonClasses} onClick={onClick} {...props}>
      {children}
    </button>
  )
}
