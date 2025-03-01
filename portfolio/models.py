from django.db import models


class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    image = models.ImageField(upload_to='projects/', blank=True, null=True)
    github_link = models.URLField(blank=True, null=True)
    live_link = models.URLField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)


class Certification(models.Model):
    title = models.CharField(max_length=200)
    issuer = models.CharField(max_length=100)
    details = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.title
