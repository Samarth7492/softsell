import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CIO",
      company: "TechNova Inc.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=388&q=80",
      text: "After our company restructuring, we had excess Adobe and Microsoft licenses worth over $85,000. SoftSell made the resale process simple and secure. We received payment within 3 days and their valuation was 15% higher than competitors.",
      stars: 5
    },
    {
      name: "Marcus Chen",
      role: "CFO",
      company: "GlobalEdge Solutions",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=387&q=80",
      text: "We were skeptical about the process of reselling our unused Salesforce and Oracle licenses, but SoftSell exceeded our expectations. Their team handled all compliance requirements and we received 60% of the original purchase value. Impressive service!",
      stars: 4.5
    }
  ];

  return (
    <section id="testimonials" className="bg-gradient-to-r from-primary-700 to-secondary-700 py-16 md:py-24 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">What Our Customers Say</h2>
          <p className="mt-4 text-lg text-white text-opacity-80">
            Join the hundreds of businesses that have successfully sold their unused software licenses through SoftSell.
          </p>
        </motion.div>
        
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={testimonial.name}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white">{testimonial.name}</h4>
                  <p className="text-gray-600 dark:text-gray-300">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
              <div className="text-gray-700 dark:text-gray-200 mb-4">
                <i className="fas fa-quote-left text-primary-400 opacity-50 mr-2"></i>
                {testimonial.text}
                <i className="fas fa-quote-right text-primary-400 opacity-50 ml-2"></i>
              </div>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className={`fas ${i < Math.floor(testimonial.stars) ? 'fa-star' : i < testimonial.stars ? 'fa-star-half-alt' : 'fa-star text-gray-300'}`}></i>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
