from django.urls import path,include
from . import views

urlpatterns = [
    path('', views.index, name="home"),
    path('send_forward_command',views.send_forward_command, name='send_forward_command'),
    path('send_backward_command',views.send_backward_command, name='send_backward_command'),
    path('send_left_command',views.send_left_command, name='send_left_command'),
    path('send_right_command',views.send_right_command, name='send_right_command'),
    path('send_stop_command',views.send_stop_command, name='send_stop_command'),
]