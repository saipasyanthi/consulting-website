// components/Services.jsx
const services = [
  { title: "Strategy Consulting", desc: "Business strategy & planning.", icon: "💼" },
  { title: "Market Research", desc: "Data-backed market analysis.", icon: "📊" },
  { title: "Tech Advisory", desc: "Digital transformation & modernization.", icon: "🧠" },
];

const Services = () => (
  <section id="services" className="py-20 bg-white">
    <div className="max-w-6xl mx-auto px-6 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-12">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-10">
        {services.map((service, idx) => (
          <div key={idx} className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition-all duration-300">
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-blue-600 mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
