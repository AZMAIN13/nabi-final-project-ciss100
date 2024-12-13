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
});

function changeIceCreamImage(flavor) {
  const imageContainer = document.getElementById("iceCreamImage");
  let imageUrl = "";

  switch (flavor) {
    case "vanilla":
      imageUrl = "https://www.publicdomainpictures.net/pictures/280000/velka/vanilla-ice-cream-1595998087h44.jpg";
      break;
    case "chocolate":
      imageUrl = "https://www.publicdomainpictures.net/pictures/270000/velka/chocolate-ice-cream-1568949242puc.jpg";
      break;
    case "strawberry":
      imageUrl = "https://www.publicdomainpictures.net/pictures/270000/velka/strawberry-ice-cream-1568949243dvo.jpg";
      break;
    case "mint":
      imageUrl = "https://www.public
