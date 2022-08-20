interface Props {
  title: string;
  content: string;
  symbol: string;
  icon: JSX.Element;
}

export function MiniCard({ title, content, icon, symbol }: Props) {
  return (
    <div className="bg-gray-200 flex gap-2 items-center rounded-xl w-4/5 max-w-[200px] py-2 border-gray-700 border-2 pl-2">
      <div className="text-2xl text-gray-700">
        {icon}
      </div>
      <div>
        <h2 className="text-gray-500 text-md font-bold">{title}</h2>
        <p className="text-gray-700 text-2xl font-bold">{content}<span className="text-lg">{symbol}</span> </p>
      </div>
    </div>
  )
}