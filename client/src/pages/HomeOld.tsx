import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { 
  Bot, 
  Zap, 
  Code, 
  BarChart3, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Star,
  Building2,
  Heart,
  Scale,
  ShoppingCart,
  DollarSign,
  Video
} from 'lucide-react';

const Home = () => {
  const services = [
    {
      icon: Bot,
      title: 'AI Chatbots',
      description: 'Intelligent conversational AI that engages customers 24/7'
    },
    {
      icon: Zap,
      title: 'Workflow Automation',
      description: 'Streamline operations with smart automation solutions'
    },
    {
      icon: Code,
      title: 'Web & App Development',
      description: 'Custom applications powered by cutting-edge technology'
    },
    {
      icon: BarChart3,
      title: 'Data Analytics',
      description: 'Transform data into actionable business insights'
    }
  ];

  const industries = [
    { icon: Building2, name: 'Real Estate', color: 'from-blue-500 to-cyan-500' },
    { icon: Heart, name: 'Healthcare', color: 'from-red-500 to-pink-500' },
    { icon: Scale, name: 'Legal', color: 'from-purple-500 to-indigo-500' },
    { icon: ShoppingCart, name: 'E-commerce', color: 'from-green-500 to-emerald-500' },
    { icon: DollarSign, name: 'Finance', color: 'from-yellow-500 to-orange-500' },
    { icon: Video, name: 'Content Creation', color: 'from-pink-500 to-rose-500' }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      text: 'Yunara AI transformed our customer service with their chatbot solution. Response time improved by 80%.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'E-commerce Plus',
      text: 'The automation workflows saved us 20 hours per week. ROI was immediate and substantial.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'Legal Partners LLC',
      text: 'Their AI solutions streamlined our document processing. Highly recommend their expertise.',
      rating: 5
    }
  ];

  const stats = [
    { number: '500+', label: 'Startups Served' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Available' },
    { number: '50+', label: 'AI Experts' }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <div className="absolute inset-0 bg-[url('/image.png')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 via-transparent to-blue-900/80"></div>
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent animate-pulse"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)] animate-pulse"></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/30 rounded-full blur-xl animate-bounce"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-500/30 rounded-full blur-xl animate-bounce delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-cyan-500/30 rounded-full blur-xl animate-bounce delay-500"></div>
        
        {/* Network Mesh Effect */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 1000 1000">
            <defs>
              <pattern id="network" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="50" cy="50" r="2" fill="rgba(147, 51, 234, 0.5)"/>
                <line x1="50" y1="50" x2="100" y2="50" stroke="rgba(147, 51, 234, 0.3)" strokeWidth="1"/>
                <line x1="50" y1="50" x2="50" y2="100" stroke="rgba(147, 51, 234, 0.3)" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#network)"/>
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center px-4 py-2 bg-purple-500/20 backdrop-blur-sm rounded-full border border-purple-400/30 mb-8"
              >
                <span className="text-purple-300 text-sm font-medium mr-2">🚀 Trusted by 500+ Startups</span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </motion.div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                <span className="text-white block mb-2">Next-Gen AI Automations.</span>
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent block mb-2">
                  Scalable Intelligence.
                </span>
                <span className="text-white block">Real Impact.</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-purple-200 mb-8 leading-relaxed max-w-2xl">
                ⚡ Power your business with tailored AI agents, automation frameworks, and custom SaaS platforms — all built for scale.
              </p>
              
              <p className="text-lg text-purple-300 mb-12 leading-relaxed max-w-2xl">
                At Yunara AI, we're more than just an agency — we're your AI innovation partner. 
                From smart agent systems to workflow automation, Web3-ready SaaS tools, and on-demand AI talent, 
                we deliver tech that evolves with your vision.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-start items-start">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/contact"
                    className="group relative bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg overflow-hidden transition-all duration-300 flex items-center space-x-2 hover:shadow-2xl hover:shadow-purple-500/50"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10">🚀 Book a Free Strategy Call</span>
                    <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/services"
                    className="group border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 backdrop-blur-sm hover:shadow-xl hover:shadow-purple-400/30"
                  >
                    ⚙️ View Services
                  </Link>
                </motion.div>
              </div>
              
              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="mt-12 flex items-center space-x-8"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">500+</div>
                  <div className="text-purple-300 text-sm">Startups Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">98%</div>
                  <div className="text-purple-300 text-sm">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">24/7</div>
                  <div className="text-purple-300 text-sm">AI Support</div>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Right Visual */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              {/* Main Image Container */}
              <div className="relative">
                {/* Robot + Human Collaboration Image */}
                <div className="relative bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-xl rounded-3xl p-4 border border-purple-500/20 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-3xl"></div>
                  
                  {/* Image with overlay effects */}
                  <div className="relative z-10">
                    <img 
                      src="@assets/image_1753255333109.png" 
                      alt="AI and Human Collaboration" 
                      className="w-full h-auto rounded-2xl shadow-2xl"
                    />
                    
                    {/* Tech Lines Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 via-transparent to-transparent rounded-2xl"></div>
                    
                    {/* Dynamic Tech Elements */}
                    <div className="absolute top-4 right-4 flex space-x-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-300"></div>
                      <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-700"></div>
                    </div>
                    
                    {/* AI Status Indicator */}
                    <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm rounded-lg px-3 py-2 border border-cyan-500/30">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-300 text-sm font-mono">AI Active</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* 3D Floating Elements */}
                <motion.div
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ 
                    duration: 8, 
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute -top-8 -right-8 w-16 h-16 border-2 border-purple-400/50 rounded-full flex items-center justify-center backdrop-blur-sm"
                >
                  <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></div>
                </motion.div>
                
                {/* Network Nodes */}
                <motion.div
                  animate={{ 
                    y: [-5, 5, -5],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-2xl backdrop-blur-sm border border-blue-400/30 flex items-center justify-center"
                >
                  <div className="text-blue-300">⚡</div>
                </motion.div>
                
                {/* Glowing Mesh Lines */}
                <div className="absolute top-1/2 -left-4 w-24 h-1 bg-gradient-to-r from-transparent via-purple-400/50 to-transparent"></div>
                <div className="absolute bottom-1/4 -right-4 w-20 h-1 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">AI Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI solutions designed to transform your business operations and drive growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center space-x-2"
            >
              <span>View All Services</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Industries <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">We Serve</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized AI solutions tailored for your industry's unique challenges and opportunities
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${industry.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900">{industry.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Client <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Success Stories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Real results from real businesses that transformed with our AI solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl border border-purple-100"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-purple-600">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {[
              { number: '500+', label: 'Businesses Transformed', icon: '🏢' },
              { number: '85%', label: 'Average Efficiency Increase', icon: '⚡' },
              { number: '$2M+', label: 'Revenue Generated', icon: '💰' },
              { number: '24/7', label: 'AI Systems Operating', icon: '🤖' }
            ].map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6 border border-purple-100"
              >
                <div className="text-3xl mb-2">{metric.icon}</div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{metric.number}</div>
                <div className="text-purple-600 text-sm font-medium">{metric.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/client-success-stories"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center space-x-2"
            >
              <span>View All Success Stories</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/image.png')] bg-cover bg-center opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-purple-200 mb-8 max-w-3xl mx-auto">
              Join hundreds of companies already using AI to streamline operations, boost productivity, and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center space-x-2"
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/hire-experts"
                className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                Hire AI Experts
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;