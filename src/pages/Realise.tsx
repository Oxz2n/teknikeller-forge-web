
import Navigation from '@/components/Navigation';
import { useState } from 'react';
import { Send, Lightbulb, Cog, Target } from 'lucide-react';

const Realise = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    industry: '',
    productType: '',
    currentProcess: '',
    challenges: '',
    requirements: '',
    capacity: '',
    timeline: '',
    budget: '',
    additionalInfo: ''
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
    // Here you would typically send the data to your backend
    alert('Thank you for your submission! Our engineering team will contact you within 24 hours.');
  };

  const steps = [
    {
      icon: Lightbulb,
      title: 'Concept',
      description: 'Share your manufacturing challenge or idea'
    },
    {
      icon: Cog,
      title: 'Engineer',
      description: 'Our team designs your custom solution'
    },
    {
      icon: Target,
      title: 'Realise',
      description: 'We build and implement your machinery'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      <div className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Realise Your Vision</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your manufacturing ideas into reality. Our expert engineering team is ready to design and build custom machinery solutions for your unique requirements.
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="glass-effect p-8 rounded-xl">
                  <div className="bg-red-gradient p-4 rounded-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Form Section */}
          <div className="glass-effect p-8 rounded-xl">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Tell Us About Your Project
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Company Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    required
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-black bg-opacity-30 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-red-400 focus:outline-none"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Contact Name *
                  </label>
                  <input
                    type="text"
                    name="contactName"
                    required
                    value={formData.contactName}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-black bg-opacity-30 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-red-400 focus:outline-none"
                    placeholder="Your full name"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-black bg-opacity-30 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-red-400 focus:outline-none"
                    placeholder="your.email@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-black bg-opacity-30 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-red-400 focus:outline-none"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              {/* Project Details */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Industry Sector *
                  </label>
                  <select
                    name="industry"
                    required
                    value={formData.industry}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-black bg-opacity-30 border border-gray-600 rounded-lg text-white focus:border-red-400 focus:outline-none"
                  >
                    <option value="">Select your industry</option>
                    <option value="food-beverage">Food & Beverage</option>
                    <option value="pharmaceutical">Pharmaceutical</option>
                    <option value="packaging">Packaging</option>
                    <option value="chemical">Chemical Processing</option>
                    <option value="automotive">Automotive</option>
                    <option value="consumer-goods">Consumer Goods</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Product Type
                  </label>
                  <input
                    type="text"
                    name="productType"
                    value={formData.productType}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-black bg-opacity-30 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-red-400 focus:outline-none"
                    placeholder="e.g., Sugar cubes, Stick coffee, Tablets"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Current Manufacturing Process
                </label>
                <textarea
                  name="currentProcess"
                  value={formData.currentProcess}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full p-3 bg-black bg-opacity-30 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-red-400 focus:outline-none"
                  placeholder="Describe your current manufacturing process or manual methods..."
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Challenges & Pain Points *
                </label>
                <textarea
                  name="challenges"
                  required
                  value={formData.challenges}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full p-3 bg-black bg-opacity-30 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-red-400 focus:outline-none"
                  placeholder="What problems are you trying to solve? Speed, quality, labor costs, efficiency?"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Machine Requirements *
                </label>
                <textarea
                  name="requirements"
                  required
                  value={formData.requirements}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full p-3 bg-black bg-opacity-30 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-red-400 focus:outline-none"
                  placeholder="Describe what you need the machine to do. Include specific functions, features, or capabilities..."
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Desired Capacity
                  </label>
                  <input
                    type="text"
                    name="capacity"
                    value={formData.capacity}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-black bg-opacity-30 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-red-400 focus:outline-none"
                    placeholder="e.g., 1000 units/hour, 500 kg/day"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Project Timeline
                  </label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-black bg-opacity-30 border border-gray-600 rounded-lg text-white focus:border-red-400 focus:outline-none"
                  >
                    <option value="">Select timeline</option>
                    <option value="urgent">Urgent (1-3 months)</option>
                    <option value="standard">Standard (3-6 months)</option>
                    <option value="extended">Extended (6-12 months)</option>
                    <option value="flexible">Flexible timeline</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Budget Range
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-black bg-opacity-30 border border-gray-600 rounded-lg text-white focus:border-red-400 focus:outline-none"
                >
                  <option value="">Select budget range</option>
                  <option value="under-50k">Under $50,000</option>
                  <option value="50k-100k">$50,000 - $100,000</option>
                  <option value="100k-250k">$100,000 - $250,000</option>
                  <option value="250k-500k">$250,000 - $500,000</option>
                  <option value="over-500k">Over $500,000</option>
                  <option value="discuss">Prefer to discuss</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Additional Information
                </label>
                <textarea
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full p-3 bg-black bg-opacity-30 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-red-400 focus:outline-none"
                  placeholder="Any additional details, special requirements, or questions..."
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="btn-transparent px-12 py-4 rounded-lg font-bold text-lg inline-flex items-center gap-3"
                >
                  Submit Project Request
                  <Send className="h-5 w-5" />
                </button>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-4">Need to Discuss Directly?</h3>
            <p className="text-gray-300 mb-6">
              Our engineering team is available for direct consultation on complex projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:projects@teknikeller.com" className="glass-effect px-6 py-3 rounded-lg hover:bg-white hover:bg-opacity-10 transition-all">
                projects@teknikeller.com
              </a>
              <a href="tel:+1-555-ENGINEER" className="glass-effect px-6 py-3 rounded-lg hover:bg-white hover:bg-opacity-10 transition-all">
                +1 (555) ENGINEER
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Realise;
