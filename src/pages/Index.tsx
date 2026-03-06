import { lazy, Suspense } from "react";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import FloatingElements from "@/components/landing/FloatingElements";

const TrustBar = lazy(() => import("@/components/landing/TrustBar"));
const VideoShowcase = lazy(() => import("@/components/landing/VideoShowcase"));
const ProblemSection = lazy(() => import("@/components/landing/ProblemSection"));
const Services = lazy(() => import("@/components/landing/Services"));
const HowItWorks = lazy(() => import("@/components/landing/HowItWorks"));
const ComparisonTable = lazy(() => import("@/components/landing/ComparisonTable"));
const Pricing = lazy(() => import("@/components/landing/Pricing"));
const SamplePack = lazy(() => import("@/components/landing/SamplePack"));
const Results = lazy(() => import("@/components/landing/Results"));
const WhoItsFor = lazy(() => import("@/components/landing/WhoItsFor"));
const FinalCTA = lazy(() => import("@/components/landing/FinalCTA"));
const Footer = lazy(() => import("@/components/landing/Footer"));

const Index = () => (
  <div className="bg-background text-foreground min-h-screen overflow-x-hidden">
    <Navbar />
    <Hero />
    <Suspense fallback={null}>
      <TrustBar />
      <ProblemSection />
      <Services />
      <HowItWorks />
      <ComparisonTable />
      <Pricing />
      <SamplePack />
      <Results />
      <WhoItsFor />
      <FinalCTA />
      <Footer />
    </Suspense>
    <FloatingElements />
  </div>
);

export default Index;
