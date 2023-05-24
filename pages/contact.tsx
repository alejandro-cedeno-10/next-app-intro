import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from "next/link";
import {NavBar} from "../components/NavBar";
import {MainLayout} from "../components/layouts/MainLayout";

const inter = Inter({ subsets: ['latin'] })

export default function AboutPage() {
    return (
        // @ts-ignore
       <MainLayout>
           <h1>Contact Page</h1>

           <h1 className={'title'}>
               {/*Ir a <a href='/'> Home</a>*/}
               Ir a  <Link href='/'> Home</Link>
           </h1>
       </MainLayout>
    )
}
