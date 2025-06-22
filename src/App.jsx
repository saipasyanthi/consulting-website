import React, {useEffect, useState} from "react";
import {motion} from 'framer-motion';
import { DateTime } from "luxon";
import './App.css';
import Greeting from './components/GreetingSection';
import WeatherWidget from "./components/WeatherWidget";
console.log("✅ App component loaded");

const App = () => {
  const [weather, setWeather] = useState(null);
  const [timezoneMessage, setTimezoneMessage] = useState("");

  useEffect(() => {
    const fetchWeather = async () => {
      const city = "New York";
      const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
        );
        const data = await response.json();
        setWeather({
          temp: data.main.temp,
          desc: data.weather[0].description,
          city: data.name,
        });
      } catch (error) {
        console.error("Weather fetch failed:", error);
      }
    };

    const updateTimezoneGreeting = () => {
      const estNow = DateTime.now().setZone("America/New_York");
      const hours = estNow.hour;
      if (hours < 12) setTimezoneMessage("Good Morning");
      else if (hours < 18) setTimezoneMessage("Good Afternoon");
      else setTimezoneMessage("Good Evening");
    };

    fetchWeather();
    updateTimezoneGreeting();
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-background min-h-screen text-gray-300 font-sans px-6 py-12">
      <header className="p-4 shadow-md bg-white/80 backdrop-blur sticky top-0 z-50">
        <nav className="max-w-6xl mx-auto flex justify-between items-center">
          <motion.h1 initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="text-2xl font-extrabold text-emerald-700 cursor-pointer tracking-tight" onClick={() => scrollToSection('hero')}>
            Atharvionics Ltd
          </motion.h1>
          <ul className="flex space-x-6 text-emerald-700 font-medium">
            {['Home', 'Problem', 'How It Works', 'Who It’s For', 'Examples', 'Testimonials', 'Contact'].map((label, index) => (
              <li key={index} className="cursor-pointer hover:text-emerald-900 transition" onClick={() => scrollToSection(label.toLowerCase().replace(/\s/g, ''))}>{label}</li>
            ))}
          </ul>
        </nav>
      </header>
         
         <div className="min-h-screen bg-background px-6 py-12 items-center text-center">
         <Greeting /> <WeatherWidget />
        
      <main className="px-4 py-14 max-w-6xl mx-auto space-y-24">
        <section id="hero" className="text-center">
          <motion.h2 className="text-4xl md:text-5xl font-extrabold text-emerald-800 mb-4 leading-tight">
            Automate the Busywork.<br />Run Your Business Smarter.
          </motion.h2>
          <p className="text-emerald-700 text-lg max-w-2xl mx-auto">
            We help small businesses save time, cut costs, and work smarter by automating repetitive tasks — without the need for coding or expensive tools.
          </p>
          <div className="mt-6 flex justify-center space-x-4">
            <button className="px-6 py-2 bg-emerald-700 text-white rounded-full hover:bg-emerald-800 transition shadow-md">Get Your Free Automation Audit</button>
            <button className="px-6 py-2 border border-emerald-700 text-emerald-700 rounded-full hover:bg-emerald-50 transition shadow-sm">See Real Examples</button>
          </div>
        </section>

        <section id="problem" className="bg-white p-10 rounded-3xl shadow-xl text-center">
          <h3 className="text-3xl font-semibold text-emerald-800 mb-4">Stop Doing the Same Tasks Over and Over Again.</h3>
          <p className="text-gray-700 text-lg">Invoicing. Customer emails. Scheduling. Reports.<br />Small business owners waste hours every week on repetitive tasks.<br /><strong>We eliminate those headaches through smart, simple automations.</strong></p>
        </section>

        <section id="how" className="bg-gradient-to-r from-sky-50 to-emerald-50 p-10 rounded-3xl shadow-xl text-center">
          <h3 className="text-3xl font-semibold text-emerald-800 mb-4">Simple, Personalized, and Done-for-You.</h3>
          <ol className="text-left list-decimal list-inside text-gray-700 text-lg max-w-xl mx-auto space-y-2">
            <li><strong>Book a Free Audit</strong> – Tell us what tasks slow you down.</li>
            <li><strong>We Build Your Automations</strong> – Tailored to your business tools and workflows.</li>
            <li><strong>You Save Hours Every Week</strong> – Focus on growth, not grunt work.</li>
          </ol>
          <button className="mt-6 px-6 py-2 bg-emerald-700 text-white rounded-full hover:bg-emerald-800 transition shadow-md">Let’s Get Started</button>
        </section>

        <section id="who" className="text-center">
          <h3 className="text-3xl font-semibold text-emerald-800 mb-4">This is perfect for you if you're a:</h3>
          <ul className="text-gray-700 text-lg space-y-2">
            <li>• Freelance service provider</li>
            <li>• Small agency owner</li>
            <li>• Local business (retail, services, trades)</li>
            <li>• Solopreneur or startup founder</li>
          </ul>
          <p className="mt-4 text-gray-600">You don’t need to learn tech. We’ll build everything for you.</p>
        </section>

        <section id="examples" className="bg-white p-10 rounded-3xl shadow-xl">
          <h3 className="text-3xl font-semibold text-emerald-800 mb-4 text-center">Some examples of tasks we automate:</h3>
          <ul className="text-gray-700 text-lg space-y-2 max-w-xl mx-auto">
            <li>• Automatically send invoices when a job is complete</li>
            <li>• Auto-reply to customer emails or contact forms</li>
            <li>• Sync leads from website to CRM or Google Sheets</li>
            <li>• Schedule social media posts</li>
            <li>• Set up reminders for unpaid invoices or bookings</li>
            <li>• And more — if it’s repetitive, we can automate it</li>
          </ul>
        </section>

        <section id="testimonials" className="text-center">
          <h3 className="text-3xl font-semibold text-emerald-800 mb-6">Client Wins</h3>
          <blockquote className="italic text-lg text-gray-700 max-w-2xl mx-auto mb-6">
            “I used to spend 5–6 hours a week on admin. Now it’s under 30 minutes. Game changer.”<br /><span className="font-semibold">– Jasmin R., Boutique Owner</span>
          </blockquote>
          <blockquote className="italic text-lg text-gray-700 max-w-2xl mx-auto">
            “Everything just flows now — new clients, follow-ups, billing — it’s like I hired an assistant, without the payroll.”<br /><span className="font-semibold">– Alex T., Consultant</span>
          </blockquote>
        </section>

        <section id="contact" className="bg-emerald-50 p-10 rounded-3xl shadow-xl text-center">
          <h3 className="text-3xl font-semibold text-emerald-800 mb-4">Ready to save time and grow faster?</h3>
          <p className="text-lg text-gray-700 mb-6">Let’s automate your business, together.</p>
          <form className="max-w-xl mx-auto space-y-4 text-left">
            <input type="text" placeholder="Your Name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-400" />
            <input type="email" placeholder="Your Email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-400" />
            <textarea placeholder="Tell us about your automation needs" rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-400"></textarea>
            <button type="submit" className="w-full px-4 py-2 bg-emerald-700 text-white rounded-full hover:bg-emerald-800 transition shadow-md">Submit</button>
          </form>
        </section>
      </main>

      <footer className="mt-10 py-6 text-center text-sm text-gray-600">
        <p className="text-gray-700 font-medium">© 2025 Atharvionics Ltd. All rights reserved.</p>
        {weather && (
          <p className="text-xs text-gray-500 mt-1">{timezoneMessage} from {weather.city} – {weather.temp}°C, {weather.desc}</p>
        )}
      </footer>
    </div>
     </div>
  );
};

export default App;