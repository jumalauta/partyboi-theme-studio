import './App.css'
import {TemplateSelector} from "./TemplateSelector.tsx";
import {InfoScreen} from "./InfoScreen.tsx";
import {useState} from "react"


export const App = () => {
    const [screenContent, setScreenContent] = useState<string | undefined>()

    return (
        <div className="app">
            <TemplateSelector onChange={setScreenContent}/>
            <InfoScreen content={screenContent}/>
        </div>
    )
}

