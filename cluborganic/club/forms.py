from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from django.core.exceptions import ValidationError

from .models import TopicDiscussion


class RegisterUserForm(UserCreationForm):
    username = forms.CharField(label='Логин', widget=forms.TextInput(attrs={'placeholder': "Логін * (обов'язково)"}))
    email = forms.EmailField(label='Email', widget=forms.EmailInput(attrs={'placeholder': "Пошта * (обов'язково)"}))
    first_name = forms.CharField(label='Имя', widget=forms.TextInput(attrs={'placeholder': "Ім'я * (обов'язково)"}))
    last_name = forms.CharField(label='Фамилия', widget=forms.TextInput(attrs={'placeholder': "Фамілія * (обов'язково)"}))
    password1 = forms.CharField(label='Пароль', widget=forms.PasswordInput(attrs={'placeholder': "Має бути мін. 1 цифра, 1 велика літера", 'pattern': "(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,}",'title': "Має містити принаймні одну цифру, одну велику та малу літеру та принаймні 4 або більше символів"}))
    password2 = forms.CharField(label='Повтор пароля', widget=forms.PasswordInput(attrs={'placeholder': "Має бути мін. 1 цифра, 1 велика літера", 'pattern': "(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,}",'title': "Має містити принаймні одну цифру, одну велику та малу літеру та принаймні 4 або більше символів"}))

    class Meta:
        model = User
        fields = ('username', 'email', 'first_name', 'last_name', 'password1', 'password2')

