import { motion } from 'framer-motion';
import { AnimatedGroup } from '@/components/ui/animated-group';
import { TextEffect } from '@/components/ui/text-effect';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
export function ContactSection() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError('');
    try {
      const res = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Failed to send message');
      }
      setSuccess(true);
      setForm({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message || 'Failed to send message');
      } else {
        setError('Failed to send message');
      }
    } finally {
      setLoading(false);
    }
  };
  return <section id="contact" className="py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <TextEffect per="word" as="h2" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8" preset="blur">
            Let's Work Together
          </TextEffect>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your ideas to life? I'd love to hear about your project and discuss how we can collaborate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <AnimatedGroup preset="blur-slide">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
              <div className="space-y-6">
                <motion.div className="flex items-center gap-4 p-4 rounded-lg border bg-background" whileHover={{
                scale: 1.02
              }} transition={{
                type: "spring",
                stiffness: 300,
                damping: 20
              }}>
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-semibold">@</span>
                  </div>
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-muted-foreground">malonetrevor16@gmail.com</div>
                  </div>
                </motion.div>

                <motion.div className="flex items-center gap-4 p-4 rounded-lg border bg-background" whileHover={{
                scale: 1.02
              }} transition={{
                type: "spring",
                stiffness: 300,
                damping: 20
              }}>
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-semibold">in</span>
                  </div>
                  <div>
                    <div className="font-medium">LinkedIn</div>
                    <div className="text-muted-foreground">https://www.linkedin.com/in/trevor-malone-dev/</div>
                  </div>
                </motion.div>

                <motion.div className="flex items-center gap-4 p-4 rounded-lg border bg-background" whileHover={{
                scale: 1.02
              }} transition={{
                type: "spring",
                stiffness: 300,
                damping: 20
              }}>
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-semibold">📍</span>
                  </div>
                  <div>
                    <div className="font-medium">Location</div>
                    <div className="text-muted-foreground">Austin, Tx., USA</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </AnimatedGroup>

          <AnimatedGroup preset="blur-slide">
            <div className="bg-background rounded-2xl border p-8">
              <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                {success && <div className="text-green-600 font-medium">Message sent successfully!</div>}
                {error && <div className="text-red-600 font-medium">{error}</div>}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <Input id="name" placeholder="Your name" value={form.name} onChange={e => setForm({
                    ...form,
                    name: e.target.value
                  })} />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="your@email.com" value={form.email} onChange={e => setForm({
                    ...form,
                    email: e.target.value
                  })} />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input id="subject" placeholder="Project inquiry" value={form.subject} onChange={e => setForm({
                  ...form,
                  subject: e.target.value
                })} />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Tell me about your project..." className="min-h-[120px]" value={form.message} onChange={e => setForm({
                  ...form,
                  message: e.target.value
                })} />
                </div>
                
                <Button size="lg" className="w-full" type="submit" disabled={loading}>
                  {loading ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </AnimatedGroup>
        </div>
      </div>
    </section>;
}