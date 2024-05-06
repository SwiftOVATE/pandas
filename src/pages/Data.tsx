import Prism from "prismjs";
import "prismjs/themes/prism.css";
import { useEffect } from 'react'
import CopyCode from '../utils/Copy'
import { RawData } from "../data/RawData";

export const Data = () => {

    useEffect(() => {
        Prism.highlightAll();
        document.title = "Data"
    })

    return (
        <div>
            <span className="anchor"></span>
            <form className="contactForm">
                <h1>
                    <img alt="a" id="hrtLogo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3c-XRDBcZ4uNbuhFVlCklLCt5s1cpe5BIVrcGR9toYA&s" draggable="false" />
                    <span className='mr-5'></span> pandas
                </h1>

                {
                    RawData.map((item,index: any) => (
                        <div className="component">
                            <h2>
                                {index + 1})
                                {item.name}
                                <button className='blueBackground cpy' id="cpy" onClick={() => CopyCode(item.value)}>
                                    Copy
                                    <i className="fa-regular fa-copy"></i>
                                </button>
                            </h2>
                            <pre>
                                <code className={'language-js'}>
                                    {item.value}
                                </code>
                            </pre>
                        </div>
                    ))
                }
            </form>
        </div>
    );
}
