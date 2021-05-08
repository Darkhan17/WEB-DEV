from django.db import models
from django.contrib.auth.models import AbstractUser


# Create your models here.
# Create your models here.

class User(AbstractUser):
    name = models.CharField(max_length=200, unique=True)
    email = models.EmailField(unique=True, max_length=255, default='')
    password = models.CharField(max_length=200)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    def get_username(self):
        return self.email



