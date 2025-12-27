import { Wrench, Settings, Users, Bot } from 'lucide-react';
import { Button } from './ui/button';

export function Services() {
  const services = [
    {
      icon: Wrench,
      title: 'STEM Project Support',
      description: 'Get expert assistance with your robotics, electronics, and IoT projects. From ideation to implementation, we guide you every step of the way.',
      features: ['Project Consultation', 'Technical Guidance', 'Troubleshooting Help', '24/7 Support'],
      color: 'primary',
    },
    {
      icon: Bot,
      title: 'Robotics & Electronics Lab Setup',
      description: 'Complete lab setup solutions for schools, colleges, and institutions. We provide equipment, installation, and training.',
      features: ['Equipment Procurement', 'Lab Design', 'Installation Service', 'Staff Training'],
      color: 'secondary',
    },
    {
      icon: Users,
      title: 'Technical Mentorship',
      description: 'One-on-one mentorship from industry experts. Learn best practices, get career guidance, and accelerate your STEM journey.',
      features: ['1-on-1 Sessions', 'Career Guidance', 'Industry Insights', 'Portfolio Building'],
      color: 'accent',
    },
    {
      icon: Settings,
      title: 'Institutional Solutions',
      description: 'Customized STEM programs for educational institutions. Curriculum development, faculty training, and ongoing support.',
      features: ['Custom Curriculum', 'Faculty Training', 'Student Workshops', 'Ongoing Support'],
      color: 'primary',
    },
  ];

  const colorMap: Record<string, string> = {
    primary: 'from-primary/20 to-primary/5 border-primary/30 hover:shadow-[0_0_40px_rgba(0,217,255,0.2)]',
    secondary: 'from-secondary/20 to-secondary/5 border-secondary/30 hover:shadow-[0_0_40px_rgba(139,92,246,0.2)]',
    accent: 'from-accent/20 to-accent/5 border-accent/30 hover:shadow-[0_0_40px_rgba(124,58,237,0.2)]',
  };

  const iconColorMap: Record<string, string> = {
    primary: 'text-primary',
    secondary: 'text-secondary',
    accent: 'text-accent',
  };

  return (
    <section id="services" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5">
            <span className="text-sm">Our Services</span>
          </div>
          <h2 className="font-['Space_Grotesk']" style={{ fontSize: '48px', fontWeight: 700 }}>
            Comprehensive <span className="text-primary">STEM Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From individual learners to educational institutions, we provide tailored solutions for everyone
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`group relative p-8 rounded-2xl border bg-gradient-to-br backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 ${
                  colorMap[service.color]
                }`}
              >
                {/* Icon */}
                <div className="mb-6 relative inline-block">
                  <div className="p-4 rounded-xl bg-card/50 border border-primary/20">
                    <Icon className={`w-8 h-8 ${iconColorMap[service.color]}`} />
                  </div>
                  <div className={`absolute inset-0 blur-2xl ${iconColorMap[service.color]} opacity-0 group-hover:opacity-30 transition-opacity`} />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="font-['Space_Grotesk']" style={{ fontSize: '24px', fontWeight: 600 }}>
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2 pt-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <div className={`w-1.5 h-1.5 rounded-full ${iconColorMap[service.color].replace('text-', 'bg-')}`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button
                    variant="ghost"
                    className={`mt-6 ${iconColorMap[service.color]} hover:bg-${service.color}/10`}
                  >
                    Learn More →
                  </Button>
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
