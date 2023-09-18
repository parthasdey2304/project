import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Popular_services from "./components/Popular_services";
import Best_part from "./components/Best_part";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Popular_services />
      <Best_part />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;