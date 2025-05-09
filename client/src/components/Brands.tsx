import { motion } from "framer-motion";

export default function Brands() {
  const brandLogos = [
    { icon: "fab fa-microsoft", name: "Microsoft" },
    { icon: "fab fa-adobe", name: "Adobe" },
    { icon: "fab fa-salesforce", name: "Salesforce" },
    { icon: "fab fa-atlassian", name: "Atlassian" },
    { icon: "fab fa-slack", name: "Slack" },
    { icon: "fab fa-aws", name: "AWS" }
  ];

  return (
    <section className="bg-gray-50 dark:bg-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-6">
          Trusted by companies worldwide
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 justify-items-center items-center opacity-75">
          {brandLogos.map((brand, index) => (
            <motion.div 
              key={brand.name}
              className="flex justify-center" 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
            >
              <i className={`${brand.icon} text-4xl text-gray-400 dark:text-gray-500`} aria-label={brand.name}></i>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
