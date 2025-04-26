import About from "./About";
import Contact from "./Contact";
import Hero from "./Hero";
// import Marketplace from "./Marketplace";
import Portfolio from "./Portfolio";
import Skills from "./Skills";

const Home = () => {
    return <div>
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        {/* <Marketplace/> */}
        <Contact/>
    </div>;
};

export default Home;
