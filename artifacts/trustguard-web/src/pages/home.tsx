import React from "react";
import { Button } from "@/components/ui/button";
import { ShieldCheck, MessageSquare, AudioWaveform, Image as ImageIcon, Video, CheckCircle2, AlertTriangle, ArrowRight, Smartphone, Zap, Lock } from "lucide-react";
import appIcon from "@assets/generated_images/trustguard_sa_icon_transparent.png";

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 lg:pt-40 lg:pb-36 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_right,var(--color-primary)_0%,transparent_40%)] opacity-10"></div>
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_bottom_left,var(--color-secondary)_0%,transparent_30%)] opacity-5"></div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6 border border-primary/20">
                <ShieldCheck className="w-4 h-4" />
                <span>Protecting South Africans from digital deception</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold font-heading text-foreground leading-[1.1] mb-6">
                Spot deepfakes in <span className="text-primary">seconds.</span> <br className="hidden md:block" />
                Right on WhatsApp.
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
                Forward suspicious voice notes, images, or videos to TrustGuard SA. Our AI instantly analyzes the media and tells you if it's real or a scam. No app to download. No account required.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <a href="https://wa.me/15556403201" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full sm:w-auto rounded-full h-14 px-8 text-base font-bold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 gap-2">
                    <MessageSquare className="w-5 h-5 fill-current" />
                    Try it on WhatsApp
                  </Button>
                </a>
                <a href="#how-it-works" className="w-full sm:w-auto">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto rounded-full h-14 px-8 text-base font-semibold border-border hover:bg-muted gap-2">
                    See how it works
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </a>
              </div>
              
              <div className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-sm font-medium text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>Free to use</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>100% Private</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>Works 24/7</span>
                </div>
              </div>
            </div>
            
            <div className="flex-1 w-full max-w-lg lg:max-w-none relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-[2.5rem] transform rotate-3 scale-[1.02] blur-xl opacity-70"></div>
              <div className="relative rounded-[2rem] border border-border bg-card shadow-2xl overflow-hidden aspect-[4/5] sm:aspect-square lg:aspect-[4/5]">
                <img src="/whatsapp-analysis.png" alt="TrustGuard SA analyzing a deepfake on WhatsApp" className="w-full h-full object-cover" />
                
                {/* Floating elements */}
                <div className="absolute top-8 -left-6 bg-card border border-border rounded-xl p-3 shadow-xl flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
                  <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center text-destructive">
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-muted-foreground">Voice Note Analysis</p>
                    <p className="text-sm font-bold text-foreground">98% probability AI clone</p>
                  </div>
                </div>
                
                <div className="absolute bottom-12 -right-4 bg-card border border-border rounded-xl p-3 shadow-xl flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-700">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-muted-foreground">Image Verification</p>
                    <p className="text-sm font-bold text-foreground">Verified authentic</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Urgent Context Section */}
      <section className="py-16 bg-muted/50 border-y border-border">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold font-heading mb-4">Voice scams are on the rise in SA.</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Scammers are cloning voices of family members, politicians, and business leaders with terrifying accuracy. If a voice note asking for money sounds slightly "off", don't trust it. Verify it.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-card rounded-2xl p-6 border border-border shadow-sm text-center">
                <p className="text-4xl font-black text-primary font-heading mb-2">3s</p>
                <p className="text-sm text-muted-foreground font-medium">To clone a voice</p>
              </div>
              <div className="bg-card rounded-2xl p-6 border border-border shadow-sm text-center">
                <p className="text-4xl font-black text-secondary font-heading mb-2">90%</p>
                <p className="text-sm text-muted-foreground font-medium">Of people can't spot a good fake</p>
              </div>
              <div className="bg-card rounded-2xl p-6 border border-border shadow-sm text-center">
                <p className="text-4xl font-black text-primary font-heading mb-2">&lt;5s</p>
                <p className="text-sm text-muted-foreground font-medium">For us to detect it</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-24 md:py-32 relative">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6">As simple as sending a text.</h2>
            <p className="text-lg text-muted-foreground">
              We built TrustGuard SA to live where you already spend your time. No complex dashboards, just instant answers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-border -z-10">
              <div className="absolute inset-0 bg-primary origin-left animate-pulse" style={{ width: '50%' }}></div>
            </div>
            
            {/* Step 1 */}
            <div className="relative flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-card border-4 border-background shadow-xl flex items-center justify-center text-primary mb-6 z-10">
                <Smartphone className="w-10 h-10" />
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-secondary text-secondary-foreground font-bold flex items-center justify-center border-4 border-background">1</div>
              </div>
              <h3 className="text-xl font-bold mb-3 font-heading">Receive Suspicious Media</h3>
              <p className="text-muted-foreground">Get a voice note, image, or video that seems a bit off or too sensational to be true.</p>
            </div>
            
            {/* Step 2 */}
            <div className="relative flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-card border-4 border-background shadow-xl flex items-center justify-center text-primary mb-6 z-10">
                <MessageSquare className="w-10 h-10" />
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-secondary text-secondary-foreground font-bold flex items-center justify-center border-4 border-background">2</div>
              </div>
              <h3 className="text-xl font-bold mb-3 font-heading">Forward to TrustGuard</h3>
              <p className="text-muted-foreground">Simply tap forward and send it to the TrustGuard SA WhatsApp number.</p>
            </div>
            
            {/* Step 3 */}
            <div className="relative flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-card border-4 border-background shadow-xl flex items-center justify-center text-primary mb-6 z-10">
                <Zap className="w-10 h-10" />
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-secondary text-secondary-foreground font-bold flex items-center justify-center border-4 border-background">3</div>
              </div>
              <h3 className="text-xl font-bold mb-3 font-heading">Get Instant Verdict</h3>
              <p className="text-muted-foreground">In seconds, receive a clear trust score and an explanation of whether it's AI or real.</p>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <a href="https://wa.me/15556403201" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="rounded-full h-14 px-8 text-base font-bold bg-foreground hover:bg-foreground/90 text-background">
                Add TrustGuard to Contacts
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* What we detect */}
      <section id="what-we-detect" className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1 w-full">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-border">
                <img src="/waveform-analysis.png" alt="Voice waveform analysis" className="w-full h-auto object-cover" />
              </div>
            </div>
            
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6">We detect the fakes your eyes and ears miss.</h2>
              <p className="text-lg text-muted-foreground mb-10">
                Our forensic AI models are trained on the latest deepfake generation techniques, specifically tuned for South African accents, context, and environments.
              </p>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <AudioWaveform className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 font-heading">Voice Note Clones</h3>
                    <p className="text-muted-foreground">Detects AI voice synthesis, vocal splicing, and cloned accents used in extortion and kidnapping scams.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <ImageIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 font-heading">Manipulated Images</h3>
                    <p className="text-muted-foreground">Identifies Midjourney, DALL-E, and Photoshop manipulations, analyzing pixel-level inconsistencies and unnatural artifacts.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Video className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 font-heading">Synthetic Videos</h3>
                    <p className="text-muted-foreground">Spots face-swapping, lip-sync anomalies, and completely synthetic videos often used for political misinformation.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">See beyond the surface.</h2>
            <p className="text-lg text-muted-foreground">
              What looks perfectly normal to human eyes contains hundreds of micro-anomalies that our AI catches instantly.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-border">
              <img src="/media-comparison.png" alt="Real vs Fake Face comparison" className="w-full h-auto object-cover" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="bg-card p-6 rounded-2xl border border-border">
                <div className="flex items-center gap-3 mb-3 text-primary">
                  <ShieldCheck className="w-5 h-5" />
                  <h4 className="font-bold text-lg">Forensic Accuracy</h4>
                </div>
                <p className="text-muted-foreground">Analyzes 120+ metadata points, frequency spectrums, and lighting consistencies in milliseconds.</p>
              </div>
              <div className="bg-card p-6 rounded-2xl border border-border">
                <div className="flex items-center gap-3 mb-3 text-primary">
                  <Lock className="w-5 h-5" />
                  <h4 className="font-bold text-lg">Absolute Privacy</h4>
                </div>
                <p className="text-muted-foreground">Your forwarded media is scanned and instantly deleted. We do not store, log, or train on your private messages.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,var(--color-secondary)_0%,transparent_60%)] opacity-10"></div>
        <div className="absolute inset-0 z-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-20 mix-blend-overlay"></div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <div className="w-20 h-20 mx-auto bg-background rounded-2xl flex items-center justify-center mb-8 shadow-2xl transform -rotate-3">
            <img src={appIcon} alt="TrustGuard SA Icon" className="w-12 h-12 object-contain" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading mb-6">
            Ready to verify?
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10">
            Add TrustGuard SA to your WhatsApp contacts today. The next time you receive something suspicious, you'll know exactly what to do.
          </p>
          <a href="https://wa.me/15556403201" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="rounded-full h-16 px-10 text-lg font-bold bg-background text-primary hover:bg-background/90 shadow-2xl hover:scale-105 transition-all duration-300 gap-3">
              <MessageSquare className="w-6 h-6 fill-current" />
              Try it on WhatsApp
            </Button>
          </a>
          <p className="mt-6 text-sm text-primary-foreground/60">
            Number: +1 (555) 640-3201
          </p>
        </div>
      </section>
    </div>
  );
}
