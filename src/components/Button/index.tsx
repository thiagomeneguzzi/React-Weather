interface Props {
  text: string,
  [x: string]: any
}

export function Button({text, ...rest}: Props) {
  return (
    <button 
      {...rest}
      className="bg-blue-600 font-bold w-full h-8 rounded-sm">
        {text}
    </button>
  )
}