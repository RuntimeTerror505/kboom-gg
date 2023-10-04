import Image from 'next/image';

import styles from './AccountManagment.module.css';

import img1 from '../../images/Frame.svg';
import img2 from '../../images/acc.svg';


import { Asap } from 'next/font/google';

const asap = Asap({ subsets: ['latin'] })


const AccountManagment = () => {
    return (
        <div className={styles.wrapper}>
            <p className={`${asap.className} ${styles.text}`}>Account managment</p>

            <div className={styles.logoWrapper}>
                <Image
                    src={img2}
                    alt="Picture of the author"
                    className={styles.logoIcon}
                />
            </div>

            <div className={styles.logoWrapper}>
                <Image
                    src={img1}
                    alt="Picture of the author"
                    className={styles.logoIcon}
                />
            </div>


        </div>
    )

}

export default AccountManagment;