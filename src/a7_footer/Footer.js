import React from 'react'
import styles from './Footer.module.scss';


function Footer() {
    let items = [

        { href: 'https://www.linkedin.com/in/valentin-kolko/', title: 'linkedIn' },
        {
            href: 'https://valiant9191@gmail.com',
            title: 'email'
        },]
    return (
        <div className={styles.footerContainer}>
            <p className={styles.copyRightBlock}>© 2021, All Rights Reserved.</p>
            <ul>
                {items.map((e, i) => <li key={i}><a href={e.href} target="_blank" rel="noreferrer">{e.title}</a></li>)}
            </ul>
        </div>
    );
}

export default Footer;