"use client";

import { motion } from "framer-motion";
import { Brain, Clock, FileText, FlaskRound as Flask, HeartPulse, Link as LinkIcon, QrCode, UserCircle } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const features = {
  doctors: [
    {
      icon: Brain,
      title: "AI-Powered Clinic Automation",
      description:
        "Automate routine tasks, patient scheduling, and administrative work with our advanced AI system.",
    },
    {
      icon: FileText,
      title: "Digital Patient Records",
      description:
        "Maintain comprehensive digital records with easy access and secure storage of patient histories.",
    },
    {
      icon: Clock,
      title: "Smart Appointment Scheduling",
      description:
        "Intelligent scheduling system that optimizes your clinic's workflow and reduces wait times.",
    },
  ],
  patients: [
    {
      icon: UserCircle,
      title: "Easy Appointment Booking",
      description:
        "Book appointments instantly with real-time availability and automated confirmations.",
    },
    {
      icon: HeartPulse,
      title: "Health Record Access",
      description:
        "Access your complete medical history, prescriptions, and test results anytime, anywhere.",
    },
    {
      icon: Clock,
      title: "Real-Time Queue Updates",
      description:
        "Get live updates on waiting times and queue status for better time management.",
    },
  ],
  diagnostics: [
    {
      icon: Flask,
      title: "Integrated Test Requests",
      description:
        "Receive and process test requests digitally with automated reporting systems.",
    },
    {
      icon: QrCode,
      title: "QR Prescription Validation",
      description:
        "Validate prescriptions instantly using secure QR codes for faster processing.",
    },
    {
      icon: LinkIcon,
      title: "Healthcare Network",
      description:
        "Connect with doctors and patients seamlessly in our integrated healthcare ecosystem.",
    },
  ],
};

export default function FeaturesPage() {
  return (
    <div className="container py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 text-center"
      >
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Powerful Features for Modern Healthcare
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Discover how OCIMUM transforms healthcare delivery with innovative
          features for all stakeholders.
        </p>
      </motion.div>

      <Tabs defaultValue="doctors" className="mx-auto max-w-5xl">
        <TabsList className="mb-8 grid w-full grid-cols-3">
          <TabsTrigger value="doctors">For Doctors</TabsTrigger>
          <TabsTrigger value="patients">For Patients</TabsTrigger>
          <TabsTrigger value="diagnostics">For Diagnostics</TabsTrigger>
        </TabsList>

        {Object.entries(features).map(([key, items]) => (
          <TabsContent key={key} value={key}>
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {items.map((feature) => (
                <motion.div key={feature.title} variants={item}>
                  <Card className="h-full">
                    <CardHeader>
                      <feature.icon className="mb-4 h-12 w-12 text-primary" />
                      <CardTitle>{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{feature.description}</CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
