    // Anderson Saul Maravilla Callejas

    // Código JavaScript del sistema de recomendación de películas
    // Array de películas con título y género
    const peliculas = [
      { titulo: "Interstelar", genero: "Ciencia Ficción" },
      { titulo: "Scarface", genero: "Crimen" },
      { titulo: "It", genero: "Terror" },
      { titulo: "Harry Potter", genero: "Fantasía" },
      { titulo: "Your Name", genero: "Romance" }
    ];

    // Género solicitado por el usuario
    const generoUsuario = prompt("¿Qué género de película te gustaría ver? (Ej. Ciencia Ficción, Crimen, Musical, Fantasía, Romance)");

    // Variable para almacenar la película recomendada
    let peliculaRecomendada = "";

    // Buscar una película que coincida con el género solicitado
    if (generoUsuario === "Ciencia Ficción") {
      peliculaRecomendada = peliculas.find(pelicula => pelicula.genero === "Ciencia Ficción");
    } else if (generoUsuario === "Crimen") {
      peliculaRecomendada = peliculas.find(pelicula => pelicula.genero === "Crimen");
    } else if (generoUsuario === "Terror") {
      peliculaRecomendada = peliculas.find(pelicula => pelicula.genero === "Terror");
    } else if (generoUsuario === "Fantasía") {
      peliculaRecomendada = peliculas.find(pelicula => pelicula.genero === "Fantasía");
    } else if (generoUsuario === "Romance") {
      peliculaRecomendada = peliculas.find(pelicula => pelicula.genero === "Romance");
    } else {
      peliculaRecomendada = null;
    }

    // Mostrar el resultado
    if (peliculaRecomendada) {
      alert(`Te recomendamos ver: ${peliculaRecomendada.titulo}`);
    } else {
      alert("Lo siento, no hay recomendaciones disponibles para el género seleccionado.");
    }
