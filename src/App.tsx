import './App.css';
import {Header} from './layout/header/Header';
import {Main} from './layout/sections/main/Main';
import {Skills} from './layout/sections/skills/Skills';
import {Works} from './layout/sections/works/Works';


import {Slogan} from './layout/sections/slogan/Slogan';
import {Footer} from './layout/footer/Footer';
import {Particle} from './components/particle/Particle';
import {GoTopBtn} from './components/goTopBtn/GoTopBtn';


function App() {
    return (
        <div className="App">
            <Particle/>
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <Slogan/>
            <Footer/>
            <GoTopBtn/>
        </div>
    );
}

export default App;
