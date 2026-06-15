'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from '../ui/button';

const plans = [
  {
    name: 'Basic Landing Page',
    price: '$999',
    description: 'Perfect for individuals and small businesses needing a clean online presence.',
    features: [
      'Custom Design & Layout',
      'Mobile Responsive',
      'SEO Optimization Basics',
      'Contact Form Integration',
      '1 Week Delivery',
    ],
    popular: false,
  },
  {
    name: 'Full Web App',
    price: '$2,499',
    description: 'A complete, scalable web application tailored to your business needs.',
    features: [
      'Everything in Basic',
      'Complex Functionality',
      'Database Integration',
      'User Authentication',
      'Premium Animations',
      '3 Weeks Delivery',
    ],
    popular: true,
  },
  {
    name: 'E-Commerce / Enterprise',
    price: 'Custom',
    description: 'Large scale platforms with payment gateways and complex architectures.',
    features: [
      'Custom Architecture',
      'Payment Integrations',
      'CMS / Admin Dashboard',
      'Advanced Security',
      'Priority Support',
      'Timeline TBD',
    ],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 relative bg-[#fcfcfc] dark:bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="font-serif text-4xl md:text-5xl font-medium mb-6 text-black dark:text-white"
          >
            Straightforward Pricing.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-gray-600 dark:text-gray-400 font-light"
          >
            No hidden fees. Just transparent packages outlining exactly what I deliver as a developer to help your business grow.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className={`relative bg-white dark:bg-[#111] border rounded-3xl p-8 flex flex-col ${
                plan.popular 
                  ? 'border-[#3A36FF] shadow-[0_0_40px_rgba(58,54,255,0.15)] dark:shadow-[0_0_40px_rgba(58,54,255,0.05)]' 
                  : 'border-gray-200 dark:border-gray-800'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#3A36FF] text-white px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wider shadow-[0_0_15px_rgba(58,54,255,0.4)]">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-medium mb-2 text-black dark:text-white">{plan.name}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 h-10">{plan.description}</p>
              <div className="mb-8">
                <span className="text-4xl font-serif font-medium text-black dark:text-white">{plan.price}</span>
              </div>
              
              <div className="flex-1">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300">
                      <Check className="w-5 h-5 text-[#3A36FF] shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button 
                className={`w-full py-6 rounded-xl text-base ${
                  plan.popular 
                    ? 'bg-[#3A36FF] hover:bg-[#2b27db] text-white' 
                    : 'bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200'
                }`}
              >
                Choose {plan.name}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
