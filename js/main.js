document.addEventListener('DOMContentLoaded', function() {
    const downloadButtons = document.querySelectorAll('.download-button');

    downloadButtons.forEach(button => {
        button.addEventListener('click', function() {
            const fileUrl = this.getAttribute('data-file-url');
            const link = document.createElement('a');
            link.href = fileUrl;
            link.download = '';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    });
});