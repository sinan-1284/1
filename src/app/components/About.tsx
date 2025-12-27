import { Rocket, Target, Award, Users } from 'lucide-react';

export function About() {
  const values = [
    {
      icon: Rocket,
      title: 'Innovation',
      description: 'Pushing boundaries in STEM education with cutting-edge technology',
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'Committed to delivering the highest quality learning experiences',
    },
    {
      icon: Award,
      title: 'Hands-on Learning',
      description: 'Learning by doing - building real projects that matter',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building a thriving community of makers and innovators',
    },
  ];

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5">
            <span className="text-sm">About NextBot Labs</span>
          </div>
          <h2 className="font-['Space_Grotesk']" style={{ fontSize: '48px', fontWeight: 700 }}>
            Our <span className="text-primary">Mission</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left: Mission */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
              Mission
            </div>
            <h3 className="font-['Space_Grotesk']" style={{ fontSize: '36px', fontWeight: 700, lineHeight: 1.2 }}>
              Empowering the Next Generation of{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Innovators
              </span>
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At NextBot Labs, we believe that the future belongs to those who can build it. Our mission is to democratize STEM education by providing hands-on, practical learning experiences that inspire creativity, foster innovation, and develop the technical skills needed for tomorrow's challenges.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We bridge the gap between theoretical knowledge and real-world applications, ensuring every student, maker, and educator has access to quality resources, expert guidance, and a supportive community.
            </p>
          </div>

          {/* Right: Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden border border-primary/30 bg-gradient-to-br from-primary/10 to-secondary/10">
              <img
                src="https://images.unsplash.com/photo-1568585262983-9b54814595a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTVEVNJTIwZWR1Y2F0aW9uJTIwbGVhcm5pbmd8ZW58MXx8fHwxNzY2ODA0MTc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="STEM Education"
                className="w-full h-auto opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </div>
          </div>
        </div>

        {/* Vision */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left: Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border border-secondary/30 bg-gradient-to-br from-secondary/10 to-accent/10">
              <img
                src="https://images.unsplash.com/photo-1553408226-42ecf81a214c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljcyUyMGNpcmN1aXQlMjBib2FyZHxlbnwxfHx8fDE3NjY3MzI3MDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Electronics"
                className="w-full h-auto opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </div>
          </div>

          {/* Right: Vision */}
          <div className="space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm">
              Vision
            </div>
            <h3 className="font-['Space_Grotesk']" style={{ fontSize: '36px', fontWeight: 700, lineHeight: 1.2 }}>
              Building a Future Where{' '}
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                Everyone Can Create
              </span>
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We envision a world where STEM education is accessible, engaging, and practical for everyone. Where students don't just learn about technology—they build it, experiment with it, and use it to solve real problems.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Through our comprehensive programs, DIY kits, and lab setups, we're creating an ecosystem where curiosity meets capability, and ideas transform into innovations that shape our future.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="font-['Space_Grotesk'] mb-4" style={{ fontSize: '36px', fontWeight: 700 }}>
              Our <span className="text-primary">Values</span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at NextBot Labs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="group relative p-6 rounded-2xl border border-primary/20 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(0,217,255,0.2)]"
                >
                  <div className="space-y-4">
                    <div className="relative inline-block">
                      <Icon className="w-10 h-10 text-primary" />
                      <div className="absolute inset-0 blur-xl text-primary opacity-0 group-hover:opacity-50 transition-opacity" />
                    </div>
                    <h4 className="font-['Space_Grotesk']" style={{ fontSize: '20px', fontWeight: 600 }}>
                      {value.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
