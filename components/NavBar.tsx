import Link from "next/link";
import styles from './NavBar.module.css';
import {ActiveLink} from "./ActiveLink";
import {FC} from "react";

const menuItems = [
    {
        text: 'Home',
        href: '/'
    },
    {
        text: 'About',
        href: '/about'
    },
    {
        text: 'Contact',
        href: '/contact'
    },
    {
        text: 'Pricing',
        href: '/pricing'
    },
];

export const  NavBar:FC = () =>{
    return (
        <nav className={ styles['menu-container'] }>
            { menuItems.map((menu)=>{
                return(
                    <ActiveLink key={menu.text} text={menu.text} href={ menu.href }/>
                )
            })  }

        </nav>
    )
}
