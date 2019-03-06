from django.shortcuts import render, get_object_or_404
from django.views import generic
from django.http import HttpResponseRedirect
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from django.http import HttpResponseNotFound
from passlib.hash import sha256_crypt
from .models import Users

@csrf_exempt 
def Login(request):
    if request.method == 'POST':
        data_unicode = request.body.decode('utf-8')
        body = json.loads(data_unicode)
        email = body['email']
        users = Users.objects.filter(email=body['email'])
        if users:
            if  sha256_crypt.verify(body['password'], users[0].pswd):
                return JsonResponse({'code':users[0].password})
            else:
                return HttpResponseNotFound("Wrong password.")
        else:
            return HttpResponseNotFound("User not found.")

@csrf_exempt                  
def getPass(request):
    if request.method == 'POST':
        hash = sha256_crypt.using(rounds=5000).hash(request.POST.get('pass'))
        print(hash)