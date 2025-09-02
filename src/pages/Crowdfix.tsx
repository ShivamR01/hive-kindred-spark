import { motion } from 'framer-motion';
import { useState } from 'react';
import { AlertCircle, MapPin, Users, Clock, Plus, Filter, Search, CheckCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const issueTypes = [
  { name: 'Infrastructure', count: 34, color: 'bg-primary' },
  { name: 'Environment', count: 28, color: 'bg-accent' },
  { name: 'Safety', count: 19, color: 'bg-destructive' },
  { name: 'Community', count: 42, color: 'bg-secondary' },
];

const sampleIssues = [
  {
    id: 1,
    title: 'Pothole on Main Street causing traffic issues',
    category: 'Infrastructure',
    location: 'Main St & 5th Ave, San Francisco',
    status: 'Open',
    supporters: 23,
    timePosted: '3 hours ago',
    description: 'Large pothole has formed after recent rains, causing vehicles to swerve dangerously.',
    urgency: 'High'
  },
  {
    id: 2,
    title: 'Community garden needs volunteers for cleanup',
    category: 'Environment',
    location: 'Golden Gate Park, San Francisco',
    status: 'In Progress',
    supporters: 45,
    timePosted: '1 day ago',
    description: 'Our community garden needs help with weekly maintenance and seasonal planting.',
    urgency: 'Medium'
  },
  {
    id: 3,
    title: 'Broken streetlight creating safety hazard',
    category: 'Safety',
    location: 'Pine St & Market St, San Francisco',
    status: 'Fixed',
    supporters: 67,
    timePosted: '3 days ago',
    description: 'Streetlight has been out for weeks, making the intersection dangerous at night.',
    urgency: 'High'
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Open': return 'text-destructive bg-destructive/10';
    case 'In Progress': return 'text-warning bg-warning/10';
    case 'Fixed': return 'text-success bg-success/10';
    default: return 'text-muted-foreground bg-muted';
  }
};

const getUrgencyColor = (urgency: string) => {
  switch (urgency) {
    case 'High': return 'text-destructive bg-destructive/10';
    case 'Medium': return 'text-warning bg-warning/10';
    case 'Low': return 'text-success bg-success/10';
    default: return 'text-muted-foreground bg-muted';
  }
};

export default function Crowdfix() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('All');

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
              Crowdfix
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-8">
              Spot a problem? Let's fix it together. Raise issues, gather support, and create positive change in your community.
            </p>
            <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-float">
              <Plus className="w-5 h-5 mr-2" />
              Raise an Issue
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Issue Types */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Issue Categories</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {issueTypes.map((type, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="cursor-pointer border-0 shadow-eco hover:shadow-float transition-smooth gradient-card">
                    <CardContent className="p-6 text-center">
                      <div className={`w-12 h-12 ${type.color} rounded-lg mx-auto mb-3 flex items-center justify-center`}>
                        <AlertCircle className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-1">{type.name}</h3>
                      <Badge variant="secondary" className="text-xs">
                        {type.count} issues
                      </Badge>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
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
                placeholder="Search issues..."
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

          {/* Issues Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1 }}
            className="space-y-6"
          >
            {sampleIssues.map((issue, index) => (
              <motion.div
                key={issue.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                <Card className="border-0 shadow-eco hover:shadow-float transition-smooth gradient-card">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <Badge variant="secondary" className="text-xs">
                            {issue.category}
                          </Badge>
                          <Badge className={`text-xs ${getStatusColor(issue.status)}`}>
                            {issue.status === 'Fixed' && <CheckCircle className="w-3 h-3 mr-1" />}
                            {issue.status}
                          </Badge>
                          <Badge className={`text-xs ${getUrgencyColor(issue.urgency)}`}>
                            {issue.urgency}
                          </Badge>
                        </div>
                        
                        <h3 className="text-xl font-semibold text-foreground mb-3">
                          {issue.title}
                        </h3>
                        
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {issue.description}
                        </p>
                        
                        <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {issue.location}
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {issue.timePosted}
                          </div>
                          <div className="flex items-center">
                            <Users className="w-4 h-4 mr-1" />
                            {issue.supporters} supporters
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-row md:flex-col gap-3">
                        <Button
                          size="sm"
                          variant={issue.status === 'Fixed' ? 'secondary' : 'default'}
                          className={issue.status === 'Fixed' 
                            ? 'cursor-default' 
                            : 'gradient-primary text-primary-foreground shadow-eco'
                          }
                          disabled={issue.status === 'Fixed'}
                        >
                          {issue.status === 'Fixed' ? (
                            <>
                              <CheckCircle className="w-4 h-4 mr-1" />
                              Fixed
                            </>
                          ) : (
                            'Support'
                          )}
                        </Button>
                        
                        {issue.status !== 'Fixed' && (
                          <Button size="sm" variant="outline" className="gradient-card border-0 shadow-eco">
                            Help Fix
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16 p-8 rounded-2xl gradient-card shadow-eco"
          >
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Don't see your issue listed?
            </h3>
            <p className="text-muted-foreground mb-6">
              Be the first to report it and rally your community to create positive change.
            </p>
            <Button size="lg" className="gradient-primary text-primary-foreground shadow-float">
              <Plus className="w-5 h-5 mr-2" />
              Report New Issue
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
}