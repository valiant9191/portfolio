import {useEffect, useState} from "react";
import axios from "axios"
import Header from "./a0_header/Header";
import Main from "./a1_main/Main";
import Vacancy from "./a5_vacansy/Vacancy";
import Footer from "./a7_footer/Footer";
import RunningLine from "./a2_runningLine/RunningLine";
import Projects from "./a4_projects/Projects";
import Skills from "./a3_skills/Skills";
import Contacts from "./a6_contacts/Contacts";
import './App.css';



function App() {
    const [ip, setIp] = useState()
    // just to make some statistic:
    useEffect(() => {
        (async () => {
            const response = await fetch('https://ipapi.co/json/')
            const data = await response.json()
            setIp(data.ip)
        })();
    }, [])

    useEffect(() => {
        ip && axios.post('http://localhost:3001/createUser', {
            name: `${ip}`,
            age: 0,
            username: 'newUser'
        })
    }, [ip])

    return (
        <div className='App'>
            <Header />
            <Main />
            <RunningLine />
            <Skills />
            <Projects />
            <Vacancy />
            <Contacts />
            <Footer />
        </div>
    );
}

export default App;
