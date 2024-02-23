import {Experience} from "./components/Experience/Experience.jsx";
import {Header} from "./components/Header/Header.jsx";
import {Hero} from "./components/Hero/Hero.jsx";
import {Work} from "./components/Work/Work.jsx";
import {Footer} from "./components/Footer/Footer.jsx";
import css from './styles/app.module.scss'

const App = () => {
  return <div className={`bg-primary ${css.container}`}>
    <Header/>
    <Hero/>
    <Experience/>
    <Work/>
    <Footer/>
  </div>
};

export default App;
