<template>
  <header>
    <router-link to="/">
      <h1><span>Top</span> Movies</h1>
    </router-link>
  </header>
  <main>
    <router-view/>
  </main>
</template>

<style lang="css">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
}

body {
  background-color: #00060a; 
}

a {
  text-decoration: none;
  color: #1a202c; 
}

header {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 60px;
  background-color: #272727; 
  box-shadow: 0px 0px 6px rgba(120, 144, 156, 0.1); 
}

header h1 {
  color: #2d3748; 
  font-size: 28px;
}


header h1 span {
  color: #718096; 
}

</style>