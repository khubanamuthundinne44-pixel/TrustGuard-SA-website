import React from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ShieldCheck, MessageSquare } from "lucide-react";

const appIcon = "/favicon.svg";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-[100dvh] flex flex-col bg-background selection:bg-primary/20">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-8 h-8 rounded-md overflow-hidden bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <ShieldCheck className="w-5 h-5 text-primary" />
            </div>
            <span className="font-bold font-heading text-lg tracking-tight text-foreground">TrustGuard SA</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            <a href="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">How it works</a>
            <a href="#what-we-detect" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">What we detect</a>
          </nav>
          
          <div className="flex items-center gap-4">
            <a href="https://wa.me/15556403201" target="_blank" rel="noopener noreferrer">
              <Button className="rounded-full shadow-sm shadow-primary/20 gap-2 font-semibold bg-primary hover:bg-primary/90 text-primary-foreground">
                <MessageSquare className="w-4 h-4" />
                <span className="hidden sm:inline">Try on WhatsApp</span>
                <span className="sm:hidden">Try it</span>
              </Button>
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {children}
      </main>

      <footer className="bg-muted border-t border-border mt-24 py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
            <div className="col-span-1 md:col-span-2">
              <Link href="/" className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-md overflow-hidden bg-primary/10 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-primary" />
                </div>
                <span className="font-bold font-heading text-xl text-foreground">TrustGuard SA</span>
              </Link>
              <p className="text-muted-foreground max-w-sm">
                The digital guardian in your pocket. Protecting South Africans from AI-generated deepfakes, voice scams, and misinformation, one WhatsApp message at a time.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4 font-heading">Product</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><a href="#how-it-works" className="hover:text-primary transition-colors">How it works</a></li>
                <li><a href="#what-we-detect" className="hover:text-primary transition-colors">Detection types</a></li>
                <li><a href="#privacy" className="hover:text-primary transition-colors">Privacy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4 font-heading">Legal</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} TrustGuard SA. All rights reserved.</p>
            <div className="flex items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-primary" />
              <span>Built for South Africa</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
