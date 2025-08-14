from django.contrib import admin
from .models import Lead

@admin.register(Lead)
class LeadAdmin(admin.ModelAdmin):
    list_display = (
        "full_name",
        "email",
        "phone",
        "state",          # ⬅️ Added state here
        "injury_type",
        "created_at",
        "tf_cert_url",
    )
    list_filter = (
        "injury_type",
        "accident_time",
        "fault",
        "attorney",
        "state",          # ⬅️ Added state filter
        "created_at",
    )
    search_fields = (
        "full_name",
        "email",
        "phone",
        "zip_code",
        "state",          # ⬅️ Added state to search
    )
    readonly_fields = ("created_at",)
    ordering = ("-created_at",)
