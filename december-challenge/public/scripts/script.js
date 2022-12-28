let space = document.querySelector('.space');
let spaces = document.querySelector('.spaces');
space.innerHTML = "&nbsp;";
spaces.innerHTML = "&nbsp;";


// Hover effect on featured products
const egyptianContainer = document.getElementById('egyptian');
const egyptianContent = document.getElementById('egyptian-content');


egyptianContainer.addEventListener('mouseover', () => {
    egyptianContent.style.display = 'none !important';
})
    
egyptianContainer.addEventListener("mouseout", () => {
    egyptianContent.style.display = 'none';
});

