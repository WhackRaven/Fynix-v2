# Fynix - Learn Different

A gamified mobile-first learning app that makes education engaging through TikTok-style scrolling, XP progression, and AI-powered content.

## Running on bolt.new

This project is optimized for bolt.new preview:

1. The app automatically adapts to different screen sizes
2. On desktop/tablet, it shows a mobile frame (430px max width)
3. On mobile, it uses the full screen width

### Development

```bash
npm install
npm run dev
```

The app will be available at `http://localhost:8080`

### Features

- TikTok-style vertical feed with educational content
- XP and level progression system
- Habit tracking with gamification
- Money tracker for financial literacy
- AI-powered vocabulary learning with image scanning
- Quiz generation from any text or image
- Voice chat with AI assistant (FYNIX)
- Multi-language support (DE, EN, ES)
- Dark/Light mode with multiple accent colors
- Streak system with XP bonuses

### Tech Stack

- React + TypeScript
- Vite
- Tailwind CSS 4
- Framer Motion
- Pollinations AI (free cloud AI)
- Tesseract.js (OCR)
- Optional: Ollama for local AI

### Mobile-First Design

The app uses a responsive design that:
- Shows full-width on mobile devices
- Shows a centered mobile frame on desktop (like a phone simulator)
- Uses touch-optimized interactions
- Implements vertical snap scrolling for the feed

### AI Integration

The app uses **Pollinations AI** (free cloud service) by default for:
- Feed content generation
- Chat with FYNIX assistant
- Quiz generation

You can optionally connect Ollama for local AI processing.

### Preview Tips

For the best preview experience on bolt.new:
1. Use the mobile device emulator in browser DevTools
2. Or resize your browser to ~430px width
3. The app will automatically adapt to your screen size

Enjoy learning with Fynix!
