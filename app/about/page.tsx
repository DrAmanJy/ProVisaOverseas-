'use client';

import * as React from 'react';
import { PageHero } from '@/components/PageHero';
import { Shield, Target, Compass, Users } from 'lucide-react';
import { SmartImage } from '@/components/SmartImage';
import { motion } from 'motion/react';

const team = [
  {
    name: "Sarah Jenkins",
    role: "Lead Immigration Consultant",
    bio: "Over 15 years of experience in international immigration law and client representation.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Michael Chen",
    role: "Senior Student Advisor",
    bio: "Specializes in university admissions, student visas, and educational pathways.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Elena Rodriguez",
    role: "Permanent Residency & Family Migration Specialist",
    bio: "Expert in PR pathways, points-tested immigration, and family reunification.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80"
  }
];

const values = [
  { icon: Shield, title: "Integrity", description: "We operate with complete honesty and transparency in every consultation." },
  { icon: Target, title: "Expertise", description: "Our team stays updated with the latest immigration policies and procedures." },
  { icon: Compass, title: "Responsibility", description: "We take our role in your life-changing journey seriously." },
  { icon: Users, title: "Client-First", description: "Your long-term success and peace of mind are our highest priorities." },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden bg-bg-primary">
      <PageHero 
        title="More Than A Visa." 
        subtitle="We help ambitious individuals and families navigate the complexities of global mobility with confidence."
        imageSrc="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1920&q=80"
      />

      {/* Story Section - Editorial layout */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[11px] font-bold tracking-[0.3em] text-accent uppercase block mb-6">OUR STORY</span>
              <h2 className="text-3xl md:text-5xl font-heading font-normal text-primary mb-8 leading-tight">
                A Vision For <br/> Global Mobility.
              </h2>
              <p className="text-lg text-text-muted mb-6 font-light leading-relaxed">
                Pro Visa Overseas is a premium immigration and visa consultancy dedicated to helping clients build their futures abroad. We understand that moving to a new country is one of the most significant decisions of your life, and we treat it with the professional respect it deserves.
              </p>
              <p className="text-lg text-text-muted font-light leading-relaxed">
                Our team of dedicated professionals provides clear, actionable, and legally sound advice to students, professionals, and families seeking overseas education, career advancement, and permanent residency.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px] md:h-[700px] rounded-[32px] overflow-hidden"
            >
              <SmartImage 
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee6c?auto=format&fit=crop&w=1200&q=80"
                alt="Consultation meeting"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 md:py-32 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 md:mb-24">
            <span className="text-[11px] font-bold tracking-[0.3em] text-accent uppercase block mb-4">OUR PRINCIPLES</span>
            <h2 className="text-3xl md:text-5xl font-heading font-normal text-primary mb-4">The Values We Stand By</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="bg-bg-card p-10 rounded-[24px] border border-border shadow-sm text-center hover:border-accent/30 transition-colors group"
                >
                  <div className="w-16 h-16 mx-auto rounded-full border-2 border-accent/20 flex items-center justify-center mb-8 group-hover:bg-accent/5 transition-colors">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-heading font-normal text-primary mb-4">{val.title}</h3>
                  <p className="text-text-muted text-sm font-light leading-relaxed">{val.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 md:py-32 bg-bg-primary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 md:mb-24">
            <span className="text-[11px] font-bold tracking-[0.3em] text-accent uppercase block mb-4">OUR EXPERTS</span>
            <h2 className="text-3xl md:text-5xl font-heading font-normal text-primary">Meet The Team</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {team.map((member, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative h-[400px] rounded-[24px] overflow-hidden mb-6">
                  <SmartImage
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/10 transition-opacity duration-500 group-hover:opacity-0" />
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-heading font-normal text-primary mb-2">{member.name}</h3>
                  <p className="text-accent text-xs font-bold tracking-[0.15em] uppercase mb-4">{member.role}</p>
                  <p className="text-text-muted text-sm font-light leading-relaxed px-4">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
