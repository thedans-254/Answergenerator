// Display loading animation when the file is being uploaded
function showLoading() {
    const loader = document.createElement("div");
    loader.classList.add("loader");
    document.body.appendChild(loader);
}

// Hide loading animation when the file has been uploaded
function hideLoading() {
    const loader = document.querySelector(".loader");
    if (loader) {
        loader.remove();
    }
}

// Example function to confirm form submission
document.querySelector('.upload-form').addEventListener('submit', function(event) {
    showLoading();
    setTimeout(hideLoading, 3000); // Simulating a 3-second delay (replace with actual server response)
});
