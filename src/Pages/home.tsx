import React from 'react';

import ImageLink from '../Components/image_link';


//images
import calendar from './images/calendar.png';
import show_room from './images/live_showroom.png';
import SGA from './images/SGA.png';
import game_title from './images/game_title.png';
import cc_game from './images/CC_Game.png';
import bulletin from './images/bulletin_server.png';
import KAMP from './images/KAMP.png';
import c_puzzle from './images/8_puzzle.png';
import python_puzzle from './images/python_puzzle.png';
import sudoku from './images/sudoku.png';

/*
    Required:
        - Introduction to website
        - Direct links to past work (github and/or demo)
*/

class Home extends React.Component {
    render() {
        return (
            <div className="Home-container">
                <h1>Home</h1>
                <h2>Past Projects (Images are Github links)</h2>
                <ImageLink header="MyDynamicScheduler"
                image_link={calendar}
                web_link="https://github.com/DerekMarshall855/MyDynamicScheduler"
                desc="Schedule generator and calendar website created with MERN stack.
                I did the entirety of the backend (API Design + implementation) and a large portion of front end.
                Final project for Internet Programming course."
                />
                <ImageLink header="Computer Graphics Showroom"
                image_link={show_room}
                web_link="https://github.com/DerekMarshall855/Computer-Graphics-Showroom"
                desc="3D showroom where the user can explore a confined space.
                There are multiple objects you can interact with, as well as lights
                that can be toggled on and off, and have their color changed.
                Used WebGL and Three.js library.
                Final project for Computer Graphics course."
                />
                <ImageLink header="Python Simple Genetic Algorithm"
                image_link={SGA}
                web_link="https://github.com/DerekMarshall855/CP468-Term-Project"
                desc="Simple genetic algorithm, capable of solving 8 different OF functions.
                Run through console and coded using python. Final project for AI course."
                />
                <ImageLink header="Robot Slime Fun Time Game"
                image_link={game_title}
                web_link="https://github.com/DerekMarshall855/CP468-Term-Project"
                desc="Game created over one weekend using GDScript and the Godot game engine. First game
                ever made. Worked in a group with one other friend. Built for the GDU-5 Game jam."
                />
                <ImageLink header="Captain Code Android Application"
                image_link={cc_game}
                web_link="https://github.com/DerekMarshall855/CP470_Final_Project"
                desc="Simple game designed and programmed using Java for the android platform. Uses
                surface view for light animation, and fragments for better controls. Ability to change your
                characters skin and replay levels. Final project for Android Development course."
                />
                <ImageLink header="Bulletin Board"
                image_link={bulletin}
                web_link="https://github.com/DerekMarshall855/Bulletin-Board"
                desc="Basic client server application, allowing multiple users to connect to the server and post/share
                posts on a virtual bulletin board."
                />
                <ImageLink header="KAMP (Keyboard And Mouse Practice)"
                image_link={KAMP}
                web_link="https://github.com/DerekMarshall855/KAMP"
                desc="Game built in scratch using Java. Uses basic aim training and type racer
                style game play to teach kids how to properly use their mouse and keyboard"
                />
                <ImageLink header="8 Puzzle Solver - C"
                image_link={c_puzzle}
                web_link="https://github.com/DerekMarshall855/8PuzzleSolver"
                desc="Program that uses C to solve an 8 puzzle using an interative breadth first search."
                />
                <ImageLink header="8 Puzzle Solver - Python"
                image_link={python_puzzle}
                web_link="https://github.com/DerekMarshall855/Assignment-1"
                desc="Uses A* and IDA* to solve 8 puzzle, 15 puzzle, and 24 puzzle"
                />
                <ImageLink header="AC3 - Sudoku Solver"
                image_link={sudoku}
                web_link="https://github.com/DerekMarshall855/CP468-Assignment-2"
                desc="Uses the AC3 algorithm and python to solve sudoku puzzles."
                />
            </div>
            
        );
    }
}

export default Home;