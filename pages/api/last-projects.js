export default function handler(req, res) { // Node JS tiene un request y response
    res.status(200).json(
        [
            {
                "id": 1,
                "title": "Proyecto 1",
                "description": "Descripcion del Proyecto 1",
                "image": "/images/project-1.jpg"
            },
            {
                "id": 2,
                "title": "Proyecto 2",
                "description": "Descripcion del Proyecto 2",
                "image": "/images/project-2.jpg"
            },
            {
                "id": 3,
                "title": "Proyecto 3",
                "description": "Descripcion del Proyecto 3",
                "image": "/images/project-3.jpg"
            },
            {
                "id": 4,
                "title": "Proyecto 4",
                "description": "Descripcion del Proyecto 4",
                "image": "/images/project-4.jpg"
            }
        ]
    )
} 