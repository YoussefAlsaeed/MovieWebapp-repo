<template>
  <div class="home">
    <form @submit.prevent="searchMovies" class="search-box">
      <input type="text" placeholder=" Search for movies and TV shows" v-model="search" />
      <button type="submit" class="search-button">Search</button>
    </form>

    <div class="movies-list">
      <div class="movie" v-for="movie in movies" :key="movie.id">
        <div class="product-image">
          <img :src="getMoviePosterUrl(movie.poster_path)" alt="Movie Poster" />
        </div>
        <div class="detail">
          <p class="year">{{ movie.release_date ? movie.release_date : movie.first_air_date }}</p>
          <h5>{{ movie.title ? movie.title : movie.name }}</h5>
          <br>
          <span class="popularity">Popularity:</span>
          <span class="stars">{{ getStarRating(movie.vote_average) }}</span>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import env from '@/env.js';

export default {
  setup() {
    const search = ref("");
    const movies = ref([]);

    const searchMovies = () => {
      if (search.value !== "") {
        const apiUrl = `https://api.themoviedb.org/3/search/multi?query=${search.value}&include_adult=false&language=en-US&page=1`;
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${env.bearer}`,
          },
        };

        fetch(apiUrl, options)
          .then((res) => res.json())
          .then((data) => {
            if (data.results && data.results.length > 0) {
              movies.value = data.results;
              search.value = "";
            } else {
              console.error('Results not found in API response:', data);
            }
          })
          .catch((err) => console.error('error:' + err));
      }
    };

    const getMoviePosterUrl = (path) => {
      if (!path) {
        return require('@/assets/default-movie.png');
      }
      return `https://image.tmdb.org/t/p/w300${path}`;
    };

    const getStarRating = (voteAverage) => {
      const maxStars = 5;
      const normalizedVote = voteAverage / 2; 
      const fullStars = Math.round(normalizedVote);
      return '★'.repeat(fullStars) + '☆'.repeat(maxStars - fullStars);
    };

    onMounted(() => {
      const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${env.bearer}`,
        },
      };

      fetch(url, options)
        .then((res) => res.json())
        .then((json) => {
          if (json.results && json.results.length > 0) {
            movies.value = json.results;
          } else {
            console.error('No top-rated movies found in API response:', json);
          }
        })
        .catch((err) => console.error('error:' + err));
    });

    return {
      search,
      movies,
      searchMovies,
      getMoviePosterUrl,
      getStarRating,
    };
  },
};
</script>


<style lang="css">
.search-box {
  display: flex;
  margin-bottom: 20px;
  width: 80%;
  justify-content: center;
  align-items: center;
  padding-left: 300px;
}

input[type="text"] {
  height: 44px;
  background: #262525;
  border: 1px solid #716e6e;
  border-radius: 5px;
  color: #fff;
  font-size: 15px;
  width: 90%;
  align-items: center;
  justify-content: center;


}

.search-button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #414d5a;
  color: white;
  border: 1px solid #414d5a;
  border-radius: 4px;
  cursor: pointer;
}

.search-button:hover {
  transform: scale(1.05);
  background-color: #37414c;
}

.movies-list {
  display: flex;
  flex-wrap: wrap;
}

.movie {
  width: 200px;
  margin: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
}

.movie:hover {
  transform: scale(1.05);
}

.product-image {
  position: relative;
}

.product-image img {
  width: 100%;
  height: auto;
  border-radius: 4px 4px 0 0;
}

.type {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #333;
  color: white;
  padding: 5px;
  border-radius: 4px;
}

.detail {
  padding: 15px;
}

.year {
  font-size: 10px;
  color: #777;
  margin-bottom: 5px;
}

h3 {
  font-size: 18px;
  margin: 0;
}

.home {
  background-color: #141414;
  color: #fff;
  padding: 20px;
  font-family: 'Arial', sans-serif;
}

.popularity {
  margin-top: 10px;
  color: #3d3d3c;
  font-size: 14px;
}

.stars {
  display: inline-block;
}
</style>