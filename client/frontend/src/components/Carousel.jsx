import { Children } from 'react';
import PropTypes from 'prop-types';

export default function Carousel({ children }) {
  const childrenArray = Children.toArray(children); 
  const duplicatedChildren = [...childrenArray, ...childrenArray, ...childrenArray];

  return (
    <div className="carousel overflow-hidden relative py-8 px-4">
      {/* Left fade */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
      
      <div className="carousel-track flex animate-scroll hover:animate-scroll-pause">
        {duplicatedChildren.map((child, index) => (
          <div key={index} className="carousel-item flex-shrink-0 px-4 select-none transform transition-all duration-300 hover:scale-110 animate-float">
            {child}
          </div>
        ))}
      </div>

      {/* Right fade */}
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
    </div>
  );
}

Carousel.propTypes = {
  children: PropTypes.node.isRequired
};