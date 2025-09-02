import { motion } from 'framer-motion';
import { useState } from 'react';
import { Heart, Book, Shirt, Laptop, Home, Filter, Search, Plus } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const categories = [
  { icon: Book, name: 'Books', count: 120, color: 'text-primary' },
  { icon: Shirt, name: 'Clothes', count: 89, color: 'text-secondary-foreground' },
  { icon: Laptop, name: 'Electronics', count: 45, color: 'text-accent' },
  { icon: Home, name: 'Household', count: 67, color: 'text-success' },
];

const sampleDonations = [
  {
    id: 1,
    title: 'Programming Books Collection',
    category: 'Books',
    location: 'San Francisco, CA',
    image: '/placeholder.svg',
    donor: 'Sarah Chen',
    description: 'Collection of 15 programming books including JavaScript, React, and Python guides.',
    timePosted: '2 hours ago'
  },
  {
    id: 2,
    title: 'Winter Jackets (Size M-L)',
    category: 'Clothes',
    location: 'Oakland, CA',
    image: '/placeholder.svg',
    donor: 'Mike Rodriguez',
    description: '3 warm winter jackets in excellent condition. Perfect for the upcoming season.',
    timePosted: '5 hours ago'
  },
  {
    id: 3,
    title: 'Gaming Setup - Monitor & Keyboard',
    category: 'Electronics',
    location: 'Berkeley, CA',
    image: '/placeholder.svg',
    donor: 'Alex Kim',
    description: '24" monitor and mechanical keyboard. Upgrading my setup, both work perfectly.',
    timePosted: '1 day ago'
  },
];

export default function Donate() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background"
    >
      <Navbar />
      
      {/* Header Section */}
      <section className="pt-20 pb-12 gradient-hero">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              Donate & Share
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-8">
              Turn your unused items into someone's treasure. Every donation creates a positive ripple effect in our community.
            </p>
            <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-float">
              <Plus className="w-5 h-5 mr-2" />
              List an Item
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Browse Categories</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {categories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card className="cursor-pointer border-0 shadow-eco hover:shadow-float transition-smooth gradient-card">
                      <CardContent className="p-6 text-center">
                        <Icon className={`w-8 h-8 mx-auto mb-3 ${category.color}`} />
                        <h3 className="font-semibold text-foreground mb-1">{category.name}</h3>
                        <Badge variant="secondary" className="text-xs">
                          {category.count} items
                        </Badge>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Search & Filters */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-4 mb-8"
          >
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                placeholder="Search donations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 gradient-card border-0 shadow-eco"
              />
            </div>
            <Button variant="outline" className="gradient-card border-0 shadow-eco">
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
          </motion.div>

          {/* Donations Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {sampleDonations.map((donation, index) => (
              <motion.div
                key={donation.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="border-0 shadow-eco hover:shadow-float transition-smooth gradient-card">
                  <CardContent className="p-0">
                    <div className="h-48 bg-muted rounded-t-lg flex items-center justify-center">
                      <Heart className="w-12 h-12 text-muted-foreground/50" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <Badge variant="secondary" className="text-xs">
                          {donation.category}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{donation.timePosted}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {donation.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                        {donation.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs text-muted-foreground">by {donation.donor}</p>
                          <p className="text-xs text-muted-foreground">{donation.location}</p>
                        </div>
                        <Button size="sm" className="gradient-primary text-primary-foreground shadow-eco">
                          <Heart className="w-4 h-4 mr-1" />
                          Claim
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
}