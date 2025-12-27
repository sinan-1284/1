import { Check, Lightbulb, Package, Settings, GraduationCap } from 'lucide-react';
import { Button } from './ui/button';

export function LabSetup() {
  const steps = [
    {
      icon: Lightbulb,
      title: 'Planning & Consultation',
      description: 'We analyze your requirements, space, and budget to design the perfect STEM lab.',
      color: 'primary',
    },
    {
      icon: Package,
      title: 'Equipment Procurement',
      description: 'Source high-quality equipment, tools, and materials from trusted suppliers.',
      color: 'secondary',
    },
    {
      icon: Settings,
      title: 'Installation & Setup',
      description: 'Professional installation, configuration, and testing of all equipment and systems.',
      color: 'accent',
    },
    {
      icon: GraduationCap,
      title: 'Training & Support',
      description: 'Comprehensive training for faculty and ongoing technical support for your lab.',
      color: 'primary',
    },
  ];

  const features = [
    'Custom lab design based on curriculum',
    'Quality equipment from trusted brands',
    'Professional installation service',
    'Faculty training programs',
    'Ongoing maintenance support',
    'Safety compliance certification',
    'Equipment warranty coverage',
    'Regular software updates',
  ];

  const colorMap: Record<string, string> = {
    primary: 'text-primary bg-primary/10 border-primary/30',
    secondary: 'text-secondary bg-secondary/10 border-secondary/30',
    accent: 'text-accent bg-accent/10 border-accent/30',
  };

  return (
    <section id="lab-setup" className="relative py-24 overflow-hidden bg-gradient-to-b from-card/30 to-background">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5">
            <Settings className="w-4 h-4 text-primary" />
            <span className="text-sm">Lab Setup Services</span>
          </div>
          <h2 className="font-['Space_Grotesk']" style={{ fontSize: '48px', fontWeight: 700 }}>
            Complete <span className="text-primary">Lab Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            End-to-end lab setup services for schools, colleges, and institutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Steps */}
          <div className="space-y-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="group relative p-6 rounded-2xl border border-primary/20 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(0,217,255,0.15)]"
                >
                  <div className="flex gap-4">
                    {/* Step Number & Icon */}
                    <div className="flex-shrink-0">
                      <div className={`relative p-4 rounded-xl border ${colorMap[step.color]}`}>
                        <Icon className="w-6 h-6" />
                        <div className="absolute -top-2 -left-2 w-8 h-8 rounded-full bg-card border-2 border-primary flex items-center justify-center">
                          <span className="text-sm font-['Space_Grotesk']" style={{ fontWeight: 700 }}>
                            {index + 1}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="font-['Space_Grotesk'] mb-2" style={{ fontSize: '20px', fontWeight: 600 }}>
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Connecting Line */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-[52px] bottom-0 translate-y-full h-6 w-0.5 bg-gradient-to-b from-primary/50 to-transparent" />
                  )}
                </div>
              );
            })}
          </div>

          {/* Right: Image & Features */}
          <div className="space-y-8">
            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden border border-primary/30 bg-gradient-to-br from-primary/10 to-secondary/10">
              <img
                src="https://images.unsplash.com/photo-1755053757912-a63da9d6e0e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdGljcyUyMGxhYiUyMHdvcmtzaG9wfGVufDF8fHx8MTc2NjgwNDE3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Lab Setup"
                className="w-full h-auto opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </div>

            {/* Features List */}
            <div className="p-8 rounded-2xl border border-primary/20 bg-card/50 backdrop-blur-sm">
              <h3 className="font-['Space_Grotesk'] mb-6" style={{ fontSize: '24px', fontWeight: 600 }}>
                What's Included
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-0.5">
                      <div className="w-5 h-5 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                    </div>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Button
                size="lg"
                className="w-full mt-8 bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_30px_rgba(0,217,255,0.4)]"
              >
                Request Lab Setup Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
