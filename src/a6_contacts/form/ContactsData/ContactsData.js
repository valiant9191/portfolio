import React from 'react'
import styles from './ContactsData.module.scss';
import { faTelegramPlane} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope, faHome} from "@fortawesome/free-solid-svg-icons";
import DataBlock from "./DataBlock/DataBlock";



function ContactsData() {
    return (
            <div className={styles.data}>
                <DataBlock iconTitle={faTelegramPlane} contactTitle={'Phone'} data={'+995-599-705-316'} a={"tel:+995-599-705-316"}/>
                <DataBlock iconTitle={faEnvelope} contactTitle={'Email'} data={'valiant9191@gmail.com'} a={""}/>
                <DataBlock iconTitle={faHome} contactTitle={'My Location'} data={'Gonio, Georgia'} a={""}/>
            </div>
    );
}

export default ContactsData;