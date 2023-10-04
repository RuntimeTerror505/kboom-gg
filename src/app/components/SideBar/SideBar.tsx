import Image from 'next/image';

import styles from './SideBar.module.css';

import team1 from '../../images/teamIcon/Go.svg';
import team2 from '../../images/teamIcon/Teams.svg';
import team3 from '../../images/teamIcon/Teams1.svg';

const teams = [
  {team: 'Team1', logo: team1},
  {team: 'Team1', logo: team2},
  {team: 'Team1', logo: team3}

]
const SideBar = () => {
  
    return (
        <div className={styles.wrapper}>
          {teams.map((team) => (
            <div className={styles.commandImageWrapper}>
              <Image
                src={team.logo}
                width={500}
                height={500}
                alt={team.team}
                className={styles.commandImage}
              />
            </div>
          ))
          }
        </div>
    )
}

export default SideBar;