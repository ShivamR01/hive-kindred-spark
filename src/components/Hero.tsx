import { motion } from 'framer-motion';
import { Heart, Recycle, Users, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const floatingIcons = [
  { Icon: Heart, delay: 0, x: '10%', y: '20%' },
  { Icon: Recycle, delay: 0.5, x: '80%', y: '30%' },
  { Icon: Users, delay: 1, x: '20%', y: '70%' },
  { Icon: Sparkles, delay: 1.5, x: '70%', y: '60%' },
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

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8
    }
  }
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero">
      {/* Floating Background Icons */}
      <div className="absolute inset-0">
        {floatingIcons.map(({ Icon, delay, x, y }, index) => (
          <motion.div
            key={index}
            className="absolute opacity-20"
            style={{ left: x, top: y }}
            initial={{ scale: 0, rotate: -180 }}
            animate={{ 
              scale: [1, 1.2, 1], 
              rotate: [0, 10, -10, 0],
              y: [0, -20, 20, 0] 
            }}
            transition={{
              delay,
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Icon className="w-16 h-16 text-primary-foreground" />
          </motion.div>
        ))}
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="inline-flex items-center px-6 py-3 bg-primary-foreground/10 backdrop-blur-sm rounded-full mb-6 border border-primary-foreground/20"
          >
            <Sparkles className="w-5 h-5 mr-2 text-secondary" />
            <span className="text-primary-foreground font-medium">Turning waste into hope, together</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            <motion.span
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="block"
            >
              Donate.
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="block text-secondary"
            >
              Fix.
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="block text-accent-light"
            >
              Empower.
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="block"
            >
              Together at HelpHive.
            </motion.span>
          </h1>
        </motion.div>

        <motion.p 
          variants={itemVariants}
          className="text-xl md:text-2xl text-primary-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Join our community where every donation creates impact, every issue finds a solution, 
          and every person can make a difference. Transform waste into hope, problems into progress.
        </motion.p>

        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Button
            size="lg"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-float px-8 py-4 text-lg font-semibold group transition-bounce"
          >
            Start Donating
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-smooth" />
            </motion.div>
          </Button>
          
          <Button
            size="lg"
            variant="outline"
            className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-4 text-lg font-semibold backdrop-blur-sm"
          >
            Raise an Issue
          </Button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
        >
          {[
            { number: '10K+', label: 'Items Donated' },
            { number: '500+', label: 'Issues Fixed' },
            { number: '2K+', label: 'Happy Users' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">
                {stat.number}
              </div>
              <div className="text-primary-foreground/70 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-primary-foreground rounded-full mt-2"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}