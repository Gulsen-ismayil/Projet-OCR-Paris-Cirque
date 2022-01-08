import Header from './components/Header';
import Navbar from './components/Navbar';
import PerformanceList from './components/PerformanceList';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <body>

      <div>
        <Header />
        <Navbar />
        <h2 className='title-performance'>PERFORMANCE</h2>
        <PerformanceList />
        <AboutUs />
        <ContactUs />
        <Footer />
      </div>

    </body>
  )
}

export default App;
