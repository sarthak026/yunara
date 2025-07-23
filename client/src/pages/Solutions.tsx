
import { motion } from 'framer-motion';
import { 
  Building2, 
  Heart, 
  Scale, 
  ShoppingCart, 
  DollarSign, 
  Video,
  Users,
  MessageSquare,
  FileText,
  TrendingUp,
  Shield,
  Zap
} from 'lucide-react';

const Solutions = () => {
  const industries = [
    {
      icon: Building2,
      name: 'Real Estate',
      color: 'from-blue-500 to-cyan-500',
      description: 'Streamline property management and lead generation with AI-powered solutions.',
      solutions: [
        'Lead-generation chatbots for agents',
        'Property valuation automation',
        'Client communication workflows',
        'Document processing & contracts',
        'Market analysis dashboards'
      ],
      benefits: [
        '300% increase in qualified leads',
        '50% reduction in response time',
        'Automated property matching',
        '24/7 client support'
      ],
      caseStudy: {
        client: 'Premier Realty Group',
        result: 'Increased lead conversion by 250% with AI chatbot implementation'
      }
    },
    {
      icon: Heart,
      name: 'Healthcare',
      color: 'from-red-500 to-pink-500',
      description: 'Enhance patient care and streamline medical operations with intelligent automation.',
      solutions: [
        'Patient intake form automation',
        'Chatbot triage systems',
        'Appointment scheduling bots',
        'Medical record digitization',
        'Treatment recommendation engines'
      ],
      benefits: [
        '60% faster patient intake',
        'Reduced administrative burden',
        'Improved patient satisfaction',
        'HIPAA-compliant solutions'
      ],
      caseStudy: {
        client: 'MedCare Clinic Network',
        result: 'Reduced patient wait times by 40% through automated triage system'
      }
    },
    {
      icon: Scale,
      name: 'Legal',
      color: 'from-purple-500 to-indigo-500',
      description: 'Accelerate legal processes with AI-powered document analysis and research tools.',
      solutions: [
        'Contract summarization tools',
        'Legal research automation',
        'Document review systems',
        'Client intake chatbots',
        'Case management workflows'
      ],
      benefits: [
        '70% faster document review',
        'Improved research accuracy',
        'Streamlined client onboarding',
        'Cost-effective legal services'
      ],
      caseStudy: {
        client: 'Thompson & Associates',
        result: 'Reduced contract review time by 65% with AI-powered analysis'
      }
    },
    {
      icon: ShoppingCart,
      name: 'E-commerce',
      color: 'from-green-500 to-emerald-500',
      description: 'Boost sales and customer satisfaction with intelligent e-commerce solutions.',
      solutions: [
        'Product recommendation engines',
        'Inventory management alerts',
        'Customer service chatbots',
        'Price optimization tools',
        'Fraud detection systems'
      ],
      benefits: [
        '45% increase in average order value',
        'Reduced cart abandonment',
        'Personalized shopping experience',
        'Automated customer support'
      ],
      caseStudy: {
        client: 'StyleHub Fashion',
        result: 'Increased revenue by 180% with AI-powered product recommendations'
      }
    },
    {
      icon: DollarSign,
      name: 'Finance',
      color: 'from-yellow-500 to-orange-500',
      description: 'Enhance financial operations with AI-driven risk analysis and reporting tools.',
      solutions: [
        'Risk analysis automation',
        'Financial report generation',
        'Fraud detection systems',
        'Investment recommendation tools',
        'Compliance monitoring bots'
      ],
      benefits: [
        '80% faster risk assessment',
        'Improved compliance accuracy',
        'Automated reporting processes',
        'Enhanced fraud detection'
      ],
      caseStudy: {
        client: 'Capital Investments LLC',
        result: 'Reduced risk assessment time by 75% with automated analysis tools'
      }
    },
    {
      icon: Video,
      name: 'Content Creation',
      color: 'from-pink-500 to-rose-500',
      description: 'Accelerate content production with AI-powered creation and optimization tools.',
      solutions: [
        'Video script generators',
        'Image creation tools',
        'Content optimization bots',
        'Social media schedulers',
        'SEO analysis automation'
      ],
      benefits: [
        '300% faster content creation',
        'Improved engagement rates',
        'Consistent brand messaging',
        'Automated publishing workflows'
      ],
      caseStudy: {
        client: 'Creative Studios Pro',
        result: 'Tripled content output while maintaining quality with AI tools'
      }
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
              Industry-Specific <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">AI Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Tailored AI solutions designed for your industry's unique challenges and opportunities. 
              Discover how we're transforming businesses across diverse sectors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Solutions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${industry.color} rounded-2xl flex items-center justify-center`}>
                      <industry.icon className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{industry.name}</h2>
                  </div>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">{industry.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                        <Zap className="w-5 h-5 text-purple-600 mr-2" />
                        Solutions
                      </h3>
                      <ul className="space-y-2">
                        {industry.solutions.map((solution, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700">{solution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                        <TrendingUp className="w-5 h-5 text-green-600 mr-2" />
                        Benefits
                      </h3>
                      <ul className="space-y-2">
                        {industry.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Case Study */}
                  <div className="bg-gray-50 rounded-xl p-6 mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <Shield className="w-5 h-5 text-blue-600 mr-2" />
                      Success Story
                    </h4>
                    <p className="text-gray-700 mb-2"><strong>{industry.caseStudy.client}</strong></p>
                    <p className="text-gray-600">{industry.caseStudy.result}</p>
                  </div>

                  <button className={`bg-gradient-to-r ${industry.color} text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200`}>
                    Schedule Industry Demo
                  </button>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className={`bg-gradient-to-br ${industry.color.replace('to-', 'to-').replace('from-', 'from-').replace('-500', '-100').replace('-600', '-200')} rounded-3xl p-8 relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -translate-y-16 translate-x-16"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/20 rounded-full translate-y-12 -translate-x-12"></div>
                    <div className="relative z-10 text-center">
                      <industry.icon className="w-32 h-32 text-white/80 mx-auto mb-6" />
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                          <Users className="w-8 h-8 text-white mx-auto mb-2" />
                          <div className="text-sm font-medium text-white">Client-Focused</div>
                        </div>
                        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                          <MessageSquare className="w-8 h-8 text-white mx-auto mb-2" />
                          <div className="text-sm font-medium text-white">24/7 Support</div>
                        </div>
                        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                          <FileText className="w-8 h-8 text-white mx-auto mb-2" />
                          <div className="text-sm font-medium text-white">Compliant</div>
                        </div>
                        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                          <TrendingUp className="w-8 h-8 text-white mx-auto mb-2" />
                          <div className="text-sm font-medium text-white">Scalable</div>
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

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Proven <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Results</span>
            </h2>
            <p className="text-xl text-gray-600">Real impact across all industries we serve</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Projects Delivered' },
              { number: '98%', label: 'Client Satisfaction' },
              { number: '15+', label: 'Industries Served' },
              { number: '250%', label: 'Average ROI Increase' }
            ].map((stat, index) => (
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Industry?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Let's discuss how our industry-specific AI solutions can revolutionize your business operations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors">
                Schedule Industry Demo
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300">
                View Case Studies
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;