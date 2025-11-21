function Hero() {
  try {
    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    return (
      <section 
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
        data-name="hero" 
        data-file="components/Hero.js"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--primary-color)] rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative z-20 text-center px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[var(--primary-color)] to-blue-500 bg-clip-text text-transparent">
            The Coding Collective
          </h1>
         
          <button 
            onClick={() => scrollToSection('contact')}
            className="btn-primary glow-effect text-lg"
          >
           Scroll 
          </button>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Hero component error:', error);
    return null;
  }
}