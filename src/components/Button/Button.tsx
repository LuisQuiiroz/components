const colors = {
  default: 'bg-default-1 text-black-1 hover:bg-default-2 focus:bg-default-2',
  primary: 'bg-primary-1 text-white hover:bg-primary-2 focus:bg-primary-2',
  secondary: 'bg-secondary-1 text-white hover:bg-secondary-2 focus:bg-secondary-2',
  danger: 'bg-danger-1 text-white hover:bg-danger-2 focus:bg-danger-2'
}

const sizes = {
  sm: 'px-3 py-[6px]',
  md: 'px-4 py-2',
  lg: 'px-[22px] py-[11px]'
}

const variants = {
  outline: (color: ColorKey): string => `border border-${color}-1 text-${color}-1 bg-white hover:bg-${color}-2 hover:bg-opacity-10 focus:bg-${color}-2 focus:bg-opacity-10`,
  text: (color: ColorKey): string => `text-${color}-1 bg-white hover:bg-${color}-2 hover:bg-opacity-10 focus:bg-${color}-2 focus:bg-opacity-10`
}

const disabledType = {
  disabledShadow: 'cursor-not-allowed',
  disabled: 'bg-default-1 text-gray-1 cursor-not-allowed',
  disabledText: 'text-gray-1 cursor-not-allowed'
}
type ColorKey = keyof typeof colors
type SizeKey = keyof typeof sizes
type VariantKey = keyof typeof variants

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  color?: ColorKey
  size?: SizeKey
  variant?: VariantKey
  disabled?: boolean
  disableShadow?: boolean
  className?: string
  startIcon?: string
  endIcon?: string
}

export const Button: React.FC<ButtonProps> = ({ color = 'primary', size = 'md', variant, disabled = false, disableShadow = false, onClick, children, className, startIcon, endIcon, ...props }) => {
  const baseClasses = 'flex items-center gap-2 font-noto-sans text-sm rounded-md transition ease-in-out duration-300 focus:outline-none'
  const cnsize = sizes[size]
  const variantButton = variant === undefined ? colors[color] : variants[variant](color) // fill o (outline/text)
  const disabledTypeButton = variant === undefined ? disabledType.disabled : disabledType.disabledText
  const isDisabled = disabled ? disabledTypeButton : variantButton
  const specs = `${cnsize} ${isDisabled}`
  const shadow = disableShadow ? disabledType.disabledShadow : ''
  const buttonClasses = `${baseClasses} ${specs} ${shadow} ${className ?? ''}`

  return (
    <button className={buttonClasses} onClick={onClick} {...props}>
      {startIcon !== undefined && <i className={startIcon} />}
      {children}
      {endIcon !== undefined && <i className={endIcon} />}
    </button>
  )
}
