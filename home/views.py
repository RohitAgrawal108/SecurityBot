import os
from django.shortcuts import render
from django.views import View
import requests
from django.http import JsonResponse
# URL_forward = "http://192.168.43.88/f"

try:
    URL = os.environ['URL']
except:
    URL = "http://192.168.43.195/"

URL_forward = URL+"f"
URL_backward = URL+"b"
URL_right = URL+"r"
URL_left = URL+"l"
URL_stop = URL+"s"


# Create your views here.

def index(request):
    return render(request, 'home/index.html')
