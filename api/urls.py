from django.urls import path
from .views import allUsers, apiOverview, createUser, deleteUser, updateUser, viewUser

urlpatterns = [
    path('', apiOverview, name="overview"),
    path('users', allUsers, name="users"),
    path('create', createUser, name="create"),
    path('view/<str:id>', viewUser, name="view"),
    path('update/<str:id>', updateUser, name="update"),
    path('delete/<str:id>', deleteUser, name="delete"),
]
