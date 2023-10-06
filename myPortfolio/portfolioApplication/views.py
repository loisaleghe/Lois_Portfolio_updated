from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index(request):
    return render(request, 'portfolioApplication/index.html')

def about(request):
    return render(request, 'portfolioApplication/about.html')

def work(request):
    return render(request, 'portfolioApplication/work.html')

def projects(request):
    return render(request, 'portfolioApplication/projects.html')

def contact(request):
    return render(request, 'portfolioApplication/contact.html')    
