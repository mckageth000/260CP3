<template>
  <div id='wrapper'>
    <div><h1>{{ith}} Movement</h1></div>
    <audio controls>
      <source v-bind:src='songSrc' type='audio/ogg'/>
    </audio>
    <div id="info">"{{info}}"(from <a href='https://en.wikipedia.org/wiki/Symphony_No._5_(Beethoven)'>Wikipedia</a>)</div>
  </div>
</template>

<script>
export default{
  data(){
    return{
      songNum: 0,
      songSrc: "",
      info: ""
    }
  },
  computed: {
    ith(){
      if (this.songNum === "1") { return "1st"; }
      if (this.songNum === "2") { return "2nd"; }
      if (this.songNum === "3") { return "3rd"; }
      if (this.songNum === "4") { return "4th"; }
      else return "";
    }
  },
  created(){
    //debugger
    this.songNum = this.$route.params.id;
    if(this.$route.params.id === "1") { this.songSrc = "1.a86cfa28.ogg"; }
    else if (this.$route.params.id === "2") { this.songSrc = "2.e456e888.ogg"; }
    else if (this.$route.params.id === "3") { this.songSrc = "3.cc7cf026.ogg"; }
    else if (this.$route.params.id === "4") { this.songSrc = "4.219a4ea5.ogg"; }
    this.songSrc = ("../media/" + this.songSrc);

    this.info = this.$root.$data.summaries[this.$route.params.id - 1].about;
  }
}
</script>

<style scoped>
  #wrapper{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  audio{
    width: 50%;
  }

  audio::-webkit-media-controls-panel{
    background-color: #c7c7fc;
  }

  #info{
    width: 70%;
    line-height: 1.8;
    margin: 15px;
    text-align: left;
    font-size: 20px;
  }
</style>
