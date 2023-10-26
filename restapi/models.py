from django.db import models


class Condutor(models.Model):
    nome = models.CharField(max_length=255)
    sobrenome = models.CharField(max_length=255)
    cpf = models.CharField(max_length=255)
    
    def __str__(self) -> str:
        return self.nome
    

class Veiculos(models.Model):
    marca = models.CharField(max_length=255)
    placa = models.CharField(max_length=255)
    condutor = models.ForeignKey(
        Condutor, on_delete=models.CASCADE, null=True, related_name='condutor')

    def __str__(self) -> str:
        return self.marca
