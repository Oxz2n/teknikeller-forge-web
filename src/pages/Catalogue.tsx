
import Navigation from '@/components/Navigation';
import { ArrowRight, Settings, Package, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Catalogue = () => {
  const products = [
    {
      category: 'Food Processing',
      icon: Package,
      machines: [
        {
          name: 'Sugar Cube Press TK-3000',
          description: 'High-precision sugar cube formation with automated cutting and packaging.',
          features: ['3000 cubes/hour', 'Automated quality control', 'Easy maintenance'],
          image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop'
        },
        {
          name: 'Confectionery Line TK-5000',
          description: 'Complete candy and confectionery production system.',
          features: ['Multi-product capability', 'Temperature control', 'Package integration'],
          image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop'
        }
      ]
    },
    {
      category: 'Beverage Solutions',
      icon: Zap,
      machines: [
        {
          name: 'Stick Coffee Packer TK-2500',
          description: 'Precision stick packaging for instant coffee and beverage powders.',
          features: ['2500 sticks/hour', 'Nitrogen flushing', 'Variable portion control'],
          image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop'
        },
        {
          name: 'Liquid Filling System TK-4000',
          description: 'Advanced liquid filling and sealing for various container types.',
          features: ['Multi-format bottles', 'CIP cleaning', 'Level detection'],
          image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=300&fit=crop'
        }
      ]
    },
    {
      category: 'Pharmaceutical',
      icon: Settings,
      machines: [
        {
          name: 'Tablet Press TK-6000',
          description: 'High-speed tablet compression with force monitoring.',
          features: ['6000 tablets/hour', 'Weight control', 'Dust extraction'],
          image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop'
        },
        {
          name: 'Capsule Filler TK-3500',
          description: 'Precision capsule filling for pharmaceutical applications.',
          features: ['3500 capsules/hour', 'Dosing accuracy', 'Clean room compatible'],
          image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-industrial-gradient text-white">
      <Navigation />
      
      <div className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Product Catalogue</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive range of industrial machinery designed for precision, efficiency, and reliability.
            </p>
          </div>

          {/* Product Categories */}
          {products.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-20">
              <div className="flex items-center gap-4 mb-12">
                <category.icon className="h-10 w-10 text-red-400" />
                <h2 className="text-4xl font-bold text-white">{category.category}</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {category.machines.map((machine, machineIndex) => (
                  <div key={machineIndex} className="glass-effect rounded-xl overflow-hidden">
                    <div className="aspect-video bg-gray-800 bg-opacity-50">
                      <img 
                        src={machine.image} 
                        alt={machine.name}
                        className="w-full h-full object-cover opacity-80"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-3 text-white">{machine.name}</h3>
                      <p className="text-gray-300 mb-4">{machine.description}</p>
                      
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-red-400 mb-2">KEY FEATURES</h4>
                        <ul className="space-y-1">
                          {machine.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="text-gray-300 text-sm">
                              • {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <Link
                        to="/realise"
                        className="btn-transparent px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2 text-sm"
                      >
                        Request Quote
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Custom Solutions CTA */}
          <div className="text-center glass-effect p-12 rounded-xl">
            <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Don't see exactly what you need? Our engineering team specializes in creating bespoke machinery tailored to your specific requirements.
            </p>
            <Link
              to="/realise"
              className="btn-transparent px-8 py-4 rounded-lg font-bold inline-flex items-center gap-3"
            >
              Discuss Your Project
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalogue;
