from django.shortcuts import render
from .models import CoursePurchase


def purchase_list(request, user_id):
    purchases = CoursePurchase.objects.filter(user_id=user_id)
    return render(request, 'transactions/purchase_list.html', {'purchases': purchases})
