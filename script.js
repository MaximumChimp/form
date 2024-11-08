function updatePriceDisplay(value) {
    document.getElementById('priceDisplay').textContent = `$${value}`;
  }

  function selectStyle(img) {
    
  }

  function initiatePayment() {
    const package = document.getElementById("package").value;
    if (!package) {
      alert("Please select a design package.");
      return;
    }

    const form = document.getElementById('designForm');
    if (form.checkValidity()) {
      alert(`Payment confirmed for the ${package} package. Form submitted!`);
      form.submit();
    } else {
      alert("Please fill in all required fields.");
      form.reportValidity();
    }
  }

  function openModal(img) {
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modalImage");
    modalImage.src = img.src.replace("w=100&h=80", "w=800&h=600"); // Use larger resolution
    modal.style.display = "flex";

    const styleImages = document.querySelectorAll('.design-options img');
    styleImages.forEach(img => img.classList.remove('selected'));
    img.classList.add('selected');
    document.getElementById('selectedStyle').value = img.alt;
  }

  function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
  }