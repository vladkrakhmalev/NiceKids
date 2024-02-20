from django.shortcuts import render


# Главная страница
def home(request):
    return render(request, 'core/home.html')


# Страница "О нас"
def about(request):
    return render(request, 'core/about.html')


# Страница "Контакты"
def contact(request):
    return render(request, 'core/contact.html')
