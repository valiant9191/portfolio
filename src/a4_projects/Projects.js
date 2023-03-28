import React from 'react'
import styles from './Projects.module.scss';
import {Project} from "./project/Project";
import Title from "../common/components/title/Title";
import imgOne from './../assets/images/gallery-photo-1.png'
import imgTwo from '../assets/images/gallery-photo-2.png'
import imgThree from '../assets/images/gallery-photo-3.png'
import imgFour from '../assets/images/gallery-photo-4.png'
import imgFive from '../assets/images/gallery-photo-5.png'
import imgSix from '../assets/images/gallery-photo-6.png'
import imgEight from '../assets/images/gallery-photo-8.png'


function Projects() {
    return (
        <div className={styles.projectsBlock} id='portfolio'>
            <div className={styles.projectsContainer}>
                <Title title={'My portfolio'}/>
                <div className={styles.projects}>
                    <Project
                        title={"Rock Paper Scissors contract"}
                        img={imgOne}
                        description={"React, TS, Sass modules, polkadot, Gear-js, Mantine"}
                        link={"https://github.com/gear-tech/gear-js/tree/ny-rock-paper-scissors/apps/rock-paper-scissors/src"}/>
                    <Project
                        title={"Show-RealizeMD"}
                        img={imgTwo}
                        description={"React, Redux-toolkit, RestAPI, Sass"}
                        link={"https://github.com/staskh/realizemd_show_frontend"}/>

                    <Project
                        title={"RealizeMD"}
                        img={imgThree}
                        description={"React, Redux, RestAPI, Thunk, Sass"}
                        link={"https://github.com/staskh/realizemd_frontend"}/>

                    <Project
                        title={"Collage extension"}
                        img={imgFour}
                        description={"It was a command work. Extension for getting images from Web, React, Tailwind"}
                        link={"https://github.com/valiant9191/web-extension"}/>

                    <Project
                        title={"Demiurg"}
                        img={imgFive}
                        description={"Website for building company"}
                        link={"https://github.com/valiant9191/demiurge"}/>

                    <Project
                        title={"future project"}
                        img={imgSix}
                        description={"...in progress"}
                        link={"link #6"}/>

                    <Project
                        title={"future project"}
                        img={imgEight}
                        description={"...in progress"}
                        link={"link #1"}/>

                    <Project
                        title={"future project "}
                        img={imgEight}
                        description={"...in progress"}
                        link={"link #2"}/>
                </div>
            </div>
        </div>
    );
}

export default Projects;