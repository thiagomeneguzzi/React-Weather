import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { BsMoonStars } from 'react-icons/bs';
import { TbError404 } from 'react-icons/tb';
import { WiCloud, WiCloudy, WiDaySunny, WiFog, WiRain, WiRainMix, WiShowers, WiSleet, WiSnow, WiSnowWind, WiStormShowers, WiThunderstorm } from 'react-icons/wi';

interface Props {
  temperature: number;
  condition: string;
  feelsLike: number;
  localtime: string;
  city: string;
  state: string;
}

const conditions = [
  {'Sol': <WiDaySunny />},
  {'Céu limpo': <BsMoonStars />},
  {'Parcialmente nublado': <WiCloud />},
  {'Nublado': <WiCloudy />},
  {'Encoberto': <WiFog />},
  {'Neblina': <WiFog />},
  {'Nevoeiro': <WiFog />},
  {'Nevoeiro gelado': <WiFog />},
  {'Possibilidade de chuva irregular': <WiCloudy />},
  {'Possibilidade de neve irregular': <WiCloudy />},
  {'Possibilidade de neve molhada irregular': <WiCloudy />},
  {'Possibilidade de chuvisco gelado irregular': <WiCloudy />},
  {'Possibilidade de trovoada': <WiCloudy />},
  {'Rajadas de vento com neve': <WiSnowWind />},
  {'Nevasca': <WiSnow />},
  {'Chuvisco irregular': <WiShowers />},
  {'Chuvisco': <WiShowers />},
  {'Chuvisco': <WiShowers />},
  {'Chuvisco forte gelado': <WiSleet />},
  {'Chuva fraca irregular': <WiSleet />},
  {'Chuva fraca': <WiSleet />},
  {'Períodos de chuva moderada': <WiSleet />},
  {'Chuva moderada': <WiSleet />},
  {'Períodos de chuva forte': <WiRain />},
  {'Chuva forte': <WiRain />},
  {'Chuva fraca e gelada': <WiShowers />},
  {'Chuva gelada moderada ou forte': <WiRain />},
  {'Chuva fraca com neve': <WiRainMix />},
  {'Chuva forte ou moderada com neve': <WiRainMix />},
  {'Queda de neve irregular e fraca': <WiSnow />},
  {'Queda de neve fraca': <WiSnow />},
  {'Queda de neve moderada e irregular': <WiSnow />},
  {'Queda de neve moderada': <WiSnow />},
  {'Queda de neve forte e irregular': <WiSnow />},
  {'Neve intensa': <WiSnow />},
  {'Granizo': <WiRainMix />},
  {'Aguaceiros fracos': <WiShowers />},
  {'Aguaceiros moderados ou fortes': <WiShowers />},
  {'Chuva torrencial': <WiRain />},
  {'Aguaceiros fracos com neve': <WiSnow />},
  {'Aguaceiros moderados ou fortes com neve': <WiRainMix />},
  {'Chuva fraca com neve': <WiSnow />},
  {'Chuva moderada ou forte com neve': <WiRainMix />},
  {'Aguaceiros fracos com granizo': <WiRainMix />},
  {'Aguaceiros moderados ou fortes com granizo': <WiRainMix />},
  {'Chuva fraca irregular com trovoada': <WiStormShowers />},
  {'Chuva moderada ou forte com trovoada': <WiThunderstorm />},
  {'Neve fraca irregular com trovoada': <WiSnow />},
  {'Neve moderada ou forte com trovoada': <WiSnow />},
]

export function Card({temperature, condition, feelsLike, localtime, city, state}: Props) {

  function getConditionIcon(condition: string) {
    const index = conditions.findIndex(conditionItem => Object.keys(conditionItem).toString() === condition)
    return index !== -1 ? Object.values(conditions[index]) : <TbError404 />
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