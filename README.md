# Next.js Portfolio Website

A modern, responsive portfolio website built with Next.js 14, featuring dark/light theme toggle, contact form, and beautiful UI design.

## 🚀 Features

- **Modern Design**: Clean and responsive design with smooth animations
- **Dark/Light Theme**: Toggle between dark and light themes with persistent storage
- **Contact Form**: Functional contact form for user interactions
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile devices
- **SEO Optimized**: Built with Next.js for optimal performance and SEO
- **Fast Loading**: Optimized images and components for quick loading times

## 🛠️ Technologies Used

- **Next.js 14**: React framework for production
- **React 18**: Latest version with hooks and modern features
- **CSS Modules**: Scoped styling for components
- **Google Fonts**: Inter font for typography
- **Context API**: For theme management
- **Image Optimization**: Next.js built-in image optimization

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (version 18 or higher)
- **npm** or **yarn** package manager

## 🚀 Installation

Follow these steps to get the project running on your local machine:

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/nextjs-portfolio.git
cd nextjs-portfolio
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Run the Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

```
src/
├── app/                    # Next.js 14 app directory
│   ├── layout.js          # Root layout component
│   ├── page.js            # Home page
│   ├── about/             # About page
│   ├── blog/              # Blog page
│   ├── contact/           # Contact page
│   └── portfolio/         # Portfolio page
├── components/            # Reusable components
│   ├── Button/           # Button component
│   ├── Footer/           # Footer component
│   ├── Navbar/           # Navigation component
│   └── AuthProvider/     # Authentication provider
└── context/              # React context
    └── ThemeContext.js   # Theme management
```

## 🎨 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🌐 Website Pages

### Home Page (`/`)
- Hero section with introduction
- Featured projects showcase
- Call-to-action buttons

### About Page (`/about`)
- Personal information and background
- Skills and experience
- Professional journey

### Portfolio Page (`/portfolio`)
- Project showcase
- Filterable project categories
- Detailed project descriptions

### Blog Page (`/blog`)
- Blog posts listing
- Article previews
- Reading time estimates

### Contact Page (`/contact`)
- Contact form with validation
- Contact information
- Social media links

## 🎯 Key Features Explained

### Theme Toggle
The website includes a dark/light theme toggle that:
- Persists user preference in localStorage
- Works seamlessly across all pages
- Provides smooth transitions between themes

### Responsive Design
- Mobile-first approach
- Flexible grid layouts
- Optimized for all screen sizes

### Performance Optimized
- Next.js Image component for optimized images
- Code splitting for faster loading
- SEO-friendly meta tags

## 🔧 Customization

### Changing Colors
Edit the CSS variables in `src/app/globals.css` to customize the color scheme.

### Adding New Pages
Create new directories in `src/app/` following the Next.js 14 app router structure.

### Modifying Components
All reusable components are located in `src/components/` and can be easily modified.

## 📦 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Other Platforms
The project can be deployed to any platform that supports Node.js:
- Netlify
- Railway
- DigitalOcean App Platform

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name**
- GitHub: [@your-username](https://github.com/your-username)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/your-profile)

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- React team for the powerful library
- All contributors and supporters

---

⭐ If you found this project helpful, please give it a star on GitHub!