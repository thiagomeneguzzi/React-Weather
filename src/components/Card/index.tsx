import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { BsCloudy, BsSun } from 'react-icons/bs';
import { MdNightlightRound } from 'react-icons/md';

interface Props {
  temperature: number;
  condition: string;
  feelsLike: number;
  localtime: string;
  city: string;
  state: string;
}

const conditions = [
  {'Sol': <BsSun />},
  {'Céu limpo': <MdNightlightRound />},
  {'Parcialmente nublado': <BsCloudy />}
]

export function Card({temperature, condition, feelsLike, localtime, city, state}: Props) {

  function getConditionIcon(condition: string) {
    console.log(condition)
    const index = conditions.findIndex(conditionItem => Object.keys(conditionItem).toString() === condition)
    const element = Object.values(conditions[index])
    return element
  }

  return (
    <div className="bg-white rounded-xl w-full pl-4 max-w-xl border-gray-600 border-2">

      <div className="flex justify-center my-4">
        <span className="text-gray-700 text-8xl font-bold">
          {getConditionIcon(condition)}
        </span>
      </div>
      <p className="text-slate-400 text-xl my-4 text-center font-bold">{condition}</p>

      <p className="text-slate-600 text-xl my-4 text-center font-bold">{city}, {state}</p>
      
      <div className="flex justify-evenly my-2 items-center">
        <p className="text-gray-700 text-4xl font-bold">{temperature} °C </p>
        <p className="text-gray-700 font-bold">Sensação de {feelsLike} °C</p>
      </div>

      <div className="my-4">
        <p className="text-slate-600 text-xl text-center font-bold">{format(new Date(localtime), "HH:mm", {locale: ptBR})}</p>
        <p className="text-slate-600 text-xl text-center font-bold">{format(new Date(localtime), "dd ' de ' MMMM", {locale: ptBR})}</p>
      </div>


    </div>
  )
}