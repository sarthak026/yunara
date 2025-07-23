# Yunara AI Website

## Project Overview
A full-stack AI consulting agency website featuring comprehensive service offerings, client success stories, and expert matching platform. The project showcases AI chatbots, workflow automation, web development, and data analytics services.

## Architecture
- **Frontend**: React with TypeScript, Vite build system
- **Styling**: Tailwind CSS with custom gradients and animations
- **Routing**: Wouter (lightweight client-side routing)
- **UI Components**: Lucide React icons, Framer Motion animations
- **Backend**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Storage**: Database storage with full CRUD operations

## Recent Changes
- **2025-01-23**: Migrated from Bolt to Replit environment
  - Updated routing from react-router-dom to wouter
  - Fixed JSX syntax errors in Home.tsx
  - Removed explicit React imports (Vite handles JSX transformation)
  - Fixed component imports and exports
  - Updated branding with new Yunara AI logo and messaging
  - Implemented new hero section with updated taglines
  - Added robot + human collaboration image
  - Created new Client Success Stories page with case studies
  - Enhanced testimonials section with key metrics
  - Added PostgreSQL database with comprehensive schema
  - Implemented full CRUD API endpoints for all entities
  - Seeded database with sample projects and blog posts
  - Redesigned homepage with Web3-inspired hero section using business meeting background
  - Implemented dark blur overlay and glassmorphism effects on background image
  - Added gradient overlays (purple to black) for premium Web3 aesthetic
  - Updated navbar with transparent overlay and proper navigation structure
  - Created full-screen layout with subtle particle animations and responsive design
  - Application now running successfully on port 5000

## Key Features
- **Services**: AI Chatbots, Workflow Automation, Web Development, Data Analytics
- **Industries**: Real Estate, Healthcare, Legal, E-commerce, Finance, Content Creation
- **Pages**: Home, Services, Solutions, Portfolio, About, Contact, Careers, Blog
- **Components**: Dynamic navigation, animated sections, testimonials, case studies

## User Preferences
- Modern, professional design with purple/blue gradient theme
- Focus on AI and automation solutions
- Responsive design for all device types
- Smooth animations and transitions

## Development Notes
- Uses Replit's full-stack JavaScript template
- Vite dev server for hot module replacement
- Express backend serves both API and static files
- Port 5000 is the only exposed port