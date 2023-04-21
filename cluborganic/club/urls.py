
from django.urls import path, re_path

from . import views
from .views import *

urlpatterns = [
    path('', index, name='home'),
    path('technology/', technology, name='technology'),
    path('policy/', policy, name='policy'),
    path('addtopic/', views.createFacult, name='addtopic'),
    path('register/', RegisterUser.as_view(), name='register'),
    path('login/', LoginUser.as_view(), name='login'),
    path('logout/', logout_user, name='logout'),
    path('topic/<int:topic_id>/', show_topic, name='topic'),
    path('topic/<int:topic_id>/addanswear/', views.createAnswear, name='addtopicanswear'),

]
