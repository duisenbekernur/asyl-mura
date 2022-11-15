from django.db import models


class mura(models.Model):
    id = models.AutoField(primary_key=True)
    kaztitle = models.CharField(max_length = 255)
    rutitle = models.CharField(max_length = 255)
    entitle = models.CharField(max_length = 255)

    kazbody = models.TextField()
    rubody = models.TextField()
    enbody = models.TextField()

    region = models.DecimalField(decimal_places = 1, max_digits = 10)
    image = models.CharField(max_length = 255)

    def __str__(self):
        return self.kaztitile
    

# Create your models here.
