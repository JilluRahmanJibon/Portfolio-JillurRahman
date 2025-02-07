import About from "./About";
import Contact from "./Contact";
import Hero from "./Hero";
import Portfolio from "./Portfolio";
import Skills from "./Skills";

const Home = () => {
    return <div>
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Contact/>
    </div>;
};

export default Home;
