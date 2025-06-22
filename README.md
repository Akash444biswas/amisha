# 🚀 Saurabh's Portfolio Website

A modern, high-end portfolio website built with cutting-edge technologies to showcase skills, projects, and professional experience. This portfolio features a bold, elegant design with beautiful animations and a premium feel.

## ✨ Features

- **Modern Design**: Clean, professional layout with startup-quality aesthetics
- **Dark Mode Support**: Seamless theme switching with system preference detection
- **Smooth Animations**: Powered by Framer Motion for engaging user interactions
- **Responsive Design**: Optimized for all devices and screen sizes
- **Performance Optimized**: Built with Next.js 15 and optimized for speed
- **Accessible**: Following WCAG guidelines for inclusive design
- **SEO Optimized**: Meta tags, structured data, and performance optimization

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS + ShadCN/UI components
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Typography**: Geist Sans & Geist Mono fonts
- **Theme**: next-themes for dark/light mode
- **Language**: TypeScript for type safety

## 📁 Project Structure

```
my-portfolio/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles and CSS variables
│   ├── layout.tsx         # Root layout with theme provider
│   ├── page.tsx           # Main homepage
│   ├── loading.tsx        # Loading UI
│   └── not-found.tsx      # 404 page
├── components/            # Reusable components
│   ├── ui/               # ShadCN/UI components
│   ├── sections/         # Page sections
│   │   ├── hero.tsx      # Hero section with animated background
│   │   ├── about.tsx     # About me section
│   │   ├── projects.tsx  # Projects showcase
│   │   ├── skills.tsx    # Skills and expertise
│   │   ├── testimonials.tsx # Client testimonials
│   │   └── contact.tsx   # Contact form
│   ├── navbar.tsx        # Navigation with smooth scrolling
│   ├── footer.tsx        # Footer component
│   └── scroll-to-top.tsx # Scroll to top button
└── public/               # Static assets
```

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd my-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Personal Information
Update the following files with your information:
- `app/layout.tsx` - Meta tags and SEO information
- `components/sections/hero.tsx` - Name, title, and introduction
- `components/sections/about.tsx` - About me content and skills
- `components/sections/projects.tsx` - Your projects and work
- `components/sections/contact.tsx` - Contact information

### Styling
- `app/globals.css` - Global styles and CSS variables
- `tailwind.config.ts` - Tailwind configuration and custom animations
- `components/ui/` - Customize ShadCN/UI components

### Content
- Replace placeholder images in the projects section
- Update social media links throughout the site
- Modify the testimonials with real client feedback
- Add your actual project URLs and GitHub links

## 📱 Sections

1. **Hero Section**: Eye-catching introduction with animated background
2. **About Section**: Personal story, skills, and highlights
3. **Projects Section**: Showcase of featured work with tech stacks
4. **Skills Section**: Technical expertise with interactive progress bars
5. **Testimonials Section**: Client feedback and social proof
6. **Contact Section**: Contact form and information

## 🌟 Key Features

- **Smooth Scrolling Navigation**: Seamless navigation between sections
- **Interactive Animations**: Hover effects, scroll animations, and micro-interactions
- **Theme Switching**: Dark/light mode with smooth transitions
- **Mobile-First Design**: Responsive across all device sizes
- **Performance Optimized**: Fast loading times and smooth animations
- **Accessibility**: Keyboard navigation and screen reader support

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Other Platforms
- **Netlify**: Connect GitHub repo and deploy
- **Railway**: Deploy with `railway up`
- **Digital Ocean**: Use App Platform

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](issues).

## 📞 Contact

- **Email**: saurabh@example.com
- **LinkedIn**: [Your LinkedIn](https://linkedin.com/in/yourprofile)
- **GitHub**: [Your GitHub](https://github.com/yourusername)

---

Built with ❤️ by Saurabh using Next.js and modern web technologies.
