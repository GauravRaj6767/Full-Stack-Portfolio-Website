from rest_framework import generics
from .models import Project, Certification
from .serializers import ProjectSerializer, CertificationSerializer


class ProjectList(generics.ListAPIView):
    queryset = Project.objects.all().order_by('-created_at')
    serializer_class = ProjectSerializer


class CertificationList(generics.ListAPIView):
    queryset = Certification.objects.all().order_by('-id')
    serializer_class = CertificationSerializer
