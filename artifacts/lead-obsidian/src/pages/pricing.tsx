import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layout } from "@/components/layout";
import { Link } from "wouter";
import { Check, ChevronDown } from "lucide-react";

function FaqItem({ question, answer }: { question: string, answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-outline-variant/20 py-6">
      <button 
        onClick={() => setOpen(!open)} 
        className="w-full flex justify-between items-center text-left group"
      >
        <span className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">{question}</span>
        <div className={`p-2 rounded-full bg-surface-container-high transition-transform duration-300 ${open ? 'rotate-180 bg-primary/10 text-primary' : 'text-muted-foreground'}`}>
          <ChevronDown className="w-5 h-5" />
        </div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }} 
            animate={{ height: 'auto', opacity: 1 }} 
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pt-4 text-on-surface-variant leading-relaxed pr-8">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <Layout>
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Simple, <span className="text-gradient">Transparent Pricing</span>
          </h1>
          <p className="text-lg text-on-surface-variant max-w-2xl mx-auto mb-12">
            No hidden fees. Scale your pipeline with plans designed for growth.
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4 mb-16">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>Monthly</span>
            <button 
              onClick={() => setIsAnnual(!isAnnual)}
              className="w-16 h-8 rounded-full bg-surface-container-highest border border-outline-variant/30 relative flex items-center px-1 cursor-pointer transition-colors hover:border-primary/50"
            >
              <motion.div 
                className="w-6 h-6 rounded-full bg-primary shadow-md"
                animate={{ x: isAnnual ? 32 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </button>
            <span className={`text-sm font-medium flex items-center gap-2 ${isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
              Annually 
              <span className="text-[10px] bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full uppercase tracking-wider font-bold">Save 20%</span>
            </span>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-left items-center">
          {/* Starter */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="bg-surface-container p-8 rounded-3xl border border-outline-variant/20 shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-2">Starter</h3>
            <p className="text-sm text-on-surface-variant mb-6 h-10">Perfect for solo founders testing out social selling.</p>
            <div className="mb-8">
              <span className="text-4xl font-extrabold">${isAnnual ? '49' : '59'}</span>
              <span className="text-muted-foreground">/mo</span>
            </div>
            <Link href="/demo" className="block text-center w-full py-3 rounded-xl bg-surface-container-highest font-bold hover:bg-surface-bright border border-outline-variant/30 transition-all mb-8">
              Start Free Trial
            </Link>
            <ul className="space-y-4">
              {['500 leads / month', 'LinkedIn scraping only', 'Basic email enrichment', 'CSV Export'].map((f, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-on-surface-variant">
                  <Check className="w-5 h-5 text-muted-foreground" /> {f}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Growth */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="bg-surface-container-high p-8 rounded-3xl border border-primary/50 shadow-2xl shadow-primary/10 relative transform md:-translate-y-4"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
              Most Popular
            </div>
            <h3 className="text-2xl font-bold mb-2 text-primary">Growth</h3>
            <p className="text-sm text-on-surface-variant mb-6 h-10">For active sales teams who need a serious pipeline boost.</p>
            <div className="mb-8">
              <span className="text-5xl font-extrabold text-white">${isAnnual ? '149' : '189'}</span>
              <span className="text-muted-foreground">/mo</span>
            </div>
            <Link href="/demo" className="block text-center w-full py-4 rounded-xl bg-gradient-primary font-bold hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 transition-all active:translate-y-0 mb-8">
              Get Started Now
            </Link>
            <ul className="space-y-4">
              {['5,000 leads / month', 'All platforms (LI, TG, X)', 'Waterfall enrichment (Emails/Phones)', 'Native CRM Syncing', 'Smart Sequences'].map((f, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-foreground">
                  <Check className="w-5 h-5 text-primary" /> {f}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Enterprise */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="bg-surface-container p-8 rounded-3xl border border-outline-variant/20 shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
            <p className="text-sm text-on-surface-variant mb-6 h-10">Custom setups for high-volume revenue teams.</p>
            <div className="mb-8 flex items-end h-12">
              <span className="text-4xl font-extrabold">Custom</span>
            </div>
            <Link href="/demo" className="block text-center w-full py-3 rounded-xl bg-surface-container-highest font-bold hover:bg-surface-bright border border-outline-variant/30 transition-all mb-8">
              Talk to Sales
            </Link>
            <ul className="space-y-4">
              {['Unlimited leads', 'Custom platform integrations', 'Dedicated Account Manager', 'White-labeling options', 'SLA & Priority Support'].map((f, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-on-surface-variant">
                  <Check className="w-5 h-5 text-muted-foreground" /> {f}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
        <div className="space-y-2">
          <FaqItem 
            question="Is LeadObsidian safe to use with my LinkedIn account?" 
            answer="Yes. We simulate natural human behavior and operate completely within platform rate limits to ensure your accounts stay perfectly safe. For enterprise plans, we also offer dedicated proxy support."
          />
          <FaqItem 
            question="What is Waterfall Enrichment?" 
            answer="Instead of relying on one data provider, we cascade through 4+ premium data providers simultaneously (like Apollo, Hunter, etc.) to maximize the chance of finding verified work emails and direct dials."
          />
          <FaqItem 
            question="Can I push data directly to HubSpot?" 
            answer="Absolutely. Our native CRM integrations allow you to automatically map scraped profiles and enriched emails directly into HubSpot or Salesforce contacts with zero manual entry."
          />
          <FaqItem 
            question="How do Telegram insights work?" 
            answer="You connect your account to relevant industry groups, and our AI constantly monitors the chat. When someone asks a question indicating intent (e.g., 'Looking for a new CRM...'), we flag the prospect, enrich their handle, and drop them into your pipeline."
          />
        </div>
      </section>
    </Layout>
  );
}
