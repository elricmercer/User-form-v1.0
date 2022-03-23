from dataclasses import field
from rest_framework import serializers
from .models import UserDetails

class UserDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserDetails
        fields = ('id', 'username', 'first_name', 'last_name', 'phone_no', 'updated_at', 'created_at')