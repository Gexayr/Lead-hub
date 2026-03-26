import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Layout } from "@/components/layout";
import { demoFormSchema, type DemoFormInput, useSubmitDemo } from "@/hooks/use-demo";
import { CheckCircle2, Building, Mail, User, Phone, MessageSquare, Loader2 } from "lucide-react";
import { useState } from "react";

export default function Demo() {
  const [isSuccess, setIsSuccess] = useState(false);
  const mutation = useSubmitDemo();

  const { register, handleSubmit, formState: { errors } } = useForm<DemoFormInput>({
    resolver: zodResolver(demoFormSchema)
  });

  const onSubmit = (data: DemoFormInput) => {
    mutation.mutate(data, {
      onSuccess: () => {
        setIsSuccess(true);
      }
    });
  };

  return (
    <Layout>
      <section className="pt-24 pb-32 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
              Book a <span className="text-gradient">30-Minute Demo</span>
            </h1>
            <p className="text-lg text-on-surface-variant mb-12 leading-relaxed">
              Stop guessing who is ready to buy. See exactly how LeadObsidian can inject high-intent social leads directly into your sales workflow.
            </p>

            <div className="space-y-8">
              {[
                { title: "Live Capture Session", desc: "We'll scrape a LinkedIn post of your choice live on the call to demonstrate data accuracy." },
                { title: "Custom Workflow Design", desc: "Map out exactly how social signals can route into your specific CRM setup." },
                { title: "ROI Calculation", desc: "Build a clear model of how much pipeline you can generate based on your current TAM." }
              ].map((benefit, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1 bg-surface-container-high p-2 rounded-full h-fit border border-outline-variant/30">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-foreground mb-1">{benefit.title}</h4>
                    <p className="text-sm text-on-surface-variant leading-relaxed">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 p-8 bg-surface-container-low rounded-3xl border border-outline-variant/10 shadow-inner">
              <p className="text-sm text-on-surface-variant italic mb-6">
                "LeadObsidian replaced three different tools for us. We're capturing 400+ highly qualified leads a week just by monitoring competitor LinkedIn posts."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-surface-container-high border border-outline-variant/30">
                  {/* testimonial tech startup CEO avatar */}
                  <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop" alt="CEO" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-bold text-sm">Marcus Vance</div>
                  <div className="text-xs text-primary">VP Sales @ DataScale</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-surface-container p-8 md:p-10 rounded-[2.5rem] border border-outline-variant/20 shadow-2xl relative overflow-hidden"
          >
            {/* Soft background glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] rounded-full pointer-events-none"></div>

            {isSuccess ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16"
              >
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/30">
                  <CheckCircle2 className="w-10 h-10 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Request Received!</h3>
                <p className="text-on-surface-variant mb-8">
                  Thanks for reaching out. One of our product specialists will be in touch within 24 hours to schedule your live demo.
                </p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="text-primary hover:underline font-medium text-sm"
                >
                  Submit another request
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 relative z-10">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                      <User className="w-3 h-3" /> First Name
                    </label>
                    <input 
                      {...register("firstName")}
                      className={`w-full bg-surface-container-highest border ${errors.firstName ? 'border-destructive' : 'border-outline-variant/30'} rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-white placeholder:text-muted-foreground`}
                      placeholder="Jane"
                    />
                    {errors.firstName && <span className="text-xs text-destructive">{errors.firstName.message}</span>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                      <User className="w-3 h-3" /> Last Name
                    </label>
                    <input 
                      {...register("lastName")}
                      className={`w-full bg-surface-container-highest border ${errors.lastName ? 'border-destructive' : 'border-outline-variant/30'} rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-white placeholder:text-muted-foreground`}
                      placeholder="Doe"
                    />
                    {errors.lastName && <span className="text-xs text-destructive">{errors.lastName.message}</span>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                    <Mail className="w-3 h-3" /> Work Email
                  </label>
                  <input 
                    {...register("email")}
                    className={`w-full bg-surface-container-highest border ${errors.email ? 'border-destructive' : 'border-outline-variant/30'} rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-white placeholder:text-muted-foreground`}
                    placeholder="jane@company.com"
                  />
                  {errors.email && <span className="text-xs text-destructive">{errors.email.message}</span>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                      <Building className="w-3 h-3" /> Company Name
                    </label>
                    <input 
                      {...register("company")}
                      className={`w-full bg-surface-container-highest border ${errors.company ? 'border-destructive' : 'border-outline-variant/30'} rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-white placeholder:text-muted-foreground`}
                      placeholder="Acme Corp"
                    />
                    {errors.company && <span className="text-xs text-destructive">{errors.company.message}</span>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                      <Phone className="w-3 h-3" /> Phone <span className="text-[10px] font-normal lowercase opacity-70">(Optional)</span>
                    </label>
                    <input 
                      {...register("phone")}
                      className={`w-full bg-surface-container-highest border ${errors.phone ? 'border-destructive' : 'border-outline-variant/30'} rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-white placeholder:text-muted-foreground`}
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                    <MessageSquare className="w-3 h-3" /> What are you looking to achieve?
                  </label>
                  <textarea 
                    {...register("message")}
                    rows={4}
                    className="w-full bg-surface-container-highest border border-outline-variant/30 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none text-white placeholder:text-muted-foreground"
                    placeholder="We want to scrape LinkedIn comments from our competitors..."
                  />
                </div>

                <button 
                  type="submit"
                  disabled={mutation.isPending}
                  className="w-full py-4 rounded-xl bg-gradient-primary font-bold hover:shadow-lg hover:shadow-primary/25 transition-all hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-4"
                >
                  {mutation.isPending ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" /> Submitting...
                    </>
                  ) : (
                    "Request Demo"
                  )}
                </button>
                
                <p className="text-center text-xs text-muted-foreground pt-4">
                  By submitting this form, you agree to our <a href="#" className="underline hover:text-primary">Privacy Policy</a>.
                </p>
              </form>
            )}
          </motion.div>

        </div>
      </section>
    </Layout>
  );
}
