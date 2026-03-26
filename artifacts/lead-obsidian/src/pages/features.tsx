import { motion } from "framer-motion";
import { Layout } from "@/components/layout";
import { Share2, Send, Hash, Wand2, FolderSync, Layers, Check, X } from "lucide-react";

const features = [
  {
    icon: Share2,
    title: "LinkedIn Profile Scraper",
    desc: "Capture entire profiles, active posts, and comments. Turn engaging prospects directly into structured pipeline data."
  },
  {
    icon: Send,
    title: "Telegram Group Monitor",
    desc: "Auto-flag leads asking problem-aware questions in industry groups. Beat competitors to the punch.",
    border: "border-l-tertiary"
  },
  {
    icon: Hash,
    title: "Twitter/X Signals",
    desc: "Track mentions, hashtags, and engaged prospects natively to unearth early buying intent."
  },
  {
    icon: Wand2,
    title: "AI Data Enrichment",
    desc: "Fill missing emails, direct dial phones, and company data (tech stack, headcount) instantly.",
    border: "border-l-primary"
  },
  {
    icon: FolderSync,
    title: "Deep CRM Integration",
    desc: "Bi-directional sync with HubSpot, Salesforce, and Pipedrive. Never do manual entry again."
  },
  {
    icon: Layers,
    title: "Smart Sequences",
    desc: "Launch multi-step, multi-channel outreach templates right from the capture dashboard."
  }
];

const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Features() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-primary text-xs font-bold tracking-[0.1em] uppercase mb-6 border border-primary/20">
            Platform Capabilities
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 max-w-4xl mx-auto">
            Every Feature You Need to <span className="text-gradient">Dominate Cold Outreach</span>
          </h1>
          <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">
            LeadObsidian gives you an unfair advantage by combining multi-channel social scraping with premium B2B data enrichment.
          </p>
        </motion.div>
      </section>

      {/* Grid */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {features.map((feat, idx) => (
            <motion.div 
              key={idx} 
              variants={staggerItem}
              className={`bg-surface-container-high p-8 rounded-3xl border border-outline-variant/20 hover:bg-surface-bright transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 ${feat.border ? `border-l-4 ${feat.border}` : ''}`}
            >
              <div className="w-14 h-14 rounded-2xl bg-surface-container-lowest flex items-center justify-center mb-6 border border-outline-variant/10 shadow-inner">
                <feat.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">{feat.title}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">{feat.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Teams Switch</h2>
          <p className="text-on-surface-variant">See how we stack up against traditional fragmented tooling.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-3xl border border-outline-variant/20 bg-surface-container-low shadow-2xl"
        >
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container border-b border-outline-variant/20">
                <th className="p-6 font-display text-lg font-bold text-foreground">Capability</th>
                <th className="p-6 font-display text-lg font-bold text-primary bg-primary/5">LeadObsidian</th>
                <th className="p-6 font-display text-lg font-bold text-muted-foreground">Legacy Tools</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/10">
              {[
                { name: "Multi-platform scraping", us: true, them: false },
                { name: "Built-in Waterfall Enrichment", us: true, them: false },
                { name: "Real-time Telegram Alerts", us: true, them: false },
                { name: "Native CRM Sync", us: true, them: true },
                { name: "AI Outreach Generation", us: true, them: false },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-surface-container transition-colors">
                  <td className="p-6 font-medium text-foreground">{row.name}</td>
                  <td className="p-6 bg-primary/5">
                    {row.us ? <Check className="w-6 h-6 text-primary" /> : <X className="w-6 h-6 text-muted-foreground" />}
                  </td>
                  <td className="p-6">
                    {row.them ? <Check className="w-6 h-6 text-muted-foreground" /> : <X className="w-6 h-6 text-muted-foreground/50" />}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </section>
    </Layout>
  );
}
