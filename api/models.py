from django.db import models

class UserDetails(models.Model):
    username = models.CharField(max_length=12, default="")
    first_name = models.CharField(max_length=254, default="")
    last_name = models.CharField(max_length=254, default="")
    phone_no = models.CharField(max_length=20, default=0)
    updated_at = models.DateTimeField(auto_now=True)
    created_at = models.DateTimeField(auto_now_add=True)
    objects = models.Manager()