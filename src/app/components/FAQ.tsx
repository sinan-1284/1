import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

export function FAQ() {
  const faqs = [
    {
      question: 'What age groups are your programs suitable for?',
      answer:
        'Our programs cater to a wide range of ages, from school students (grades 6-12) to college students and adult learners. We offer beginner to advanced level courses designed to match different skill levels and learning goals.',
    },
    {
      question: 'Do I need prior experience in robotics or electronics?',
      answer:
        'Not at all! We have courses designed specifically for beginners with no prior experience. Our beginner courses start with fundamentals and gradually build up your skills. For those with experience, we offer intermediate and advanced courses.',
    },
    {
      question: 'What is included in the DIY kits?',
      answer:
        'Each DIY kit includes all necessary components (microcontrollers, sensors, motors, cables, etc.), detailed instruction manuals, project guides, and access to online support. We ensure you have everything needed to complete the projects successfully.',
    },
    {
      question: 'Can institutions customize the lab setup?',
      answer:
        'Yes! We work closely with educational institutions to design customized lab setups based on their curriculum requirements, available space, and budget. We provide consultation, equipment procurement, installation, and faculty training.',
    },
    {
      question: 'Are the courses available online or offline?',
      answer:
        'We offer both online and offline courses. Online courses provide flexibility with pre-recorded videos, live sessions, and digital resources. Offline courses offer hands-on experience in our labs with direct instructor interaction. Some courses are available in hybrid mode.',
    },
    {
      question: 'What kind of technical support do you provide?',
      answer:
        'We provide comprehensive technical support including project consultation, troubleshooting assistance, mentorship sessions, and community forum access. For lab setups, we offer ongoing maintenance support and software updates.',
    },
    {
      question: 'Do you provide certificates upon course completion?',
      answer:
        'Yes, all students who successfully complete our courses receive a certificate of completion. Advanced courses also include project-based assessments and portfolio development guidance.',
    },
    {
      question: 'Can I get a refund if I am not satisfied?',
      answer:
        'We offer a 7-day satisfaction guarantee for our courses. If you are not satisfied with your purchase within the first 7 days, you can request a full refund. Please refer to our refund policy for complete details.',
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5">
            <span className="text-sm">FAQ</span>
          </div>
          <h2 className="font-['Space_Grotesk']" style={{ fontSize: '48px', fontWeight: 700 }}>
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our services, courses, and programs
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-primary/20 bg-card/50 backdrop-blur-sm rounded-2xl px-6 data-[state=open]:shadow-[0_0_30px_rgba(0,217,255,0.15)]"
            >
              <AccordionTrigger className="hover:text-primary transition-colors py-6 hover:no-underline">
                <span className="text-left font-['Space_Grotesk']" style={{ fontSize: '18px', fontWeight: 600 }}>
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 pt-2">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Still Have Questions */}
        <div className="text-center mt-12 p-8 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <h3 className="font-['Space_Grotesk'] mb-2" style={{ fontSize: '24px', fontWeight: 600 }}>
            Still have questions?
          </h3>
          <p className="text-muted-foreground mb-4">
            Can't find the answer you're looking for? Please reach out to our support team.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_30px_rgba(0,217,255,0.4)] transition-all duration-300"
          >
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
}
