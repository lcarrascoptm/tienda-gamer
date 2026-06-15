// payment.js – handles payment modal, form toggles, simple client‑side validation and password‑reset flow

function openPaymentModal() {
  document.getElementById('payment-modal').style.display = 'flex';
}

function closePaymentModal() {
  document.getElementById('payment-modal').style.display = 'none';
  // reset forms visibility
  document.getElementById('card-form').style.display = 'none';
  document.getElementById('transfer-form').style.display = 'none';
}

function showCardForm() {
  document.getElementById('card-form').style.display = 'block';
  document.getElementById('transfer-form').style.display = 'none';
}

function showTransferForm() {
  document.getElementById('transfer-form').style.display = 'block';
  document.getElementById('card-form').style.display = 'none';
}

function openResetPasswordModal() {
  document.getElementById('reset-modal').style.display = 'flex';
}

function closeResetPasswordModal() {
  document.getElementById('reset-modal').style.display = 'none';
}

function validatePaymentForm(event) {
  event.preventDefault();
  // Simple example – just check required fields exist
  const inputs = event.target.querySelectorAll('input[required]');
  for (let i = 0; i < inputs.length; i++) {
    if (!inputs[i].value.trim()) {
      alert('Por favor complete todos los campos obligatorios.');
      return false;
    }
  }
  alert('Formulario válido – procesar pago aquí.');
  closePaymentModal();
  return true;
}

function resetPassword(event) {
  event.preventDefault();
  const email = document.getElementById('reset-email').value.trim();
  if (!email) {
    alert('Ingrese su correo electrónico.');
    return false;
  }
  // Simulate sending reset link
  alert('Se ha enviado un enlace de restablecimiento a ' + email);
  closeResetPasswordModal();
  return true;
}

// Optional: close modals when clicking outside content
window.addEventListener('click', function(e) {
  const paymentModal = document.getElementById('payment-modal');
  const resetModal = document.getElementById('reset-modal');
  if (e.target === paymentModal) closePaymentModal();
  if (e.target === resetModal) closeResetPasswordModal();
});
