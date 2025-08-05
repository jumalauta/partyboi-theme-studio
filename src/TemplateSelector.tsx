import './TemplateSelector.css'
import templates from "./templates.json";
import {useEffect, useState} from "react";

const slides = templates.filter(t => t.name[0] != '_')

export type TemplateSelectorProps = {
    onChange(content: string): void;
}

export const TemplateSelector = (props: TemplateSelectorProps) => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const select = (index: number) => {
        setSelectedIndex(index);
        props.onChange(slides[index].content);
    }

    const userSelect = (index: number) => {
        history.pushState(index, "", `/${index}`);
        select(index)
    }

    useEffect(() => {
        const index = parseInt(location.pathname.split("/")[1]);
        select(isFinite(index) ? index : 0);
    }, [])

    return (
        <ul className="template-selector">
            {slides.map((slide, index) => (
                slide.name[0] != '_'
                    ? (
                        <li key={index} className={index == selectedIndex ? "selected" : ""}>
                            <a href="#" onClick={() => userSelect(index)}>
                                {slide.name}
                            </a>
                        </li>)
                    : null
            ))}
        </ul>
    );
}