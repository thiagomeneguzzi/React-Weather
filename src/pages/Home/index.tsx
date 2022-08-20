import { useEffect, useState } from "react"
import { BsMoonStars, BsSnow2 } from 'react-icons/bs'
import { WiDaySunny } from 'react-icons/wi'
import { Button } from "../../components/Button"
import { Card } from "../../components/Card"
import { Input } from "../../components/Input"
import { getWeather } from "../../services/api"

export function Home() {

    const [city, setCity] = useState('')
    const [weather, setWeather]: any = useState()
    const [erro, setErro]: any = useState()

    useEffect(() => {
        const city = localStorage.getItem('city')!
        if(city) {
            setWeather(JSON.parse(city))
        } else {
            getWeather('Florianópolis').then((resp) => {
                setWeather(JSON.parse(resp.request.response))
                localStorage.setItem('city', resp.request.response)
            })
        }
    }, [])

    const searchCity = () => {
        if(city !== '') {
            getWeather(city).then((resp) => {
                setWeather(JSON.parse(resp.request.response))
                localStorage.setItem('city', resp.request.response)
                setErro()
            }).catch((error) => {
                setErro(error.response.data.error.code)
            })
            setCity('')
        }
    }

    return (
        <div className="w-full flex flex-col items-center">
            <h1 className="text-center mt-8 text-4xl font-bold"><span className="text-blue-400">Bem-vindo ao tempo,</span> no seu tempo!</h1>
            <div className="flex justify-center gap-3 my-4 text-3xl">
                <WiDaySunny />
                <BsMoonStars />
                <BsSnow2 />
            </div>
            
            <div className="max-w-lg flex flex-col mx-4 gap-3 mt-10">
                <Input onChange={(event: any) => setCity(event.target.value)} label={'Insira a cidade'}/>
                { erro && <p className="bg-red-300 w-fit py-1 px-2 rounded-sm text-red-700">Cidade não encontrada</p>}
                <Button onClick={searchCity} text={'Buscar cidade'} />
                {
                    weather && (
                        <Card 
                            feelsLike={weather.current.feelslike_c}
                            localtime={weather.location.localtime}
                            condition={weather.current.condition.text}
                            wind={weather.current.wind_kph}
                            humidity={weather.current.humidity}
                            city={weather.location.name}
                            state={weather.location.region}
                            temperature={weather.current.temp_c}/>
                    )
                }
            </div>
        </div>
    )
} 