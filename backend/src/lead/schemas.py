from datetime import datetime
from ninja import Schema
from pydantic import BaseModel, EmailStr, Field, validator
from typing import List, Literal

VALID_MEDICAL_OPTIONS = [
    "Ambulance",
    "Emergency Room",
    "Hospital",
    "Doctor",
    "Chiropractor",
    "No Medical Attention Yet",
]

class LeadCreateSchema(BaseModel):
    injury_type: str = Field(..., min_length=2)
    accident_time: str = Field(..., min_length=2)
    fault: str = Field(..., min_length=2)
    medical: List[Literal[
        "Ambulance", 
        "Emergency Room", 
        "Hospital", 
        "Doctor", 
        "Chiropractor", 
        "No Medical Attention Yet"
    ]] = Field(..., min_items=1)
    attorney: str = Field(..., min_length=1)
    full_name: str = Field(..., min_length=2)
    phone: str = Field(..., min_length=10)
    zip_code: str = Field(..., min_length=5, max_length=5)
    email: EmailStr
    agree_to_terms: bool

    @validator("agree_to_terms")
    def must_agree(cls, v):
        if not v:
            raise ValueError("You must agree to the terms.")
        return v


class LeadOutSchema(Schema):
    id: int
    injury_type: str
    accident_time: str
    fault: str
    medical: str
    attorney: str
    full_name: str
    phone: str
    zip_code: str
    email: EmailStr
    agree_to_terms: bool
    created_at: datetime  # ✅ Change this to datetime
