from inertia import render


def home(request):
    return render(
        request,
        "Home",
        props={
            "title": "Django + Inertia + React = 🖤",
        },
    )


def todos(request):
    return render(
        request,
        "Todos",
        props={},
    )
