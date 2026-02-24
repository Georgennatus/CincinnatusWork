# Documentación de Terraform

Guía práctica para comprender y usar Terraform para aprovisionamiento de infraestructura como código (IaC).

---

## 1. ¿Qué es Terraform?

Herramienta de Infraestructura como Código que permite crear, modificar y destruir infraestructura mediante archivos declarativos.

Permite gestionar:

* Servidores
* Redes
* Bases de datos
* Balanceadores
* DNS
* Contenedores
* Cloud providers

---

## 2. Conceptos fundamentales

### Provider

Plugin que conecta Terraform con un servicio externo (cloud, VM, etc.).

### Resource

Elemento de infraestructura que se crea.

### State

Archivo que guarda el estado real de la infraestructura.

### Plan

Vista previa de cambios a realizar.

### Apply

Ejecución real de cambios.

---

## 3. Flujo de trabajo

1. Escribir configuración
2. Inicializar proyecto
3. Ver plan
4. Aplicar cambios
5. Actualizar infraestructura

---

## 4. Archivos principales

Extensión:

```
.tf
```

Estructura típica:

```
main.tf
variables.tf
outputs.tf
terraform.tfvars
```

---

## 5. Bloque básico

```
terraform {
  required_providers {
    local = {
      source = "hashicorp/local"
    }
  }
}
```

---

## 6. Providers

Ejemplo:

```
provider "local" {}
```

---

## 7. Recursos

Ejemplo crear archivo:

```
resource "local_file" "archivo" {
  filename = "hola.txt"
  content  = "hola mundo"
}
```

---

## 8. Comandos básicos

Inicializar:

```
terraform init
```

Ver cambios:

```
terraform plan
```

Aplicar:

```
terraform apply
```

Eliminar infraestructura:

```
terraform destroy
```

---

## 9. Variables

Definir:

```
variable "nombre" {
  type = string
}
```

Usar:

```
content = var.nombre
```

Valores:

```
terraform.tfvars
```

```
nombre = "Geo"
```

---

## 10. Outputs

Mostrar información:

```
output "mensaje" {
  value = local_file.archivo.content
}
```

---

## 11. State

Archivo:

```
terraform.tfstate
```

Contiene relación entre código y recursos reales.

No editar manualmente.

---

## 12. Dependencias

Automáticas por referencias:

```
resource A → usa B → B se crea primero
```

Forzar:

```
depends_on = [recurso]
```

---

## 13. Módulos

Reutilizar configuraciones.

```
module "servidor" {
  source = "./modules/server"
}
```

---

## 14. Ciclo de vida

```
lifecycle {
  prevent_destroy = true
}
```

---

## 15. Backend remoto

Guardar state en servidor remoto para trabajo en equipo.

Ejemplo conceptual:

```
backend remoto
state compartido
bloqueo de cambios
```

---

## 16. Buenas prácticas

* No subir tfstate público
* Usar variables
* Usar módulos
* Revisar plan antes de apply
* Separar entornos (dev, staging, prod)

---

## 17. Problemas comunes

### Recursos duplicados

State desincronizado

### Cambios inesperados

Provider actualizado

### Conflictos de state

Trabajo simultáneo sin backend remoto

---

Fin de la documentación.
