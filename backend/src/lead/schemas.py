from datetime import datetime
from ninja import Schema
from pydantic import BaseModel, EmailStr, Field, validator
from typing import List, Literal, Optional

VALID_MEDICAL_OPTIONS = [
    "Ambulance",
    "Emergency Room",
    "Hospital",
    "Doctor",
    "Chiropractor",
    "No Medical Attention Yet",
]

US_STATES = [
    "AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA",
    "HI","ID","IL","IN","IA","KS","KY","LA","ME","MD",
    "MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ",
    "NM","NY","NC","ND","OH","OK","OR","PA","RI","SC",
    "SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"
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
    state: Literal[
        "AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA",
        "HI","ID","IL","IN","IA","KS","KY","LA","ME","MD",
        "MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ",
        "NM","NY","NC","ND","OH","OK","OR","PA","RI","SC",
        "SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"
    ] = Field(..., description="Two-letter US state code")
    agree_to_terms: bool
    tf_cert_url: Optional[str] = None

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
    state: str
    email: EmailStr
    agree_to_terms: bool
    created_at: datetime
