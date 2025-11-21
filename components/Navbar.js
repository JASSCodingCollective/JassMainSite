function Navbar() {
  try {
    const [scrolled, setScrolled] = React.useState(false);

    React.useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 50);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-[var(--bg-darker)] shadow-lg' : 'bg-transparent'
        }`}
        data-name="navbar" 
        data-file="components/Navbar.js"
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="icon-code-2 text-2xl text-[var(--primary-color)]"></div>
            <span className="text-2xl font-bold text-[var(--text-light)]">Coding Collective</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-[var(--text-light)] hover:text-[var(--primary-color)] transition-colors">Home</a>
            <a href="#projects" className="text-[var(--text-light)] hover:text-[var(--primary-color)] transition-colors">Projects</a>
            <a href="#members" className="text-[var(--text-light)] hover:text-[var(--primary-color)] transition-colors">Members</a>
            <a href="#contact" className="text-[var(--text-light)] hover:text-[var(--primary-color)] transition-colors">Contact</a>
          </div>
        </div>
      </nav>
    );
  } catch (error) {
    console.error('Navbar component error:', error);
    return null;
  }
}
