document.querySelectorAll('img').forEach(img => {
    console.log("runs")
    img.onerror = function() {
        this.onerror = null;
        this.src = '../js/placeholer-image.jpg';
        this.alt = ""
    };
});