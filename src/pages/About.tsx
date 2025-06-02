import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Users, Award, Globe, TrendingUp } from 'lucide-react';
import { useState, useEffect } from 'react';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, AreaChart, Area } from 'recharts';

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

  // Data for industrialization growth chart
  const industrializationData = [
    { year: '2019', manufacturing: 245, automation: 180, efficiency: 165 },
    { year: '2020', manufacturing: 298, automation: 220, efficiency: 190 },
    { year: '2021', manufacturing: 356, automation: 275, efficiency: 225 },
    { year: '2022', manufacturing: 420, automation: 340, efficiency: 280 },
    { year: '2023', manufacturing: 495, automation: 410, efficiency: 340 },
    { year: '2024', manufacturing: 580, automation: 485, efficiency: 410 }
  ];

  const chartConfig = {
    manufacturing: {
      label: 'Manufacturing Output',
      color: '#dc2626'
    },
    automation: {
      label: 'Automation Index',
      color: '#991b1b'
    },
    efficiency: {
      label: 'Efficiency Rating',
      color: '#ef4444'
    }
  };

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

          {/* Industrialization Growth Section */}
          <div className="mb-20">
            <div className="text-center mb-12 succession-6">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-gradient">Industrialization Growth Trends</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                The global industrial landscape is experiencing unprecedented growth, driven by technological advancement, 
                automation integration, and increasing demand for efficient manufacturing solutions.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="glass-effect p-8 rounded-xl succession-6" style={{ animationDelay: '1.2s' }}>
                <h3 className="text-2xl font-bold mb-6 text-red-400">Industry Growth Statistics</h3>
                <ChartContainer config={chartConfig} className="h-80">
                  <AreaChart data={industrializationData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                    <XAxis 
                      dataKey="year" 
                      stroke="#9ca3af"
                      fontSize={12}
                    />
                    <YAxis 
                      stroke="#9ca3af"
                      fontSize={12}
                    />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Area
                      type="monotone"
                      dataKey="manufacturing"
                      stackId="1"
                      stroke="#dc2626"
                      fill="rgba(220, 38, 38, 0.3)"
                      strokeWidth={2}
                    />
                    <Area
                      type="monotone"
                      dataKey="automation"
                      stackId="1"
                      stroke="#991b1b"
                      fill="rgba(153, 27, 27, 0.3)"
                      strokeWidth={2}
                    />
                    <Area
                      type="monotone"
                      dataKey="efficiency"
                      stackId="1"
                      stroke="#ef4444"
                      fill="rgba(239, 68, 68, 0.3)"
                      strokeWidth={2}
                    />
                  </AreaChart>
                </ChartContainer>
              </div>

              <div className="space-y-6 succession-6" style={{ animationDelay: '1.4s' }}>
                <div className="glass-effect p-6 rounded-xl">
                  <h4 className="text-xl font-bold mb-3 text-white">Manufacturing Revolution</h4>
                  <p className="text-gray-300">
                    Global manufacturing output has increased by 137% since 2019, with smart factories 
                    and automated systems leading the transformation across all industrial sectors.
                  </p>
                </div>
                
                <div className="glass-effect p-6 rounded-xl">
                  <h4 className="text-xl font-bold mb-3 text-white">Automation Integration</h4>
                  <p className="text-gray-300">
                    Automation adoption has surged by 169%, with AI-driven machinery and robotics 
                    becoming essential components of modern production lines worldwide.
                  </p>
                </div>
                
                <div className="glass-effect p-6 rounded-xl">
                  <h4 className="text-xl font-bold mb-3 text-white">Efficiency Optimization</h4>
                  <p className="text-gray-300">
                    Production efficiency has improved by 148% through advanced monitoring systems, 
                    predictive maintenance, and intelligent process optimization technologies.
                  </p>
                </div>
              </div>
            </div>
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
