import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { 
  Plus, 
  Trash2, 
  Settings, 
  Play, 
  Save,
  ArrowDown,
  Clock,
  Mail,
  MessageSquare,
  Database,
  Globe,
  FileText,
  Users,
  Zap,
  Filter,
  GitBranch,
  Timer
} from 'lucide-react';

interface AutomationStep {
  id: string;
  type: 'trigger' | 'condition' | 'action' | 'delay';
  name: string;
  config: Record<string, any>;
  icon: React.ComponentType<any>;
}

interface AutomationFlow {
  id: string;
  name: string;
  description: string;
  steps: AutomationStep[];
  isActive: boolean;
}

const AutomationBuilder = () => {
  const [currentFlow, setCurrentFlow] = useState<AutomationFlow>({
    id: '1',
    name: 'New Automation',
    description: 'Describe what this automation does',
    steps: [
      {
        id: 'trigger-1',
        type: 'trigger',
        name: 'Form Submission',
        config: { form: 'contact-form' },
        icon: FileText
      }
    ],
    isActive: false
  });

  const [draggedStep, setDraggedStep] = useState<AutomationStep | null>(null);

  const stepTemplates = {
    triggers: [
      { type: 'trigger', name: 'Form Submission', icon: FileText, config: {} },
      { type: 'trigger', name: 'Email Received', icon: Mail, config: {} },
      { type: 'trigger', name: 'Schedule', icon: Clock, config: {} },
      { type: 'trigger', name: 'Webhook', icon: Globe, config: {} },
      { type: 'trigger', name: 'Database Change', icon: Database, config: {} }
    ],
    conditions: [
      { type: 'condition', name: 'If/Then', icon: GitBranch, config: {} },
      { type: 'condition', name: 'Filter', icon: Filter, config: {} },
      { type: 'condition', name: 'Contains Text', icon: MessageSquare, config: {} }
    ],
    actions: [
      { type: 'action', name: 'Send Email', icon: Mail, config: {} },
      { type: 'action', name: 'Create Record', icon: Database, config: {} },
      { type: 'action', name: 'Send SMS', icon: MessageSquare, config: {} },
      { type: 'action', name: 'HTTP Request', icon: Globe, config: {} },
      { type: 'action', name: 'Notify Team', icon: Users, config: {} }
    ],
    utilities: [
      { type: 'delay', name: 'Delay', icon: Timer, config: {} },
      { type: 'action', name: 'Transform Data', icon: Zap, config: {} }
    ]
  };

  const addStep = (template: any, index?: number) => {
    const newStep: AutomationStep = {
      id: `${template.type}-${Date.now()}`,
      type: template.type,
      name: template.name,
      config: { ...template.config },
      icon: template.icon
    };

    setCurrentFlow(prev => ({
      ...prev,
      steps: index !== undefined 
        ? [...prev.steps.slice(0, index + 1), newStep, ...prev.steps.slice(index + 1)]
        : [...prev.steps, newStep]
    }));
  };

  const removeStep = (stepId: string) => {
    setCurrentFlow(prev => ({
      ...prev,
      steps: prev.steps.filter(step => step.id !== stepId)
    }));
  };

  const updateStep = (stepId: string, updates: Partial<AutomationStep>) => {
    setCurrentFlow(prev => ({
      ...prev,
      steps: prev.steps.map(step => 
        step.id === stepId ? { ...step, ...updates } : step
      )
    }));
  };

  const getStepColor = (type: string) => {
    switch (type) {
      case 'trigger': return 'from-green-500 to-emerald-500';
      case 'condition': return 'from-yellow-500 to-orange-500';
      case 'action': return 'from-blue-500 to-cyan-500';
      case 'delay': return 'from-purple-500 to-pink-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const saveAutomation = () => {
    console.log('Saving automation:', currentFlow);
    // Here you would save to your backend
  };

  const testAutomation = () => {
    console.log('Testing automation:', currentFlow);
    // Here you would trigger a test run
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between">
            <div>
              <input
                type="text"
                value={currentFlow.name}
                onChange={(e) => setCurrentFlow(prev => ({ ...prev, name: e.target.value }))}
                className="text-3xl font-bold text-gray-900 bg-transparent border-none focus:outline-none focus:ring-2 focus:ring-purple-500 rounded px-2"
              />
              <input
                type="text"
                value={currentFlow.description}
                onChange={(e) => setCurrentFlow(prev => ({ ...prev, description: e.target.value }))}
                className="text-gray-600 bg-transparent border-none focus:outline-none focus:ring-2 focus:ring-purple-500 rounded px-2 mt-1 block"
              />
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={testAutomation}
                className="flex items-center space-x-2 px-4 py-2 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition-colors"
              >
                <Play className="w-4 h-4" />
                <span>Test</span>
              </button>
              <button
                onClick={saveAutomation}
                className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-200"
              >
                <Save className="w-4 h-4" />
                <span>Save</span>
              </button>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Step Templates Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sticky top-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Add Steps</h3>
              
              <div className="space-y-6">
                {Object.entries(stepTemplates).map(([category, templates]) => (
                  <div key={category}>
                    <h4 className="text-sm font-medium text-gray-700 mb-3 capitalize">{category}</h4>
                    <div className="space-y-2">
                      {templates.map((template, index) => {
                        const IconComponent = template.icon;
                        return (
                          <button
                            key={index}
                            onClick={() => addStep(template)}
                            className="w-full flex items-center space-x-3 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors group"
                          >
                            <div className={`w-8 h-8 bg-gradient-to-r ${getStepColor(template.type)} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                              <IconComponent className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-sm font-medium text-gray-700">{template.name}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Automation Flow Builder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 min-h-[600px]">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Automation Flow</h3>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500">{currentFlow.steps.length} steps</span>
                  <div className={`w-3 h-3 rounded-full ${currentFlow.isActive ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                </div>
              </div>

              <div className="space-y-4">
                {currentFlow.steps.map((step, index) => {
                  const IconComponent = step.icon;
                  return (
                    <div key={step.id} className="relative">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex items-center space-x-4 group"
                      >
                        {/* Step Card */}
                        <div className="flex-1 bg-gray-50 rounded-lg p-4 hover:shadow-md transition-all duration-200">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className={`w-10 h-10 bg-gradient-to-r ${getStepColor(step.type)} rounded-lg flex items-center justify-center`}>
                                <IconComponent className="w-5 h-5 text-white" />
                              </div>
                              <div>
                                <h4 className="font-medium text-gray-900">{step.name}</h4>
                                <p className="text-sm text-gray-500 capitalize">{step.type}</p>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                              <button
                                onClick={() => {/* Open config modal */}}
                                className="p-2 text-gray-400 hover:text-gray-600 hover:bg-white rounded-lg transition-colors"
                              >
                                <Settings className="w-4 h-4" />
                              </button>
                              {currentFlow.steps.length > 1 && (
                                <button
                                  onClick={() => removeStep(step.id)}
                                  className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Add Step Button */}
                        <button
                          onClick={() => addStep(stepTemplates.actions[0], index)}
                          className="w-8 h-8 bg-purple-100 hover:bg-purple-200 text-purple-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 hover:scale-110"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </motion.div>

                      {/* Connector Arrow */}
                      {index < currentFlow.steps.length - 1 && (
                        <div className="flex justify-center my-2">
                          <ArrowDown className="w-5 h-5 text-gray-400" />
                        </div>
                      )}
                    </div>
                  );
                })}

                {/* Add First Step */}
                {currentFlow.steps.length === 0 && (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Plus className="w-8 h-8 text-gray-400" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Start Building Your Automation</h3>
                    <p className="text-gray-500 mb-4">Add a trigger to get started</p>
                    <button
                      onClick={() => addStep(stepTemplates.triggers[0])}
                      className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-200"
                    >
                      Add Trigger
                    </button>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AutomationBuilder;