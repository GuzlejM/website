import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div> 
      <Navbar />
      <main>
        <h1>Welcome to Unorthodox Engineers</h1>
        <p>Your partner in innovative IT solutions.</p>
      </main>
      <Footer />
    </div>
  );
}