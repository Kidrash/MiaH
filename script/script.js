document.addEventListener('DOMContentLoaded', function() {
    const purchaseBtn = document.getElementById('purchase-btn');
    const videoContainer = document.querySelector('.video-container');
    const video = videoContainer.querySelector('video');

    // Handle purchase button click
    purchaseBtn.addEventListener('click', function() {
        // In a real scenario, this would navigate to the payment page
        alert('Redirecting to payment page...');
        // window.location.href = 'payment.html';
    });

    // Ensure video is responsive
    function adjustVideoSize() {
        const containerWidth = videoContainer.offsetWidth;
        const containerHeight = containerWidth * (9/16); // Maintain 16:9 aspect ratio
        video.style.width = containerWidth + 'px';
        video.style.height = containerHeight + 'px';
    }

    // Call on page load and window resize
    adjustVideoSize();
    window.addEventListener('resize', adjustVideoSize);

    // Lazy load the video
    video.setAttribute('preload', 'none');
    video.setAttribute('poster', 'video-placeholder.jpg'); // You'll need to provide a placeholder image

    // Play video when it comes into view
    let observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                video.play();
            } else {
                video.pause();
            }
        });
    }, { threshold: 0.5 });

    observer.observe(video);

    // Handle video playback controls
    video.addEventListener('click', function() {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });
});