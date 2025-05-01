function loadFooter() {
    fetch('public/footer.html')
        .then(response => response.text())
        .then(html => {
            document.body.insertAdjacentHTML('beforeend', html);
        })
        .catch(error => console.error('Error loading footer:', error));
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', loadFooter); 