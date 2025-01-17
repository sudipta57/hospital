import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import About from "./pages/About";
import Service from "./pages/Service";
import OurNews from "./pages/OurNews";
import SingleNews from "./pages/SingleNews";
import Doctors from "./pages/Doctors";
import Contact from "./pages/Contact";
import BookAppointment from "./pages/BookAppointment";

function Layout() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-news" element={<OurNews />} />
        <Route path="/single-news" element={<SingleNews />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/our-service" element={<Service />} />
        <Route path="/our-doctors" element={<Doctors />} />
        <Route path="/our-contact" element={<Contact />} />
        <Route path="/our-appointment" element={<BookAppointment />} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
