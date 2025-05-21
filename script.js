
document.querySelectorAll('.whatsapp-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    const service = this.getAttribute('data-service');
    const price = this.getAttribute('data-price');
    const message = `Hi Flex Harmony! I want to book:\n\n*Service*: ${service}\n*Price*: ₹${price}\n*Preferred Date*: \n*My Name*: \n*Contact*: \n(Sent via flexharmony.in)`;
    window.open(`https://wa.me/918764277393?text=${encodeURIComponent(message)}`, '_blank');
  });
});
