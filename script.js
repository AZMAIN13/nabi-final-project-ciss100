function calculateTotal() {
    const processor = parseInt(document.getElementById('processor').value);
    const ram = parseInt(document.getElementById('ram').value);
    const gpu = parseInt(document.getElementById('gpu').value);
    const power = parseInt(document.getElementById('power').value);
    const motherboard = parseInt(document.getElementById('motherboard').value);

    const total = processor + ram + gpu + power + motherboard;

    document.getElementById('total-price').textContent = `Total Price: $${total}`;
}
