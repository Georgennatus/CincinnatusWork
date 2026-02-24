terraform {
  required_providers {
    local = {
      source = "hashicorp/local"
    }
  }
}

resource "local_file" "archivo" {
  filename = "hola.txt"
  content  = "hola mundo"
}