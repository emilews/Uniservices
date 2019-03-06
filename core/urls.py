from django.urls import path
from . import views

urlpatterns = [
    path('login/', views.Login, name='home_page'),
    path('pass/', views.getPass, name='password')
]