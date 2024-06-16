from fastapi import FastAPI
from pydantic import BaseModel
from models.catalogue import Model

app = FastAPI()

class CatalogueModel(BaseModel):
    name: str
    description: str
    # price: float
    # is_offer: Union[bool, None] = None
@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get('/models')
def models():
    models = Model.find_all()

    return models
@app.get('/catalogue')
def get_catalogues():
    return[{"name":"Yamaha R6"}]

@app.post('/catalogue')
def save_catalogue(data: CatalogueModel):
    print(data)