from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Initialize CORS on your app



@app.route('/hi')
def gretting():
    return "Hi, what can i help you ?"

if __name__ == '__main__':
    app.run(debug=True)
