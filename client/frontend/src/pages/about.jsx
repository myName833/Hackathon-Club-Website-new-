import Header from '../components/Header';
import Card from '../components/Card';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import React from 'react';
import { FaLinkedin, FaGithub, FaGlobe} from 'react-icons/fa';
import Aidan from '../aidan.png';
import Johnny from '../johnny.png';
import Henry from '../henry.png';
import Ryan from '../ryan.png';

function App() {
    const MemberProfile = ({ name, position, bio, imageUrl, linkedinUrl, githubUrl,url}) => {
        return (
          <div className="bg-white p-6 rounded-lg shadow-md w-full lg:w-1/5 h-256 lg:h-256 transform transition-all duration-300 hover:scale-105">
            <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
            <img
              src={imageUrl}
              alt={`${name}'s profile`}
              className="w-full h-full object-cover"
            />
            </div>
            <h3 className="text-2xl font-semibold text-center mb-2">{name}</h3>
            <p className="text-lg text-gray-600 text-center mb-5">{position}</p>
            <p className="text-lg text-gray-700 text-center mb-5">{bio}</p>
            <div className="flex justify-center space-x-4">
              {linkedinUrl && (
                <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="text-blue-600 hover:text-blue-800" />
                </a>
              )}
              {githubUrl && (
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                  <FaGithub className="text-gray-800 hover:text-gray-600" />
                </a>
              )}
              {url && (
                <a href={url} target="_blank" rel="noopener noreferrer">
                  <FaGlobe className="text-gray-800 hover:text-gray-600" />
                </a>
              )}
            </div>
          </div>
        );
      };
  return (
    <div className='min-h-screen flex flex-col bg-gray-50'>
  <Header />
  <div className="flex flex-wrap justify-center gap-6">
      <MemberProfile 
        name="Aidan Hong" 
        position="Co-President" 
        bio="Aidan Hong is the Co-President and one of the founding members of DB Hackathon Club. He is experienced in C++, Python, and MERN, using these technologies to make full-stack applications. He has won 1st place at the ACSL Senior Division and 5th Place for Database Design and Applications at the Future Business Leaders of America National Leadership Conference. In his free time, he's a competitive fencer and fencing referee." 
        imageUrl={Aidan}
        linkedinUrl="https://www.linkedin.com/in/aidanhong8/" 
        githubUrl="https://github.com/GSWForever8" 
        url="https://www.aidanhong.com"
      />
    
      <MemberProfile 
        name="Johnny Hsieh" 
        position="Co-President" 
        bio="Johnny Hsieh is the Co-President and one of the founding members of DB Hackathon Club. He is experienced in Python, C++ and front end development. Additionally, he is currently interning at a startup focused on web development, where he contribute to building and enhancing websites and web applications. In his free time, he enjoys playing basketball." 
        imageUrl={Johnny}
        githubUrl="https://github.com/myName833"
      />
      <MemberProfile 
        name="Henry Chen" 
        position="Co-Vice President" 
        bio="Henry Chen is the Co-Vice President and one of the founding members of DB Hackathon Club. He is experienced in Python, C++, Java, and full-stack development. He has won numerous awards, including top 10 for Introduction to IT for California Future Business Leaders of America and qualifying for the National Leadership Conference. In his free time, he enjoys playing tennis." 
        imageUrl={Henry}
        githubUrl="https://github.com/henrychen4736"
      />
      <MemberProfile
        name="Ryan Wen" 
        position="Co-Vice President" 
        bio="Ryan Wen is the Co-Vice President and one of the founding members of DB Hackathon Club. He is experienced in Python, HTML, CSS, and JS. He has undertaken many internships, developing his Web Application Skills as a result of these internships. He has also done research in the past as well. In his free time, he enjoys playing basketball and is also a speed cuber." 
        imageUrl={Ryan}
        githubUrl="https://github.com/redsarad"
      />
  </div>
  <Footer />
</div>

  );
}

export default App;
