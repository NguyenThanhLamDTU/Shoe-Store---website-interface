document.getElementById("addToCart").addEventListener("click", function() {
    // Get the selected size from the dropdown
    var sizeSelect = document.getElementById("size");
    var selectedSize = sizeSelect.options[sizeSelect.selectedIndex].value;

    // Check if a size is selected
    if (selectedSize === "") {
        alert("Please select a size before adding to cart.");
    } else {
        alert("Product added to cart. Size: " + selectedSize);
        // You can add more functionality here, such as updating the cart icon, handling the cart logic, etc.
    }
});
