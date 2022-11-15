from rest_framework import serializers
from mura.models import mura

class MuraSerializer(serializers.ModelSerializer):
    class Meta:
        model = mura
        fields = '__all__'