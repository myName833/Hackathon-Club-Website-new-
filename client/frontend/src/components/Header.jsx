import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-purple sticky top-0 z-50 backdrop-blur-md bg-opacity-90">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-golden hover:text-golden-light transform hover:scale-105 transition-all duration-300">
          DB Hackathon Club
        </div>
        <nav className="space-x-6">
          {['Home', 'About', 'Calendar', 'Contact'].map((item) => (
            <Link 
              key={item}
              to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              className="text-golden relative group px-2 py-1 transition-all duration-300"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-golden-light transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"/>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
