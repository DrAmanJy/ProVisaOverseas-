'use client';

import * as React from 'react';
import { PageHero } from '@/components/PageHero';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function SuccessStoriesPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      <PageHero 
        title="Client Success Stories" 
        subtitle="Real stories of ambition, perseverance, and global mobility powered by our expert guidance."
        imageSrc="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-offwhite p-12 rounded-sm border border-[#E4E8EF] mb-12">
            <h2 className="text-2xl font-heading font-bold text-primary-deep mb-4">
              Real Stories Coming Soon
            </h2>
            <p className="text-text-muted text-lg mb-8 max-w-2xl mx-auto">
              We are currently compiling our latest client testimonials. Check back soon to read authentic accounts from professionals, students, and families who have successfully navigated their international journeys with Pro Visa Overseas.
            </p>
            <div className="inline-flex items-center justify-center p-4 bg-white rounded-sm shadow-sm border border-[#E4E8EF] text-sm font-medium text-text-muted italic">
              [Placeholder for real client testimonials to be added upon permission]
            </div>
          </div>
          
          <Button size="lg" variant="gold" asChild className="rounded-full">
            <Link href="/contact">Start Your Own Story</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
