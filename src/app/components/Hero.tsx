import { Button } from './ui/button';
import { Rocket, Zap, Bot } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm">Innovation in STEM Education</span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="font-['Space_Grotesk']" style={{ fontSize: '56px', fontWeight: 700, lineHeight: 1.1 }}>
                Building the
                <br />
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                    Future with STEM
                  </span>
                  <div className="absolute inset-0 blur-2xl bg-gradient-to-r from-primary via-secondary to-accent opacity-30" />
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl">
                Empowering students, makers, and educators with hands-on learning experiences in robotics, electronics, IoT, and cutting-edge technology.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="group relative bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_40px_rgba(0,217,255,0.6)] transition-all duration-300"
              >
                <Rocket className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                Explore Courses
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary/50 hover:bg-primary/10 hover:border-primary transition-all duration-300"
              >
                Get Support
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-secondary/50 hover:bg-secondary/10 hover:border-secondary transition-all duration-300"
              >
                DIY Kits
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-primary/20">
              <div>
                <div className="font-['Space_Grotesk']" style={{ fontSize: '32px', fontWeight: 700 }}>
                  <span className="text-primary">500+</span>
                </div>
                <p className="text-sm text-muted-foreground">Students Trained</p>
              </div>
              <div>
                <div className="font-['Space_Grotesk']" style={{ fontSize: '32px', fontWeight: 700 }}>
                  <span className="text-secondary">50+</span>
                </div>
                <p className="text-sm text-muted-foreground">Projects Completed</p>
              </div>
              <div>
                <div className="font-['Space_Grotesk']" style={{ fontSize: '32px', fontWeight: 700 }}>
                  <span className="text-accent">20+</span>
                </div>
                <p className="text-sm text-muted-foreground">Lab Setups</p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden border border-primary/30 bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-sm">
              <img
                src="https://images.unsplash.com/photo-1655393001768-d946c97d6fd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdGljcyUyMEFJJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjY4MDQxNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Robotics and AI Technology"
                className="w-full h-auto opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 p-4 rounded-xl bg-card/90 backdrop-blur-sm border border-primary/30 shadow-[0_0_30px_rgba(0,217,255,0.3)]">
              <Bot className="w-8 h-8 text-primary" />
            </div>
            <div className="absolute -bottom-4 -left-4 p-4 rounded-xl bg-card/90 backdrop-blur-sm border border-secondary/30 shadow-[0_0_30px_rgba(139,92,246,0.3)]">
              <Zap className="w-8 h-8 text-secondary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
