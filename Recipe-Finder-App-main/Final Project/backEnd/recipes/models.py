from django.db import models

# Create your models here.



class Recipe(models.Model):
    id = models.IntegerField(primary_key=True)  # Manually defined ID field
    title = models.CharField(max_length=100)
    image = models.URLField()
    # Add other fields as needed, like ingredients, instructions, etc.

    def __str__(self):
        return self.title
