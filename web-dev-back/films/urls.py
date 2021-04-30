from django.urls import path

from .views import filmsList,filmDetail
urlpatterns = [
    path('filmList', filmsList),
    path('<int:filmId>',filmDetail)
]