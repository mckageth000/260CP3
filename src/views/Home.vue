<template>
  <div class="home">
    <h3>Select a movement to listen and learn more about it</h3>
    <div id='song-list'>
      <router-link class='song link' to='/song/1' style='background-position: 50% 10%'><div>1st Mvmt</div></router-link>
      <router-link class='song link' to='/song/2' style='background-position: 50% 30%'><div>2nd Mvmt</div></router-link>
      <router-link class='song link' to='/song/3' style='background-position: 50% 50%'><div>3rd Mvmt</div></router-link>
      <router-link class='song link' to='/song/4' style='background-position: 50% 70%'><div>4th Mvmt</div></router-link>
    </div>
    <router-link class='link' to='/about'><div><p>Or click to learn more about Ludwig van Beethoven</p></div></router-link>
  </div>
</template>

<style scoped>
  #song-list{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h3{
    margin: 30px;
  }

  .song{
    background-image: url("../images/sheetmusic.png");
    background-size: cover;
    border: 1px solid black;
    border-radius: 4px;
  }

  .link{
    width: 60%;
    padding: 15px;
    margin: 8px;
    font-size: 30px;
  }

  a:link,
  a:visited,
  a:hover{
    text-decoration: none;
    color: black;
  }

</style>
