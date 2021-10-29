<template>
  <div id="app">
    <div id="nav">
      <router-link to="/"><img id='thmb' src='./images/beet.png'/></router-link>
      <router-link id="title" to="/">Beethoven's Symphony No. 5</router-link>
    </div>
    <router-view/>
    <div id='footer'>
      <a href='https://github.com/mckageth000/260CP3'><i>github</i></a>
    </div>
  </div>
</template>

<style>
body{
  padding:0;
  margin:0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  display: flex;
  padding: 0px;
  justify-content: flex-start;
  align-items: center;
  background-color: #a1a1ff;
}

#thmb{
  width:100px;
  margin: 10px;
}

#title{
  padding-left: 30px;
}

#nav a {
  font-weight: bold;
  text-decoration: none;
  color: #2c3e50;

  font-size: 40px;
}

#footer{
  background-color: #a1a1ff;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  padding: 8px;
}

#footer a:link,
#footer a:hover,
#footer a:visited,
#footer a:active{
  text-decoration: none;
  color: black;
}

</style>
