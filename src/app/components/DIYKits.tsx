import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Package } from 'lucide-react';

export function DIYKits() {
  const kits = [
    {
      name: 'Arduino Starter Kit',
      description: 'Perfect for beginners. Includes Arduino board, sensors, LEDs, and all components to build 10+ projects.',
      image: 'https://images.unsplash.com/photo-1596566430365-55867e5ccaca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmR1aW5vJTIwZWxlY3Ryb25pY3MlMjBraXR8ZW58MXx8fHwxNzY2ODA0MTc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      level: 'Beginner',
      projects: '10+ Projects',
    },
    {
      name: 'IoT Smart Home Kit',
      description: 'Build your own smart home automation system with ESP32, sensors, and cloud connectivity.',
      image: 'https://images.unsplash.com/photo-1713857297379-6fc26e70f581?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJb1QlMjBzbWFydCUyMGRldmljZXN8ZW58MXx8fHwxNzY2ODA0MTc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      level: 'Intermediate',
      projects: '8 Projects',
    },
    {
      name: 'Robotics Advanced Kit',
      description: 'Build autonomous robots with advanced sensors, motors, and AI capabilities. Includes detailed guide.',
      image: 'https://images.unsplash.com/photo-1655393001768-d946c97d6fd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdGljcyUyMEFJJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjY4MDQxNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      level: 'Advanced',
      projects: '5 Projects',
    },
    {
      name: 'Electronics Lab Kit',
      description: 'Complete electronics workstation with multimeter, breadboards, components, and learning materials.',
      image: 'https://images.unsplash.com/photo-1553408226-42ecf81a214c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljcyUyMGNpcmN1aXQlMjBib2FyZHxlbnwxfHx8fDE3NjY3MzI3MDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      level: 'Intermediate',
      projects: '15+ Projects',
    },
    {
      name: 'AI & ML Starter Pack',
      description: 'Learn AI and machine learning with Raspberry Pi, camera module, and pre-loaded ML frameworks.',
      image: 'https://images.unsplash.com/photo-1655393001768-d946c97d6fd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdGljcyUyMEFJJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjY4MDQxNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      level: 'Advanced',
      projects: '6 Projects',
    },
    {
      name: 'Drone Building Kit',
      description: 'Assemble and program your own quadcopter drone. Includes frame, motors, flight controller, and more.',
      image: 'https://images.unsplash.com/photo-1755053757912-a63da9d6e0e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdGljcyUyMGxhYiUyMHdvcmtzaG9wfGVufDF8fHx8MTc2NjgwNDE3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      level: 'Advanced',
      projects: '3 Projects',
    },
  ];

  const levelColors: Record<string, string> = {
    Beginner: 'bg-primary/10 text-primary border-primary/30',
    Intermediate: 'bg-secondary/10 text-secondary border-secondary/30',
    Advanced: 'bg-accent/10 text-accent border-accent/30',
  };

  return (
    <section id="kits" className="relative py-24 overflow-hidden bg-gradient-to-b from-background to-card/30">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5">
            <Package className="w-4 h-4 text-primary" />
            <span className="text-sm">DIY STEM Kits</span>
          </div>
          <h2 className="font-['Space_Grotesk']" style={{ fontSize: '48px', fontWeight: 700 }}>
            Learn by <span className="text-primary">Building</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hands-on DIY kits with all components, detailed guides, and project ideas
          </p>
        </div>

        {/* Kits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {kits.map((kit, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-primary/20 bg-card/50 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(0,217,255,0.2)]"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={kit.image}
                  alt={kit.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                
                {/* Level Badge */}
                <div className="absolute top-4 right-4">
                  <Badge className={levelColors[kit.level] || 'bg-primary/10 text-primary border-primary/30'}>
                    {kit.level}
                  </Badge>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="font-['Space_Grotesk'] mb-2" style={{ fontSize: '20px', fontWeight: 600 }}>
                    {kit.name}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {kit.description}
                  </p>
                </div>

                {/* Projects Badge */}
                <div className="flex items-center gap-2 pt-2 border-t border-primary/10">
                  <span className="text-sm text-muted-foreground">{kit.projects}</span>
                </div>

                {/* CTA Button */}
                <Button
                  variant="outline"
                  className="w-full border-primary/30 hover:bg-primary/10 hover:border-primary transition-all duration-300"
                >
                  Enquire Now
                </Button>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/20 rounded-2xl transition-all duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
