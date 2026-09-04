'use server';

import fs from 'fs';
import path from 'path';

export interface PPRImage {
  src: string;
  country: string;
}

export async function getPPRImages(): Promise<PPRImage[]> {
  const pprDir = path.join(process.cwd(), 'public/ppr');
  let pprImages: PPRImage[] = [];

  try {
    if (fs.existsSync(pprDir)) {
      const files = fs.readdirSync(pprDir);
      const fileDetails = files
        .filter(file => {
          const ext = path.extname(file).toLowerCase();
          return ext === '.jpg' || ext === '.jpeg' || ext === '.png' || ext === '.webp';
        })
        .map(file => {
          const filePath = path.join(pprDir, file);
          const stat = fs.statSync(filePath);
          return {
            name: file,
            mtime: stat.mtimeMs,
          };
        });

      // Sort by modification time descending (latest first)
      fileDetails.sort((a, b) => b.mtime - a.mtime);

      pprImages = fileDetails.map(f => {
        let country = 'Visa Granted';
        const lowerName = f.name.toLowerCase();

        if (lowerName.includes('canada')) {
          country = 'Canada';
        } else if (lowerName.includes('australia') || lowerName.includes('vevo')) {
          country = 'Australia';
        } else if (lowerName.includes('uk') || lowerName.includes('united kingdom')) {
          country = 'United Kingdom';
        } else if (lowerName.includes('usa') || lowerName.includes('united states')) {
          country = 'United States';
        } else if (lowerName.includes('germany') || lowerName.includes('europe')) {
          country = 'Europe';
        } else if (lowerName.includes('new zealand') || lowerName.includes('nz')) {
          country = 'New Zealand';
        }

        return {
          src: `/ppr/${encodeURIComponent(f.name)}`,
          country,
        };
      });
    }
  } catch (error) {
    console.error('Failed to read PPR directory:', error);
  }

  return pprImages;
}
