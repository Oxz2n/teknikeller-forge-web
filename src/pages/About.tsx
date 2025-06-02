import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Users, Award, Globe, TrendingUp } from 'lucide-react';
import { useState, useEffect } from 'react';

const About = () => {
  const [counters, setCounters] = useState({
    engineers: 0,
    experience: 0,
    countries: 0,
    projects: 0
  });

  const stats = [
    { 
      icon: Users, 
      label: 'Expert Engineers', 
      value: '50+',
      target: 50,
      key: 'engineers'
    },
    { 
      icon: Award, 
      label: 'Years Experience', 
      value: '25+',
      target: 25,
      key: 'experience'
    },
    { 
      icon: Globe, 
      label: 'Countries Served', 
      value: '40+',
      target: 40,
      key: 'countries'
    },
    { 
      icon: TrendingUp, 
      label: 'Projects Completed', 
      value: '1000+',
      target: 1000,
      key: 'projects'
    }
  ];

  useEffect(() => {
    const animateCounters = () => {
      stats.forEach((stat, index) => {
        const duration = 2000;
        const increment = stat.target / (duration / 50);
        let current = 0;
        
        const timer = setInterval(() => {
          current += increment;
          if (current >= stat.target) {
            current = stat.target;
            clearInterval(timer);
          }
          
          setCounters(prev => ({
            ...prev,
            [stat.key]: Math.floor(current)
          }));
        }, 50);
      });
    };

    const timer = setTimeout(animateCounters, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 succession-1">
              <span className="text-gradient">About Teknikeller</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto succession-2">
              Leading the future of industrial machinery manufacturing with precision engineering and innovative solutions.
            </p>
          </div>

          {/* Company Story */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <div className="glass-effect p-8 rounded-xl succession-3">
              <h2 className="text-3xl font-bold mb-6 text-red-400">Our Story</h2>
              <p className="text-gray-300 mb-4">
                Founded with a vision to revolutionize industrial manufacturing, Teknikeller Group has been at the forefront of engineering excellence for over two decades. We specialize in creating sophisticated machinery that powers diverse industries worldwide.
              </p>
              <p className="text-gray-300 mb-4">
                From our humble beginnings as a small engineering firm, we've grown into a global leader in industrial machinery manufacturing, serving clients across 40+ countries with cutting-edge solutions.
              </p>
              <p className="text-gray-300">
                Our commitment to innovation and quality has made us the trusted partner for companies seeking reliable, efficient, and advanced manufacturing systems.
              </p>
            </div>
            
            <div className="glass-effect p-8 rounded-xl succession-4">
              <h2 className="text-3xl font-bold mb-6 text-red-400">Our Mission</h2>
              <p className="text-gray-300 mb-4">
                To engineer and manufacture world-class industrial machinery that transforms production processes, enhances efficiency, and drives sustainable growth for our clients.
              </p>
              <h3 className="text-xl font-semibold mb-3 text-white">Core Values</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Precision in every component</li>
                <li>• Innovation through technology</li>
                <li>• Reliability you can count on</li>
                <li>• Sustainable manufacturing practices</li>
                <li>• Customer-centric solutions</li>
              </ul>
            </div>
          </div>

          {/* Statistics */}
          <div className="grid md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`glass-effect p-6 rounded-xl float-animation succession-${index + 5}`} style={{ animationDelay: `${index * 0.1}s` }}>
                  <stat.icon className="h-12 w-12 text-red-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">
                    {counters[stat.key as keyof typeof counters]}{stat.key === 'projects' ? '+' : '+'}
                  </div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Expertise Areas */}
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-12 succession-6">
              <span className="text-gradient">Our Expertise</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Food Processing',
                  description: 'Sugar cube production, confectionery machinery, and food packaging systems'
                },
                {
                  title: 'Beverage Solutions',
                  description: 'Stick coffee packaging, instant drink production, and bottling systems'
                },
                {
                  title: 'Pharmaceutical',
                  description: 'Tablet pressing, capsule filling, and sterile packaging machinery'
                },
                {
                  title: 'Packaging Technology',
                  description: 'Advanced wrapping, sealing, and labeling automation systems'
                },
                {
                  title: 'Custom Engineering',
                  description: 'Bespoke machinery design for unique manufacturing requirements'
                },
                {
                  title: 'Process Automation',
                  description: 'Complete production line integration and control systems'
                }
              ].map((area, index) => (
                <div key={index} className={`glass-effect p-6 rounded-xl succession-${Math.min(index + 1, 6)}`} style={{ animationDelay: `${1.2 + index * 0.1}s` }}>
                  <h3 className="text-xl font-bold mb-3 text-white">{area.title}</h3>
                  <p className="text-gray-300">{area.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
