import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { GraduationCap, Clock, Users } from 'lucide-react';

export function Courses() {
  const courses = [
    {
      title: 'Introduction to Robotics',
      description: 'Learn robotics fundamentals, build your first robot, and understand sensors, motors, and control systems.',
      level: 'Beginner',
      duration: '8 weeks',
      mode: 'Online & Offline',
      students: '120+',
      image: 'https://images.unsplash.com/photo-1655393001768-d946c97d6fd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdGljcyUyMEFJJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjY4MDQxNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'IoT & Smart Systems',
      description: 'Master IoT fundamentals, cloud connectivity, and build real-world smart automation projects.',
      level: 'Intermediate',
      duration: '10 weeks',
      mode: 'Online',
      students: '95+',
      image: 'https://images.unsplash.com/photo-1713857297379-6fc26e70f581?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJb1QlMjBzbWFydCUyMGRldmljZXN8ZW58MXx8fHwxNzY2ODA0MTc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'Advanced AI & Machine Learning',
      description: 'Deep dive into AI algorithms, neural networks, and implement ML models for robotics applications.',
      level: 'Advanced',
      duration: '12 weeks',
      mode: 'Offline',
      students: '65+',
      image: 'https://images.unsplash.com/photo-1655393001768-d946c97d6fd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdGljcyUyMEFJJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjY4MDQxNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'Electronics Fundamentals',
      description: 'Comprehensive electronics course covering circuits, components, PCB design, and troubleshooting.',
      level: 'Beginner',
      duration: '6 weeks',
      mode: 'Online & Offline',
      students: '150+',
      image: 'https://images.unsplash.com/photo-1553408226-42ecf81a214c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljcyUyMGNpcmN1aXQlMjBib2FyZHxlbnwxfHx8fDE3NjY3MzI3MDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'Embedded Systems Design',
      description: 'Learn microcontroller programming, real-time systems, and build embedded applications from scratch.',
      level: 'Intermediate',
      duration: '10 weeks',
      mode: 'Online',
      students: '80+',
      image: 'https://images.unsplash.com/photo-1596566430365-55867e5ccaca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmR1aW5vJTIwZWxlY3Ryb25pY3MlMjBraXR8ZW58MXx8fHwxNzY2ODA0MTc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'Autonomous Robotics',
      description: 'Advanced course on autonomous navigation, computer vision, path planning, and robot perception.',
      level: 'Advanced',
      duration: '14 weeks',
      mode: 'Offline',
      students: '45+',
      image: 'https://images.unsplash.com/photo-1755053757912-a63da9d6e0e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdGljcyUyMGxhYiUyMHdvcmtzaG9wfGVufDF8fHx8MTc2NjgwNDE3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

  const levelColors: Record<string, string> = {
    Beginner: 'bg-primary/10 text-primary border-primary/30',
    Intermediate: 'bg-secondary/10 text-secondary border-secondary/30',
    Advanced: 'bg-accent/10 text-accent border-accent/30',
  };

  const modeColors: Record<string, string> = {
    'Online': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    'Offline': 'bg-blue-500/10 text-blue-400 border-blue-500/30',
    'Online & Offline': 'bg-purple-500/10 text-purple-400 border-purple-500/30',
  };

  return (
    <section id="courses" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5">
            <GraduationCap className="w-4 h-4 text-primary" />
            <span className="text-sm">Project-Based Courses</span>
          </div>
          <h2 className="font-['Space_Grotesk']" style={{ fontSize: '48px', fontWeight: 700 }}>
            Master <span className="text-primary">STEM Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive courses designed for hands-on learning and real-world applications
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-primary/20 bg-card/50 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(0,217,255,0.2)]"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                
                {/* Badges */}
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                  <Badge className={levelColors[course.level] || 'bg-primary/10 text-primary border-primary/30'}>
                    {course.level}
                  </Badge>
                  <Badge className={modeColors[course.mode] || 'bg-primary/10 text-primary border-primary/30'}>
                    {course.mode}
                  </Badge>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="font-['Space_Grotesk'] mb-2" style={{ fontSize: '20px', fontWeight: 600 }}>
                    {course.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {course.description}
                  </p>
                </div>

                {/* Meta Info */}
                <div className="flex items-center gap-4 pt-2 border-t border-primary/10 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{course.students}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <Button
                  className="w-full bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 hover:from-primary/30 hover:to-secondary/30 transition-all duration-300"
                >
                  Enroll Now
                </Button>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/20 rounded-2xl transition-all duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-primary/30 hover:bg-primary/10 hover:border-primary"
          >
            View All Courses →
          </Button>
        </div>
      </div>
    </section>
  );
}
