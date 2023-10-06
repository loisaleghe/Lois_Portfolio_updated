from django.urls import path
from portfolioApplication import views

urlpatterns = [
    path('',views.index,name='index'),
    path('about/',views.about,name='about'),
    path('work/',views.work,name='work'),
    path('projects/',views.projects,name='projects'),
    path('contact/',views.contact,name='contact'),
]
