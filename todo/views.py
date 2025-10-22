from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from django.views.decorators.csrf import csrf_exempt
import json
from .models import Todo


@require_http_methods(["GET"])
def todo_list(request):
    todos = Todo.objects.all().values(
        "id", "title", "description", "completed", "created_at", "updated_at"
    )
    return JsonResponse(list(todos), safe=False)


@require_http_methods(["POST"])
@csrf_exempt
def create_todo(request):
    try:
        data = json.loads(request.body)
        todo = Todo.objects.create(
            title=data.get("title"), description=data.get("description", "")
        )
        return JsonResponse(
            {
                "id": todo.id,
                "title": todo.title,
                "description": todo.description,
                "completed": todo.completed,
                "created_at": todo.created_at.isoformat(),
                "updated_at": todo.updated_at.isoformat(),
            },
            status=201,
        )
    except Exception as e:
        return JsonResponse({"error": str(e)}, status=400)


@require_http_methods(["PUT"])
@csrf_exempt
def update_todo(request, todo_id):
    try:
        todo = Todo.objects.get(id=todo_id)
        data = json.loads(request.body)

        if "title" in data:
            todo.title = data["title"]
        if "description" in data:
            todo.description = data["description"]
        if "completed" in data:
            todo.completed = data["completed"]

        todo.save()

        return JsonResponse(
            {
                "id": todo.id,
                "title": todo.title,
                "description": todo.description,
                "completed": todo.completed,
                "created_at": todo.created_at.isoformat(),
                "updated_at": todo.updated_at.isoformat(),
            }
        )
    except Todo.DoesNotExist:
        return JsonResponse({"error": "Todo not found"}, status=404)
    except Exception as e:
        return JsonResponse({"error": str(e)}, status=400)


@require_http_methods(["DELETE"])
@csrf_exempt
def delete_todo(request, todo_id):
    try:
        todo = Todo.objects.get(id=todo_id)
        todo.delete()
        return JsonResponse({"message": "Todo deleted successfully"})
    except Todo.DoesNotExist:
        return JsonResponse({"error": "Todo not found"}, status=404)
    except Exception as e:
        return JsonResponse({"error": str(e)}, status=400)
