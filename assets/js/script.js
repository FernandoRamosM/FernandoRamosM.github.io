document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevenir el envío del formulario por defecto

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorMessage = document.getElementById('errorMessage');

    if (!username || !password) {
        errorMessage.textContent = 'Todos los campos son obligatorios.';
        errorMessage.style.display = 'block';
        return;
    }

    // Simula una validación (puedes conectar a una base de datos aquí)
    if (username === 'admin' && password === '1234') {
        alert('¡Inicio de sesión exitoso!');
        errorMessage.style.display = 'none';
        // Aquí podrías redirigir a otra página:
        // window.location.href = "dashboard.html";
    } else {
        errorMessage.textContent = 'Usuario o contraseña incorrectos.';
        errorMessage.style.display = 'block';
    }
});
