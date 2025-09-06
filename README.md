🤖 AiTube – AI-Powered YouTube Search

AiTube is a modern YouTube-inspired web application that uses the YouTube Data API v3 combined with AI-enhanced search capabilities to make finding relevant videos smarter and faster.
It keeps the familiar YouTube UI, adds infinite scroll, and enhances the search experience with AI-driven recommendations.

🚀 Features
🎥 Fetch live videos using the YouTube Data API v3
🔍 AI-powered search enhancement → smarter results, not just keywords
🔄 Infinite scroll (just like YouTube, auto-loads as you scroll)
📱 Responsive UI (mobile-first, YouTube-like design)
🎨 Tailwind CSS + modern UI components
⚡ State management with Redux Toolkit

🛠️ Tech Stack
React – UI framework
Redux Toolkit – Global state management
Tailwind CSS – Styling
YouTube Data API v3 – Video data
AI Layer – Search query enhancement & contextual filtering
Vercel / Netlify – Deployment

📂 Project Structure
src/
┣ components/ # Navbar, Sidebar, VideoCard, VideoList
┣ hooks/ # Custom hooks (useYouTubeVideos)
┣ services/ # YouTube + AI service integrations
┣ store/ # Redux slices
┣ App.jsx
┗ index.jsx

⚙️ Setup & Installation

Clone the repository
git clone https://github.com/<your-username>/aitube.git
cd aitube

Install dependencies
npm install

Set up environment variables
Create a .env file in the root:
REACT_APP_YOUTUBE_API_KEY=YOUR_API_KEY_HERE

Run locally
npm start

Build for production
npm run build

🌍 Deployment
Deployed easily on Vercel or Netlify.
For Vercel:
vercel --prod

🚧 Future Enhancements
🎞️ Video details page with AI-powered transcript search
📝 Personalized AI recommendations
🌓 Dark mode
🌍 Multi-language support
