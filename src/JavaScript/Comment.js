function cargarComentarios() {
  const comentariosGuardados = JSON.parse(localStorage.getItem('comentarios')) || [];
  comentariosGuardados.forEach(comentario => {
    agregarComentario(comentario.nombre, comentario.email, comentario.mensaje);
  });
}

function agregarComentario(nombre, email, mensaje) {
  const commentList = document.getElementById('commentList');
  const listItem = document.createElement('li');
  listItem.classList.add('comment-item');
  listItem.style.border = '1px solid #ccc';
  listItem.style.borderRadius = '8px';
  listItem.style.padding = '15px';
  listItem.style.marginBottom = '20px';

  listItem.innerHTML = `
    <div class="comment-details">
      <div class="comment-name">${nombre}</div>
      <div class="comment-email">${email}</div>
      <div class="comment-message">${mensaje}</div>
    </div>
  `;
  commentList.appendChild(listItem);
}

window.onload = cargarComentarios;

document.getElementById('commentForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const nombreInput = document.getElementById('nombre');
  const emailInput = document.getElementById('email');
  const mensajeInput = document.getElementById('mensaje');
  
  if (nombreInput && emailInput && mensajeInput) {
    const nombre = nombreInput.value.trim();
    const email = emailInput.value.trim();
    const mensaje = mensajeInput.value.trim();
    
    if (nombre && email && mensaje) {
      const nuevoComentario = { nombre, email, mensaje };
      guardarComentario(nuevoComentario);
      agregarComentario(nombre, email, mensaje);
      
      nombreInput.value = '';
      emailInput.value = '';
      mensajeInput.value = '';
    } else {
      alert('Por favor completa todos los campos del formulario.');
    }
  } else {
    console.error('Al menos uno de los elementos de input es nulo');
  }
});

function guardarComentario(comentario) {
  const comentariosGuardados = JSON.parse(localStorage.getItem('comentarios')) || [];
  comentariosGuardados.push(comentario);
  localStorage.setItem('comentarios', JSON.stringify(comentariosGuardados));
}

function toggleComments() {
  const commentList = document.getElementById('commentList');
  const toggleBtn = document.getElementById('toggleCommentsBtn');

  if (commentList.style.display === 'none') {
    commentList.style.display = 'block';
    toggleBtn.textContent = 'Ocultar Comentarios';
  } else {
    commentList.style.display = 'none';
    toggleBtn.textContent = 'Mostrar Comentarios';
  }
}

document.getElementById('toggleCommentsBtn').addEventListener('click', toggleComments);
