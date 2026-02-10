import os
import shutil
import time

def save_all(src_path, dest_path):
    if not os.path.exists(src_path):
        print("Ruta origen inválida")
        return

    os.makedirs(dest_path, exist_ok=True)

    for file in os.listdir(src_path):
        src_file = os.path.join(src_path, file)
        if os.path.isfile(src_file):
            shutil.copy2(src_file, dest_path)

    print("Todos los archivos copiados")

if __name__ == "__main__":
    import sys

    if len(sys.argv) != 3:
        print("Uso:")
        print("python save_all.py <ruta_origen> <ruta_destino>")
        exit(1)

    save_all(sys.argv[1], sys.argv[2])
