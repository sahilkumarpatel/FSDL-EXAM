const filterButtons = document.querySelectorAll(".filter-btn");
const galleryItems = document.querySelectorAll(".gallery-item");
const emptyState = document.getElementById("emptyState");

function applyFilter(category) {
  let visibleCount = 0;

  galleryItems.forEach(function (item) {
    const itemCategory = item.dataset.category;

    if (category === "all" || itemCategory === category) {
      item.style.display = "block";
      visibleCount++;
    } else {
      item.style.display = "none";
    }
  });

  emptyState.hidden = visibleCount !== 0;
}

filterButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const selectedFilter = button.dataset.filter;

    filterButtons.forEach(function (btn) {
      btn.classList.remove("active");
    });

    button.classList.add("active");
    applyFilter(selectedFilter);
  });
});

applyFilter("all");
