import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Heart, 
  Zap, 
  Globe, 
  Award,
  Coffee,
  Laptop,
  TrendingUp,
  CheckCircle,
  Upload,
  Github,
  Linkedin,
  Mail
} from 'lucide-react';

const Careers = () => {
  const [activeTab, setActiveTab] = useState('careers');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    linkedin: '',
    github: '',
    skills: '',
    portfolio: '',
    experience: '',
    type: 'freelancer'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const benefits = [
    {
      icon: Globe,
      title: 'Remote-First Culture',
      description: 'Work from anywhere in the world with flexible hours'
    },
    {
      icon: TrendingUp,
      title: 'Growth Opportunities',
      description: 'Continuous learning and career advancement paths'
    },
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance and wellness programs'
    },
    {
      icon: Coffee,
      title: 'Work-Life Balance',
      description: 'Flexible schedules and unlimited PTO policy'
    },
    {
      icon: Laptop,
      title: 'Latest Technology',
      description: 'Top-tier equipment and cutting-edge tools'
    },
    {
      icon: Award,
      title: 'Competitive Compensation',
      description: 'Market-leading salaries and equity packages'
    }
  ];

  const positions = [
    {
      title: 'Senior AI Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      description: 'Lead the development of cutting-edge AI solutions and mentor junior engineers.',
      requirements: ['5+ years ML/AI experience', 'Python, TensorFlow, PyTorch', 'PhD preferred']
    },
    {
      title: 'Product Manager - AI',
      department: 'Product',
      location: 'San Francisco / Remote',
      type: 'Full-time',
      description: 'Drive product strategy for our AI-powered solutions and work with cross-functional teams.',
      requirements: ['3+ years product management', 'AI/ML product experience', 'Strong analytical skills']
    },
    {
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      description: 'Build and maintain scalable infrastructure for AI workloads and deployment pipelines.',
      requirements: ['AWS/GCP experience', 'Kubernetes, Docker', 'CI/CD expertise']
    },
    {
      title: 'UX Designer',
      department: 'Design',
      location: 'Remote',
      type: 'Full-time',
      description: 'Design intuitive interfaces for complex AI tools and improve user experience.',
      requirements: ['3+ years UX design', 'Figma, Sketch proficiency', 'B2B SaaS experience']
    }
  ];

  const freelancerBenefits = [
    'Access to high-quality projects from vetted clients',
    'Competitive rates and transparent pricing',
    'Dedicated project management support',
    'Global network of AI professionals',
    'Continuous skill development opportunities',
    'Flexible work arrangements'
  ];

  const freelancerTestimonials = [
    {
      name: 'Sarah Chen',
      role: 'AI/ML Engineer',
      text: 'Yunara has connected me with amazing projects that challenge my skills and pay well. The support team is fantastic.',
      rating: 5
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Full-Stack Developer',
      text: 'The quality of clients and projects through Yunara is unmatched. I\'ve built long-term relationships here.',
      rating: 5
    },
    {
      name: 'Emily Watson',
      role: 'Data Scientist',
      text: 'Professional environment, fair compensation, and interesting AI projects. Highly recommend joining the network.',
      rating: 5
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
              Join the <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">AI Revolution</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Be part of a team that's shaping the future of artificial intelligence. 
              Whether you're looking for a full-time career or freelance opportunities, 
              we have a place for exceptional talent.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setActiveTab('careers')}
                className={`px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 ${
                  activeTab === 'careers'
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                    : 'border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white'
                }`}
              >
                View Careers
              </button>
              <button
                onClick={() => setActiveTab('freelancers')}
                className={`px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 ${
                  activeTab === 'freelancers'
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                    : 'border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white'
                }`}
              >
                Join as Freelancer
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tab Content */}
      {activeTab === 'careers' ? (
        <>
          {/* Benefits Section */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Why Work <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">With Us?</span>
                </h2>
                <p className="text-xl text-gray-600">Exceptional benefits for exceptional talent</p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Open Positions */}
          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Open <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Positions</span>
                </h2>
                <p className="text-xl text-gray-600">Find your perfect role in our growing team</p>
              </motion.div>

              <div className="space-y-6">
                {positions.map((position, index) => (
                  <motion.div
                    key={position.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-4 mb-4">
                          <h3 className="text-2xl font-bold text-gray-900">{position.title}</h3>
                          <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                            {position.department}
                          </span>
                          <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                            {position.type}
                          </span>
                          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                            {position.location}
                          </span>
                        </div>
                        <p className="text-gray-600 mb-4 leading-relaxed">{position.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {position.requirements.map((req, idx) => (
                            <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                              {req}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="mt-6 lg:mt-0 lg:ml-8">
                        <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200">
                          Apply Now
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </>
      ) : (
        <>
          {/* Freelancer Benefits */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                >
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    Join Our <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Expert Network</span>
                  </h2>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    Connect with top-tier clients, work on cutting-edge AI projects, and be part of a 
                    global community of AI professionals. We provide the platform, you bring the expertise.
                  </p>
                  <div className="space-y-4">
                    {freelancerBenefits.map((benefit, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center space-x-3"
                      >
                        <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-3xl p-8 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full opacity-20 -translate-y-16 translate-x-16"></div>
                  <div className="relative z-10">
                    <Users className="w-24 h-24 text-purple-600 mb-6" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Global AI Community</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Join a network of 500+ AI professionals working on projects that shape the future of technology.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Freelancer Testimonials */}
          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  What Our <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Freelancers Say</span>
                </h2>
                <p className="text-xl text-gray-600">Success stories from our expert network</p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {freelancerTestimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white p-8 rounded-2xl shadow-lg"
                  >
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <div key={i} className="w-5 h-5 bg-yellow-400 rounded-full mr-1"></div>
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.text}"</p>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-purple-600">{testimonial.role}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* Application Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Ready to <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Apply?</span>
            </h2>
            <p className="text-xl text-gray-600">
              {activeTab === 'careers' 
                ? 'Submit your application and join our innovative team'
                : 'Apply to join our exclusive network of AI freelancers'
              }
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-gray-50 p-8 rounded-3xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">LinkedIn Profile</label>
                  <div className="relative">
                    <Linkedin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="url"
                      name="linkedin"
                      value={formData.linkedin}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="https://linkedin.com/in/yourprofile"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">GitHub Profile</label>
                  <div className="relative">
                    <Github className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="url"
                      name="github"
                      value={formData.github}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="https://github.com/yourusername"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Skills & Expertise *</label>
                <textarea
                  name="skills"
                  value={formData.skills}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="List your key skills, technologies, and areas of expertise..."
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Portfolio/Website</label>
                <input
                  type="url"
                  name="portfolio"
                  value={formData.portfolio}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="https://yourportfolio.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Experience & Background *</label>
                <textarea
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Tell us about your experience, notable projects, and what makes you a great fit..."
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Resume/CV *</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-purple-400 transition-colors">
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-2">Click to upload or drag and drop</p>
                  <p className="text-sm text-gray-500">PDF, DOC, or DOCX (max 5MB)</p>
                  <input type="file" className="hidden" accept=".pdf,.doc,.docx" />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-lg font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-200"
              >
                Submit Application
              </button>
            </form>
          </motion.div>
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
              Questions About Joining Us?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              We'd love to hear from you. Reach out to learn more about opportunities at Yunara AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span>Contact HR</span>
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300">
                Schedule Call
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Careers;