import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Bot, 
  Play, 
  Pause, 
  Settings, 
  BarChart3, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  Plus,
  Filter,
  Eye,
  Edit,
  Trash2
} from 'lucide-react';

interface Automation {
  id: string;
  name: string;
  category: string;
  status: 'active' | 'paused' | 'draft';
  successRate: number;
  lastRun: string;
  totalRuns: number;
  description: string;
  triggers: string[];
  actions: string[];
}

const AutomationAgent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'agents'>('dashboard');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [selectedAutomation, setSelectedAutomation] = useState<Automation | null>(null);

  const automations: Automation[] = [
    {
      id: '1',
      name: 'Lead Qualification Bot',
      category: 'Sales',
      status: 'active',
      successRate: 94,
      lastRun: '2 hours ago',
      totalRuns: 1247,
      description: 'Automatically qualifies incoming leads based on predefined criteria',
      triggers: ['New lead form submission', 'Website visitor behavior'],
      actions: ['Score lead', 'Send to CRM', 'Notify sales team']
    },
    {
      id: '2',
      name: 'Invoice Generation',
      category: 'Finance',
      status: 'active',
      successRate: 98,
      lastRun: '1 hour ago',
      totalRuns: 892,
      description: 'Generates and sends invoices automatically upon project completion',
      triggers: ['Project status change', 'Time tracking completion'],
      actions: ['Generate invoice', 'Send to client', 'Update accounting system']
    },
    {
      id: '3',
      name: 'Social Media Scheduler',
      category: 'Marketing',
      status: 'paused',
      successRate: 87,
      lastRun: '1 day ago',
      totalRuns: 456,
      description: 'Schedules and publishes content across multiple social platforms',
      triggers: ['Content approval', 'Scheduled time'],
      actions: ['Post to platforms', 'Track engagement', 'Generate reports']
    },
    {
      id: '4',
      name: 'Customer Support Triage',
      category: 'Support',
      status: 'active',
      successRate: 91,
      lastRun: '30 minutes ago',
      totalRuns: 2341,
      description: 'Automatically categorizes and routes support tickets',
      triggers: ['New support ticket', 'Customer inquiry'],
      actions: ['Categorize issue', 'Route to agent', 'Send auto-response']
    },
    {
      id: '5',
      name: 'Data Backup & Sync',
      category: 'Operations',
      status: 'active',
      successRate: 99,
      lastRun: '6 hours ago',
      totalRuns: 1834,
      description: 'Automated data backup and synchronization across systems',
      triggers: ['Scheduled interval', 'Data changes'],
      actions: ['Backup data', 'Sync systems', 'Verify integrity']
    },
    {
      id: '6',
      name: 'Email Campaign Optimizer',
      category: 'Marketing',
      status: 'draft',
      successRate: 0,
      lastRun: 'Never',
      totalRuns: 0,
      description: 'Optimizes email campaigns based on performance data',
      triggers: ['Campaign performance data', 'A/B test results'],
      actions: ['Analyze performance', 'Optimize content', 'Schedule follow-ups']
    }
  ];

  const categories = ['all', 'Sales', 'Marketing', 'Finance', 'Support', 'Operations'];
  
  const filteredAutomations = selectedCategory === 'all' 
    ? automations 
    : automations.filter(auto => auto.category === selectedCategory);

  const stats = {
    totalAutomations: automations.length,
    activeAutomations: automations.filter(a => a.status === 'active').length,
    avgSuccessRate: Math.round(automations.reduce((acc, a) => acc + a.successRate, 0) / automations.length),
    totalRuns: automations.reduce((acc, a) => acc + a.totalRuns, 0)
  };

  const toggleAutomation = (id: string) => {
    // In a real app, this would make an API call
    console.log(`Toggling automation ${id}`);
  };

  const viewDetails = (automation: Automation) => {
    setSelectedAutomation(automation);
    setShowDetailModal(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">AI Automation Agent</h1>
                <p className="mt-2 text-gray-600">Manage and monitor your intelligent automation workflows</p>
              </div>
              <button
                onClick={() => setShowCreateModal(true)}
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 flex items-center gap-2"
              >
                <Plus className="w-5 h-5" />
                Create Automation
              </button>
            </div>

            {/* Tabs */}
            <div className="mt-6 border-b border-gray-200">
              <nav className="-mb-px flex space-x-8">
                <button
                  onClick={() => setActiveTab('dashboard')}
                  className={`py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'dashboard'
                      ? 'border-purple-500 text-purple-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Live Dashboard
                </button>
                <button
                  onClick={() => setActiveTab('agents')}
                  className={`py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'agents'
                      ? 'border-purple-500 text-purple-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Our AI Agents
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'dashboard' && (
          <>
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Automations</p>
                    <p className="text-3xl font-bold text-gray-900">{stats.totalAutomations}</p>
                  </div>
                  <div className="p-3 bg-purple-100 rounded-lg">
                    <Bot className="w-6 h-6 text-purple-600" />
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Active Now</p>
                    <p className="text-3xl font-bold text-green-600">{stats.activeAutomations}</p>
                  </div>
                  <div className="p-3 bg-green-100 rounded-lg">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Success Rate</p>
                    <p className="text-3xl font-bold text-blue-600">{stats.avgSuccessRate}%</p>
                  </div>
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <BarChart3 className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Executions</p>
                    <p className="text-3xl font-bold text-orange-600">{stats.totalRuns.toLocaleString()}</p>
                  </div>
                  <div className="p-3 bg-orange-100 rounded-lg">
                    <Clock className="w-6 h-6 text-orange-600" />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Filter Bar */}
            <div className="flex items-center gap-4 mb-6">
              <Filter className="w-5 h-5 text-gray-400" />
              <div className="flex gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category
                        ? 'bg-purple-100 text-purple-700 border border-purple-200'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {category === 'all' ? 'All Categories' : category}
                  </button>
                ))}
              </div>
            </div>

            {/* Automations Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredAutomations.map((automation, index) => (
                <motion.div
                  key={automation.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all duration-200"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{automation.name}</h3>
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                        automation.category === 'Sales' ? 'bg-green-100 text-green-700' :
                        automation.category === 'Marketing' ? 'bg-blue-100 text-blue-700' :
                        automation.category === 'Finance' ? 'bg-yellow-100 text-yellow-700' :
                        automation.category === 'Support' ? 'bg-purple-100 text-purple-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>
                        {automation.category}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${
                        automation.status === 'active' ? 'bg-green-400' :
                        automation.status === 'paused' ? 'bg-yellow-400' :
                        'bg-gray-400'
                      }`} />
                      <span className="text-sm text-gray-500 capitalize">{automation.status}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-4">{automation.description}</p>

                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Success Rate</span>
                      <span className="text-sm font-medium text-gray-900">{automation.successRate}%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Last Run</span>
                      <span className="text-sm font-medium text-gray-900">{automation.lastRun}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Total Runs</span>
                      <span className="text-sm font-medium text-gray-900">{automation.totalRuns.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => toggleAutomation(automation.id)}
                      className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        automation.status === 'active'
                          ? 'bg-red-100 text-red-700 hover:bg-red-200'
                          : 'bg-green-100 text-green-700 hover:bg-green-200'
                      }`}
                    >
                      {automation.status === 'active' ? (
                        <>
                          <Pause className="w-4 h-4" />
                          Pause
                        </>
                      ) : (
                        <>
                          <Play className="w-4 h-4" />
                          Start
                        </>
                      )}
                    </button>
                    <button
                      onClick={() => viewDetails(automation)}
                      className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-all duration-200"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-all duration-200">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        )}

        {activeTab === 'agents' && (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our AI Agent Services</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                We help customers automate AI agents tailored to their specific requirements. 
                From support bots to lead generation agents, we create intelligent solutions that transform your business operations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Customer Support Bots',
                  description: 'Intelligent chatbots that handle customer inquiries, provide instant responses, and escalate complex issues to human agents.',
                  features: ['24/7 availability', 'Multi-language support', 'Integration with CRM', 'Sentiment analysis']
                },
                {
                  title: 'Lead Generation Agents',
                  description: 'AI-powered agents that qualify leads, schedule appointments, and nurture prospects through personalized interactions.',
                  features: ['Lead scoring', 'Automated follow-ups', 'Calendar integration', 'CRM synchronization']
                },
                {
                  title: 'Onboarding Flow Automation',
                  description: 'Streamlined onboarding processes that guide new users through setup, training, and initial engagement.',
                  features: ['Progressive disclosure', 'Interactive tutorials', 'Progress tracking', 'Personalized paths']
                },
                {
                  title: 'Sales Assistant Agents',
                  description: 'AI agents that assist sales teams with prospect research, proposal generation, and deal tracking.',
                  features: ['Prospect analysis', 'Proposal automation', 'Deal insights', 'Performance tracking']
                },
                {
                  title: 'Content Creation Bots',
                  description: 'Automated content generation for social media, blogs, and marketing materials tailored to your brand voice.',
                  features: ['Brand voice matching', 'Multi-platform content', 'SEO optimization', 'Content scheduling']
                },
                {
                  title: 'Data Analysis Agents',
                  description: 'Intelligent agents that analyze business data, generate insights, and create automated reports.',
                  features: ['Real-time analysis', 'Custom dashboards', 'Predictive insights', 'Automated reporting']
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all duration-200"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200">
                    Get Started
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Detail Modal */}
      {showDetailModal && selectedAutomation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto"
          >
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">{selectedAutomation.name}</h2>
                <button
                  onClick={() => setShowDetailModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ×
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Description</h3>
                  <p className="text-gray-600">{selectedAutomation.description}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Triggers</h3>
                  <ul className="space-y-1">
                    {selectedAutomation.triggers.map((trigger, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-600">
                        <div className="w-2 h-2 bg-blue-500 rounded-full" />
                        {trigger}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Actions</h3>
                  <ul className="space-y-1">
                    {selectedAutomation.actions.map((action, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-600">
                        <div className="w-2 h-2 bg-green-500 rounded-full" />
                        {action}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default AutomationAgent;