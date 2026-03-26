import { motion } from "framer-motion";
import { Link } from "wouter";
import { Layout } from "@/components/layout";
import { 
  ArrowRight, 
  CheckCircle2, 
  PlusCircle, 
  Share2, 
  Database, 
  Router, 
  Send, 
  Wand2, 
  FolderSync, 
  ArrowRightLeft,
  ArrowDown,
  Zap,
  Check
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const staggerItem = {
  hidden: { opacity: 0, x: 20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5 } }
};

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="z-10"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 text-primary text-xs font-bold tracking-[0.1em] uppercase mb-6 border border-primary/20">
              AI-Powered Prospecting
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-8">
              Turn Social Proof <br/>
              <span className="text-gradient">into Sales Pipe</span>
            </h1>
            <p className="text-lg text-on-surface-variant leading-relaxed mb-10 max-w-lg">
              Instantly capture high-intent prospects from LinkedIn, Telegram, and Twitter. Enrich data automatically and launch high-conversion outreach in seconds.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link href="/demo" className="bg-gradient-primary px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 transition-all active:translate-y-0">
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/demo" className="bg-surface-container-high text-foreground px-8 py-4 rounded-xl font-bold hover:bg-surface-bright border border-outline-variant/30 transition-colors">
                Book a Demo
              </Link>
            </div>
          </motion.div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Glassmorphism Capture Mockup */}
            <div className="bg-surface-container-low rounded-2xl border border-outline-variant/20 p-6 shadow-2xl relative overflow-hidden group">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_8px_rgba(239,68,68,0.5)]"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-[0_0_8px_rgba(234,179,8,0.5)]"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
                </div>
                <div className="px-3 py-1 bg-surface-container-highest rounded-lg text-[10px] text-on-surface-variant font-mono border border-outline-variant/30">
                  app.leadobsidian.ai/capture
                </div>
              </div>
              
              {/* Animated Capture Stream */}
              <motion.div 
                className="space-y-4"
                variants={staggerContainer}
                initial="hidden"
                animate="show"
              >
                <motion.div variants={staggerItem} className="p-4 bg-surface-container-high rounded-xl border-l-4 border-tertiary flex items-center justify-between shadow-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-surface-container-highest overflow-hidden border border-outline-variant/30">
                      {/* landing page hero tech professional avatar */}
                      <img className="w-full h-full object-cover" alt="Alex Rivera" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop"/>
                    </div>
                    <div>
                      <div className="text-sm font-bold">Alex Rivera</div>
                      <div className="text-[10px] text-on-surface-variant">CTO @ NexaFlow • Active on LinkedIn</div>
                    </div>
                  </div>
                  <CheckCircle2 className="text-tertiary w-6 h-6 fill-tertiary/20" />
                </motion.div>

                <motion.div variants={staggerItem} className="p-4 bg-surface-container-high/80 rounded-xl border-l-4 border-primary flex items-center justify-between shadow-md">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-surface-container-highest overflow-hidden border border-outline-variant/30">
                      {/* landing page hero woman executive avatar */}
                      <img className="w-full h-full object-cover" alt="Sarah Chen" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop"/>
                    </div>
                    <div>
                      <div className="text-sm font-bold">Sarah Chen</div>
                      <div className="text-[10px] text-on-surface-variant">Growth Lead @ Scale • Telegram member</div>
                    </div>
                  </div>
                  <PlusCircle className="text-primary w-6 h-6 fill-primary/20" />
                </motion.div>

                <motion.div variants={staggerItem} className="p-4 bg-surface-container-high/40 rounded-xl border-l-4 border-outline-variant/30 flex items-center justify-between blur-[0.5px]">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-surface-container-highest animate-pulse"></div>
                    <div className="space-y-2">
                      <div className="h-3 w-24 bg-surface-container-highest rounded animate-pulse"></div>
                      <div className="h-2 w-16 bg-surface-container-highest rounded animate-pulse"></div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-transparent to-transparent pointer-events-none"></div>
            </div>

            {/* Decorative Blobs */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary/20 blur-[100px] rounded-full -z-10 animate-pulse"></div>
            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-tertiary/15 blur-[80px] rounded-full -z-10"></div>
          </motion.div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-24 bg-surface-container-low border-y border-outline-variant/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeInUp} className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">One Click to Pipeline</h2>
              <p className="text-on-surface-variant text-lg">Stop manually scraping profiles. LeadObsidian bridges the gap between social signals and CRM data in real-time.</p>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center border border-outline-variant/20 shadow-lg">
                <Share2 className="text-primary w-5 h-5" />
              </div>
              <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center border border-outline-variant/20 shadow-lg">
                <Database className="text-primary w-5 h-5" />
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* LinkedIn Card */}
            <motion.div {...fadeInUp} className="md:col-span-2 bg-surface-container-high p-8 rounded-3xl border border-outline-variant/10 group hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500">
              <div className="flex items-start justify-between mb-12">
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-foreground">LinkedIn Connector</h3>
                  <p className="text-on-surface-variant max-w-sm leading-relaxed">Capture profiles, posts, and comments. We extract emails and intent signals directly from the professional network.</p>
                </div>
                <div className="p-3 bg-[#0077B5]/10 rounded-2xl">
                  <Share2 className="w-8 h-8 text-[#0077B5]" />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {['Profiles', 'Groups', 'Events'].map((item) => (
                  <div key={item} className="h-24 bg-surface-container-highest rounded-2xl flex items-center justify-center border border-outline-variant/10 group-hover:border-primary/20 transition-colors">
                    <span className="text-[10px] md:text-xs font-bold tracking-widest text-on-surface-variant uppercase">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Telegram Card */}
            <motion.div {...fadeInUp} transition={{ delay: 0.1, duration: 0.6 }} className="bg-surface-container-high p-8 rounded-3xl flex flex-col justify-between border-l-4 border-primary border-y border-r border-outline-variant/10 shadow-lg">
              <div>
                <Send className="w-10 h-10 text-primary mb-6" />
                <h3 className="text-2xl font-bold mb-3 text-foreground">Telegram Insights</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">Monitor industry groups and automatically flag potential leads talking about your problem space.</p>
              </div>
              <div className="mt-8 pt-8 border-t border-outline-variant/20">
                <Link href="/features" className="flex items-center gap-2 text-primary font-bold text-sm hover:underline">
                  View Integration <ArrowRightLeft className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Enrichment Card */}
            <motion.div {...fadeInUp} className="bg-surface-container-high p-8 rounded-3xl border border-outline-variant/10 border-l-4 border-l-tertiary shadow-lg">
              <Wand2 className="w-10 h-10 text-tertiary mb-6" />
              <h3 className="text-2xl font-bold mb-3 text-foreground">Auto-Enrich</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">Don't settle for just a name. We pull company revenue, tech stack, and verified work emails automatically.</p>
            </motion.div>

            {/* Export Card */}
            <motion.div {...fadeInUp} transition={{ delay: 0.1, duration: 0.6 }} className="md:col-span-2 bg-gradient-to-br from-primary-container to-surface-container-high p-8 rounded-3xl flex flex-col md:flex-row items-start md:items-center gap-8 overflow-hidden relative shadow-xl shadow-primary/10 border border-primary/20">
              <div className="flex-1 z-10">
                <h3 className="text-2xl font-bold mb-3 text-white">Sync Everywhere</h3>
                <p className="text-primary-foreground/90 text-sm max-w-md leading-relaxed">Native integrations with Salesforce, HubSpot, and Pipedrive. Keep your CRM fresh without manual entry.</p>
              </div>
              <div className="flex -space-x-4 z-10">
                <div className="w-16 h-16 rounded-full bg-surface-container-highest border-4 border-surface-container-high flex items-center justify-center shadow-lg">
                  <FolderSync className="text-primary w-6 h-6" />
                </div>
                <div className="w-16 h-16 rounded-full bg-surface-container-highest border-4 border-surface-container-high flex items-center justify-center shadow-lg">
                  <Database className="text-tertiary w-6 h-6" />
                </div>
              </div>
              {/* Decorative background element */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/30 blur-[80px] rounded-full"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Master Workflow Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Master the Outreach Flow</h2>
            <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">Set it and forget it. Our visual builder lets you create complex multi-channel sequences that feel human.</p>
          </motion.div>

          <div className="bg-surface-container-lowest p-8 md:p-16 rounded-[2.5rem] border border-outline-variant/20 relative shadow-2xl">
            {/* Sequence Visualization */}
            <div className="flex flex-col lg:flex-row items-center gap-8 relative">
              
              {/* Step 1 */}
              <motion.div 
                className="flex-1 w-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="p-8 bg-surface-container rounded-3xl border border-outline-variant/10 group hover:border-primary/50 transition-all shadow-lg hover:shadow-primary/5">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">01</div>
                    <span className="font-bold text-base">Trigger: Social Lead</span>
                  </div>
                  <div className="text-sm text-on-surface-variant leading-relaxed bg-surface-container-low p-4 rounded-xl border border-outline-variant/5">
                    When a lead is captured from <span className="text-primary font-medium">LinkedIn Sales Navigator</span>...
                  </div>
                </div>
              </motion.div>

              <ArrowRight className="text-outline-variant hidden lg:block w-8 h-8" />
              <ArrowDown className="text-outline-variant lg:hidden w-8 h-8" />

              {/* Step 2 */}
              <motion.div 
                className="flex-1 w-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="p-8 bg-surface-container rounded-3xl border border-outline-variant/10 group hover:border-primary/50 transition-all shadow-lg hover:shadow-primary/5">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">02</div>
                    <span className="font-bold text-base">Action: Auto Enrich</span>
                  </div>
                  <div className="flex items-center gap-4 bg-surface-container-low p-4 rounded-xl border border-outline-variant/5">
                    <div className="h-2 flex-1 bg-surface-container-highest rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-primary to-primary-container w-2/3"
                        initial={{ width: "0%" }}
                        whileInView={{ width: "66%" }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                      ></motion.div>
                    </div>
                    <span className="text-xs text-primary font-bold tracking-wide uppercase">Verifying...</span>
                  </div>
                </div>
              </motion.div>

              <ArrowRight className="text-outline-variant hidden lg:block w-8 h-8" />
              <ArrowDown className="text-outline-variant lg:hidden w-8 h-8" />

              {/* Step 3 */}
              <motion.div 
                className="flex-1 w-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="p-8 bg-surface-container-high rounded-3xl border border-primary/40 shadow-[0_0_30px_rgba(179,197,255,0.15)]">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center font-bold text-sm shadow-md shadow-primary/20">03</div>
                    <span className="font-bold text-base text-white">Action: AI Outreach</span>
                  </div>
                  <div className="bg-surface-container-lowest p-4 rounded-xl text-sm italic text-on-surface-variant font-mono border border-outline-variant/10">
                    "Hi <span className="text-tertiary">{'{{first_name}}'}</span>, loved your recent post about <span className="text-tertiary">{'{{topic}}'}</span>..."
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Floating Performance Metric */}
            <motion.div 
              className="absolute -bottom-8 -right-4 md:right-16 bg-surface-bright p-5 rounded-2xl shadow-2xl border border-outline-variant/20 flex items-center gap-5 z-20"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, type: "spring" }}
            >
              <div className="bg-green-500/20 p-3 rounded-xl">
                <Zap className="text-green-500 w-6 h-6 fill-green-500/50" />
              </div>
              <div>
                <div className="text-[10px] text-on-surface-variant uppercase font-bold tracking-widest mb-1">Conversion Lift</div>
                <div className="text-2xl font-bold text-white">+24% vs Manual</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Preview / Final CTA */}
      <section className="py-32 bg-surface-container border-t border-outline-variant/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            {...fadeInUp}
            className="bg-gradient-to-br from-[#131b2e] to-[#0b1326] rounded-[3rem] p-10 md:p-20 text-center border border-outline-variant/20 overflow-hidden relative shadow-2xl"
          >
            {/* Abstract Background Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <svg height="100%" preserveAspectRatio="none" viewBox="0 0 100 100" width="100%">
                <defs>
                  <pattern height="10" id="grid" patternUnits="userSpaceOnUse" width="10">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"></path>
                  </pattern>
                </defs>
                <rect fill="url(#grid)" height="100%" width="100%"></rect>
              </svg>
            </div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 max-w-3xl mx-auto leading-tight text-white">
                Ready to Fill Your Pipeline with Obsidian?
              </h2>
              <p className="text-on-surface-variant text-lg mb-14 max-w-xl mx-auto">
                Join 500+ high-performance sales teams turning social activity into predictable revenue.
              </p>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <div className="bg-surface-container-lowest p-8 rounded-3xl text-left border border-outline-variant/20 w-full max-w-sm shadow-xl relative group hover:border-primary/30 transition-colors">
                  <div className="absolute -top-3 -right-3">
                    <span className="bg-primary text-primary-foreground text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg shadow-primary/20">Most Popular</span>
                  </div>
                  <div className="text-sm font-bold text-primary mb-3 uppercase tracking-widest">Growth Plan</div>
                  <div className="flex items-baseline gap-1 mb-8">
                    <span className="text-5xl font-extrabold text-white">$149</span>
                    <span className="text-on-surface-variant text-sm font-medium">/mo</span>
                  </div>
                  <ul className="space-y-4 mb-10">
                    {['2,000 Captures / month', 'Unlimited Automation Flows', 'Deep CRM Syncing'].map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-foreground/90">
                        <Check className="text-primary w-5 h-5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href="/pricing" className="block text-center w-full py-4 rounded-xl bg-gradient-primary font-bold hover:shadow-lg hover:shadow-primary/20 transition-all hover:-translate-y-0.5 active:translate-y-0">
                    Get Started Now
                  </Link>
                </div>
                
                <div className="w-full max-w-xs text-left md:pl-6">
                  <h4 className="font-bold text-2xl mb-4 text-white">Enterprise Custom</h4>
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-8">
                    Need more? Custom seats, dedicated account managers, and white-label options available.
                  </p>
                  <Link href="/demo" className="text-primary font-bold flex items-center gap-2 group text-lg">
                    Talk to Sales 
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
