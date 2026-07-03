export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  category: string;
  badge?: string;
}

export interface MetricCard {
  label: string;
  value: string;
  change: string;
  trend: "up" | "down" | "neutral";
}

export interface ProcessNode {
  step: string;
  title: string;
  description: string;
  metric: string;
  metricLabel: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

export interface CaseStudyItem {
  id: string;
  title: string;
  client: string;
  metric: string;
  metricLabel: string;
  description: string;
  tags: string[];
  imageColor: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  frequency: string;
  description: string;
  features: string[];
  ctaText: string;
  isPopular: boolean;
  isEnterprise: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}
