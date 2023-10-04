import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import UserInfo from './components/UserInfo/UserInfo';

import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.mainWrapper}>
        <SideBar />
        <UserInfo />
      </div>
    </div>
  )
}
