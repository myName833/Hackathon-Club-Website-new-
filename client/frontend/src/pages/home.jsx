import Header from '../components/Header';
import Card from '../components/Card';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import Lockedin from '../gradetrend.png';
import Tennis from '../tennis.png';

function App() {
  const cardData = [
    {
      icon: Lockedin,
      title: 'LockedIn',
      description: 'Revolutionary app utilizing AI to help underprivileged students learn.',
      link:"https://github.com/GSWForever8/congressapp24"
    },
    {
      icon: Tennis,
      title: 'Tennis Swing Analyzer',
      description: 'Game-changing tool used to analyze tennis swings and points of improvement.',
      link:"https://github.com/henrychen4736/CAC24"
    },
  ];

  return (
    <div className='min-h-screen flex flex-col bg-gray-50'>
      <Header />

      {/* Hero Section */}
      <section className='relative bg-gradient-to-br from-purple via-purple-dark to-purple bg-300% animate-gradient overflow-hidden'>
        {/* Poka dots */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJub25lIi8+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSI4MCIgc3Ryb2tlPSIjZmZkODY2IiBzdHJva2Utb3BhY2l0eT0iMC4xIiBzdHJva2Utd2lkdGg9IjIiLz48L3N2Zz4=')] opacity-20"></div>
        <div className='relative py-24 text-center text-white max-w-6xl mx-auto px-4'>
          <h1 className='text-6xl font-bold mb-6'>
            About <span className='text-golden inline-block'>Us</span>
          </h1>
          <p className='text-xl text-golden/90 max-w-2xl mx-auto leading-relaxed'>
            Building the next generation of innovators through collaborative
            coding challenges and hackathons
          </p>
          <div className='flex justify-center gap-8 mt-16'>
            <div className='bg-white/10 backdrop-blur-md p-8 rounded-2xl w-48 transform hover:scale-105 transition-all duration-300 hover:bg-white/20'>
              <h3 className='text-golden text-5xl font-bold mb-3'>58+</h3>
              <p className='text-white/90'>Members</p>
            </div>
            <div className='bg-white/10 backdrop-blur-md p-8 rounded-2xl w-48 transform hover:scale-105 transition-all duration-300 hover:bg-white/20'>
              <h3 className='text-golden text-5xl font-bold mb-3'>15+</h3>
              <p className='text-white/90'>Workshops Hosted</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className='py-24 bg-white'>
        <div className='max-w-6xl mx-auto px-4'>
          <h2 className='text-4xl font-bold text-purple text-center mb-16'>
            Past Projects
          </h2>
          <div className='max-w-4xl mx-auto'>
            <Carousel>
              {cardData.map((card, index) => (
                <Card
                  key={index}
                  icon={card.icon}
                  title={card.title}
                  description={card.description}
                  link={card.link}
                />
              ))}
            </Carousel>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
