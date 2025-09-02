import { motion } from 'framer-motion';
import { Heart, Users, Globe, Recycle, Target, Eye, Award } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';

const values = [
  {
    icon: Heart,
    title: 'Community First',
    description: 'We believe in the power of community-driven change and mutual support.',
    color: 'text-primary'
  },
  {
    icon: Globe,
    title: 'Environmental Impact',
    description: 'Every donation reduces waste and promotes sustainable living practices.',
    color: 'text-accent'
  },
  {
    icon: Users,
    title: 'Inclusive Access',
    description: 'Creating equal opportunities for everyone to give, receive, and contribute.',
    color: 'text-secondary-foreground'
  },
  {
    icon: Recycle,
    title: 'Circular Economy',
    description: 'Transforming waste into resources through community-powered redistribution.',
    color: 'text-success'
  }
];

const timeline = [
  {
    year: '2023',
    title: 'The Idea',
    description: 'Founded with the vision of creating a platform where waste becomes hope and problems find solutions through community action.'
  },
  {
    year: '2024',
    title: 'Community Growth',
    description: 'Reached 5,000 active users and facilitated over 10,000 successful donations across 50+ cities.'
  },
  {
    year: '2024',
    title: 'Crowdfix Launch',
    description: 'Introduced our innovative crowdfixing feature, enabling communities to collaboratively solve local issues.'
  },
  {
    year: 'Future',
    title: 'Global Impact',
    description: 'Expanding to 100+ cities worldwide with AI-powered matching and enhanced community features.'
  }
];

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background"
    >
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 gradient-hero">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              About HelpHive
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
              We're building a world where every unused item finds a new purpose and every community problem finds a collaborative solution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <div className="flex items-center mb-4">
                  <Target className="w-8 h-8 text-primary mr-3" />
                  <h2 className="text-3xl font-bold text-foreground">Our Mission</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To create a sustainable, connected world where communities thrive through 
                  resource sharing and collaborative problem-solving. We transform waste into 
                  opportunity and empower individuals to create meaningful change.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <div className="flex items-center mb-4">
                  <Eye className="w-8 h-8 text-accent mr-3" />
                  <h2 className="text-3xl font-bold text-foreground">Our Vision</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A future where no resource goes to waste and no problem goes unsolved. 
                  Where communities are self-sufficient, supportive, and sustainable, 
                  creating positive impact through collective action and shared responsibility.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-6 bg-background-secondary">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These core principles guide everything we do and shape the HelpHive community.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <Card className="h-full border-0 shadow-eco hover:shadow-float transition-smooth gradient-card">
                    <CardContent className="p-8 text-center">
                      <Icon className={`w-12 h-12 mx-auto mb-4 ${value.color}`} />
                      <h3 className="text-xl font-bold text-foreground mb-3">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Journey</h2>
            <p className="text-lg text-muted-foreground">
              From idea to impact - the HelpHive story continues to unfold.
            </p>
          </motion.div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex items-center gap-8 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}
              >
                <div className="flex-1">
                  <Card className="border-0 shadow-eco gradient-card">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-3">
                        <div className="w-3 h-3 bg-primary rounded-full mr-3"></div>
                        <span className="text-2xl font-bold text-primary">{item.year}</span>
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="w-4 h-4 bg-primary rounded-full flex-shrink-0"></div>
                <div className="flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 gradient-hero">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Our Impact So Far
            </h2>
            <p className="text-lg text-primary-foreground/80">
              Together, we're making a real difference in communities worldwide.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: '50K+', label: 'Items Donated', icon: Heart },
              { number: '5K+', label: 'Active Users', icon: Users },
              { number: '1.2K+', label: 'Issues Fixed', icon: Award },
              { number: '50+', label: 'Cities Served', icon: Globe },
            ].map((stat, index) => {
              const Icon = stat.icon;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <Icon className="w-12 h-12 text-secondary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary-foreground mb-2">
                    {stat.number}
                  </div>
                  <div className="text-primary-foreground/80 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
}