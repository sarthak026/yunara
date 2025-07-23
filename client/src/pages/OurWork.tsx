import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Users, 
  Clock, 
  Award,
  ArrowRight,
  ExternalLink,
  Play,
  Star,
  CheckCircle,
  BarChart3,
  Bot,
  Zap,
  ShoppingCart,
  Heart,
  Building2,
  DollarSign
} from 'lucide-react';

const OurWork = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'AI Chatbots', 'Automation', 'Analytics', 'E-commerce', 'Healthcare'];

  const projects = [
    {
      id: 1,
      title: 'StyleHub Fashion - AI Shopping Assistant',
      category: 'AI Chatbots',
      client: 'StyleHub Fashion',
      industry: 'E-commerce',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: ShoppingCart,
      color: 'from-green-500 to-emerald-500',
      challenge: 'StyleHub was losing potential customers due to slow response times and lack of personalized shopping assistance during off-hours.',
      solution: 'We developed an AI-powered chatbot with natural language processing, product recommendation engine, and seamless integration with their e-commerce platform.',
      results: [
        { metric: '180%', label: 'Increase in conversion rate' },
        { metric: '65%', label: 'Reduction in cart abandonment' },
        { metric: '24/7', label: 'Customer support coverage' },
        { metric: '40%', label: 'Increase in average order value' }
      ],
      technologies: ['Natural Language Processing', 'Machine Learning', 'API Integration', 'React'],
      testimonial: {
        text: "The AI chatbot transformed our customer experience. We're seeing unprecedented conversion rates and customer satisfaction.",
        author: "Sarah Johnson",
        role: "CEO, StyleHub Fashion"
      },
      duration: '6 weeks',
      roi: '320%'
    },
    {
      id: 2,
      title: 'MedCare Clinics - Patient Automation System',
      category: 'Automation',
      client: 'MedCare Clinic Network',
      industry: 'Healthcare',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Heart,
      color: 'from-red-500 to-pink-500',
      challenge: 'Manual patient intake processes were causing long wait times and administrative burden for healthcare staff.',
      solution: 'We created an automated patient intake system with digital forms, appointment scheduling, and intelligent triage capabilities.',
      results: [
        { metric: '40%', label: 'Reduction in patient wait times' },
        { metric: '60%', label: 'Faster patient intake process' },
        { metric: '30%', label: 'Increase in staff productivity' },
        { metric: '95%', label: 'Patient satisfaction rate' }
      ],
      technologies: ['Process Automation', 'Database Design', 'HIPAA Compliance', 'Mobile App'],
      testimonial: {
        text: "The automation system revolutionized our clinic operations. Patients are happier and our staff can focus on care.",
        author: "Dr. Michael Chen",
        role: "Medical Director, MedCare"
      },
      duration: '8 weeks',
      roi: '250%'
    },
    {
      id: 3,
      title: 'Capital Investments - Financial Analytics Platform',
      category: 'Analytics',
      client: 'Capital Investments LLC',
      industry: 'Finance',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: DollarSign,
      color: 'from-yellow-500 to-orange-500',
      challenge: 'Manual financial analysis was time-consuming and prone to human error, leading to delayed investment decisions.',
      solution: 'We built a comprehensive analytics dashboard with real-time data processing, predictive modeling, and automated reporting.',
      results: [
        { metric: '75%', label: 'Faster risk assessment' },
        { metric: '90%', label: 'Improvement in prediction accuracy' },
        { metric: '50%', label: 'Reduction in analysis time' },
        { metric: '$2M+', label: 'In optimized investments' }
      ],
      technologies: ['Python', 'Machine Learning', 'Data Visualization', 'Cloud Computing'],
      testimonial: {
        text: "The analytics platform gave us a competitive edge. We're making faster, more informed investment decisions.",
        author: "Lisa Rodriguez",
        role: "Investment Director, Capital Investments"
      },
      duration: '10 weeks',
      roi: '400%'
    },
    {
      id: 4,
      title: 'Premier Realty - Lead Generation Bot',
      category: 'AI Chatbots',
      client: 'Premier Realty Group',
      industry: 'Real Estate',
      image: 'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Building2,
      color: 'from-blue-500 to-cyan-500',
      challenge: 'Real estate agents were spending too much time on unqualified leads and missing opportunities due to delayed responses.',
      solution: 'We developed an AI chatbot that qualifies leads, matches properties, and schedules viewings automatically.',
      results: [
        { metric: '250%', label: 'Increase in qualified leads' },
        { metric: '80%', label: 'Reduction in response time' },
        { metric: '45%', label: 'Increase in property viewings' },
        { metric: '60%', label: 'Improvement in agent productivity' }
      ],
      technologies: ['Conversational AI', 'CRM Integration', 'Property APIs', 'Mobile Optimization'],
      testimonial: {
        text: "Our agents are closing more deals than ever. The AI bot handles the initial qualification perfectly.",
        author: "Mark Thompson",
        role: "Broker, Premier Realty"
      },
      duration: '5 weeks',
      roi: '280%'
    }
  ];

  const filteredProjects = projects.filter(project => 
    selectedCategory === 'All' || project.category === selectedCategory
  );

  const stats = [
    { icon: Award, number: '50+', label: 'Projects Completed' },
    { icon: Users, number: '98%', label: 'Client Satisfaction' },
    { icon: TrendingUp, number: '300%', label: 'Average ROI Increase' },
    { icon: Clock, number: '24/7', label: 'Support Provided' }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Success Stories</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover how we've helped businesses transform their operations with AI-powered solutions. 
              Real projects, measurable results, lasting impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
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
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <p className="text-center text-gray-500">
            Filter by: SaaS Projects • Agent Deployment • Workflow Automation • Analytics Platforms
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {filteredProjects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-r ${project.color} rounded-2xl flex items-center justify-center`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900">{project.title}</h3>
                        <p className="text-purple-600 font-medium">{project.client} • {project.industry}</p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-3">The Challenge</h4>
                        <p className="text-gray-600 leading-relaxed">{project.challenge}</p>
                      </div>

                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-3">Our Solution</h4>
                        <p className="text-gray-600 leading-relaxed">{project.solution}</p>
                      </div>

                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Results</h4>
                        <div className="grid grid-cols-2 gap-4">
                          {project.results.map((result, idx) => (
                            <div key={idx} className="bg-gradient-to-br from-purple-50 to-blue-50 p-4 rounded-xl text-center">
                              <div className="text-2xl font-bold text-purple-600 mb-1">{result.metric}</div>
                              <div className="text-sm text-gray-700">{result.label}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="bg-gray-50 rounded-xl p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-white font-bold text-lg">"</span>
                          </div>
                          <div>
                            <p className="text-gray-700 italic mb-3">"{project.testimonial.text}"</p>
                            <div>
                              <div className="font-semibold text-gray-900">{project.testimonial.author}</div>
                              <div className="text-purple-600 text-sm">{project.testimonial.role}</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>Duration: {project.duration}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <TrendingUp className="w-4 h-4" />
                            <span>ROI: {project.roi}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-96 object-cover rounded-3xl shadow-2xl group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/20 rounded-3xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex space-x-4">
                          <button className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors">
                            <Play className="w-6 h-6" />
                          </button>
                          <button className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors">
                            <ExternalLink className="w-6 h-6" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Join the businesses that have transformed their operations with our AI solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors">
                Start Your Project
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default OurWork;