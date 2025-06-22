const getGreeting = () => {
    const estTime = new Date().toLocaleString("en-US", { timeZone: "America/Toronto"});
    const hour = new Date(estTime).getHours();

    if (hour < 12) return "Good Morning";
    if (hour < 17) return "Good Afternoon";
    if (hour < 20) return "Good Evening";
    return "Good Night"
};

const Greeting = () => (
    <h1 className="text-3xl font-bold text-accent"> 
    {getGreeting()}, welcome to the future of consulting.
    </h1>
);

export default Greeting;