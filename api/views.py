from .serializers import UserDetailsSerializer
from .models import UserDetails
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

@api_view(['GET'])
def apiOverview(request):
    apiUrls = {
        'All Users' : '/api/users',
        'Create User' : '/api/create',
        'User' : '/api/view/<str:id>',
        'Update' : '/api/update/<str:id>',
        'delete' : '/api/delete/<str:id>',
    }
    return Response(apiUrls, status=status.HTTP_200_OK)

@api_view(['GET'])
def allUsers(request):
    users = UserDetails.objects.all()
    serializer = UserDetailsSerializer(users, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['POST'])
def createUser(request):
    serializer = UserDetailsSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(['GET'])
def viewUser(request, id):
    user = UserDetails.objects.get(id=id)
    serializer = UserDetailsSerializer(user, many=False)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['POST'])
def updateUser(request, id):
    user = UserDetails.objects.get(id=id)
    serializer = UserDetailsSerializer(instance=user, data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['DELETE'])
def deleteUser(request, id):
    user = UserDetails.objects.get(id=id)
    user.delete()
    return Response("User deleted", status=status.HTTP_200_OK)