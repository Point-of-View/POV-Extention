
document.addEventListener("DOMContentLoaded", async function() {
    const loadingScreen = document.getElementById('loading-screen');

    const hideLoadingScreen = () => {
        loadingScreen.style.display = 'none';
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

    async function getText() {
        let params = (new URL(document.location)).searchParams;
        let url = params.get("url");
        let bias = params.get("bias")


        const response = await fetch(`http://127.0.0.1:5000/?url=${url}&bias=${bias}`);
        const responseData = await response.json();
        return responseData.article;

    }

    text = await getText()
    addContent(text)

    hideLoadingScreen();
})