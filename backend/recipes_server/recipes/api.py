from rest_framework.generics import ListAPIView, RetrieveAPIView
from . import serializers
from . import models


class CategoryListAPIView(ListAPIView):
    serializer_class = serializers.CategorySerializer

    def get_queryset(self):
        return models.Category.objects.all()


class RecipeListAPIView(ListAPIView):
    serializer_class = serializers.RecipeSerializer

    def get_queryset(self):
        return models.Recipe.objects.all()


class RecipeItem(RetrieveAPIView):
    serializer_class = serializers.RecipeSerializer

    def get_queryset(self):
        return models.Recipe.objects.all()
