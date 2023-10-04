
import Image from 'next/image';

import UserData from '../UserData/UserData';
import TabsComponent from '../TabsComponent/TabsComponent';
import AccountManagment from '../AccountManagment/AccountManagment';

import styles from './UserInfo.module.css';

import team1 from '../../images/teamIcon/Go.svg';

import { Asap } from 'next/font/google';

const asap = Asap({ subsets: ['latin'] })

const UserInfo = () => {

    const teamName: string = 'Team Go';

    return (
        <div className={styles.wrapper}>

            <div className={styles.teamLogo}>
                <div className={styles.teamLogoWrapper}>
                    <Image
                        src={team1}
                        width={500}
                        height={500}
                        alt="Picture of the author"
                        className={styles.teamLogoIcon}
                    />
                </div>

                <p className={`${asap.className} ${styles.teamName}`}>{teamName}</p>
            </div>

            <UserData />

            <TabsComponent />

            <AccountManagment />

        </div>
    )

}

export default UserInfo;