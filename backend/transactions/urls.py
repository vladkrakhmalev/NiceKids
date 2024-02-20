from django.urls import path
from . import views

urlpatterns = [
    path('users/<int:user_id>/purchases/', views.purchase_list, name='purchase_list'),
]
