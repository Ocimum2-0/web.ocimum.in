import { Card, CardContent } from "@/components/ui/card";
import { Brain, Rocket, Target } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="container py-12">
      {/* Vision & Story Section */}
      <section className="mb-16 text-center">
        <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
          Our Vision for Healthcare
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          OCIMUM was born from real-life healthcare challenges, with a mission to
          make clinic and hospital management seamless, AI-driven, and completely
          digital for doctors, patients, and healthcare providers.
        </p>
      </section>

      {/* Mission & Vision Cards */}
      <section className="mb-16 grid gap-8 md:grid-cols-2">
        <Card className="relative overflow-hidden">
          <CardContent className="p-6">
            <Target className="mb-4 h-12 w-12 text-primary" />
            <h2 className="mb-3 text-2xl font-bold">Our Mission</h2>
            <p className="text-muted-foreground">
              To make clinic and hospital management seamless, AI-driven, and
              completely digital for doctors, patients, and healthcare providers.
            </p>
          </CardContent>
        </Card>
        <Card className="relative overflow-hidden">
          <CardContent className="p-6">
            <Rocket className="mb-4 h-12 w-12 text-primary" />
            <h2 className="mb-3 text-2xl font-bold">Our Vision</h2>
            <p className="text-muted-foreground">
              A world where healthcare is as simple as ordering food—instant,
              accessible, and optimized.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* What Makes Us Unique */}
      <section className="mb-16">
        <h2 className="mb-8 text-center text-3xl font-bold">
          What Makes OCIMUM Unique?
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardContent className="p-6">
              <Brain className="mb-4 h-8 w-8 text-primary" />
              <h3 className="mb-2 text-xl font-semibold">AI-First Approach</h3>
              <p className="text-muted-foreground">
                Unlike traditional software, OCIMUM uses AI to automate routine
                tasks and provide intelligent insights.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <Brain className="mb-4 h-8 w-8 text-primary" />
              <h3 className="mb-2 text-xl font-semibold">
                Complete Digital Transformation
              </h3>
              <p className="text-muted-foreground">
                End-to-end digitization of all clinic processes, from appointments
                to prescriptions.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <Brain className="mb-4 h-8 w-8 text-primary" />
              <h3 className="mb-2 text-xl font-semibold">
                Seamless Integration
              </h3>
              <p className="text-muted-foreground">
                Connected ecosystem linking doctors, patients, labs, and pharmacies
                in real-time.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
