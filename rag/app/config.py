import os
from dotenv import load_dotenv

load_dotenv()

CHROMA_HOST = os.getenv("CHROMA_HOST", "chromadb")
CHROMA_PORT = int(os.getenv("CHROMA_PORT", 8004))
COHERE_API_KEY = os.getenv("COHERE_API_KEY")
EMBEDDING_MODEL = "BAAI/bge-small-en-v1.5"
