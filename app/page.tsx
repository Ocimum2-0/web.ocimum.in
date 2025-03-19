import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Brain,
  Clock,
  FileText,
  Link as LinkIcon,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Clinic Management",
    description:
      "Automate patient scheduling, reduce paperwork, and enhance efficiency with our intelligent system.",
  },
  {
    icon: FileText,
    title: "Digital Prescriptions & Health Records",
    description:
      "Secure cloud-based medical history for easy access and better patient care.",
  },
  {
    icon: Clock,
    title: "Real-Time Queue System",
    description:
      "Patients see live waiting times, improving clinic flow and reducing wait times.",
  },
  {
    icon: LinkIcon,
    title: "Healthcare Connectivity",
    description:
      "Instant coordination between doctors, labs, and pharmacies for seamless care.",
  },
];

const competitors = [
  {
    feature: "AI-Powered Automation",
    ocimum: true,
    others: false,
  },
  {
    feature: "Real-Time Queue Management",
    ocimum: true,
    others: false,
  },
  {
    feature: "Digital Health Records",
    ocimum: true,
    others: true,
  },
  {
    feature: "Lab Integration",
    ocimum: true,
    others: false,
  },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="container flex flex-col items-center gap-8 py-24 text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          The AI-Powered Healthcare Ecosystem
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
          Transforming clinics and hospitals with AI-driven automation, real-time
          patient management, and seamless connectivity.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button size="lg" asChild>
            <Link href="/contact">Register as a Doctor</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/features">Learn More</Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="container py-24">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Card key={feature.title} className="border-2">
              <CardHeader>
                <feature.icon className="h-12 w-12 text-primary" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Comparison Section */}
      <section className="container py-24">
        <h2 className="mb-12 text-center text-3xl font-bold">
          Why Choose OCIMUM?
        </h2>
        <div className="mx-auto max-w-3xl overflow-hidden rounded-lg border-2">
          <div className="grid grid-cols-3 gap-4 bg-muted p-4 font-semibold">
            <div>Feature</div>
            <div className="text-center">OCIMUM</div>
            <div className="text-center">Others</div>
          </div>
          {competitors.map((item) => (
            <div
              key={item.feature}
              className="grid grid-cols-3 gap-4 border-t p-4"
            >
              <div>{item.feature}</div>
              <div className="text-center">
                {item.ocimum ? (
                  <ShieldCheck className="mx-auto h-5 w-5 text-green-500" />
                ) : (
                  "—"
                )}
              </div>
              <div className="text-center">
                {item.others ? (
                  <ShieldCheck className="mx-auto h-5 w-5 text-green-500" />
                ) : (
                  "—"
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-24 text-primary-foreground">
        <div className="container text-center">
          <h2 className="mb-8 text-3xl font-bold text-foreground">
            Explore our products
          </h2>
          <Button size="lg" asChild>
            <Link href="/contact">Contact</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
