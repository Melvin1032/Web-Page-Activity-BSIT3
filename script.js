document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal');
    const modalImage = document.querySelector('.modal-image');
    const images = Array.from(document.querySelectorAll('#content1 ul li img'));
    let currentIndex = 0;

    function openModal(index) {
        modal.style.display = 'block';
        modalImage.src = images[index].src;
        currentIndex = index;
    }

    function closeModal() {
        modal.style.display = 'none';
    }

    function showPrevImage() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        modalImage.src = images[currentIndex].src;
    }

    function showNextImage() {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        modalImage.src = images[currentIndex].src;
    }

    images.forEach((img, index) => {
        img.addEventListener('click', () => openModal(index));
    });

    document.querySelector('.close').addEventListener('click', closeModal);
    document.querySelector('.prev').addEventListener('click', showPrevImage);
    document.querySelector('.next').addEventListener('click', showNextImage);

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });
});
