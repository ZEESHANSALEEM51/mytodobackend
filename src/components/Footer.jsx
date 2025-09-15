function Footer() {
  return (
    <footer className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        
        {/* Left */}
        <p className="text-sm md:text-base">
          © {new Date().getFullYear()} <span className="font-semibold">TodoApp</span>. All rights reserved.
        </p>

        {/* Center */}
        <p className="text-sm md:text-base font-medium mt-3 md:mt-0">
          🚀 Made by <span className="text-yellow-300">zeeInnovators</span>
        </p>

        {/* Right (Social Links) */}
        <div className="flex space-x-4 mt-3 md:mt-0">
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-yellow-300 transition-colors">
            <i className="fab fa-github text-lg"></i>
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="hover:text-yellow-300 transition-colors">
            <i className="fab fa-twitter text-lg"></i>
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-yellow-300 transition-colors">
            <i className="fab fa-linkedin text-lg"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
