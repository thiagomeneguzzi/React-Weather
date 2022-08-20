import { useEffect, useState } from "react"
import { Button } from "../../components/Button"
import { Card } from "../../components/Card"
import { Input } from "../../components/Input"
import { getWeather } from "../../services/api"

export function Home() {

    const [city, setCity] = useState('')
    const [weather, setWeather]: any = useState()

    useEffect(() => {
        getWeather('São Paulo').then((resp) => {
            setWeather(JSON.parse(resp.request.response))
        })
    }, [])

    const searchCity = () => {
        if(city !== '') {
            getWeather(city).then((resp) => {
                setWeather(JSON.parse(resp.request.response))
            })
            setCity('')
        }
    }

    return (
        <div className="w-full">
            <h1 className="text-center mt-8 text-4xl font-bold"><span className="text-blue-400">Bem-vindo ao tempo,</span> no seu tempo!</h1>
            <div className="max-w-sm flex flex-col gap-3 mx-auto mt-10">
                <Input onChange={(event: any) => setCity(event.target.value)} label={'Insira a cidade'}/>
                <Button onClick={searchCity} text={'Buscar cidade'} />
                {
                    weather && <Card temperature={weather.current.temp_c}/>
                }
            </div>
        </div>
    )
} 