import "../assets/styles/components/Hero.scss";
import { HeroTypeWriter } from "./HeroTypeWriter";

export const Hero = () => {

  return (
    <div className="Hero">
      {/* <div className="Hero_Video">
            <video src={Pexels} inlist autoPlay muted loop ></video>
            <img src={Hero_BG}/>
      </div> */}

      <div className="Hero_Video"></div>

      <div className="Hero_Content">
       <HeroTypeWriter/>

        <div className="Hero_Btn">
          <div className="Hero_LearnMore_Btn">Mehr Erfahren</div>
          <div className="Hero_ContactNow_Btn">Jetzt Kontaktieren</div>
        </div>
      </div>
    </div>
  );
};