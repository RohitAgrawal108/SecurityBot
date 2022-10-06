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

def send_forward_command(repuest):
    print("run forward")
    r = requests.get(url=URL_forward)
    print("Forward")
    return JsonResponse({'data': 'F'}, safe=False)

def send_backward_command(repuest):
    print("run Backward")
    r = requests.get(url=URL_backward)
    print("Backward")
    return JsonResponse({'data': 'B'}, safe=False)

def send_right_command(repuest):
    print("run right")
    r = requests.get(url=URL_right)
    print("right")
    return JsonResponse({'data': 'R'}, safe=False)

def send_left_command(repuest):
    print("runn left")
    r = requests.get(url=URL_left)
    print("left")
    return JsonResponse({'data': 'L'}, safe=False)

def send_stop_command(repuest):
    r = requests.get(url=URL_stop)
    print("stop")
    return JsonResponse({'data': 'S'}, safe=False)