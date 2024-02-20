from django.db import models
from users.models import User
from courses.models import Course


# Модель покупки курса
class CoursePurchase(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    purchase_date = models.DateTimeField()
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    purchase_status = models.CharField(max_length=50)

    def __str__(self):
        return f"Идентификатор покупки: {self.id}, идентификатор пользователя: {self.user_id}"
