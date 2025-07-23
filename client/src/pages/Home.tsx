import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { 
  ArrowRight, 
  Bot, 
  Code, 
  Users, 
  CheckCircle2,
  Rocket,
  Github,
  Linkedin,
  Twitter,
  ChevronRight,
  Zap,
  Lightbulb
} from 'lucide-react';
import businessMeetingImg from '@assets/image_1753255925021.png';

const Home = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Blur */}
        <div className="absolute inset-0">
          <img 
            src={businessMeetingImg} 
            alt="Team collaboration" 
            className="w-full h-full object-cover"
          />
          {/* Dark blur overlay */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
        </div>
        
        {/* Glassmorphism gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-black/50 to-pink-900/40"></div>
        
        {/* Subtle particle effects */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="space-y-8"
          >
            {/* Main Headline */}
            <motion.h1 
              variants={fadeInUp}
              className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight text-white mb-8"
            >
              Build the Future with
              <span className="block bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mt-4">
                AI Automation
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p 
              variants={fadeInUp}
              className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-12"
            >
              Full-stack AI consulting and delivery agency. We create intelligent automation pipelines, 
              AI agents, and scalable SaaS tools for businesses worldwide.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
            >
              <Link href="/contact">
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 40px rgba(236, 72, 153, 0.6)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="group bg-gradient-to-r from-pink-500 to-purple-600 text-white px-10 py-5 rounded-full font-bold text-lg flex items-center space-x-3 hover:shadow-2xl transition-all duration-300 border border-pink-500/50"
                >
                  <Zap className="w-6 h-6" />
                  <span>Start Your Project</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>

              <Link href="/client-success-stories">
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 30px rgba(255, 255, 255, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="group border-2 border-white/40 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/10 hover:border-white/60 transition-all duration-300 backdrop-blur-sm flex items-center space-x-3"
                >
                  <Lightbulb className="w-6 h-6" />
                  <span>See How We Work</span>
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Subtle floating elements */}
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 right-1/6 w-4 h-4 border border-purple-400/40 rounded-full"
        ></motion.div>
        <motion.div
          animate={{ 
            y: [-8, 8, -8],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/3 left-1/6 w-2 h-2 bg-pink-400/50 rounded-full"
        ></motion.div>
      </section>

      {/* Who We Are Section with Image Overlay */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Leading Big Data
                <span className="block text-purple-600">Analytics Company</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Yunara AI is a full-stack AI consulting and delivery agency. We create intelligent automation 
                pipelines, AI agents, and scalable SaaS tools for businesses worldwide. We also match clients 
                with pre-vetted AI freelancers to deliver projects on demand.
              </p>
              
              {/* Feature Points */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Analyze Your Data</h3>
                    <p className="text-gray-600">Advanced AI analytics to transform your business data into actionable insights.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Customized Plan</h3>
                    <p className="text-gray-600">Tailored AI solutions designed specifically for your business needs and goals.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Rocket className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Implement Solution</h3>
                    <p className="text-gray-600">Rapid deployment and implementation with ongoing support and optimization.</p>
                  </div>
                </div>
              </div>

              <Link href="/about">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-8 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold flex items-center space-x-2 hover:shadow-lg transition-all duration-300"
                >
                  <span>Learn More</span>
                  <ChevronRight className="w-5 h-5" />
                </motion.button>
              </Link>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={businessMeetingImg} 
                  alt="Professional team collaboration" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-purple-600">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver comprehensive AI solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* AI Automation */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                <Bot className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">🤖 AI Automation</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Custom GPT agents, AI workflows, and task automation tailored to your business.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />Custom AI Agents</li>
                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />Workflow Automation</li>
                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />Process Optimization</li>
              </ul>
            </motion.div>

            {/* SaaS Development */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                <Code className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">🛠️ SaaS Development</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Build and launch intelligent, user-focused SaaS platforms — fast.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />Custom SaaS Tools</li>
                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />API Integrations</li>
                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />Scalable Architecture</li>
              </ul>
            </motion.div>

            {/* AI Talent on Demand */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">🎯 AI Talent on Demand</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Need fast execution? We match you with vetted AI engineers & freelancers.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />Vetted AI Experts</li>
                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />Rapid Matching</li>
                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />Quality Guaranteed</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Build the Future?
            </h2>
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              Let's supercharge your business with intelligent automation and scalable AI solutions.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-purple-600 px-12 py-4 rounded-full font-bold text-xl hover:shadow-2xl transition-all duration-300 flex items-center space-x-2 mx-auto"
              >
                <Rocket className="w-6 h-6" />
                <span>Book a Free Consultation</span>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo & Description */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold">YUNARA</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                Full-stack AI consulting and delivery agency. Building the future with intelligent automation and top-tier talent.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link href="/about" className="block text-gray-400 hover:text-white transition-colors text-sm">About</Link>
                <Link href="/services" className="block text-gray-400 hover:text-white transition-colors text-sm">Services</Link>
                <Link href="/contact" className="block text-gray-400 hover:text-white transition-colors text-sm">Contact</Link>
                <Link href="/client-success-stories" className="block text-gray-400 hover:text-white transition-colors text-sm">Success Stories</Link>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
                  <Linkedin className="w-5 h-5 text-gray-400 hover:text-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
                  <Twitter className="w-5 h-5 text-gray-400 hover:text-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
                  <Github className="w-5 h-5 text-gray-400 hover:text-white" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2025 Yunara AI. All rights reserved. Built with AI, delivered with precision.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;