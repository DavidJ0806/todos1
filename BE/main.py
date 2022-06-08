from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()
origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/todos")
def read_todos():
    return [{'id': 1, 'description': 'Clean the laundry', 'completed': False},
    {'id': 2, 'description': 'Clean the dishes', 'completed': False}]