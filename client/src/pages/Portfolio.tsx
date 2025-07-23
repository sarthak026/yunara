
import { motion } from 'framer-motion';
import { 
  ExternalLink, 
  Github, 
  TrendingUp, 
  Users, 
  Clock, 
  Award,
  Bot,
  Zap,
  BarChart3,
  ShoppingCart
} from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'E-commerce AI Chatbot',
      client: 'StyleHub Fashion',
      category: 'AI Chatbot',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Intelligent shopping assistant that increased conversion rates by 180% through personalized product recommendations and 24/7 customer support.',
      problem: 'StyleHub was losing potential customers due to slow response times and lack of personalized shopping assistance during off-hours.',
      solution: 'We developed an AI-powered chatbot with natural language processing, product recommendation engine, and seamless integration with their e-commerce platform.',
      results: [
        '180% increase in conversion rate',
        '65% reduction in cart abandonment',
        '24/7 customer support coverage',
        '40% increase in average order value'
      ],
      technologies: ['Natural Language Processing', 'Machine Learning', 'API Integration', 'React'],
      duration: '6 weeks',
      icon: Bot,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      title: 'Healthcare Automation System',
      client: 'MedCare Clinic Network',
      category: 'Workflow Automation',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Comprehensive patient management system that automated intake processes and reduced wait times by 40% across multiple clinic locations.',
      problem: 'Manual patient intake processes were causing long wait times and administrative burden for healthcare staff.',
      solution: 'We created an automated patient intake system with digital forms, appointment scheduling, and intelligent triage capabilities.',
      results: [
        '40% reduction in patient wait times',
        '60% faster patient intake process',
        '30% increase in staff productivity',
        '95% patient satisfaction rate'
      ],
      technologies: ['Process Automation', 'Database Design', 'HIPAA Compliance', 'Mobile App'],
      duration: '8 weeks',
      icon: Zap,
      color: 'from-red-500 to-pink-500'
    },
    {
      id: 3,
      title: 'Financial Analytics Dashboard',
      client: 'Capital Investments LLC',
      category: 'Data Analytics',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Real-time financial analytics platform that provides predictive insights and automated risk assessment for investment decisions.',
      problem: 'Manual financial analysis was time-consuming and prone to human error, leading to delayed investment decisions.',
      solution: 'We built a comprehensive analytics dashboard with real-time data processing, predictive modeling, and automated reporting.',
      results: [
        '75% faster risk assessment',
        '90% improvement in prediction accuracy',
        '50% reduction in analysis time',
        '$2M+ in optimized investments'
      ],
      technologies: ['Python', 'Machine Learning', 'Data Visualization', 'Cloud Computing'],
      duration: '10 weeks',
      icon: BarChart3,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 4,
      title: 'Real Estate Lead Generation Bot',
      client: 'Premier Realty Group',
      category: 'AI Chatbot',
      image: 'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Intelligent lead qualification system that increased qualified leads by 250% through automated property matching and client communication.',
      problem: 'Real estate agents were spending too much time on unqualified leads and missing opportunities due to delayed responses.',
      solution: 'We developed an AI chatbot that qualifies leads, matches properties, and schedules viewings automatically.',
      results: [
        '250% increase in qualified leads',
        '80% reduction in response time',
        '45% increase in property viewings',
        '60% improvement in agent productivity'
      ],
      technologies: ['Conversational AI', 'CRM Integration', 'Property APIs', 'Mobile Optimization'],
      duration: '5 weeks',
      icon: ShoppingCart,
      color: 'from-purple-500 to-indigo-500'
    }
  ];

  const stats = [
    { icon: Award, number: '50+', label: 'Projects Completed' },
    { icon: Users, number: '98%', label: 'Client Satisfaction' },
    { icon: TrendingUp, number: '250%', label: 'Average ROI Increase' },
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
              Real projects, real results, real impact.
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

      {/* Portfolio Projects */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Featured <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Case Studies</span>
            </h2>
            <p className="text-xl text-gray-600">Deep dive into our most impactful projects</p>
          </motion.div>

          <div className="space-y-20">
            {projects.map((project, index) => (
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
                      <project.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900">{project.title}</h3>
                      <p className="text-purple-600 font-medium">{project.client}</p>
                    </div>
                  </div>

                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">{project.description}</p>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-3">The Challenge</h4>
                      <p className="text-gray-600 leading-relaxed">{project.problem}</p>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-3">Our Solution</h4>
                      <p className="text-gray-600 leading-relaxed">{project.solution}</p>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-3">Key Results</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {project.results.map((result, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <TrendingUp className="w-5 h-5 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700">{result}</span>
                          </div>
                        ))}
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

                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>Duration: {project.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Award className="w-4 h-4" />
                        <span>Category: {project.category}</span>
                      </div>
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
                          <ExternalLink className="w-6 h-6" />
                        </button>
                        <button className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors">
                          <Github className="w-6 h-6" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Technologies We <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Master</span>
            </h2>
            <p className="text-xl text-gray-600">Cutting-edge tools and frameworks for exceptional results</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              'React', 'Python', 'Node.js', 'TensorFlow', 'AWS', 'MongoDB',
              'Docker', 'Kubernetes', 'PostgreSQL', 'Redis', 'GraphQL', 'TypeScript'
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-xl text-center hover:bg-purple-50 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-lg font-semibold text-gray-900">{tech}</div>
              </motion.div>
            ))}
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
              Let's discuss how we can help transform your business with AI-powered solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors">
                Start Your Project
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300">
                View More Projects
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;