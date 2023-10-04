
import { Asap } from 'next/font/google';

const asap = Asap({ subsets: [ 'latin' ] })


import styles from './TabsComponent.module.css';
import FirstIcon from "@/app/images/menuIcons/FirstIcon";
import SecondIcon from "@/app/images/menuIcons/SecondIcon";
import ThirdIcon from "@/app/images/menuIcons/ThirdIcon";
import FourthIcon from "@/app/images/menuIcons/FourthIcon";
import FifthIcon from "@/app/images/menuIcons/FifthIcon";
import SixthIcon from "@/app/images/menuIcons/SixthIcon";

const menuOptions = [
  { label: "Option1", icon: FirstIcon },
  { label: "Option2", icon: SecondIcon },
  { label: "Option3", icon: ThirdIcon },
  { label: "Option4", icon: FourthIcon },
  { label: "Option5", icon: FifthIcon },
  { label: "Option6", icon: SixthIcon }
]
const TabsComponent = () => {
  return (
    <div className={ styles.wrapper }>
      { menuOptions.map(op => (
        <div className={ styles.buttonWrapper }>
          <div className={ styles.insideWrapper }>
            <div className={ styles.teamLogoWrapper }>
              <op.icon                 className={ styles.teamLogoIcon }/>
              {/*<Image*/}
              {/*  src={ op.icon }*/}
              {/*  alt="Picture of the author"*/}
              {/*/>*/}
            </div>
            <p className={ `${ asap.className } ${ styles.text }` }>{ op.label }</p>
          </div>
        </div>
      ))
      }
    </div>
  )
  
}

export default TabsComponent;