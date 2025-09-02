import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, Globe } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    info: 'hello@helphive.com',
    description: 'Send us an email anytime',
    color: 'text-primary'
  },
  {
    icon: Phone,
    title: 'Call Us',
    info: '+1 (555) 123-4567',
    description: 'Mon-Fri, 9AM-6PM PST',
    color: 'text-accent'
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    info: '123 Eco Street, San Francisco, CA 94102',
    description: 'Our headquarters',
    color: 'text-secondary-foreground'
  }
];

const faqs = [
  {
    question: 'How does HelpHive work?',
    answer: 'HelpHive connects people who have items to donate with those who need them, and enables communities to raise and solve issues together. Simply create an account, list items or report issues, and engage with your community.'
  },
  {
    question: 'Is HelpHive free to use?',
    answer: 'Yes! HelpHive is completely free for all users. We believe in creating positive impact without barriers. Our platform is supported by our community and partners who share our vision.'
  },
  {
    question: 'How do I ensure safe transactions?',
    answer: 'We recommend meeting in public places, checking user ratings and reviews, and following our safety guidelines. All users can rate and review each other to build trust in our community.'
  },
  {
    question: 'Can I donate or raise issues for other cities?',
    answer: 'Currently, HelpHive focuses on local communities to ensure effective coordination. You can use the platform in any city where we operate, and we\'re expanding to new locations regularly.'
  },
  {
    question: 'How do I track the impact of my contributions?',
    answer: 'Your profile dashboard shows all your donations, issues raised, problems solved, and community reviews. You can see your personal impact stats and community contributions over time.'
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
              Contact Us
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
              Have questions, feedback, or need help? We'd love to hear from you. 
              Reach out and let's make HelpHive even better together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Get in Touch</h2>
            <p className="text-lg text-muted-foreground">
              Choose the best way to reach us
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="h-full border-0 shadow-eco hover:shadow-float transition-smooth gradient-card">
                    <CardContent className="p-8 text-center">
                      <Icon className={`w-12 h-12 mx-auto mb-4 ${info.color}`} />
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {info.title}
                      </h3>
                      <p className="text-lg font-medium text-foreground mb-2">
                        {info.info}
                      </p>
                      <p className="text-muted-foreground">
                        {info.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Contact Form */}
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-eco gradient-card">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-foreground font-medium">Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your name"
                          className="mt-2 gradient-card border-0 shadow-eco"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-foreground font-medium">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your@email.com"
                          className="mt-2 gradient-card border-0 shadow-eco"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="subject" className="text-foreground font-medium">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="What's this about?"
                        className="mt-2 gradient-card border-0 shadow-eco"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="message" className="text-foreground font-medium">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us more about your question or feedback..."
                        rows={5}
                        className="mt-2 gradient-card border-0 shadow-eco resize-none"
                        required
                      />
                    </div>
                    
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full gradient-primary text-primary-foreground shadow-float hover-glow group"
                    >
                      <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-smooth" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Office Hours & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <Card className="border-0 shadow-eco gradient-card">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <Clock className="w-8 h-8 text-primary mr-3" />
                    <h3 className="text-xl font-bold text-foreground">Office Hours</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Monday - Friday</span>
                      <span className="text-foreground font-medium">9:00 AM - 6:00 PM PST</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Saturday</span>
                      <span className="text-foreground font-medium">10:00 AM - 4:00 PM PST</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sunday</span>
                      <span className="text-foreground font-medium">Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-eco gradient-card">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <MessageCircle className="w-8 h-8 text-accent mr-3" />
                    <h3 className="text-xl font-bold text-foreground">Quick Response</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    We typically respond to all inquiries within 24 hours. For urgent issues, 
                    please call us directly during business hours.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-eco gradient-card">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <Globe className="w-8 h-8 text-secondary-foreground mr-3" />
                    <h3 className="text-xl font-bold text-foreground">Global Community</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    While our main office is in San Francisco, HelpHive serves communities 
                    worldwide. Contact us regardless of your location!
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 bg-background-secondary">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">
              Find quick answers to common questions
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border-0 shadow-eco gradient-card">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-foreground mb-4">
                      {faq.question}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
}