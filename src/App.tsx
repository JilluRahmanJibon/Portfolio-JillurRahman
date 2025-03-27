import Navbar from "./shared/Navbar/Navbar";
import "aos/dist/aos.css";
import AOS from "aos";
import Home from "./pages/Home/Home";
import Footer from "./shared/Footer/Footer";

const App = () => {
	AOS.init({ duration: 800 ,once:true});

	return (
		<div className="">
			<Navbar />
			<Home />
			<Footer/>
		</div>
	);
};

export default App;
