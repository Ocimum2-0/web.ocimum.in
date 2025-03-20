"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquare, Phone, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  return (
    <div className="container py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 text-center"
      >
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Get in Touch
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Have questions about OCIMUM? We&apos;re here to help. Fill out the form below
          and we&apos;ll get back to you shortly.
        </p>
      </motion.div>

      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>
                Reach out to us through any of these channels
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <span>om.pawar1512@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <span>+91 9522557828</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Send us a Message</CardTitle>
              <CardDescription>
                Fill out the form below and we&apos;ll respond within 24 hours
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">
                    <span className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      Name
                    </span>
                  </Label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">
                    <span className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      Email
                    </span>
                  </Label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message">
                    <span className="flex items-center gap-2">
                      <MessageSquare className="h-4 w-4" />
                      Message
                    </span>
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="How can we help you?"
                    rows={4}
                  />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
