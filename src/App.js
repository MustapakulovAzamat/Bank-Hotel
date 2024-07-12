import { Footer } from "./components/Footer/Footer";
import { AboutPage } from "./pages/AboutPage/AboutPage";
import { MainPage } from "./pages/MainPage/MainPage";
import { OurPage } from "./pages/OurPage/OurPage";
import { RoomsPage } from "./pages/RoomsPage/RoomsPage";


function App() {
  return (
    <div className="App">
      <MainPage/>
      <AboutPage/>
      <RoomsPage/>
      <OurPage/>
      <Footer/>
    </div>
  );
}

export default App;
