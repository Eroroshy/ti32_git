console.log("Hello World");

/*
gh auth login ----------------------------------- nos va a permitir iniciar sesión en nuestra terminal para usar git
 
git init       --------------------------------------- inicializar un repo en tu local(computadora)
git status  --------------------------------------- revisar los cambios que están pendientes para commit
git add .    --------------------------------------- agrega todos los cambios pendientes(ojo con este comando)
git add mombre_archivo.js ---------------------- agrega al commit el archivo deseado
git commit -m "Initial commit" ------------------- nos permite crear el commit con un mensaje del mismo
git push --set-upstream origin nombre_rama ---- nos permite hacer un push junto con la rama creada en nuestro local, para ser publicada en el repositorio(portal) de git
git push ----------------------------------------- nos va a permitir subir los cambios a la rama en donde estemos switcheados
git checkout -b nombre_branch ------------------ nos permite crear una rama en local y hacer switch, pero estará publica  no en el portal de git
git checkout nombre_branch --------------------- nos permite cambiarnos a una rama existente en el portal de git
git fetch ------------------------------------------ nos permite descargar ramas(ojo, este comando ejecutarlo siempre en main)
git pull -------------------------------------------- nos va a permitir descargar cambios de la rama donde estemos switcheados
 
 
 
-------- comandos para inicializar repo y la rama base ---------------------------------------------
git branch -M main  ----------------- este sólo se ocupa si el repo está inicializado desde local, nos permite crear la rama base.
gh repo create NOMBRE-REPO --public --source=. --remote=origin --push   ------------- este comando igual se utiliza para crear el repositorio en local y poder subirlo a el portal de git 
*/

console.log("This is the main index file.");

console.log("Additional code in index.js");

console.log("More code added to index.js");