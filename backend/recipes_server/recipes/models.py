from django.db import models


class Category(models.Model):
    """Модель категории блюда"""
    title = models.CharField(max_length=64, unique=True, help_text='category name', default="Default category")

    def __str__(self):
        """Метод для отображения информации об объекте класса."""
        return f'{self.title}'


class Recipe(models.Model):
    """Модель рецепта блюда"""
    title = models.CharField(max_length=64, default="Default recipe")
    text = models.TextField()
    img = models.ImageField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE, null=True)

    def __str__(self):
        """Метод для отображения информации об объекте класса."""
        return f'{self.title.title()}: {self.text[:20]}'
