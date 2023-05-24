import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from "next/link";
import {NavBar} from "../components/NavBar";
import {MainLayout} from "../components/layouts/MainLayout";
import {DarkLayout} from "../components/layouts/DarkLayout";

const inter = Inter({ subsets: ['latin'] })

export default function AboutPage() {
    return (
        <>
            <h1>About Page</h1>

            <h1 className={'title'}>
                {/*Ir a <a href='/'> Home</a>*/}
                Ir a  <Link href='/'> Home</Link>
            </h1>
        </>
    )
}

AboutPage.getLayout = function getLayout(page: JSX.Element){
    // @ts-ignore


    return(
        // @ts-ignore
        <MainLayout>
            {/*// @ts-ignore*/}
            <DarkLayout>
                {page}
            </DarkLayout>

        </MainLayout>
    )
}
