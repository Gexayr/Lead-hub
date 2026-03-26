import { Link, useLocation } from "wouter";
import { Hexagon, Globe, AtSign } from "lucide-react";
import { motion } from "framer-motion";

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();

  const isActive = (path: string) => location === path;

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Navigation */}
      <header className="fixed top-0 w-full z-50 glass-panel border-b-0 shadow-sm shadow-black/10">
        <nav className="flex justify-between items-center max-w-7xl mx-auto px-6 py-4">
          <Link href="/" className="flex items-center gap-2 group cursor-pointer">
            <Hexagon className="text-primary w-7 h-7 group-hover:rotate-12 transition-transform duration-300" />
            <span className="text-2xl font-extrabold tracking-tighter text-primary font-display">
              LeadObsidian
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className={`font-semibold pb-1 text-sm tracking-wide transition-colors ${
                isActive("/") ? "text-primary border-b-2 border-primary" : "text-muted-foreground hover:text-foreground border-b-2 border-transparent"
              }`}
            >
              Product
            </Link>
            <Link
              href="/features"
              className={`font-semibold pb-1 text-sm tracking-wide transition-colors ${
                isActive("/features") ? "text-primary border-b-2 border-primary" : "text-muted-foreground hover:text-foreground border-b-2 border-transparent"
              }`}
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className={`font-semibold pb-1 text-sm tracking-wide transition-colors ${
                isActive("/pricing") ? "text-primary border-b-2 border-primary" : "text-muted-foreground hover:text-foreground border-b-2 border-transparent"
              }`}
            >
              Pricing
            </Link>
          </div>

          <Link
            href="/demo"
            className="bg-gradient-primary px-6 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:scale-105 active:scale-95 cursor-pointer inline-block"
          >
            Get Started
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#060e20] w-full py-16 px-6 border-t border-outline-variant/10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 max-w-7xl mx-auto">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Hexagon className="text-primary w-6 h-6" />
              <span className="text-xl font-extrabold font-display text-primary tracking-tight">LeadObsidian AI</span>
            </div>
            <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
              The architectural intelligence for modern sales teams. Carved for precision, built for scale.
            </p>
          </div>
          
          <div>
            <h4 className="text-foreground font-bold text-xs uppercase tracking-widest mb-6">Product</h4>
            <ul className="space-y-4">
              <li><Link href="/features" className="text-muted-foreground hover:text-primary transition-colors text-sm">Features</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Integrations</Link></li>
              <li><Link href="/pricing" className="text-muted-foreground hover:text-primary transition-colors text-sm">Pricing</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-foreground font-bold text-xs uppercase tracking-widest mb-6">Resources</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Documentation</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">API Reference</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-foreground font-bold text-xs uppercase tracking-widest mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Privacy</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Terms</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto pt-12 mt-12 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-muted-foreground text-xs">© {new Date().getFullYear()} LeadObsidian AI. All rights reserved.</p>
          <div className="flex gap-6">
            <button className="text-muted-foreground hover:text-primary transition-colors">
              <Globe className="w-5 h-5" />
            </button>
            <button className="text-muted-foreground hover:text-primary transition-colors">
              <AtSign className="w-5 h-5" />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
