const shadowImage =
  "https://i.pinimg.com/736x/46/8f/3b/468f3b0c8ce7ee1e49a71c5d8342236d.jpg";

function replaceImages() {
  // Select all image elements
  const images = document.querySelectorAll("img");
  images.forEach((img) => {
    img.src = shadowImage;
  });
}

replaceImages();

const observer = new MutationObserver(() => {
  replaceImages();
});

observer.observe(document.body, { childList: true, subtree: true });
