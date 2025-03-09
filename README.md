# 🌸 Flower Shower

![GitHub last commit](https://img.shields.io/github/last-commit/aljojoby9/FlowerShower)
![GitHub license](https://img.shields.io/github/license/aljojoby9/FlowerShower?color=blue)
![GitHub stars](https://img.shields.io/github/stars/aljojoby9/FlowerShower?style=social)

[![CI](https://github.com/aljojoby9/FlowerShower/actions/workflows/ci.yml/badge.svg)](https://github.com/aljojoby9/FlowerShower/actions/workflows/ci.yml)
[![CodeQL](https://github.com/aljojoby9/FlowerShower/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/aljojoby9/FlowerShower/actions/workflows/codeql-analysis.yml)
[![Dependabot Status](https://img.shields.io/badge/Dependabot-enabled-brightgreen.svg)](https://github.com/aljojoby9/FlowerShower/blob/main/.github/dependabot.yml)

A beautiful interactive web application that displays falling flowers and provides information about different types of flowers. Built with Next.js and Tailwind CSS, this project showcases modern web development techniques and responsive design.

![Flower Shower Demo](public/images/pexels-jonaskakaroto-736230.jpg)

## ✨ Features

- **Interactive Flower Animation**: Watch beautiful flowers fall across your screen with customizable animation settings
- **Comprehensive Flower Database**: Explore detailed information about various flowers, their meanings, and care tips
- **Responsive Design**: Enjoy a seamless experience on any device - mobile, tablet, or desktop
- **Modern UI**: Clean, intuitive interface built with Tailwind CSS
- **Contact Form**: Interactive form with validation for user feedback
- **API Integration**: Backend API routes for dynamic content

## 🚀 Live Demo

Visit the live demo: [Flower Shower App](https://flower-shower.vercel.app) (Note: Deploy to Vercel to activate this link)

## 🛠️ Technologies Used

### Frontend
- **React**: UI component library
- **Next.js**: React framework for server-side rendering and static site generation
- **Tailwind CSS**: Utility-first CSS framework for styling
- **JavaScript (ES6+)**: Modern JavaScript features

### Backend
- **Next.js API Routes**: Serverless functions for backend logic
- **Server Components**: React Server Components for improved performance

### Development & Deployment
- **Git**: Version control
- **GitHub**: Code repository
- **Vercel**: Recommended deployment platform (optimized for Next.js)

## 📋 Prerequisites

- Node.js 18.17 or later
- npm or yarn package manager
- Git

## 🔧 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/aljojoby9/FlowerShower.git
   cd FlowerShower
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
flower-shower/
├── app/                    # Next.js app directory
│   ├── about/              # About page
│   ├── api/                # API routes
│   │   └── random-flower/  # Random flower API endpoint
│   ├── contact/            # Contact page
│   ├── flowers/            # Flowers pages
│   │   └── [id]/           # Dynamic flower detail pages
│   ├── data.js             # Flower data
│   ├── globals.css         # Global styles
│   ├── layout.js           # Root layout
│   └── page.js             # Home page
├── components/             # React components
│   ├── FlowerAnimation.js  # Flower animation component
│   ├── FlowerCard.js       # Flower card component
│   ├── Footer.js           # Footer component
│   └── Navbar.js           # Navigation component
├── public/                 # Static files
│   └── images/             # Image files
├── next.config.js          # Next.js configuration
├── package.json            # Project dependencies
├── postcss.config.js       # PostCSS configuration
└── tailwind.config.js      # Tailwind CSS configuration
```

## 🌟 Key Features Explained

### Flower Animation
The flower animation uses JavaScript to create falling flower elements with randomized properties such as position, size, and animation duration. Users can toggle between emoji flowers and image-based flowers, as well as pause/resume the animation.

### Responsive Design
The application is fully responsive and adapts to different screen sizes:
- Mobile: Single column layout with collapsible navigation
- Tablet: Two-column layout for certain sections
- Desktop: Full multi-column layout with expanded navigation

### Server-Side Rendering
Next.js provides server-side rendering capabilities, improving performance and SEO compared to client-side-only applications.

## 🚢 Deployment

### Deploying to Vercel (Recommended)

1. Create a [Vercel account](https://vercel.com/signup)
2. Install the Vercel CLI:
   ```bash
   npm install -g vercel
   ```
3. Run the deployment command:
   ```bash
   vercel
   ```

### Other Deployment Options

The application can also be deployed to other platforms such as:
- Netlify
- AWS Amplify
- GitHub Pages (with some configuration)

## 🌿 Branch Structure

This repository follows a structured branching strategy:

- **main**: Production-ready code that has been thoroughly tested
- **development**: Active development branch where new features are integrated
- **feature/***:  Individual feature branches (branch off from development)
- **bugfix/***:  Bug fix branches (branch off from development)
- **release/***:  Release preparation branches

### Workflow

1. Development happens on feature branches branched from `development`
2. Completed features are merged back into the `development` branch
3. When ready for release, `development` is merged into `main`
4. Critical hotfixes may be applied directly to `main` and then backported to `development`

## 🤝 Contributing

Contributions are welcome! Here's how you can contribute:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

Please make sure to update tests as appropriate and follow the code style of the project.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgements

- Flower images from [Pexels](https://www.pexels.com/)
- Icons from [Heroicons](https://heroicons.com/)
- Tailwind CSS for styling
- Next.js team for the amazing framework

## 📞 Contact

If you have any questions or suggestions, feel free to reach out:

- GitHub: [aljojoby9](https://github.com/aljojoby9)
- Email: hello@flowershower.com (example)

---

Made with ❤️ and 🌸 