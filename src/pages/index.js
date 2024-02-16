// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Profile from './qcomps/profile_mistake'
import MyComp from './qcomps/firstcomp'
import Bio from './qcomps/bios'
import TodoList from './qcomps/todos'
// import Profile from './components/profile_props'
import Gallery from './qcomps/gallery_props'
import List from './qcomps/list_keys_id'
import State from './qcomps/state'
import Form from './qcomps/stuckForm'

export default function Home() {
  return (
    <div className={styles.main}>
        <Form />
    </div>
  )
}
