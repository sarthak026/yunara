import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Users, 
  Clock, 
  Star,
  ArrowRight,
  Bot,
  Zap,
  Code,
  BarChart3,
  Filter
} from 'lucide-react';

const ClientSuccessStories = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'saas', label: 'SaaS Projects' },
    { id: 'agent', label: 'Agent Deployment' },
    { id: 'automation', label: 'Workflow Automation' }
  ];

  const caseStudies = [
    {
      id: 1,
      category: 'saas',
      title: 'E-commerce AI Assistant Platform',
      client: 'TechRetail Inc.',
      problem: 'Manual customer support was overwhelming their team with 500+ daily inquiries',
      solution: 'Built intelligent chatbot with product recommendation engine and automated order tracking',
      results: ['85% reduction in support tickets', '24/7 customer availability', '3x faster response times'],
      technologies: ['OpenAI GPT-4', 'React', 'Node.js', 'PostgreSQL'],
      image: '/api/placeholder/400/250',
      testimonial: 'Yunara AI transformed our customer experience. Our support team can focus on complex issues while the AI handles routine queries perfectly.',
      clientRole: 'CTO',
      rating: 5
    },
    {
      id: 2,
      category: 'agent',
      title: 'Real Estate Lead Qualification System',
      client: 'PropertyPro Group',
      problem: 'Sales team spent 60% of time qualifying unqualified leads',
      solution: 'Deployed AI agents for lead scoring, initial qualification, and appointment scheduling',
      results: ['94% lead qualification accuracy', '40% increase in qualified appointments', '$2M additional revenue'],
      technologies: ['AI Agents', 'CRM Integration', 'Python', 'Machine Learning'],
      image: '/api/placeholder/400/250',
      testimonial: 'The AI agent system doubled our sales team productivity. We now focus only on hot leads.',
      clientRole: 'Sales Director',
      rating: 5
    },
    {
      id: 3,
      category: 'automation',
      title: 'Healthcare Workflow Automation',
      client: 'MedFlow Systems',
      problem: 'Manual patient data entry and appointment scheduling created bottlenecks',
      solution: 'Automated patient intake, insurance verification, and scheduling workflows',
      results: ['70% faster patient onboarding', '99.5% data accuracy', '50% cost reduction'],
      technologies: ['RPA', 'Healthcare APIs', 'Cloud Integration', 'HIPAA Compliance'],
      image: '/api/placeholder/400/250',
      testimonial: 'Our staff can now focus on patient care instead of paperwork. The automation is seamless.',
      clientRole: 'Operations Manager',
      rating: 5
    },
    {
      id: 4,
      category: 'saas',
      title: 'Legal Document Analysis Platform',
      client: 'LegalTech Solutions',
      problem: 'Manual contract review took weeks and was prone to human error',
      solution: 'Built AI-powered document analysis tool with risk assessment and clause extraction',
      results: ['90% faster document review', '95% accuracy in risk detection', '$500K annual savings'],
      technologies: ['NLP', 'Document AI', 'Vue.js', 'MongoDB'],
      image: '/api/placeholder/400/250',
      testimonial: 'This platform revolutionized how we handle contract reviews. Incredibly accurate and fast.',
      clientRole: 'Partner',
      rating: 5
    }
  ];

  const filteredCaseStudies = activeFilter === 'all' 
    ? caseStudies 
    : caseStudies.filter(study => study.category === activeFilter);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'saas': return <Code className="w-5 h-5" />;
      case 'agent': return <Bot className="w-5 h-5" />;
      case 'automation': return <Zap className="w-5 h-5" />;
      default: return <BarChart3 className="w-5 h-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-gray-900 to-gray-900"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Client Success Stories
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Real results from real businesses. See how our AI solutions transformed operations, 
              increased efficiency, and drove measurable growth across industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex flex-wrap justify-center gap-4">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-600'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredCaseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700/50 backdrop-blur-sm"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg">
                    {getCategoryIcon(study.category)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{study.title}</h3>
                    <p className="text-purple-300 font-medium">{study.client}</p>
                  </div>
                </div>
                <div className="flex">
                  {[...Array(study.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>

              {/* Problem & Solution */}
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="text-red-400 font-semibold mb-2">Challenge:</h4>
                  <p className="text-gray-300 text-sm">{study.problem}</p>
                </div>
                <div>
                  <h4 className="text-green-400 font-semibold mb-2">Solution:</h4>
                  <p className="text-gray-300 text-sm">{study.solution}</p>
                </div>
              </div>

              {/* Results */}
              <div className="mb-6">
                <h4 className="text-blue-400 font-semibold mb-3">Results:</h4>
                <div className="grid grid-cols-1 gap-2">
                  {study.results.map((result, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <TrendingUp className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300 text-sm">{result}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="text-purple-400 font-semibold mb-3">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {study.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full border border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              <div className="border-t border-gray-700 pt-6">
                <blockquote className="text-gray-300 italic mb-3">
                  "{study.testimonial}"
                </blockquote>
                <p className="text-purple-400 text-sm font-medium">
                  — {study.clientRole}, {study.client}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can transform your business with custom AI solutions.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300"
            >
              Start Your Success Story
              <ArrowRight className="ml-2 w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ClientSuccessStories;