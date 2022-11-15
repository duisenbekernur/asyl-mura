from django.http import HttpResponse, JsonResponse
from django.http.request import HttpRequest
from rest_framework.response import Response
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from mura.models import mura
from mura.serializer import MuraSerializer
from rest_framework import status
from rest_framework.decorators import api_view


@csrf_exempt
def mura_list(request):
    if request.method == 'GET':
        muras = mura.objects.all()
        serializer = MuraSerializer(muras, many=True)
        return JsonResponse(serializer.data, safe=False)


    if request.method == 'POST':
        mura_data = JSONParser().parse(request)
        mura_serializer = MuraSerializer(data=mura_data)
        if mura_serializer.is_valid():
            mura_serializer.save()
            return JsonResponse(mura_serializer.data, status=status.HTTP_201_CREATED) 
        return JsonResponse(mura_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@csrf_exempt
def mura_get(request, pk):
    try:
        murap = mura.objects.get(pk = pk)
    except murap.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if request.method == "GET":
        mura_serializer = MuraSerializer(murap)
        return JsonResponse(mura_serializer.data, status=status.HTTP_200_OK)


@csrf_exempt
def mura_update(request, pk):
    try: 
        muras = mura.objects.get(pk=pk)
    except muras.DoesNotExist: 
        return JsonResponse({'message': 'No valid link'}, status=status.HTTP_404_NOT_FOUND) 

        
    if request.method == 'PUT':
        mura_data = JSONParser().parse(request) 
        mura_serializer = MuraSerializer(muras, data=mura_data) 
        if mura_serializer.is_valid(): 
            mura_serializer.save() 
            return JsonResponse(mura_serializer.data) 
        return JsonResponse(mura_serializer.errors, status=status.HTTP_400_BAD_REQUEST) 
@csrf_exempt
def mura_delete(request, pk):
    try: 
        muras = mura.objects.get(pk=pk)
    except mura.DoesNotExist: 
        return JsonResponse({'message': 'The tutorial does not exist'}, status=status.HTTP_404_NOT_FOUND) 
 
    if request.method == 'DELETE':
        muras.delete()
        return JsonResponse({'message': 'Notcontent'}, status=status.HTTP_204_NO_CONTENT)

    
    # if request.method == 'PUT': 
    #     mura_data = JSONParser().parse(request) 
    #     mura_serializer = MuraSerializer(mura, data=mura_data) 
    #     if mura_serializer.is_valid(): 
    #         mura_serializer.save() 
    #         return JsonResponse(mura_serializer.data) 
    #     return JsonResponse(mura_serializer.errors, status=status.HTTP_400_BAD_REQUEST) 

# @api_view(['PUT', 'DELETE'])
# def mura_alter(request, pk):
#     try: 
#         muras = mura.objects.get(pk=pk) 
#     except muras.DoesNotExist: 
#         return JsonResponse({'message': 'No valid link'}, status=status.HTTP_404_NOT_FOUND) 
    
#     # if request == 'PUT':
#     #     mura_data = JSONParser().parse(request) 
#     #     mura_serializer = MuraSerializer(mura, data=mura_data) 
#     #     if mura_serializer.is_valid(): 
#     #         mura_serializer.save() 
#     #         return Response(mura_serializer.data, status=status.HTTP_202_ACCEPTED) 
#     #     return Response(mura_serializer.errors, status=status.HTTP_400_BAD_REQUEST) 

#     if request == 'DELETE':
#         mura.delete() 
#         return JsonResponse({'message': 'Notcontent'}, status=status.HTTP_204_NO_CONTENT)


