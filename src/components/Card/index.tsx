interface Props {
  temperature: number
}

export function Card({temperature}: Props) {
  return (
    <div className="bg-white rounded-xl w-full max-w-xl">
      <h3 className="text-gray-700 font-bold">{temperature}°C</h3>
    </div>
  )
}