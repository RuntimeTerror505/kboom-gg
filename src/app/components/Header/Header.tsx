import Image from 'next/image'
import styles from './Header.module.css';

import logo from '../../images/Logo.svg';

import discord from '../../images/logoItems/Vector.svg';
import twitter from '../../images/logoItems/Twitter.svg';
import tiktok from '../../images/logoItems/TikTok.svg';
import newicon from '../../images/logoItems/Group.svg';
import new1 from '../../images/logoItems/g10.svg';
import new2 from '../../images/logoItems/Frame2.svg';
import new3 from '../../images/logoItems/Frame1.svg';


const Header = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.imageWrapper}>
                <div className={styles.logoWrapper}>
                    <Image
                        src={logo}
                        width={500}
                        height={500}
                        className={styles.logoStyle}
                        alt="Picture of the author"
                    />
                </div>
                <div className={styles.socialWrapper}>
                    <div className={styles.socialIconsWrapper}>
                        <Image
                            src={twitter}
                            width={500}
                            height={500}
                            alt="Picture of the author"
                            className={styles.socialImage}
                        />
                    </div>

                    <div className={styles.socialIconsWrapper}>

                        <Image
                            src={newicon}
                            width={500}
                            height={500}
                            alt="Picture of the author"
                            className={styles.socialImage}
                        />
                    </div>
                    <div className={styles.socialIconsWrapper}>

                        <Image
                            src={tiktok}
                            width={500}
                            height={500}
                            alt="Picture of the author"
                            className={styles.socialImage}
                        />
                    </div>
                    <div className={styles.socialIconsWrapper}>

                        <Image
                            src={new1}
                            width={500}
                            height={500}
                            alt="Picture of the author"
                            className={styles.socialImage}
                        />
                    </div>
                    <div className={styles.socialIconsWrapper}>

                        <Image
                            src={new2}
                            width={500}
                            height={500}
                            alt="Picture of the author"
                            className={styles.socialImage}
                        />
                    </div>
                    <div className={styles.socialIconsWrapper}>

                        <Image
                            src={new3}
                            width={500}
                            height={500}
                            alt="Picture of the author"
                            className={styles.socialImage}
                        />
                    </div>
                    <div className={styles.socialIconsWrapper}>

                        <Image
                            src={discord}
                            width={500}
                            height={500}
                            alt="Picture of the author"
                            className={styles.socialImage}
                        />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;