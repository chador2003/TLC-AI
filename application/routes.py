from application import app
from flask import render_template, request, flash
from flask_cors import CORS, cross_origin
# from keras.preprocessing import image
# from PIL import Image, ImageOps
# import numpy as np
# import keras.models
# import re
# import base64
# from io import BytesIO
# from tensorflow.keras.datasets.mnist import load_data
# import json
# import requests
# import pathlib, os


@app.route('/') 
@app.route('/index') 
@app.route('/home') 
def index_page(): 
    return render_template("index.html", 
        title="Object Recognition")



