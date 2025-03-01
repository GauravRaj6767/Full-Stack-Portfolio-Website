from django.urls import path
from .views import ProjectList, CertificationList

urlpatterns = [
    path('projects/', ProjectList.as_view(), name='project-list'),
    path('certifications/', CertificationList.as_view(), name='certification-list'),
]
