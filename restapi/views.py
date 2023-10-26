from django.shortcuts import render
from rest_framework import viewsets, status
from .serializers import VeiculosSerializer
from .models import Veiculos
from rest_framework.response import Response

# Create your views here.
class VeiculosViewSet(viewsets.ModelViewSet):
    queryset = Veiculos.objects.all()
    serializer_class = VeiculosSerializer
    
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        condutor_instance = instance.condutor
        
        if condutor_instance:
            condutor_instance.delete()
            
        self.perform_destroy(instance)
        
        return Response(status=status.HTTP_204_NO_CONTENT)
        