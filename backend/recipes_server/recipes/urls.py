# from django.urls import path, include
# from rest_framework import routers
# from .views import CategoryViewSet, RecipeViewSet
#
#
# router = routers.DefaultRouter()
# router.register(r'categories', CategoryViewSet)
# router.register(r'recipes', RecipeViewSet)
#
#
# urlpatterns = [
#     path('', include(router.urls)),
#     path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
# ]
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from . import api

urlpatterns = [
    path('categories', api.CategoryListAPIView.as_view(), name='api_categories'),
    path('recipes', api.RecipeListAPIView.as_view(), name='api_recipes'),
    path('recipeItem/<int:pk>', api.RecipeItem.as_view(), name='recipeItem'),
]


