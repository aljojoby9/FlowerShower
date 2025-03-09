from flask import Flask, render_template, request, redirect, url_for, flash, jsonify
import os
import random

app = Flask(__name__)
app.secret_key = 'flower_shower_secret_key'

# Flower data
flowers = [
    {"id": 1, "name": "Rose", "color": "Red", "description": "Symbol of love and passion"},
    {"id": 2, "name": "Tulip", "color": "Various", "description": "Symbol of perfect love"},
    {"id": 3, "name": "Sunflower", "color": "Yellow", "description": "Symbol of adoration and loyalty"},
    {"id": 4, "name": "Lily", "color": "White", "description": "Symbol of purity and refined beauty"},
    {"id": 5, "name": "Daisy", "color": "White & Yellow", "description": "Symbol of innocence and purity"}
]

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/flowers')
def flower_list():
    return render_template('flowers.html', flowers=flowers)

@app.route('/flower/<int:flower_id>')
def flower_detail(flower_id):
    flower = next((f for f in flowers if f["id"] == flower_id), None)
    if flower:
        return render_template('flower_detail.html', flower=flower)
    flash('Flower not found!', 'error')
    return redirect(url_for('flower_list'))

@app.route('/api/random-flower')
def random_flower():
    return jsonify(random.choice(flowers))

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/contact', methods=['GET', 'POST'])
def contact():
    if request.method == 'POST':
        name = request.form.get('name')
        email = request.form.get('email')
        message = request.form.get('message')
        # In a real app, you would save this to a database
        flash(f'Thank you {name}, your message has been received!', 'success')
        return redirect(url_for('contact'))
    return render_template('contact.html')

if __name__ == "__main__":
    app.run(debug=True)