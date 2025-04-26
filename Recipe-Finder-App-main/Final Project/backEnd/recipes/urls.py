from django.urls import path
from . import views

urlpatterns = [
    path('recipes/', views.get_all_recipes, name='get_all_recipes'),
    path('recipes/add/', views.add_recipe, name='add_recipe'),
]
