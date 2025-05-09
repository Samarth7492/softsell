import { motion } from "framer-motion";

export default function WhyChooseUs() {
  const features = [
    {
      icon: "fas fa-shield-alt",
      title: "Secure Transactions",
      description: "Our platform uses bank-level encryption and secure escrow services to protect both buyers and sellers."
    },
    {
      icon: "fas fa-bolt",
      title: "Fast Payments",
      description: "Get paid within 48 hours of accepting our offer, with multiple payout methods available."
    },
    {
      icon: "fas fa-chart-line",
      title: "Best Market Rates",
      description: "Our proprietary valuation algorithm ensures you get the highest possible value for your software licenses."
    },
    {
      icon: "fas fa-headset",
      title: "Dedicated Support",
      description: "Our team of software licensing experts is available to assist you throughout the entire process."
    }
  ];

  const complexityItems = [
    "License verification and auditing",
    "Legal transfer documentation",
    "Vendor communication and approval",
    "Technical transfer assistance"
  ];

  return (
    <section id="why-choose-us" className="bg-gray-50 dark:bg-gray-800 py-16 md:py-24 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Why Choose SoftSell</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            We're revolutionizing the software resale market with our transparent, secure, and efficient platform.
          </p>
        </motion.div>
        
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div 
              key={feature.title}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-sm p-6 border border-gray-200 dark:border-gray-700"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="h-12 w-12 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center text-primary-600 dark:text-primary-400 mb-5">
                <i className={`${feature.icon} text-2xl`}></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="md:flex">
            <div className="md:w-1/2 p-8 md:p-12">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">We Handle All The Complexity</h3>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Software license transfers involve complex legal and technical requirements. Our team of experts handles all the verification, documentation, and transfer processes so you don't have to worry about a thing.
              </p>
              <ul className="mt-6 space-y-3">
                {complexityItems.map((item, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.6 + (index * 0.1) }}
                  >
                    <i className="fas fa-check-circle text-secondary-500 mt-1 mr-3"></i>
                    <span className="text-gray-600 dark:text-gray-300">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://pixabay.com/get/g34e50d91a46633d524a40a2941231ed73ea48eacf907c60158ab0b00c41db2f78fed03c92153bc6e9a55836e167f05535187213b9b0db18bc993d5fb4c9c6414_1280.jpg" 
                alt="Office technology environment with software interfaces" 
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
