from ninja import Router
from .models import Lead
from .schemas import LeadCreateSchema, LeadOutSchema

router = Router()



@router.post("/", response={201: LeadOutSchema})
def create_lead(request, data: LeadCreateSchema):
    lead = Lead.objects.create(
        injury_type=data.injury_type,
        accident_time=data.accident_time,
        fault=data.fault,
        medical=",".join(data.medical),  # ⬅️ Convert list to string
        attorney=data.attorney,
        full_name=data.full_name,
        phone=data.phone,
        zip_code=data.zip_code,
        email=data.email,
        agree_to_terms=data.agree_to_terms,
        state=data.state,  # ⬅️ Added state field
        tf_cert_url=data.tf_cert_url,
    )
    return 201, lead

# ✅ GET: Fetch all leads
@router.get("/", response=list[LeadOutSchema])
def get_leads(request):
    return Lead.objects.all()
