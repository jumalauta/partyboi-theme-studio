import "./InfoScreen.css"
import {useRef, useEffect, useState, type CSSProperties, useMemo} from "react";
import templates from "./templates.json";

export type InfoScreenProps = {
    content?: string
}

type ThemeConfig = {
    name: string,
    width: number,
    height: number,
    injectBody?: string,
}

const defaultTheme: ThemeConfig = {
    name: "Default",
    width: 1920,
    height: 1080,
}

export const InfoScreen = (props: InfoScreenProps) => {
    const [themeConfig, setThemeConfig] = useState(defaultTheme)

    useEffect(() => {
        fetch("/assets/screen/theme.json")
            .then(res => res.json())
            .then(setThemeConfig)
    }, [])

    const shown = props.content != undefined
    const className = ["info-screen", shown && "shown"]
        .filter(Boolean)
        .join(' ')

    const containerRef = useRef<HTMLDivElement>(null)
    const [containerStyle, setContainerStyle] = useState<CSSProperties>({})

    const frameRef = useRef<HTMLIFrameElement>(null)

    useEffect(() => {
        frameRef.current?.contentWindow?.postMessage(props.content)
    }, [props.content])

    useEffect(() => {
        const resize = () => {
            const container = containerRef.current
            const frame = frameRef.current;
            if (container && frame) {
                const ratioH = container.offsetWidth / themeConfig.width;
                const ratioV = container.offsetHeight / themeConfig.height;
                const minRatio = Math.min(ratioH, ratioV);

                setContainerStyle({
                    transform: `scale(${minRatio * 100}%)`,
                    transformOrigin: "top left",
                })
            }
        }

        resize()
        addEventListener("resize", resize);
        return () => removeEventListener("resize", resize);
    }, [themeConfig])

    const content = useMemo(() =>
      templates[0]!.content.replace(
        /<body([^>]*)>/i,
        `<body$1>${themeConfig.injectBody || ''}`
      ), 
      [themeConfig]
    )

    return (
        <div
            className="info-screen-container"
            ref={containerRef}
            style={containerStyle}
        >
            <iframe
                ref={frameRef}
                width={themeConfig.width}
                height={themeConfig.height}
                className={className}
                srcDoc={content}
            />
        </div>
    )
}