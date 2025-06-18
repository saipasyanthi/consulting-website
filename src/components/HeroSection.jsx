// components/Hero.jsx
const Hero = () => (
  <section id="home" className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d')" }}>
    <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center text-center">
      <div className="text-white max-w-xl px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Grow With Confidence</h1>
        <p className="text-lg md:text-xl mb-6">Strategy, insight, and execution tailored for your success.</p>
        <a href="#contact" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full text-white font-semibold transition">Let’s Talk</a>
      </div>
    </div>
  </section>
);

export default Hero;
