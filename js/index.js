document.querySelector('.page-loaded').innerText = (new Date()).toLocaleTimeString();

document.querySelector('.load-html-ajax').addEventListener('klick', loadHtmlAjax);

function loadHtmlAjax() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4 && xhr.status === 200){
            document.querySelector('.html-placeholder').innerHTML = xhr.responseText;
        } 
    }
    xhr.open('GET', 'our-work.html', true);
    xhr.send();
}
