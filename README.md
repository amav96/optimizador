## Generar credenciales api key

- https://www.here.com/docs/bundle/getting-here-credentials/page/README.html

## Request 

[POST] https://apiEndpoint.com/recorridos

```
{
    "stops" : [
        {
        "id" : "4dfg",
        "lat": -34.64674311586443,
        "lng": -58.412716341346524
        },
    ],
    "start": {
        "lat" : -34.645054083278396,
        "lng" : -58.41456194922812
    },
    "end": {
        "lat" : -34.645054083278396,
        "lng" : -58.41456194922812
    },
    "key" : "keyApp"
    "mode": "car" (opcional),
    "improveFor": "distance" (opcional),
    
}
```

## Response

```
{
    "waypoints[]" : "Paradas ordenadas (incluye start y end), Comienza en start y termina en end,
    "distance": "Distancia total a recorrer",
    "time": "Tiempo total del recorrido",
    "Interconnections": "Detalle de distancia y tiempo entre paradas",
}
```