from django.contrib.auth import login, logout
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.auth.views import LoginView
from django.db.models import Q
from django.http import HttpResponse, Http404
from django.shortcuts import render, get_object_or_404, get_list_or_404, redirect
from django.urls import reverse_lazy
from django.views.generic import ListView, CreateView, DetailView
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from .forms import *
from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.forms import UserCreationForm
from django.urls import reverse_lazy
from django.views.generic.edit import FormView
from datetime import date
from django.core.exceptions import NON_FIELD_ERRORS, ValidationError
from django.http import HttpResponse, HttpResponseBadRequest
from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.utils import timezone
from django.contrib.auth.models import User
from .models import TopicDiscussion, Answers
from django.contrib import messages

def index(request):
    topics = TopicDiscussion.objects.order_by('-id')
    return render(request, "club/index.html",  {'topics': topics})

def technology(request):
    return render(request, "club/technology.html")

def policy(request):
    return render(request, "club/policy.html")

class RegisterUser(CreateView):
    form_class =  RegisterUserForm
    template_name = 'club/registration.html'
    success_url = reverse_lazy('login')

    def form_valid(self, form):
        user =form.save()
        login(self.request, user)
        return redirect('home')


class LoginUser(LoginView):
    form_class = AuthenticationForm
    template_name = 'club/login.html'

    def get_success_url(self):
        return reverse_lazy('home')

    def form_invalid(self, form):
        messages.error(self.request, "Неправильне ім'я користувача або пароль")
        return super().form_invalid(form)

def logout_user(request):
    logout(request)
    return redirect('login')

def show_topic(request, topic_id):
    topic = get_object_or_404(TopicDiscussion, pk=topic_id)
    answears = Answers.objects.filter(topic=topic).order_by('-id')

    context = {
        'topic': topic,
        'answears': answears,
    }
    return render(request, 'club/topic.html', context=context )

def createFacult(request):

    if request.method == 'POST':
        name = request.POST.get('addtopic')
        topic = TopicDiscussion.objects.create(
            name=name,
            time_create=timezone.now(),
            first_name=request.user
        )
        topic.save()
        topics = TopicDiscussion.objects.order_by('-id')
        return render(request, 'club/index.html', {'topics': topics})

def createAnswear(request, topic_id):
    if request.method == 'POST':
        answer = request.POST.get('addanswear')
        topic_id = request.POST.get('topic_id')
        topic = TopicDiscussion.objects.get(pk=topic_id)
        answear = Answers.objects.create(
            answer=answer,
            time_create=timezone.now(),
            first_name=request.user,
            topic=topic,
        )
        answear.save()
        answears = Answers.objects.filter(topic=topic).order_by('-id')
        return render(request, 'club/topic.html', {'answears': answears, 'topic': topic})
