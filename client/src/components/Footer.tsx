export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = {
    services: [
      { name: "License Valuation", href: "#" },
      { name: "Software Resale", href: "#" },
      { name: "Compliance Verification", href: "#" },
      { name: "License Transfer", href: "#" },
    ],
    company: [
      { name: "About Us", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Press", href: "#" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "GDPR Compliance", href: "#" },
    ],
    social: [
      { name: "Twitter", href: "#", icon: "fab fa-twitter" },
      { name: "LinkedIn", href: "#", icon: "fab fa-linkedin" },
      { name: "Facebook", href: "#", icon: "fab fa-facebook" },
    ],
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <a href="#" className="flex items-center gap-2 text-white font-bold text-xl mb-4">
              <i className="fas fa-sync-alt fa-fw"></i>
              <span>SoftSell</span>
            </a>
            <p className="text-gray-400 mb-4">
              Helping businesses recover value from unused software licenses since 2019.
            </p>
            <div className="flex space-x-4">
              {footerLinks.social.map((link) => (
                <a key={link.name} href={link.href} className="text-gray-400 hover:text-white transition duration-200">
                  <i className={link.icon} aria-hidden="true"></i>
                  <span className="sr-only">{link.name}</span>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {currentYear} SoftSell. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
