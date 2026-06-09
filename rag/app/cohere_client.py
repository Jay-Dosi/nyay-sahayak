from langchain_cohere import ChatCohere
from langchain_core.messages import HumanMessage
from .config import COHERE_API_KEY

def call_cohere(prompt):
    chat = ChatCohere(cohere_api_key=COHERE_API_KEY, model="command-r-plus")
    messages = [HumanMessage(content=prompt)]
    response = chat.invoke(messages)
    return response.content
