# Flower Shower

A beautiful interactive web application that displays falling flowers and provides information about different types of flowers.

## Features

- Interactive flower shower animation with customizable flower types
- Collection of flowers with detailed information
- Responsive design that works on all devices
- Contact form for user feedback
- About page with information about the project

## Screenshots

![Flower Shower Homepage](static/images/pexels-jonaskakaroto-736230.jpg)

## Installation

1. Clone this repository:
```
git clone https://github.com/yourusername/flower-shower.git
cd flower-shower
```

2. Create a virtual environment and activate it:
```
# Windows
python -m venv venv
venv\Scripts\activate

# macOS/Linux
python -m venv venv
source venv/bin/activate
```

3. Install the required dependencies:
```
pip install -r requirements.txt
```

## Usage

1. Run the Flask application:
```
python app.py
```

2. Open your web browser and navigate to:
```
http://127.0.0.1:5000/
```

3. Enjoy the flower shower animation and explore the different features!

## Project Structure

```
flower-shower/
├── app.py                  # Flask application
├── requirements.txt        # Python dependencies
├── static/                 # Static files
│   ├── css/                # CSS files
│   ├── js/                 # JavaScript files
│   └── images/             # Image files
└── templates/              # HTML templates
    ├── base.html           # Base template
    ├── index.html          # Homepage
    ├── flowers.html        # Flower collection
    ├── flower_detail.html  # Individual flower details
    ├── about.html          # About page
    └── contact.html        # Contact page
```

## Technologies Used

- **Backend**: Python, Flask
- **Frontend**: HTML, CSS, JavaScript, Tailwind CSS
- **Templating**: Jinja2

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- Flower images from [Pexels](https://www.pexels.com/)
- Icons from [Heroicons](https://heroicons.com/)
- Tailwind CSS for styling 