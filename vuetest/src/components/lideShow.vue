<template>
  <div class="slide-show" @mouseover="clearAuto" @mouseout="slideAuto">
    <div class="slide-img">
      <a :href="slides[nowIndex].href">
        <transition name="slide-trans">
          <img v-if="isShow" :src="slides[nowIndex].src">
        </transition>
        <transition name="slide-trans-old">
          <img v-if="!isShow" :src="slides[nowIndex].src">
        </transition>
      </a>
    </div>
    <h2>{{ slides[nowIndex].title }}</h2>
    <ul class="slide-pages">
      <li @click="clickLeft()">&lt;</li>
      <li v-for="(item, index) in slides" @click="goto(index)">
        <a :class="{on: index === nowIndex}">{{ index + 1 }}</a>
      </li>
      <li @click="clickRight()">&gt;</li>
    </ul>
  </div>
</template>

<script>
  var timer=null
export default {
  props: {
    slides: {
      type: Array,
      default: []
    }
  },
  data () {
    return {
      nowIndex: 0,
      isShow: true,
    }
  },
  mounted(){
    this.slideAuto(); 
  },
  computed: {
     
  },
  methods: {
      goto:function(index){
          this.nowIndex=index
      },
      clickLeft:function(index){
          if(this.nowIndex==0){
            this.nowIndex=this.slides.length-1; 
          }else{
            this.nowIndex--;
          }
      },
      clickRight:function(index){
          if(this.nowIndex==this.slides.length-1){
            this.nowIndex=0; 
          }else{
            this.nowIndex++;
          }
      },
      clearAuto:function(){ 
        clearInterval(timer); 
       },
      slideAuto:function () { 
      var that=this; 
        timer=setInterval(function(){  
          that.clickRight();    
       },3000)}, 
  },
}
</script>

<style scoped>
.slide-trans-enter-active {
  transition: all .5s;
}
.slide-trans-enter {
  transform: translateX(900px);
}
.slide-trans-old-leave-active {
  transition: all .5s;
  transform: translateX(-900px);
}
.slide-show {
  position: relative;
  margin: 15px 15px 15px 0;
  width: 900px;
  height: 500px;
  overflow: hidden;
}
.slide-show h2 {
  position: absolute;
  width: 100%;
  height: 100%;
  color: #fff;
  background: #000;
  opacity: .5;
  bottom: 0;
  height: 30px;
  text-align: left;
  padding-left: 15px;
}
.slide-img {
  width: 100%;
}
.slide-img img {
  width: 100%;
  position: absolute;
  top: 0;
}
.slide-pages {
  position: absolute;
  bottom: 10px;
  right: 15px;
}
.slide-pages li {
  display: inline-block;
  padding: 0 10px;
  cursor: pointer;
  color: #fff;
}
.slide-pages li .on {
  text-decoration: underline;
}
</style>
