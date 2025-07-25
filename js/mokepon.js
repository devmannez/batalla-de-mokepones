@import url('https://fonts.googleapis.com/css2?family=Fredoka+One&family=Poppins:wght@300&display=swap');

body {
  font-family: 'Poppins', sans-serif;
  background-color: #041562;
}

#seleccionar-mascota {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.titulo {
  color: white;
  font-size: 32px;
  font-family: 'Fredoka One', cursive;
}

.subtitulo {
  color: white;
  font-size: 20px;
}

.tarjetas {
  display: flex;
  gap: 10px;
}

.tarjeta-de-mokepon {
  width: 180px;
  height: 100px;
  background: #11468F;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}

.tarjeta-de-mokepon img {
  width: 80px;
}

#boton-mascota {
  width: 180px;
  height: 40px;
  border-radius: 20px;
  background: transparent;
  border: 2px solid white;
  color: white;
  font-family: 'Poppins', sans-serif;
  margin-top: 30px;
}

input:checked label {
  background-color: hotpink;
}

input {
  display: none;
}
