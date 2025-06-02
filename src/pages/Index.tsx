
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, Cog, Factory, Zap, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const features = [
    {
      icon: Factory,
      title: 'Industrial Manufacturing',
      description: 'Cutting-edge machinery for diverse industrial sectors'
    },
    {
      icon: Cog,
      title: 'Custom Engineering',
      description: 'Tailored solutions for your specific manufacturing needs'
    },
    {
      icon: Zap,
      title: 'Innovation First',
      description: 'Leading technology in automated production systems'
    }
  ];

  const sectors = [
    'Food & Beverage',
    'Packaging Solutions', 
    'Pharmaceutical',
    'Consumer Goods',
    'Chemical Processing',
    'Automotive Components'
  ];

  return (
    <div className="min-h-screen bg-blob-gradient text-white">
      {/* Additional gradient layers for enhanced animation */}
      <div className="gradient-layer-1"></div>
      <div className="gradient-layer-2"></div>
      <div className="gradient-layer-3"></div>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-gradient text-animated">TEKNIKELLER</span>
              <br />
              <span className="fade-slide-up" style={{ animationDelay: '0.3s' }}>GROUP</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto fade-slide-up" style={{ animationDelay: '0.6s' }}>
              Engineering excellence in industrial machinery manufacturing. 
              From sugar cube production to stick coffee packaging solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center fade-slide-up" style={{ animationDelay: '0.9s' }}>
              <Link
                to="/catalogue"
                className="btn-transparent px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2"
              >
                View Catalogue
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/realise"
                className="glass-effect px-8 py-4 rounded-lg font-semibold hover:bg-white hover:bg-opacity-10 transition-all duration-300"
              >
                Custom Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className={`glass-effect p-8 rounded-xl float-animation succession-${index + 1}`} style={{ animationDelay: `${index * 0.2}s` }}>
                <feature.icon className="h-12 w-12 text-red-400 mb-4" />
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 succession-4">
            <span className="text-gradient">Industrial Sectors</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sectors.map((sector, index) => (
              <div key={index} className={`glass-effect p-6 rounded-lg flex items-center gap-3 succession-${Math.min(index + 5, 6)}`} style={{ animationDelay: `${0.8 + index * 0.1}s` }}>
                <CheckCircle className="h-6 w-6 text-red-400 flex-shrink-0" />
                <span className="font-medium">{sector}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center succession-6" style={{ animationDelay: '1.5s' }}>
          <h2 className="text-4xl font-bold mb-6">Ready to Engineer Your Future?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss your industrial machinery requirements and bring your vision to life.
          </p>
          <Link
            to="/realise"
            className="btn-transparent px-12 py-4 rounded-lg font-bold text-lg inline-flex items-center gap-3 float-animation"
          >
            Start Your Project
            <ArrowRight className="h-6 w-6" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
