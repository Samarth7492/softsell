import { motion } from "framer-motion";

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      icon: "fas fa-upload",
      title: "Upload License Details",
      description: "Submit your license information through our secure portal. We support all major software vendors and license types."
    },
    {
      number: 2,
      icon: "fas fa-calculator",
      title: "Get Instant Valuation",
      description: "Our proprietary algorithm determines the fair market value of your licenses based on current demand and trends."
    },
    {
      number: 3,
      icon: "fas fa-money-bill-wave",
      title: "Get Paid Quickly",
      description: "Accept our offer and receive payment within 48 hours. We handle the transfer process and all verification requirements."
    }
  ];

  return (
    <section id="how-it-works" className="bg-white dark:bg-gray-900 py-16 md:py-24 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">How It Works</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Our simple three-step process makes selling your software licenses quick and hassle-free.
          </p>
        </motion.div>
        
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div 
              key={step.number}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary-600 dark:bg-primary-500 flex items-center justify-center text-white text-xl font-bold shadow-lg">
                {step.number}
              </div>
              <div className="h-16 w-16 mx-auto mb-6 text-primary-600 dark:text-primary-400">
                <i className={`${step.icon} text-5xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <motion.a 
            href="#contact" 
            className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 transition duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Now
            <i className="fas fa-chevron-right ml-2"></i>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
