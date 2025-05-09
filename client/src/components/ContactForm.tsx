import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters."),
  lastName: z.string().min(2, "Last name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  company: z.string().min(2, "Company name must be at least 2 characters."),
  licenseType: z.string().min(1, "Please select a license type."),
  message: z.string().min(10, "Message must be at least 10 characters."),
  privacyPolicy: z.literal(true, {
    errorMap: () => ({ message: "You must accept the privacy policy." }),
  }),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactForm() {
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      licenseType: "",
      message: "",
      privacyPolicy: false,
    },
  });

  function onSubmit(data: FormValues) {
    // In a real app, you would send this data to your backend
    console.log(data);
    
    toast({
      title: "Form submitted successfully!",
      description: "We'll be in touch with your license valuation soon.",
    });
    
    form.reset();
  }

  const licenseTypes = [
    { value: "microsoft", label: "Microsoft Products" },
    { value: "adobe", label: "Adobe Creative Cloud" },
    { value: "oracle", label: "Oracle Database" },
    { value: "salesforce", label: "Salesforce" },
    { value: "autodesk", label: "Autodesk" },
    { value: "other", label: "Other (Please specify in message)" },
  ];

  return (
    <section id="contact" className="bg-gray-50 dark:bg-gray-800 py-16 md:py-24 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Get Started Today</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Fill out the form below to get a free valuation of your software licenses.
            </p>
          </motion.div>
          
          <motion.div 
            className="mt-12 bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-700 dark:text-gray-300">First name</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            className="py-3 px-4 block w-full shadow-sm focus:ring-primary-500 focus:border-primary-500 border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-800 dark:text-white" 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-700 dark:text-gray-300">Last name</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            className="py-3 px-4 block w-full shadow-sm focus:ring-primary-500 focus:border-primary-500 border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-800 dark:text-white" 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            type="email"
                            className="py-3 px-4 block w-full shadow-sm focus:ring-primary-500 focus:border-primary-500 border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-800 dark:text-white" 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-700 dark:text-gray-300">Company</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            className="py-3 px-4 block w-full shadow-sm focus:ring-primary-500 focus:border-primary-500 border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-800 dark:text-white" 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="licenseType"
                    render={({ field }) => (
                      <FormItem className="sm:col-span-2">
                        <FormLabel className="text-sm font-medium text-gray-700 dark:text-gray-300">License Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="py-3 px-4 w-full shadow-sm focus:ring-primary-500 focus:border-primary-500 border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-800 dark:text-white">
                              <SelectValue placeholder="Select license type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {licenseTypes.map((type) => (
                              <SelectItem key={type.value} value={type.value}>
                                {type.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem className="sm:col-span-2">
                        <FormLabel className="text-sm font-medium text-gray-700 dark:text-gray-300">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            {...field} 
                            rows={4}
                            className="py-3 px-4 block w-full shadow-sm focus:ring-primary-500 focus:border-primary-500 border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-800 dark:text-white" 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="privacyPolicy"
                    render={({ field }) => (
                      <FormItem className="sm:col-span-2 flex items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 dark:border-gray-700 rounded"
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="text-sm text-gray-600 dark:text-gray-300">
                            I agree to the <a href="#" className="font-medium text-primary-600 dark:text-primary-400 hover:underline">Privacy Policy</a> and consent to the processing of my data.
                          </FormLabel>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="sm:col-span-2">
                  <Button
                    type="submit"
                    className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                  >
                    Get Your Free Valuation
                  </Button>
                </div>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
