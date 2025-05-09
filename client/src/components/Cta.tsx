import { motion } from "framer-motion";

export default function Cta() {
  return (
    <section className="bg-primary-700 dark:bg-primary-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <motion.div 
            className="mb-6 md:mb-0"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-white">Ready to unlock the value of your unused software?</h2>
            <p className="mt-2 text-primary-100">Join hundreds of satisfied customers who've recovered millions in software assets.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.a 
              href="#contact" 
              className="inline-block px-6 py-3 border-2 border-white rounded-md text-base font-medium text-white hover:bg-white hover:text-primary-700 transition duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Now
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
