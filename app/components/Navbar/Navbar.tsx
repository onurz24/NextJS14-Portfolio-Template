import "../.././assets/styles/components/Navbar/Navbar.scss";
import Image from 'next/image';
import OZ_Logo from "../.././assets/Images/Logos/OZ_Logo.webp"
import { BurgerMenu } from './BurgerMenu';
import { Sidebar } from './Sidebar';

interface NavbarProps{

}

export const Navbar = ({}:NavbarProps) => {


    const ScrollSection = (Section : any)=>{
        Section.current.scrollIntoView({ behavior: 'smooth' });
    }

    return(
        <nav>
            <BurgerMenu/>
            <Sidebar/>

            <div className="Nav_Logo_Container">
                <Image src={OZ_Logo} className='Nav_Logo_Image' alt='onurzengin.de'/>
                {/* Logo, SVG, or Brand Name : onurzengin.de */}
            </div>

            <div className="Nav_Links_Container">

                <div className="Nav_Links_Content"> {/* Hide On Mobile */}
                    <a href='#' className="Nav_Link">
                        Start
                    </a>
                    <a href='#' className="Nav_Link">
                        Über Mich
                    </a>
                    <a href='#' className="Nav_Link">
                        Dienstleistungen
                    </a>
                    <a href='#' className="Nav_Link">
                        Kontakt
                    </a>
                </div>

            </div>
        </nav>
    )
}