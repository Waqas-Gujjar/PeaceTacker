from django.db import models

class Lead(models.Model):
    INJURY_CHOICES = [
        ("Automobile Accident", "Automobile Accident"),
        ("Medical Negligence", "Medical Negligence"),
        ("Slip & Fall", "Slip & Fall"),
        ("Other Injury or Accident", "Other Injury or Accident"),
    ]

    ACCIDENT_TIME_CHOICES = [
        ("Within 1-3 months", "Within 1-3 months"),
        ("Within 3-6 months", "Within 3-6 months"),
        ("Within 9-12 Months", "Within 9-12 Months"),
        ("Within 24 Months", "Within 24 Months"),
    ]

    FAULT_CHOICES = [
        ("No, I was not at fault", "No, I was not at fault"),
        ("Partially at fault", "Partially at fault"),
        ("Not sure", "Not sure"),
    ]

    RECEIVE_MEDICAL_ATTENTION = [
        ("Ambulance", "Ambulance"),
        ("Emergency Room", "Emergency Room"),
        ("Hospital", "Hospital"),
        ("Doctor", "Doctor"),
        ("Chiropractor", "Chiropractor"),
        ("No Medical Attention Yet", "No Medical Attention Yet"),
    ]

    ATTORNEY_CHOICES = [
        ("Yes", "Yes"),
        ("No", "No"),
    ]

    
    injury_type = models.CharField(max_length=100)
    accident_time = models.CharField(max_length=100)
    fault = models.CharField(max_length=100)
    medical = models.TextField()  # ⬅️ Store as comma-separated string
    attorney = models.CharField(max_length=100)
    full_name = models.CharField(max_length=255)
    phone = models.CharField(max_length=20)
    zip_code = models.CharField(max_length=10)
    email = models.EmailField()
    agree_to_terms = models.BooleanField(default=False)

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.full_name} - {self.email}"
