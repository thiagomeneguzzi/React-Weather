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
        getWeather('Florianópolis').then((resp) => {
            setWeather(JSON.parse(resp.request.response))
        })
    }, [])

    const searchCity = () => {
        if(city !== '') {
            getWeather(city).then((resp) => {
                setWeather(JSON.parse(resp.request.response))
                setErro()
            }).catch((error) => {
                console.log(error.response)
                setErro(error.response.data.error.code)
                console.log(erro)
            })
            setCity('')
        }
    }

    return (
        <div className="w-full">
            <h1 className="text-center mt-8 text-4xl font-bold"><span className="text-blue-400">Bem-vindo ao tempo,</span> no seu tempo!</h1>
            <div className="flex justify-center gap-3 my-4 text-3xl">
                <WiDaySunny />
                <BsMoonStars />
                <BsSnow2 />
            </div>
            
            <div className="max-w-sm flex flex-col gap-3 mx-auto mt-10">
                <Input onChange={(event: any) => setCity(event.target.value)} label={'Insira a cidade'}/>
                { erro && <p className="bg-red-300 w-fit py-1 px-2 rounded-sm text-red-700">Cidade não encontrada</p>}
                <Button onClick={searchCity} text={'Buscar cidade'} />
                {
                    weather && (
                        <Card 
                            feelsLike={weather.current.feelslike_c}
                            localtime={weather.location.localtime}
                            condition={weather.current.condition.text}
                            city={weather.location.name}
                            state={weather.location.region}
                            temperature={weather.current.temp_c}/>
                    )
                }
            </div>
        </div>
    )
} 