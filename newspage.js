
document.addEventListener("DOMContentLoaded", function() {
    const loadingScreen = document.getElementById('loading-screen');

    const showLoadingScreen = () => {
        setTimeout(() => {
        loadingScreen.style.display = 'none';
        }, 0);
    };

    function addContent(text){
        var periods = text.split(".");
        var html = `<p>`;
    
        for (var i = 0; i < periods.length - 1; i++){
            if (i % 5 === 0 && i !== 0) {
                html += periods[i] + `.</p><p>`;
            }
            else {
                html += periods[i] + `.`;
            }
        }
        document.getElementById('content').innerHTML = html;
    }

    showLoadingScreen();
    let params = (new URL(document.location)).searchParams;
    let text = params.get("text");
    addContent(text)
})