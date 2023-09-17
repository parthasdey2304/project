import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Popular_services from "./components/Popular_services";
import Best_part from "./components/Best_part";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Popular_services />
      <Best_part />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;