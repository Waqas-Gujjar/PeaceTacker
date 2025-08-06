from ninja import NinjaAPI
from lead.views import router as lead_router

api = NinjaAPI()
api.add_router("/api", lead_router)
