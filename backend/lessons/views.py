from django.shortcuts import render
from .models import Lesson


def lesson_list(request, course_id):
    lessons = Lesson.objects.filter(course_id=course_id)
    return render(request, 'lessons/lesson_list.html', {'lessons': lessons})


def lesson_detail(request, lesson_id):
    lesson = get_object_or_404(Lesson, id=lesson_id)
    return render(request, 'lesson_detail.html', {'lesson': lesson})
