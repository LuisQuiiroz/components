const baseClassesInput = 'mt-6 appearance-none border rounded-lg w-52 text-gray-700 leading-normal placeholder:text-gray-3 hover:outline-none focus:outline-none peer'
const baseClassesLabel = 'absolute font-noto-sans text-xs'
const baseClassesSpan = 'text-xs font-noto-sans mt-2'

const errorClasses = {
  input: 'border-danger-1 hover:border-gray-2 focus:border-danger-1',
  label: 'text-danger-1 peer-hover:text-gray-2 peer-focus:text-danger-1',
  span: 'text-danger-1 peer-hover:text-gray-2 peer-focus:text-danger-1'
}

const defaultClasses = {
  input: 'border-gray-3 hover:border-gray-2 focus:border-primary-1',
  label: 'text-gray-2 peer-focus:text-primary-1',
  span: 'text-gray-2 peer-focus:text-primary-1'
}

const sizes = {
  sm: 'py-[10px] px-3',
  md: 'py-[18px] px-3'
}

type SizeKey = keyof typeof sizes

interface LabelProps {
  labelFor: string
  labelClasses: string
  label: string
}

const Label: React.FC<LabelProps> = ({ labelFor, labelClasses, label }) => (
  <label className={labelClasses} htmlFor={labelFor}>
    {label}
  </label>
)
interface InputProps {
  inputClasses: string
  id: string
  placeholder: string
  disabled: boolean
}

const InputField: React.FC<InputProps> = ({ inputClasses, id, placeholder, disabled, ...props }) => (
  <>
    <input
      className={inputClasses}
      id={id}
      type='text'
      placeholder={placeholder}
      disabled={disabled}
      {... props}
    />
  </>
)

interface Props {
  label?: string
  placeholder?: string
  error?: boolean
  disabled?: boolean
  helperText?: string
  size?: SizeKey
}

export const Input: React.FC<Props> = ({ label = 'Label', placeholder = 'Placeholder', error = false, disabled = false, helperText, size = 'md', ...props }) => {
  const cnSize = sizes[size]
  const cnErrorInput = error ? errorClasses.input : defaultClasses.input
  const cnErrorLabel = error ? errorClasses.label : defaultClasses.label
  const cnErrorSpan = error ? errorClasses.span : defaultClasses.span
  const isDisabled = disabled ? 'border-default-1 bg-gray-4 cursor-not-allowed' : cnErrorInput

  const inputClasses = `${baseClassesInput} ${cnSize} ${isDisabled}`
  const labelClasses = `${baseClassesLabel} ${cnErrorLabel}`
  const spanClasses = `${baseClassesSpan} ${cnErrorSpan}`

  return (
    <div className='realtive flex flex-col'>
      <InputField inputClasses={inputClasses} id={label} placeholder={placeholder} disabled={disabled} {...props} />
      <Label labelFor={label} labelClasses={labelClasses} label={label} />
      {
        helperText !== '' && (
          <span className={spanClasses}>
            {helperText}
          </span>
        )
}
    </div>
  )
}
