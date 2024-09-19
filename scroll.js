    document.addEventListener("DOMContentLoaded", function() {
        const productsLink = document.querySelector('a[href="products.html"]');
        const productsSection = document.querySelector('#products-section');

        productsLink.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default navigation

            // Calculate the position of the products section
            const offsetTop = productsSection.getBoundingClientRect().top + window.pageYOffset - 300; // Adjust 100px higher

            // Scroll to the calculated position with smooth behavior
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        });
    });

