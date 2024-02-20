from django.db import models


# Модель пользователя
class User(models.Model):
    first_name = models.CharField(max_length=50)
    email = models.EmailField(max_length=100)
    password = models.CharField(max_length=255)
    role = models.CharField(max_length=30)

    def __str__(self):
        return self.first_name
