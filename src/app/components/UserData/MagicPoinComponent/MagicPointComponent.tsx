import Image from 'next/image';

import frame from '../../../images/magicPointImage/Frame.svg';

import styles from './MagicPoint.module.css';

interface IPoin {
    image: string;
    point: string;
}

const MagicPointComponent = ({ image, point }: IPoin) => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.iconWrapper}>
                <Image
                    src={image}
                    alt="Picture of the author"
                    className={styles.icon}
                />
            </div>

            <div className={styles.addIconWrapper}>
                <Image
                    src={frame}
                    alt="Picture of the author"
                    className={styles.addIcon}
                />
            </div>

            <div className={styles.numberWrapper}>
                <p className={styles.text}>{point}</p>
            </div>
        </div>
    )

}

export default MagicPointComponent;