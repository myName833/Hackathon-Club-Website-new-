import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="bg-gradient-to-br from-purple to-purple-dark mt-auto py-12 text-golden">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center border-b border-golden/20 pb-8">
                    <div className="text-2xl font-bold hover:text-golden-light transition-colors duration-300">DB Hackathon Club</div>
                    <div className="space-x-8">
                        <a href="https://discord.gg/5mh7QAbZfX" 
                           target="_blank" 
                           rel="noopener noreferrer"
                           className="hover:text-golden-light transition-all duration-300 inline-flex items-center gap-1 hover:scale-110">
                           Discord
                           <svg className="w-4 h-4 transform transition-transform group-hover:rotate-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                             <path d="M10 6H6C4.89543 6 4 6.89543 4 8V18C4 19.1046 4.89543 20 6 20H16C17.1046 20 18 19.1046 18 18V14M14 4H20M20 4V10M20 4L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                           </svg>
                        </a>
                        <a href="https://www.instagram.com/dbhackathonclub/" 
                           target="_blank" 
                           rel="noopener noreferrer"
                           className="hover:text-golden-light transition-all duration-300 inline-flex items-center gap-1 hover:scale-110">
                           Instagram
                           <svg className="w-4 h-4 transform transition-transform group-hover:rotate-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                             <path d="M10 6H6C4.89543 6 4 6.89543 4 8V18C4 19.1046 4.89543 20 6 20H16C17.1046 20 18 19.1046 18 18V14M14 4H20M20 4V10M20 4L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                           </svg>
                        </a>
                        <a href="https://classroom.google.com/c/NzA1MDQ3ODA3MDMz?cjc=he4vvta" 
                           target="_blank" 
                           rel="noopener noreferrer"
                           className="hover:text-golden-light transition-all duration-300 inline-flex items-center gap-1 hover:scale-110">
                           Google Classroom
                           <svg className="w-4 h-4 transform transition-transform group-hover:rotate-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                             <path d="M10 6H6C4.89543 6 4 6.89543 4 8V18C4 19.1046 4.89543 20 6 20H16C17.1046 20 18 19.1046 18 18V14M14 4H20M20 4V10M20 4L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                           </svg>
                        </a>
                    </div>
                </div>
                <div className="grid md:grid-cols-3 gap-12 mt-12">
                    <div>
                        <h3 className="font-bold text-white mb-6">Links</h3>
                        <ul className="space-y-2">
                            {[
                                { to: "/about", text: "About Us" },
                                { to: "/calendar", text: "Calendar" },
                                { to: "/contact", text: "Contact" }
                            ].map(({ to, text }) => (
                                <li key={to}>
                                    <Link 
                                        to={to} 
                                        className="relative group inline-block transition-all duration-300 hover:translate-x-1"
                                    >
                                        <span className="relative z-10">{text}</span>
                                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-golden transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"/>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;