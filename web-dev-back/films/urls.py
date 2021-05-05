from django.urls import path

from .views import filmsList,filmDetail,getComments, deleteComment
urlpatterns = [
    path('filmList', filmsList),
    path('<int:filmId>',filmDetail),
    path('<int:filmId>/comments', getComments),
    path('<int:commentId>/comments/delete', deleteComment),

]