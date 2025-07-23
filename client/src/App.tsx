import { Router, Route } from 'wouter';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Solutions from './pages/Solutions';
import HireExperts from './pages/HireExperts';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import Blog from './pages/Blog';
import AutomationAgent from './components/AutomationAgent';
import ClientSuccessStories from './pages/ClientSuccessStories';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Route path="/" component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/solutions" component={Solutions} />
        <Route path="/hire-experts" component={HireExperts} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/careers" component={Careers} />
        <Route path="/blog" component={Blog} />
        <Route path="/automation-agent" component={AutomationAgent} />
        <Route path="/client-success-stories" component={ClientSuccessStories} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;