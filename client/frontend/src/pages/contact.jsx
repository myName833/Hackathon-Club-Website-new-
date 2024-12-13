import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contact() {
    const leadershipContacts = [
        { name: "Johnny Hsieh", role: "Co-President", email: "johnnyhsieh02@gmail.com", description: "Co-President" },
        { name: "Aidan Hong", role: "Co-President", email: "aidanhong8@gmail.com", description: "Co-President" },
        { name: "Henry Chen", role: "Co Vice President", email: "henrychen4736@gmail.com", description: "Co Vice President" },
        { name: "Ryan Wen", role: "Co Vice President", email: "ryanwen191@gmail.com", description: "Co Vice President" },
        { name: "Arick Hong", role: "Secretary", email: "arickyhong@gmail.com", description: "Secretary" },
        { name: "Jerry Hsieh", role: "Treasurer", email: "jerryhsieh04@gmail.com", description: "Treasurer" },
        { name: "Brady Chen", role: "IOC Rep", email: "bradychen32933@gmail.com", description: "IOC Rep" },
        { name: "Jackie Yang", role: "Technology Rep", email: "yang023455@gmail.com", description: "Technology Rep" },
        { name: "Lucas Wang", role: "Inclusivity Rep", email: "wangzilu0909@gmail.com", description: "Inclusivity Rep" }
    ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow py-24">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-purple text-center mb-8">Contact Us</h1>
          <p className="text-gray-600 text-center mb-12">Have questions? We&apos;d love to hear from you.</p>

          {/* Leadership Contacts */}
          <div className="grid md:grid-cols-3 gap-8">
            {leadershipContacts.map((contact, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300">
                <h3 className="text-xl font-bold text-purple mb-2">{contact.name}</h3>
                <p className="text-golden font-medium mb-3">{contact.role}</p>
                <p className="text-gray-600 mb-4">{contact.description}</p>
                <a 
                  href={`mailto:${contact.email}`}
                  className="inline-flex items-center text-purple hover:text-purple-light transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  {contact.email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}