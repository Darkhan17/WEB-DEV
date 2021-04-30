from django.shortcuts import render
from rest_framework.decorators import api_view

from django.http.request import HttpRequest
from django.http.response import HttpResponse, JsonResponse

from rest_framework.request import Request
from rest_framework.response import Response

from .models import Film,Genre
from .serializers import FilmSerializer,GenreSerializer



# Create your views here.


@api_view(['GET','POST'])
def filmsList(request):
    if request.method == 'GET':
        films = Film.objects.all()
        serializer = FilmSerializer(films,many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = FilmSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)


@api_view(['GET','PUT','DELETE'])
def filmDetail(request, filmId):
    try:
        film = Film.objects.get(id = filmId)
    except Film.DoesNotExist as e:
        return Response({'message': str(e)}, status=400)

    if request.method == 'GET':
        serializer = FilmSerializer(film)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = FilmSerializer(instance=film, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)
    elif request == 'DELETE':
        film.delete()
        Response({'message': 'deleted'}, status=404)



