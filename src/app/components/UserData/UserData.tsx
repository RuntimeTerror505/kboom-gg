import Image from 'next/image';
import MagicPointComponent from './MagicPoinComponent/MagicPointComponent';
import styles from './UserData.module.css';

import avatar from '../../images/userData/Avatar.svg';
import coin from '../../images/magicPointImage/coin.svg';
import emoji from '../../images/magicPointImage/emoji.svg';
import vector from '../../images/magicPointImage/Vector.svg';


import { Asap } from 'next/font/google';

const asap = Asap({ subsets: ['latin'] })

const UserData = () => {
    const progress: number = 268;

    const percent = (progress / 1000) * 100;

    const fillStyle = {
        width: `${percent}%`,
    };

    const userLvl: number = 7;
    return (
        <div className={styles.wrapper}>
            <div className={styles.userAvatar}>
                <div className={styles.avatarWrapper}>
                    <Image
                        src={avatar}
                        alt="Picture of the author"
                        className={`${styles.avatar}`}
                    />
                </div>
                <p className={`${asap.className} ${styles.userName}`}>Pseudo</p>
            </div>

            <div className={styles.progressBarWrapper}>
                <div className={styles.progressSquare}>
                    <p className={styles.progressSquareData}>{userLvl}</p>
                </div>
                <div className={styles.progressContainer}>
                    <div className={styles.progressFill} style={fillStyle}>
                        <p className={styles.progressText}>{progress}/1000</p>
                    </div>
                </div>
            </div>

            <div className={styles.magicPointWrapper}>
                <MagicPointComponent image={coin} point={'12,897'} />
                <MagicPointComponent image={emoji} point={'322'} />
                <MagicPointComponent image={vector} point={'2/5'} />
            </div>



        </div >
    )
}

export default UserData;