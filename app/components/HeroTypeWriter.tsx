'use client';
import "../assets/styles/components/Hero.scss";
import { Typewriter } from "react-simple-typewriter";

export const HeroTypeWriter = () => {

    const handleType = (count: number) => {
        // access word count number
        console.log(count);
    };

    const handleDone = () => {
        console.log(`Done after 5 loops!`);
    };
    return(
        <div id="Hero_Typewriter">
            <Typewriter
                words={[
                "OZ Web-Entwicklung",
                "Webseiten gestalten",
                "Online Präsenz aufbauen",
                ]}
                loop={1}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
                onLoopDone={handleDone}
                onType={handleType}
            />
        </div>
    )
}