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

    US_STATES = [
        ("AL", "Alabama"), ("AK", "Alaska"), ("AZ", "Arizona"), ("AR", "Arkansas"),
        ("CA", "California"), ("CO", "Colorado"), ("CT", "Connecticut"), ("DE", "Delaware"),
        ("FL", "Florida"), ("GA", "Georgia"), ("HI", "Hawaii"), ("ID", "Idaho"),
        ("IL", "Illinois"), ("IN", "Indiana"), ("IA", "Iowa"), ("KS", "Kansas"),
        ("KY", "Kentucky"), ("LA", "Louisiana"), ("ME", "Maine"), ("MD", "Maryland"),
        ("MA", "Massachusetts"), ("MI", "Michigan"), ("MN", "Minnesota"), ("MS", "Mississippi"),
        ("MO", "Missouri"), ("MT", "Montana"), ("NE", "Nebraska"), ("NV", "Nevada"),
        ("NH", "New Hampshire"), ("NJ", "New Jersey"), ("NM", "New Mexico"), ("NY", "New York"),
        ("NC", "North Carolina"), ("ND", "North Dakota"), ("OH", "Ohio"), ("OK", "Oklahoma"),
        ("OR", "Oregon"), ("PA", "Pennsylvania"), ("RI", "Rhode Island"), ("SC", "South Carolina"),
        ("SD", "South Dakota"), ("TN", "Tennessee"), ("TX", "Texas"), ("UT", "Utah"),
        ("VT", "Vermont"), ("VA", "Virginia"), ("WA", "Washington"), ("WV", "West Virginia"),
        ("WI", "Wisconsin"), ("WY", "Wyoming"),
    ]

    injury_type = models.CharField(max_length=100, choices=INJURY_CHOICES)
    accident_time = models.CharField(max_length=100, choices=ACCIDENT_TIME_CHOICES)
    fault = models.CharField(max_length=100, choices=FAULT_CHOICES)
    medical = models.TextField()  # Store as comma-separated string
    attorney = models.CharField(max_length=100, choices=ATTORNEY_CHOICES)
    full_name = models.CharField(max_length=255)
    phone = models.CharField(max_length=20)
    zip_code = models.CharField(max_length=10)
    email = models.EmailField()
    state = models.CharField(max_length=2, choices=US_STATES)  # ⬅️ Added field
    agree_to_terms = models.BooleanField(default=False)
    tf_cert_url = models.TextField(null=True, blank=True)

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.full_name} - {self.email}"
