// Flavor selection functionality
document.getElementById("chooseButton").addEventListener("click", function() {
  const flavorSelect = document.getElementById("flavorSelect");
  const selectedFlavor = flavorSelect.value;
  document.getElementById("selectedFlavor").innerText = `You have selected: ${selectedFlavor}`;
  changeIceCreamImage(selectedFlavor);
});

// Ice cream option buttons
document.querySelectorAll(".ice-cream-btn").forEach(button => {
  button.addEventListener("click", function() {
    const flavor = button.getAttribute("data-flavor");
    document.getElementById("selectedFlavor").innerText = `You have selected: ${flavor}`;
    changeIceCreamImage(flavor);
  });
