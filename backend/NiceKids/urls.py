from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('core.urls')),
    path('', include('users.urls')),
    path('', include('courses.urls')),
    path('', include('lessons.urls')),
    path('', include('transactions.urls')),
]
