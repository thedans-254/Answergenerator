from django.urls import path
from .views import upload_file, download_file

urlpatterns = [
    path('', upload_file, name='upload_file'),
    path('download/<str:filename>/', download_file, name='download_file'),
]
