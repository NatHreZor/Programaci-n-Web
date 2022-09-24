from django.urls import path
from . import views

#definimos las rutas de la pagina de la app ciudad
urlpatterns = [
    #ruta, vista, nombre interno
    path('', views.index, name='index'),
    path('Ciudad/api/', views.CiudadListApiView.as_view()),
    path('Ciudad/api/<int:Ciudad_id>/', views.CiudadDetailApiView.as_view())
]

