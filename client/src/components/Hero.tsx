import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative bg-white dark:bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 py-16 md:py-24 lg:py-32 flex flex-col md:flex-row items-center gap-8 lg:gap-16">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
              Turn Unused Software Licenses Into <span className="text-primary-600 dark:text-primary-400">Cash</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300">
              Get instant valuations and quick payments for your excess enterprise software licenses. Our marketplace connects sellers with verified buyers for a seamless experience.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <motion.a 
                href="#contact" 
                className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 transition duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Sell Your Licenses
                <i className="fas fa-arrow-right ml-2"></i>
              </motion.a>
              <motion.a 
                href="#how-it-works" 
                className="inline-flex justify-center items-center px-6 py-3 border border-gray-300 dark:border-gray-700 text-base font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn How It Works
              </motion.a>
            </div>
          </motion.div>
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80" 
              alt="Business professional analyzing software licenses" 
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
