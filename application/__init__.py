from flask import Flask
from flask_heroku import Heroku
from flask_cors import CORS

#create the flask app
app = Flask(__name__)
CORS(app)

# instantiate the Heroku object before db
heroku = Heroku(app)

#use the route.py for request routing
from application import routes