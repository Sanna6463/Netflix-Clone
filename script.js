const movies = [
  { title: "Stranger Things", image: "images/images.jpg" },
  { title: "Money Heist", image: "images/download.jpg" },
  { title: "Wednesday", image: "images/images (1).jpg" },
  { title: "Extraction", image: "images/im2.jpg" },
  { title: "Chhava", image: "images/chhava.jpg" },
  { title: "Damsel", image: "images/damsel.jpg" },
  { title: "Kabir Singh", image: "images/kabirsingh.jpg" },
  { title: "love Aaj Kal", image: "images/loveaajkal.jpg" },
  { title: "Noah", image: "images/noah.jpg" },
  { title: "Rocky And Rani", image: "images/rocky.jpg" },
  { title: "Titanic", image: "images/titanic.jpg" },
  { title: "Battleship", image: "images/battleship.jpg" },
  { title: "Bholaa", image: "images/bholaa.jpg" },
  { title: "Kahaani", image: "images/kahaani.jpg" },
  { title: "Matrix", image: "images/matrix.jpg" },
  { title: "Padmavati", image: "images/padmavati.jpg" },
  { title: "Raabta", image: "images/raabta.jpg" },
  { title: "Satya Prem Ki Katha", image: "images/satya prem ki katha.jpg" },
  { title: "Scream", image: "images/scream.jpg" },
  { title: "Smile", image: "images/smile.jpg" },
  { title: "The conjuring", image: "images/theconjuring.jpg" },
  { title: "The Nightingale", image: "images/thenightingale.jpg" },
  { title: "The Ring", image: "images/thering.jpg" }
];

const movieContainer = document.getElementById("movies");

function renderMovies(list) {
  movieContainer.innerHTML = "";
  list.forEach(movie => {
    const card = document.createElement("div");
    card.className = "movie-card";
    card.innerHTML = `
      <img src="${movie.image}" alt="${movie.title}" />
      <h3>${movie.title}</h3>
    `;
    movieContainer.appendChild(card);
  });
}

renderMovies(movies);

document.getElementById("search").addEventListener("input", function () {
  const query = this.value.toLowerCase();
  const filtered = movies.filter(m => m.title.toLowerCase().includes(query));
  renderMovies(filtered);
});
