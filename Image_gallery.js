// JS to enlarge gallery images with nav arrows
        document.addEventListener("DOMContentLoaded", function () {
            const modal = document.getElementById("imageModal");
            const modalImage = document.getElementById("modalImage");
            const caption = document.getElementById("caption"); // Add reference for caption
            const prevBtn = document.getElementById("prev");
            const nextBtn = document.getElementById("next");
            const images = Array.from(document.querySelectorAll(".gallery img"));
            let currentIndex = 0;

            function openModal(index) {
                currentIndex = index;
                modalImage.src = images[currentIndex].src;
                caption.textContent = images[currentIndex].getAttribute("data-caption"); // Set caption text
                modal.classList.add("active");
            }

            function closeModal() {
                modal.classList.remove("active");
            }

            function showNextImage() {
                currentIndex = (currentIndex + 1) % images.length;
                modalImage.src = images[currentIndex].src;
                caption.textContent = images[currentIndex].getAttribute("data-caption"); // Update caption for next image
            }

            function showPrevImage() {
                currentIndex = (currentIndex - 1 + images.length) % images.length;
                modalImage.src = images[currentIndex].src;
                caption.textContent = images[currentIndex].getAttribute("data-caption"); // Update caption for previous image
            }

            images.forEach((img, index) => {
                img.addEventListener("click", () => openModal(index));
            });

            modal.addEventListener("click", closeModal);
            nextBtn.addEventListener("click", (event) => {
                event.stopPropagation();
                showNextImage();
            });

            prevBtn.addEventListener("click", (event) => {
                event.stopPropagation();
                showPrevImage();
            });

            document.addEventListener("keydown", (event) => {
                if (modal.classList.contains("active")) {
                    if (event.key === "ArrowRight") {
                        showNextImage();
                    } else if (event.key === "ArrowLeft") {
                        showPrevImage();
                    } else if (event.key === "Escape") {
                        closeModal();
                    }
                }
            });
        });