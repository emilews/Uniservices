from django.urls import path
from . import views

urlpatterns = [
    path('login/', views.Login, name='home_page'),
]