from django.db import models


# Модель курса
class Course(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    age_limit = models.DecimalField(max_digits=3, decimal_places=1)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    duration = models.IntegerField()

    def __str__(self):
        return self.title
