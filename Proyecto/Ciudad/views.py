from django.shortcuts import render

#imports
from django.template import loader
from django.http import HttpResponse

#Rest Imports
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

#Modelos
from .models import Ciudad
from .serializers import CiudadSerializer

def index(request):
    #Archivo HTML con template
    template = loader.get_template('index.html')
    #logica de la vista
    context = {}
    #respuesta
    return HttpResponse(template.render(context,request))

class CiudadListApiView(APIView):

    def get(self,request,*args, **kwargs):
        '''
        Lista todos los libros en base de datos
        '''
        Ciudades = Ciudad.objects.all()
        serializer = CiudadSerializer(Ciudades, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def post(self,request, *args, **kwargs):
        '''
        Crea un libro en base de datos
        '''
        data = {
            'nombre': request.data.get('nombre'),
            'descripcion': request.data.get('descripcion')
        }

        serializer = CiudadSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class CiudadDetailApiView(APIView):

    def get_object(self,Ciudad_id):
        '''
        Metodo de ayuda para retornar un libro con un id Dado
        '''
        try:
            return Ciudad.objects.get(id=Ciudad_id)
        except Ciudad.DoesNotExist:
            return None
        
    def get(self,request,Ciudad_id, *args, **kwargs):
        '''
        Permite obtener un libro por ID
        '''
        Ciudad_instance = self.get_object(Ciudad_id)
        if not Ciudad_instance:
            return Response(
                {"res":"El libro con el id dado no existe"},
                status = status.HTTP_400_BAD_REQUEST
            )
        
        serializer = CiudadSerializer(Ciudad_instance)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def put(self,request,Ciudad_id, *args, **kwargs):
        '''
        Actualiza un libro por su ID
        '''
        Ciudad_instance = self.get_object(Ciudad_id)
        if not Ciudad_instance:
            return Response(
                {"res":"La ciudad con el id dado no existe"},
                status = status.HTTP_400_BAD_REQUEST
            )
        
        data = {
            'nombre': request.data.get('nombre'),
            'descripcion': request.data.get('descripcion')
        }

        serializer = CiudadSerializer(instance = Ciudad_instance, data=data, partial = True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self,request,Ciudad_id, *args, **kwargs):
        '''
        Elimina el libro con el ID dado
        '''
        Ciudad_instance = self.get_object(Ciudad_id)
        if not Ciudad_instance:
            return Response(
                {"res":"La ciudad con el id dado no existe"},
                status = status.HTTP_400_BAD_REQUEST
            )
        Ciudad_instance.delete()
        return Response(
            {"res":"Object Deleted"},
            status=status.HTTP_200_OK
        )
