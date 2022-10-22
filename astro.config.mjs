import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://bogyj.github.io'
    
    // Don’t set a base parameter if:
    // Your repository is named <YOUR_USERNAME>.github.io.
    // You’re using a custom domain.
    // base: '/resume-website',
});
