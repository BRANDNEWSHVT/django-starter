from django.urls import path
from . import views

urlpatterns = [
    path("api/todos/", views.todo_list, name="todo_list"),
    path("api/todos/create/", views.create_todo, name="create_todo"),
    path("api/todos/<int:todo_id>/", views.update_todo, name="update_todo"),
    path("api/todos/<int:todo_id>/delete/", views.delete_todo, name="delete_todo"),
]
