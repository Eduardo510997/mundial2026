document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Evita que la página se recargue automáticamente

    // Capturar los valores ingresados por el usuario
    const user = document.getElementById('username').value.trim();
    const pass = document.getElementById('password').value;
    const errorBox = document.getElementById('errorMessage');

    // Credenciales de prueba
    const USER_CORRECTO = "MessiRonaldo";
    const PASS_CORRECTA = "2026";

    if (user === USER_CORRECTO && pass === PASS_CORRECTA) {
        errorBox.style.display = 'none';

        // Efecto visual sutil de éxito antes de cambiar de página
        const btn = document.querySelector('.btn-login');
        btn.style.background = '#10b981'; // Cambia a verde éxito
        btn.innerHTML = "<span>Cargando...</span>";

        setTimeout(() => {
            // Llamar o redirigir al HTML principal
            window.location.href = "principal.html";
        }, 800);

    } else {
        // Mostrar mensaje de error si las credenciales fallan
        errorBox.style.display = 'flex';

        // Limpiar el campo de contraseña por seguridad
        document.getElementById('password').value = '';
    }
});