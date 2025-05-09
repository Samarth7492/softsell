import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hi there! How can I help you with selling your software licenses today?",
      isUser: false,
      timestamp: new Date(),
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() === "") return;

    // Add user message
    const userMessage: Message = {
      text: inputValue,
      isUser: true,
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");

    // Simulate response after a short delay
    setTimeout(() => {
      let response = "";
      const lowerCaseMessage = inputValue.toLowerCase();

      if (
        lowerCaseMessage.includes("license") && 
        (lowerCaseMessage.includes("sell") || lowerCaseMessage.includes("how"))
      ) {
        response = "To sell your license, simply fill out our contact form with your license details. We'll provide a valuation within 24 hours and handle all the transfer details if you accept our offer.";
      } else if (
        lowerCaseMessage.includes("accept") || 
        lowerCaseMessage.includes("what license")
      ) {
        response = "We accept licenses from major software vendors including Microsoft, Adobe, Oracle, Salesforce, Autodesk, SAP, and many others. If you're unsure about your specific license, please contact us for verification.";
      } else if (
        lowerCaseMessage.includes("payment") || 
        lowerCaseMessage.includes("paid")
      ) {
        response = "Once you accept our offer, we typically process payments within 48 hours. We offer multiple payment methods including bank transfer, PayPal, and cryptocurrency.";
      } else if (
        lowerCaseMessage.includes("process") || 
        lowerCaseMessage.includes("work")
      ) {
        response = "Our process is simple: 1) Submit your license details, 2) Receive a valuation, 3) Accept our offer, 4) Get paid. We handle all the verification and transfer requirements.";
      } else {
        response = "Thank you for your message. One of our license specialists will review your question and get back to you soon. For immediate assistance, please call us at (800) 555-1234.";
      }

      const botMessage: Message = {
        text: response,
        isUser: false,
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const handleQuickQuestion = (question: string) => {
    setInputValue(question);
    // Focus on input after setting value
    document.getElementById("chat-input")?.focus();
  };

  // Auto-scroll to the bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-80 h-96 mb-4 flex flex-col overflow-hidden"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-primary-600 text-white p-4 flex justify-between items-center">
              <h3 className="font-bold">SoftSell Support</h3>
              <button onClick={toggleChat} className="text-white hover:text-gray-200">
                <i className="fas fa-times"></i>
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <div key={index} className={`flex items-start ${message.isUser ? 'justify-end' : ''}`}>
                  {!message.isUser && (
                    <div className="flex-shrink-0 mr-3">
                      <div className="w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center text-white">
                        <i className="fas fa-headset text-sm"></i>
                      </div>
                    </div>
                  )}
                  <div 
                    className={`${
                      message.isUser 
                        ? 'bg-primary-100 dark:bg-primary-900 ml-auto' 
                        : 'bg-gray-100 dark:bg-gray-700'
                    } rounded-lg py-2 px-3 max-w-[80%]`}
                  >
                    <p className={`${
                      message.isUser
                        ? 'text-primary-800 dark:text-primary-100'
                        : 'text-gray-800 dark:text-gray-200'
                    } text-sm`}>
                      {message.text}
                    </p>
                  </div>
                  {message.isUser && (
                    <div className="flex-shrink-0 ml-3">
                      <div className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center text-gray-700 dark:text-gray-300">
                        <i className="fas fa-user text-sm"></i>
                      </div>
                    </div>
                  )}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
            
            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
              <div className="mb-2 flex space-x-2 overflow-x-auto scrollbar-hide">
                <button 
                  className="text-xs whitespace-nowrap bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition duration-200"
                  onClick={() => handleQuickQuestion("How do I sell my license?")}
                >
                  How do I sell my license?
                </button>
                <button 
                  className="text-xs whitespace-nowrap bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition duration-200"
                  onClick={() => handleQuickQuestion("What licenses do you accept?")}
                >
                  What licenses do you accept?
                </button>
              </div>
              <div className="flex items-center">
                <input 
                  id="chat-input"
                  type="text" 
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..." 
                  className="flex-1 py-2 px-3 border border-gray-300 dark:border-gray-600 rounded-l-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
                />
                <button 
                  onClick={handleSendMessage}
                  className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-r-md transition duration-200"
                >
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.button 
        onClick={toggleChat}
        className="bg-primary-600 hover:bg-primary-700 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ 
          y: [0, -5, 0],
          transition: { 
            duration: 2,
            repeat: Infinity,
            repeatType: "loop" 
          }
        }}
      >
        <i className="fas fa-comment-dots text-2xl"></i>
      </motion.button>
    </div>
  );
}
