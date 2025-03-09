# Flower Shower - Next.js Version

A beautiful interactive web application that displays falling flowers and provides information about different types of flowers, built with Next.js and Tailwind CSS.

## Features

- Interactive flower shower animation with customizable flower types
- Collection of flowers with detailed information
- Responsive design that works on all devices
- Contact form with validation
- About page with information about the project
- Modern UI with Tailwind CSS

## Screenshots

![Flower Shower Homepage](public/images/pexels-jonaskakaroto-736230.jpg)

## Technologies Used

- **Frontend**: React, Next.js, Tailwind CSS
- **Backend**: Next.js API Routes, Server Components
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone this repository:
```
git clone https://github.com/aljojoby9/FlowerShower.git
cd FlowerShower
```

2. Install dependencies:
```
npm install
# or
yarn install
```

3. Run the development server:
```
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to:
```
http://localhost:3000
```

## Project Structure

```
flower-shower/
├── app/                    # Next.js app directory
│   ├── about/              # About page
│   ├── api/                # API routes
│   ├── contact/            # Contact page
│   ├── flowers/            # Flowers pages
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

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- Flower images from [Pexels](https://www.pexels.com/)
- Icons from [Heroicons](https://heroicons.com/)
- Tailwind CSS for styling 