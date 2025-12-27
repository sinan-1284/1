import { Bot, CircuitBoard, GraduationCap, Lightbulb, Users, Wrench } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Bot,
      title: 'Robotics & AI',
      description: 'Learn cutting-edge robotics and artificial intelligence technologies',
      color: 'primary',
    },
    {
      icon: CircuitBoard,
      title: 'Electronics & IoT',
      description: 'Master electronics fundamentals and Internet of Things applications',
      color: 'secondary',
    },
    {
      icon: GraduationCap,
      title: 'Hands-on Learning',
      description: 'Project-based courses designed for practical skill development',
      color: 'accent',
    },
    {
      icon: Lightbulb,
      title: 'Innovation Focus',
      description: 'Foster creativity and problem-solving through innovative projects',
      color: 'primary',
    },
    {
      icon: Users,
      title: 'Expert Mentorship',
      description: 'Learn from experienced professionals in STEM fields',
      color: 'secondary',
    },
    {
      icon: Wrench,
      title: 'Technical Support',
      description: 'Get dedicated support for your projects and learning journey',
      color: 'accent',
    },
  ];

  const colorMap: Record<string, string> = {
    primary: 'border-primary/30 bg-primary/5 group-hover:bg-primary/10 group-hover:shadow-[0_0_30px_rgba(0,217,255,0.3)]',
    secondary: 'border-secondary/30 bg-secondary/5 group-hover:bg-secondary/10 group-hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]',
    accent: 'border-accent/30 bg-accent/5 group-hover:bg-accent/10 group-hover:shadow-[0_0_30px_rgba(124,58,237,0.3)]',
  };

  const iconColorMap: Record<string, string> = {
    primary: 'text-primary',
    secondary: 'text-secondary',
    accent: 'text-accent',
  };

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5">
            <span className="text-sm">Why Choose NextBot Labs</span>
          </div>
          <h2 className="font-['Space_Grotesk']" style={{ fontSize: '48px', fontWeight: 700 }}>
            Everything You Need to
            <br />
            <span className="text-primary">Master STEM</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive resources and support for your journey in science, technology, engineering, and mathematics
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`group relative p-8 rounded-2xl border backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 ${
                  colorMap[feature.color]
                }`}
              >
                <div className="space-y-4">
                  <div className="relative inline-block">
                    <Icon className={`w-12 h-12 ${iconColorMap[feature.color]}`} />
                    <div className={`absolute inset-0 blur-xl ${iconColorMap[feature.color]} opacity-0 group-hover:opacity-50 transition-opacity`} />
                  </div>
                  <h3 className="font-['Space_Grotesk']" style={{ fontSize: '20px', fontWeight: 600 }}>
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>

                {/* Hover Effect Line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-${feature.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
