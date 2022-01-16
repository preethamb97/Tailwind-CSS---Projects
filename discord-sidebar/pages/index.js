import Head from 'next/head'
import Image from 'next/image'
import SideBar from '../components/SideBar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tailwind learn</title>
        <meta name="description" content="tailwind css" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='flex'>
        <SideBar />
      </div>
    </div>
  )
}
