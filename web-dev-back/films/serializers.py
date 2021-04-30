from rest_framework import serializers
from .models import Genre,Film

class GenreSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()

    def create(self, validated_data):
        genre = Genre.objects.create(name = validated_data['name'])
        return genre

    def update(self, instance, validated_data):
        instance.name = validated_data['name']
        instance.save()
        return instance





class FilmSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()
    img = serializers.CharField()
    secondName = serializers.CharField()
    description = serializers.CharField()
    kinorium = serializers.FloatField()
    imbd = serializers.FloatField()
    critics = serializers.FloatField()
    country = serializers.CharField()
    time = serializers.CharField()
    worldPremiere = serializers.CharField(max_length=200)
    usaPremiere = serializers.CharField(max_length=200)
    ruPremiere = serializers.CharField(max_length=200)
    otherName = serializers.CharField(max_length=400)
    genres = GenreSerializer()
