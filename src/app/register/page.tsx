"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { 
  User, 
  Mail, 
  Phone, 
  Globe, 
  MapPin, 
  Github, 
  Link as LinkIcon, 
  Briefcase, 
  Linkedin, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2,
  ChevronDown
} from "lucide-react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { Footer } from "@/components/ui/footer";
import confetti from "canvas-confetti";

const countries = [
  "United States", "India", "United Kingdom", "Canada", "Germany", "France", "Japan", "Brazil", "Australia"
];

const InputField = ({ label, icon, ...props }: any) => (
  <div className="flex flex-col gap-2 w-full">
    <label className="text-sm font-heading font-bold text-[#2d2d2d] uppercase tracking-wide ml-1">{label}</label>
    <div className="relative group">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#2d2d2d] transition-colors z-10">
        {icon}
      </div>
      <input
        {...props}
        className="w-full pl-12 pr-4 py-4 rounded-wobbly bg-white border-[3px] border-[#2d2d2d] focus:border-[#2d5da1] focus:ring-2 focus:ring-[#2d5da1]/20 outline-none transition-all shadow-[2px_2px_0px_0px_#2d2d2d] font-sans font-bold text-lg text-[#2d2d2d] placeholder:text-[#2d2d2d]/40"
      />
    </div>
  </div>
);

export default function Register() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    whatsapp: "",
    country: "",
    address: "",
    projects: "",
    github: "",
    experience: "",
    linkedin: "",
    portfolio: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateStep1 = () => {
    const { fullName, email, whatsapp, country, address } = formData;
    if (!fullName || !email || !whatsapp || !country || !address) {
      alert("Please fill in all basic information fields.");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return false;
    }
    return true;
  };

  const validateStep2 = () => {
    const { projects, github, experience, linkedin, portfolio } = formData;
    if (!projects || !github || !experience || !linkedin || !portfolio) {
      alert("Please fill in all professional information fields.");
      return false;
    }
    // Simple link validation (must start with http)
    const links = [github, linkedin, portfolio];
    for (const link of links) {
      if (link && !link.startsWith("http")) {
        alert("Please enter valid profile URLs (starting with http:// or https://)");
        return false;
      }
    }
    return true;
  };

  const nextStep = () => {
    if (validateStep1()) {
      setStep(2);
      window.scrollTo(0, 0);
    }
  };

  const prevStep = () => {
    setStep(1);
    window.scrollTo(0, 0);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep2()) return;

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSuccess(true);
        confetti({
          particleCount: 150,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#ff4d4d", "#2d2d2d", "#2d5da1", "#fff9c4"]
        });
        setStep(3); // Keep this to transition to the success screen
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Failed to submit registration.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="relative min-h-screen w-full bg-transparent overflow-x-hidden pt-28">
      <FloatingNav navItems={[
        { name: "Home", link: "/", icon: <Globe className="h-4 w-4" /> },
        { name: "Back", link: "/", icon: <ArrowLeft className="h-4 w-4" /> },
      ]} />

      <div className="max-w-3xl mx-auto px-4 py-10 relative z-10">
        {/* Progress Header */}
        <div className="mb-12 text-center relative">
          <motion.h1 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-heading font-black text-[#2d2d2d] mb-4 tracking-tight -rotate-1 inline-block"
          >
            Become a <span className="text-[#ff4d4d] underline decoration-wavy decoration-[#2d5da1]">NeuroDev.</span>
          </motion.h1>
          
          <div className="flex items-center justify-center gap-4 mt-6">
            {[1, 2, 3].map((s) => (
              <div 
                key={s} 
                className={cn(
                  "transition-all duration-500 rounded-wobbly border-2 border-[#2d2d2d]",
                  step >= s 
                    ? "h-4 w-12 bg-[#ff4d4d] shadow-[2px_2px_0px_0px_#2d2d2d]" 
                    : "h-3 w-8 bg-[#e5e0d8]"
                )}
              />
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="p-8 md:p-12 rounded-wobbly-md bg-white border-[4px] border-[#2d2d2d] shadow-[8px_8px_0px_0px_#2d2d2d] relative rotate-1"
            >
              {/* Tape */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-8 bg-black/10 -rotate-2 z-10 backdrop-blur-sm" />

              <h2 className="text-3xl font-heading font-black text-[#2d2d2d] mb-8 flex items-center gap-3">
                <div className="p-2 rounded-wobbly bg-[#fff9c4] border-2 border-[#2d2d2d] shadow-[2px_2px_0px_0px_#2d2d2d] -rotate-3">
                  <User className="h-6 w-6 text-[#2d2d2d]" strokeWidth={2.5} />
                </div>
                Basic Information
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                <InputField 
                  label="Full Name" 
                  name="fullName"
                  placeholder="John Doe" 
                  icon={<User size={18} strokeWidth={2.5} />} 
                  value={formData.fullName}
                  onChange={handleInputChange}
                />
                <InputField 
                  label="Email Address" 
                  name="email"
                  type="email" 
                  placeholder="john@example.com" 
                  icon={<Mail size={18} strokeWidth={2.5} />} 
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <InputField 
                  label="WhatsApp Number" 
                  name="whatsapp"
                  placeholder="+91 9876543210" 
                  icon={<Phone size={18} strokeWidth={2.5} />} 
                  value={formData.whatsapp}
                  onChange={handleInputChange}
                />
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-heading font-bold text-[#2d2d2d] uppercase tracking-wide ml-1">Country</label>
                  <div className="relative group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#2d2d2d] z-10">
                      <Globe size={18} strokeWidth={2.5} />
                    </div>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-10 py-4 rounded-wobbly bg-white border-[3px] border-[#2d2d2d] focus:border-[#2d5da1] focus:ring-2 focus:ring-[#2d5da1]/20 outline-none transition-all shadow-[2px_2px_0px_0px_#2d2d2d] font-sans font-bold text-lg text-[#2d2d2d] appearance-none"
                    >
                      <option value="">Select Country</option>
                      {countries.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#2d2d2d] pointer-events-none" size={18} strokeWidth={2.5} />
                  </div>
                </div>
                <div className="md:col-span-2">
                  <InputField 
                    label="Full Address" 
                    name="address"
                    placeholder="123 Street, City, State, ZIP" 
                    icon={<MapPin size={18} strokeWidth={2.5} />} 
                    value={formData.address}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="mt-12 flex justify-end">
                <button 
                  onClick={nextStep}
                  className="px-10 py-4 bg-[#2d5da1] border-[3px] border-[#2d2d2d] text-white rounded-wobbly font-heading font-black text-2xl flex items-center gap-3 shadow-[4px_4px_0px_0px_#2d2d2d] hover:bg-[#ff4d4d] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#2d2d2d] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all"
                >
                  Continue
                  <ArrowRight size={24} strokeWidth={3} />
                </button>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="p-8 md:p-12 rounded-wobbly-md bg-white border-[4px] border-[#2d2d2d] shadow-[8px_8px_0px_0px_#2d2d2d] relative -rotate-1"
            >
              {/* Tape */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-8 bg-black/10 rotate-2 z-10 backdrop-blur-sm" />

              <h2 className="text-3xl font-heading font-black text-[#2d2d2d] mb-8 flex items-center gap-3">
                <div className="p-2 rounded-wobbly bg-[#e5e0d8] border-2 border-[#2d2d2d] shadow-[2px_2px_0px_0px_#2d2d2d] rotate-3">
                  <Briefcase className="h-6 w-6 text-[#2d2d2d]" strokeWidth={2.5} />
                </div>
                Required Information
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                <div className="md:col-span-2">
                  <InputField 
                    label="Projects Done (Links)" 
                    name="projects"
                    placeholder="link1.com, link2.com" 
                    icon={<LinkIcon size={18} strokeWidth={2.5} />} 
                    value={formData.projects}
                    onChange={handleInputChange}
                  />
                </div>
                <InputField 
                  label="GitHub Profile" 
                  name="github"
                  placeholder="github.com/username" 
                  icon={<Github size={18} strokeWidth={2.5} />} 
                  value={formData.github}
                  onChange={handleInputChange}
                />
                <InputField 
                  label="Years of Experience" 
                  name="experience"
                  placeholder="e.g. 2+ years" 
                  icon={<Briefcase size={18} strokeWidth={2.5} />} 
                  value={formData.experience}
                  onChange={handleInputChange}
                />
                <InputField 
                  label="LinkedIn Profile" 
                  name="linkedin"
                  placeholder="linkedin.com/in/username" 
                  icon={<Linkedin size={18} strokeWidth={2.5} />} 
                  value={formData.linkedin}
                  onChange={handleInputChange}
                />
                <InputField 
                  label="Portfolio Link" 
                  name="portfolio"
                  placeholder="yourportfolio.com" 
                  icon={<LinkIcon size={18} strokeWidth={2.5} />} 
                  value={formData.portfolio}
                  onChange={handleInputChange}
                />
              </div>

              <div className="mt-12 flex flex-col md:flex-row justify-between gap-6 items-center">
                <button 
                  onClick={prevStep}
                  className="w-full md:w-auto px-8 py-4 bg-white border-[3px] border-[#2d2d2d] text-[#2d2d2d] rounded-wobbly font-heading font-bold text-xl flex justify-center items-center gap-3 hover:bg-[#e5e0d8] shadow-[4px_4px_0px_0px_#2d2d2d] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#2d2d2d] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all"
                >
                  <ArrowLeft size={20} strokeWidth={3} />
                  Back
                </button>
                <button 
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={cn(
                    "w-full md:w-auto px-10 py-4 bg-[#ff4d4d] border-[3px] border-[#2d2d2d] text-white rounded-wobbly font-heading font-black text-2xl flex justify-center items-center gap-3 shadow-[4px_4px_0px_0px_#2d2d2d] hover:bg-[#2d5da1] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#2d2d2d] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all",
                    isSubmitting && "opacity-70 pointer-events-none"
                  )}
                >
                  {isSubmitting ? "Submitting..." : "Complete"}
                  <CheckCircle2 size={24} strokeWidth={3} />
                </button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-12 md:p-20 rounded-wobbly-md bg-[#fff9c4] border-[4px] border-[#2d2d2d] shadow-[8px_8px_0px_0px_#2d2d2d] text-center rotate-2 relative"
            >
              {/* Thumbtack */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#ff4d4d] border-2 border-[#2d2d2d] shadow-[2px_2px_0px_0px_rgba(45,45,45,0.5)] z-20">
                <div className="absolute top-2 left-2 w-2 h-2 rounded-full bg-white/40"></div>
              </div>

              <div className="mb-8 inline-flex p-6 rounded-wobbly bg-white border-[3px] border-[#2d2d2d] shadow-[4px_4px_0px_0px_#2d2d2d] text-[#2d5da1] -rotate-3 mt-4">
                <CheckCircle2 size={64} strokeWidth={2.5} />
              </div>
              <h2 className="text-5xl font-heading font-black text-[#2d2d2d] mb-4">You're in!</h2>
              <p className="text-xl text-[#2d2d2d] mb-12 font-sans font-bold max-w-md mx-auto leading-relaxed">
                Thank you for joining the NeuroDev.in pioneer community. Check your email for next steps.
              </p>
              <a 
                href="/"
                className="px-12 py-4 bg-white border-[3px] border-[#2d2d2d] text-[#2d2d2d] rounded-wobbly font-heading font-black text-2xl hover:bg-[#ff4d4d] hover:text-white transition-all shadow-[4px_4px_0px_0px_#2d2d2d] hover:shadow-[2px_2px_0px_0px_#2d2d2d] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] inline-block -rotate-1"
              >
                Return to Home
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <Footer />
    </main>
  );
}
