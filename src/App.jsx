import Header from "./components/Header";
import News from "./components/News";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <div className="py-[10rem]">
        <News />
      </div>

      <Footer />
    </div>
  );
}

export default App;
