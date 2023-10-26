from rest_framework import serializers
from .models import Veiculos, Condutor


class CondutorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Condutor
        fields = ['id', 'nome', 'sobrenome', 'cpf']


class VeiculosSerializer(serializers.ModelSerializer):
    condutor = CondutorSerializer()

    class Meta:
        model = Veiculos
        fields = ['id', 'marca', 'placa', 'condutor']

    def create(self, validated_data):
        condutor_data = validated_data.pop('condutor')
        condutor_instance = Condutor.objects.create(**condutor_data)
        veiculo_instance = Veiculos.objects.create(condutor=condutor_instance, **validated_data)
        return veiculo_instance
    
    def update(self, instance, validated_data):
        condutor_data = validated_data.pop('condutor')
        condutor_instance = Condutor
        
        instance.marca = validated_data.get('marca', instance.marca)
        instance.placa = validated_data.get('placa', instance.placa)
        instance.save()
        
        condutor_instance.nome = condutor_data.get('nome', condutor_instance.nome)
        condutor_instance.sobrenome = condutor_data.get('sobrenome', condutor_instance.sobrenome)
        condutor_instance.cpf = condutor_data.get('cpf', condutor_instance.cpf)
        
        return instance;