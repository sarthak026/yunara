import React from 'react';
import { motion } from 'framer-motion';
import { 
  Bot, 
  Zap, 
  Code, 
  BarChart3, 
  Database, 
  Cog,
  MessageSquare,
  Workflow,
  Smartphone,
  TrendingUp,
  Shield,
  Clock
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 'chatbots',
      icon: Bot,
      title: 'AI Chatbots',
      description: 'Intelligent conversational AI that engages customers 24/7, handles inquiries, and drives conversions.',
      features: [
        'Natural Language Processing',
        'Multi-platform Integration',
        'Lead Generation & Qualification',
        'Customer Support Automation',
        'Analytics & Insights'
      ],
      benefits: [
        '80% reduction in response time',
        '24/7 customer availability',
        '60% increase in lead conversion',
        'Multilingual support'
      ]
    },
    {
      id: 'automation',
      icon: Zap,
      title: 'Workflow & Marketing Automation',
      description: 'Streamline operations with smart automation solutions that eliminate repetitive tasks and boost productivity.',
      features: [
        'Process Automation',
        'Email Marketing Sequences',
        'CRM Integration',
        'Social Media Automation',
        'Data Synchronization'
      ],
      benefits: [
        '50% time savings on routine tasks',
        'Improved data accuracy',
        'Enhanced customer journey',
        'Scalable operations'
      ]
    },
    {
      id: 'development',
      icon: Code,
      title: 'Web & App Development',
      description: 'Custom applications powered by cutting-edge technology, designed for performance and scalability.',
      features: [
        'Full-Stack Development',
        'Mobile App Development',
        'API Development & Integration',
        'Cloud Infrastructure',
        'Performance Optimization'
      ],
      benefits: [
        'Custom solutions for unique needs',
        'Scalable architecture',
        'Modern tech stack',
        'Ongoing maintenance & support'
      ]
    },
    {
      id: 'saas',
      icon: Cog,
      title: 'AI SaaS Tools',
      description: 'Ready-to-use AI-powered tools like resume builders, invoice generators, and business automation platforms.',
      features: [
        'Resume & CV Builders',
        'Invoice Generators',
        'Document Automation',
        'Business Intelligence Tools',
        'Custom SaaS Development'
      ],
      benefits: [
        'Rapid deployment',
        'Cost-effective solutions',
        'User-friendly interfaces',
        'Regular updates & improvements'
      ]
    },
    {
      id: 'analytics',
      icon: BarChart3,
      title: 'Data Analytics & Dashboards',
      description: 'Transform raw data into actionable business insights with advanced analytics and visualization.',
      features: [
        'Business Intelligence Dashboards',
        'Predictive Analytics',
        'Real-time Reporting',
        'Data Visualization',
        'Performance Metrics'
      ],
      benefits: [
        'Data-driven decision making',
        'Improved business performance',
        'Real-time insights',
        'Custom reporting solutions'
      ]
    },
    {
      id: 'custom',
      icon: Database,
      title: 'Custom AI Solutions',
      description: 'Tailored artificial intelligence solutions designed specifically for your unique business challenges.',
      features: [
        'Machine Learning Models',
        'Computer Vision',
        'Natural Language Processing',
        'Recommendation Systems',
        'Predictive Modeling'
      ],
      benefits: [
        'Competitive advantage',
        'Improved efficiency',
        'Cost reduction',
        'Innovation leadership'
      ]
    }
  ];

  const processSteps = [
    {
      icon: MessageSquare,
      title: 'Discovery Call',
      description: 'We understand your business needs and challenges'
    },
    {
      icon: Workflow,
      title: 'Strategy & Planning',
      description: 'Custom solution design and project roadmap'
    },
    {
      icon: Code,
      title: 'Development',
      description: 'Agile development with regular updates'
    },
    {
      icon: TrendingUp,
      title: 'Launch & Optimize',
      description: 'Deployment, monitoring, and continuous improvement'
    }
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
              Explore Our <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">AI-Powered Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive AI solutions designed to transform your business operations, 
              enhance customer experience, and drive sustainable growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{service.title}</h2>
                  </div>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">{service.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Features</h3>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Benefits</h3>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                            <span className="text-gray-700">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <button className="mt-8 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200">
                    Get Started
                  </button>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-3xl p-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full opacity-20 -translate-y-16 translate-x-16"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full opacity-20 translate-y-12 -translate-x-12"></div>
                    <div className="relative z-10 text-center">
                      <service.icon className="w-32 h-32 text-purple-600 mx-auto mb-6" />
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4">
                          <Shield className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                          <div className="text-sm font-medium text-gray-700">Secure</div>
                        </div>
                        <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4">
                          <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                          <div className="text-sm font-medium text-gray-700">Fast</div>
                        </div>
                        <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4">
                          <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-2" />
                          <div className="text-sm font-medium text-gray-700">Scalable</div>
                        </div>
                        <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4">
                          <Smartphone className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                          <div className="text-sm font-medium text-gray-700">Mobile</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery and exceptional results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center relative"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-purple-300 to-blue-300 -translate-x-1/2"></div>
                )}
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Let's discuss how our AI services can transform your business operations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors">
                Schedule Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300">
                View Portfolio
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;