// Inicializar EmailJS con tu clave pública
(function() {
  emailjs.init('x-X8iA20AVMQneCAA'); // Public Key
})();

const form = document.getElementById('loginForm');
const msg  = document.getElementById('mensaje');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const user = document.getElementById('usuario').value.trim();
  const pass = document.getElementById('password').value.trim();

  if (user === 'USER' && pass === 'PASS') {
    msg.textContent = 'Acceso correcto ✅';
    msg.style.color = '#18a558';

    try {
      await emailjs.send('service_gcpdw9g', 'template_47h8ew5', {
        user: user,
        message: 'Ingreso correcto al sistema desde la página de Login.'
      });
      console.log('Correo enviado correctamente ✅');
    } catch (err) {
      console.error('Error enviando correo (EmailJS):', err);
    }

    sessionStorage.setItem('usuario_logueado', user);
    setTimeout(() => {
      window.location.href = 'principal.html';
    }, 900);

  } else {
    msg.textContent = 'Usuario o contraseña incorrectos ❌';
    msg.style.color = '#e63946';
  }
});
