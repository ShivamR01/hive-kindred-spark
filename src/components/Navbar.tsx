import { useState, Suspense } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Heart, 
  Users, 
  AlertCircle, 
  Info, 
  Mail, 
  User, 
  LogIn,
  Settings,
  LayoutDashboard
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { useStore } from '@/store/useStore';

const navItems = [
  { name: 'Home', href: '/', icon: Heart },
  { name: 'Donate & Share', href: '/donate', icon: Heart },
  { name: 'Crowdfix', href: '/crowdfix', icon: AlertCircle },
  { name: 'About', href: '/about', icon: Info },
  { name: 'Contact', href: '/contact', icon: Mail },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { user } = useStore();

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50 shadow-soft"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div 
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center shadow-medium"
            >
              <Heart className="w-5 h-5 text-primary-foreground" />
            </motion.div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold font-serif bg-gradient-to-r from-primary to-accent-dark bg-clip-text text-transparent">
                HelpHive
              </span>
              <span className="text-xs text-muted-foreground font-medium -mt-1">
                Professional Platform
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.href;
              
              return (
                <Link key={item.name} to={item.href}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-4 py-2.5 rounded-xl flex items-center space-x-2 transition-all duration-300 ${
                      isActive 
                        ? 'bg-primary text-primary-foreground shadow-medium font-medium' 
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="font-medium">{item.name}</span>
                  </motion.div>
                </Link>
              );
            })}
          </div>

          {/* Right Side Controls */}
          <div className="hidden md:flex items-center space-x-3">
            <ThemeToggle />
            
            {user.isLoggedIn ? (
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                  <LayoutDashboard className="w-4 h-4 mr-2" />
                  Dashboard
                </Button>
                <Button variant="ghost" size="icon" className="w-9 h-9 rounded-full">
                  <User className="w-4 h-4" />
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                  <User className="w-4 h-4 mr-2" />
                  Sign In
                </Button>
                <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-medium">
                  <LogIn className="w-4 h-4 mr-2" />
                  Join Now
                </Button>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="w-9 h-9 rounded-full text-muted-foreground hover:text-foreground"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{ 
            height: isOpen ? 'auto' : 0, 
            opacity: isOpen ? 1 : 0,
            marginTop: isOpen ? 8 : 0
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden glass rounded-xl shadow-medium"
        >
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.href;
              
              return (
                <Link 
                  key={item.name} 
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center space-x-3 px-3 py-3 rounded-lg transition-all duration-300 ${
                    isActive 
                      ? 'bg-primary text-primary-foreground font-medium' 
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              );
            })}
            
            <div className="flex flex-col space-y-2 pt-3 border-t border-border/50">
              {user.isLoggedIn ? (
                <>
                  <Button variant="ghost" size="sm" className="justify-start">
                    <LayoutDashboard className="w-4 h-4 mr-2" />
                    Dashboard
                  </Button>
                  <Button variant="ghost" size="sm" className="justify-start">
                    <User className="w-4 h-4 mr-2" />
                    Profile
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="ghost" size="sm" className="justify-start">
                    <User className="w-4 h-4 mr-2" />
                    Sign In
                  </Button>
                  <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    <LogIn className="w-4 h-4 mr-2" />
                    Join Now
                  </Button>
                </>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}