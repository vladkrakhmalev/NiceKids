from django.db import models
from courses.models import Course


# Модель урока
class Lesson(models.Model):
    lesson_title = models.CharField(max_length=100)
    lesson_description = models.TextField()
    content = models.JSONField()
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='lessons', null=True)

    def __str__(self):
        return self.lesson_title
