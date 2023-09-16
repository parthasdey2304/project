import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Companies from "./components/Companies";
import Popular_services from "./components/Popular_services";
import Best_part from "./components/Best_part";
import Got from "./components/Got";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Companies />
      <Popular_services />
      <Best_part />
      <Got />
    </div>
  );
}

export default App;