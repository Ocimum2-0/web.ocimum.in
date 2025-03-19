"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = {
  doctors: [
    {
      question: "How does the AI-powered scheduling work?",
      answer:
        "Our AI system analyzes patient patterns, appointment history, and your preferences to optimize scheduling. It automatically suggests the best time slots and manages your calendar efficiently.",
    },
    {
      question: "Is patient data secure?",
      answer:
        "Yes, we use enterprise-grade encryption and comply with all healthcare data protection regulations. Your patients' data is stored securely and accessible only to authorized personnel.",
    },
    {
      question: "Can I integrate my existing patient records?",
      answer:
        "Yes, OCIMUM provides tools to import existing patient records from most common healthcare management systems. Our team will assist you with the migration process.",
    },
  ],
  patients: [
    {
      question: "How do I book an appointment?",
      answer:
        "Simply select your preferred doctor, choose an available time slot, and confirm your booking. You'll receive instant confirmation and reminders via email or SMS.",
    },
    {
      question: "Can I access my medical records online?",
      answer:
        "Yes, you can securely access your complete medical history, prescriptions, and test results through our patient portal or mobile app.",
    },
    {
      question: "How accurate are the queue waiting times?",
      answer:
        "Our real-time queue system provides highly accurate waiting times by analyzing current queue status, appointment durations, and historical data.",
    },
  ],
  technical: [
    {
      question: "What technical requirements are needed?",
      answer:
        "OCIMUM is a cloud-based solution that works on any modern web browser. No special hardware or software installation is required.",
    },
    {
      question: "Is there offline access available?",
      answer:
        "Yes, critical features are available offline and will sync automatically when connection is restored.",
    },
    {
      question: "How often is the system updated?",
      answer:
        "We release regular updates with new features and improvements every two weeks, with immediate security updates when necessary.",
    },
  ],
};

export default function FAQPage() {
  return (
    <div className="container py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 text-center"
      >
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Frequently Asked Questions
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Find answers to common questions about OCIMUM's features, security, and
          implementation.
        </p>
      </motion.div>

      <div className="mx-auto grid max-w-4xl gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="mb-4 text-2xl font-bold">For Doctors</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.doctors.map((faq, index) => (
              <AccordionItem key={index} value={`doctor-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="mb-4 text-2xl font-bold">For Patients</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.patients.map((faq, index) => (
              <AccordionItem key={index} value={`patient-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="mb-4 text-2xl font-bold">Technical Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.technical.map((faq, index) => (
              <AccordionItem key={index} value={`technical-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </div>
  );
}
