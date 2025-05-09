import { motion } from "framer-motion";

export default function Stats() {
  const stats = [
    { value: "$25M+", label: "Recovered Value" },
    { value: "500+", label: "Happy Customers" },
    { value: "48hrs", label: "Average Payout Time" },
    { value: "98%", label: "Satisfaction Rate" }
  ];

  return (
    <section className="bg-white dark:bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <motion.p 
                className="text-4xl font-bold text-primary-600 dark:text-primary-400"
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  type: "spring",
                  stiffness: 200,
                  damping: 10,
                  delay: 0.4 + (index * 0.1) 
                }}
              >
                {stat.value}
              </motion.p>
              <p className="mt-2 text-gray-600 dark:text-gray-300">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
