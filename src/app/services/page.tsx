import Navbar from './../components/Navbar';
import Footer from './../components/Footer';
import ServiceCard from './../components/ServiceCard';

export default function Services() {
  return (
    <div>
      <Navbar />
      <main>
        <h1>Our Services</h1>
        <ServiceCard
          title="Web Development"
          description="Building responsive and modern web applications."
          icon="/icons/web-development.svg"
        />
        {/* Add more ServiceCard components as needed */}
      </main>
      <Footer />
    </div>
  );
}