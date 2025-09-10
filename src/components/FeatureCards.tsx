import { motion } from 'framer-motion';
import { Heart, AlertCircle, Users, ArrowRight, Sparkles, Recycle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    icon: Heart,
    title: 'Donate & Share',
    description: 'Turn your unused items into someone else\'s treasure. Books, clothes, gadgets - every donation makes a difference.',
    gradient: 'from-primary to-primary-light',
    bgColor: 'bg-primary/5',
    iconColor: 'text-primary',
    cta: 'List an Item',
    href: '/donate'
  },
  {
    icon: AlertCircle,
    title: 'Crowdfix',
    description: 'Spot a problem in your community? Raise it here and let\'s fix it together. From potholes to park cleanups.',
    gradient: 'from-accent to-accent-light',
    bgColor: 'bg-accent/5',
    iconColor: 'text-accent',
    cta: 'Raise an Issue',
    href: '/crowdfix'
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Join thousands of changemakers. Connect, collaborate, and create positive impact in your neighborhood.',
    gradient: 'from-secondary to-secondary-light',
    bgColor: 'bg-secondary/5',
    iconColor: 'text-secondary-foreground',
    cta: 'Join Community',
    href: '/about'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6
    }
  }
};

export default function FeatureCards() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-6">
            <Sparkles className="w-4 h-4 mr-2 text-primary" />
            <span className="text-primary font-medium">How HelpHive Works</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Three Ways to Make Impact
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you're sharing resources, solving problems, or building community - 
            there's a place for you in the HelpHive ecosystem.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                  <Card className="h-full border-0 shadow-eco hover:shadow-float transition-smooth gradient-card">
                    <CardContent className="p-6 sm:p-8 text-center">
                    <motion.div
                      className={`w-16 h-16 mx-auto mb-6 rounded-2xl ${feature.bgColor} flex items-center justify-center`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className={`w-8 h-8 ${feature.iconColor}`} />
                    </motion.div>
                    
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                      {feature.title}
                    </h3>
                    
                    <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
                      {feature.description}
                    </p>
                    
                    <Button
                      className={`w-full bg-gradient-to-r ${feature.gradient} text-white shadow-eco hover:shadow-glow group transition-bounce`}
                    >
                      {feature.cta}
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-smooth" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 sm:mt-16 lg:mt-20 text-center"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto">
            {[
              { number: '50K+', label: 'Items Shared', icon: Recycle },
              { number: '1.2K+', label: 'Issues Fixed', icon: AlertCircle },
              { number: '5K+', label: 'Active Users', icon: Users },
              { number: '98%', label: 'Satisfaction', icon: Heart },
            ].map((stat, index) => {
              const Icon = stat.icon;
              
              return (
                <motion.div
                  key={index}
                  className="p-4 sm:p-6 rounded-xl gradient-card shadow-eco hover:shadow-float transition-smooth"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Icon className="w-6 sm:w-8 h-6 sm:h-8 text-primary mx-auto mb-2 sm:mb-3" />
                  <div className="text-2xl sm:text-3xl font-bold text-foreground mb-1 sm:mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm sm:text-base text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}