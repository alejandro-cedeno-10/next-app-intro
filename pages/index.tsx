import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from "next/link";
import {NavBar} from "../components/NavBar";
import {MainLayout} from "../components/layouts/MainLayout";

const inter = Inter({ subsets: ['latin'] })

export default function IndexPage() {
  return (
      // @ts-ignore
    <MainLayout>
        <h1>Home Page</h1>

        <h1 className={'title'}>
            {/*Ir a <a href='/about'> About</a>*/}
            Ir a  <Link href='/about'> About</Link>
        </h1>
    </MainLayout>
  )
}
