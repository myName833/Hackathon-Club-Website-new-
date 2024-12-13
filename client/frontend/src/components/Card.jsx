import PropTypes from 'prop-types';

export default function Card({ icon, title, description, link }) {
  return (
    <div className="group relative bg-gradient-to-br from-purple to-purple-light p-[2px] rounded-2xl transition-all duration-300 hover:scale-105">
      <div className="bg-white rounded-2xl h-full flex flex-col items-center overflow-hidden">
        <div className="w-full h-64 flex items-center justify-center">
          <img
            src={icon}
            alt={`${title} Icon`}
            className="max-w-full max-h-full object-contain"
          />
        </div>
        <div className="p-8 text-center">
          <h3 className="text-2xl font-bold text-purple mb-4">{title}</h3>
          <p className="text-gray-600 mb-6">{description}</p>
          {link && (
            <a
              href={link}
              className="w-full bg-purple text-white px-6 py-3 rounded-xl hover:bg-purple-light transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn More
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string,
};
