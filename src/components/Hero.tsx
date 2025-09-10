import { Suspense } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Globe, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Globe3D from '@/components/Globe3D';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background-secondary to-background-tertiary">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 gradient-primary rounded-full blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-secondary/20 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-0 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen">
        {/* Content Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 glass rounded-full text-sm font-medium text-primary border border-primary/20"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Professional Donation Platform
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              <span className="font-serif bg-gradient-to-r from-primary via-primary-light to-secondary bg-clip-text text-transparent">
                Donate. Fix. Empower.
              </span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground font-medium leading-relaxed">
              Together at <span className="font-serif font-bold text-foreground">HelpHive</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-large group"
            >
              <Heart className="w-5 h-5 mr-2" />
              Donate Now
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button variant="outline" size="lg" className="glass border-2 border-primary/20">
              <Globe className="w-5 h-5 mr-2" />
              Raise an Issue
            </Button>
          </motion.div>
        </motion.div>

        {/* Globe Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative"
        >
          <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px]">
            <div className="absolute inset-0 glass rounded-2xl sm:rounded-3xl shadow-large overflow-hidden">
              <Suspense fallback={
                <div className="w-full h-full flex items-center justify-center">
                  <div className="animate-spin w-8 h-8 border-2 border-primary border-t-transparent rounded-full" />
                </div>
              }>
                <Globe3D />
              </Suspense>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}