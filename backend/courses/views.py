from django.shortcuts import render
# способ получить объект из базы данных по заданным критериям или вернуть ошибку 404, если объект не найден
from django.shortcuts import get_object_or_404
from .models import Course


def course_list(request):
    courses = Course.objects.all()
    return render(request, 'courses/course_list.html', {'courses': courses})


def course_detail(request, course_id):
    # Получаем курс по ID и все связанные с ним уроки
    course = get_object_or_404(Course, pk=course_id)
    lessons = course.lessons.all()
    return render(request, 'course_detail.html', {'course': course, 'lessons': lessons})
