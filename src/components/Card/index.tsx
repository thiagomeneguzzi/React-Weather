
import format from 'date-fns/format';
import { ptBR } from 'date-fns/locale';
import { BsMoonStars, BsWind } from 'react-icons/bs';
import { FaTemperatureHigh } from 'react-icons/fa';
import { TbError404 } from 'react-icons/tb';
import { WiCloud, WiCloudy, WiDaySunny, WiFog, WiHumidity, WiRain, WiRainMix, WiShowers, WiSleet, WiSnow, WiSnowWind, WiStormShowers, WiThunderstorm } from 'react-icons/wi';
import { MiniCard } from './MiniCard';

interface Props {
  temperature: number;
  condition: string;
  feelsLike: number;
  wind: number;
  humidity: number;
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

export function Card({temperature, condition, feelsLike, localtime, city, state, wind, humidity}: Props) {

  function getConditionIcon(condition: string) {
    const index = conditions.findIndex(conditionItem => Object.keys(conditionItem).toString() === condition)
    return index !== -1 ? Object.values(conditions[index]) : <TbError404 />
  }

  return (
    <div className="bg-gray-300 rounded-xl w-full max-w-2xl border-gray-700 border-2">
      <p className="text-slate-700 text-xl my-4 text-center font-bold">{city}, {state}</p>

      <div className="flex flex-col items-center my-4">
        <span className="text-gray-700 text-8xl font-bold">
          {getConditionIcon(condition)}
        </span>
        <p className="text-gray-600 text-xl text-center font-bold">{condition}</p>
        <p className="text-gray-700 text-4xl text-center font-bold">{temperature}°</p>
      </div>

      

      <div className="flex gap-2 flex-wrap justify-center m-2">
        <MiniCard title='Temperatura' content={`${temperature}`} symbol={'°C'} icon={<FaTemperatureHigh />} />
        <MiniCard title='Sensação' content={`${feelsLike}`} symbol={'°C'} icon={<FaTemperatureHigh />} />
        <MiniCard title='Umidade' content={`${humidity}`} symbol={'%'} icon={<WiHumidity />} />
        <MiniCard title='Vento' content={`${wind}`} symbol={'Km/h'} icon={<BsWind />} />
      </div>

      <div className="mt-4 bg-zinc-400 w-fit m-auto p-4 rounded-t">
        <p className="text-slate-900 text-xl text-center font-bold">{format(new Date(localtime), "HH:mm", {locale: ptBR})}</p>
        <p className="text-slate-900 text-xl text-center font-bold">{format(new Date(localtime), "dd ' de ' MMMM", {locale: ptBR})}</p>
      </div> 

    </div>
  )
}