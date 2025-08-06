from django.contrib import admin
from .models import Lead

@admin.register(Lead)
class LeadAdmin(admin.ModelAdmin):
    list_display = ("full_name", "email", "phone", "injury_type", "created_at")
    list_filter = ("injury_type", "accident_time", "fault", "attorney", "created_at")
    search_fields = ("full_name", "email", "phone", "zip_code")
    readonly_fields = ("created_at",)
    ordering = ("-created_at",)
