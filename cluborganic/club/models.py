

from django.db import models
from django.contrib.auth.models import User
from django.urls import reverse

class TopicDiscussion(models.Model):
    name = models.CharField(max_length=255)
    time_create = models.DateTimeField(auto_now_add=True)
    first_name = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.name} ({self.time_create}) {self.first_name}"

    def get_absolute_url(self):
        return reverse('topic', kwargs={'topic_id': self.pk})

    def formatted_time_create(self):
        return self.time_create.strftime('%d.%m.%Y')

class Answers(models.Model):
    answer = models.TextField()
    time_create = models.DateTimeField(auto_now_add=True)
    first_name = models.ForeignKey(User, on_delete=models.CASCADE)
    topic = models.ForeignKey(TopicDiscussion, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.answer} ({self.time_create})"

    def formatted_time_create(self):
        return self.time_create.strftime('%d.%m.%Y')
