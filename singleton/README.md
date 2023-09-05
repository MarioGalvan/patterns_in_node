
# ¿Porque se aplica el patron singleton en este ejemplo ?



## constructor privado

La clase AppSetup tiene un constructor privado, lo que significa que no se puede crear una instancia directamente desde fuera de la clase.

## instancia única

La instancia única de AppSetup se almacena en una variable estática privada llamada instance.

## Seteo global

El método estático getInstance se utiliza para obtener la instancia única de AppSetup. Si la instancia aún no existe, se crea una nueva; de lo contrario, se devuelve la instancia existente.

El método createApp se utiliza para actualizar la configuración de la aplicación.

El método printAppInfo se utiliza para imprimir información sobre la aplicación.



## Authors

- [@MarioGalvan](https://github.com/MarioGalvan/)


## Installation

Install my-project with npm

```bash
  yarn install
  yarn start
```
    
