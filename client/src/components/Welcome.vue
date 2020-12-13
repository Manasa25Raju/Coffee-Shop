<template>
    <center>
  <div class="text-center">
    <p>Welcome to Coffee Shop</p>

    <div class="card bg-dark">
  <h5 class="card-header text-left">ABOUT US...</h5>
  <div class="card-body">
    <p class="card-text">Barista is a micro roaster founded in 2004. Our coffee blends are roasted daily with great care based on a time-honoured Italian tradition to offer you freshness and a taste that will whisk you away to the Old World.Our unique business model is our pride and joy! At Barista, we do more than just roast exceptional coffee using artisanal methods, we also train our clients in the craft of coffee making via our training program.</p>
    <p>Our communications services range from marketing, branding, Web, printing and packaging to Web and video marketing campaigns and social media support. As a member of our “coffeefamily,” you will enjoy preferential rates on services that will help you promote your business and improve your coffee sales.</p>
    <p>But there’s more! When we’re not crafting the perfect blend of coffee using traditional Italian methods, we help our clients with their communication needs. With Barista products present in more than 200 locations across the province, we decided to build a marketing department specialized in the food industry to help our clients promote their service offer, while increasing their coffee sales.</p>
    <a href="#" class="btn"><router-link to="/team">CONTACT US</router-link></a>
  </div>
</div>
     <router-view></router-view>
  </div>
  </center>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  mounted () {
    this.signOut()
  },
  methods: {
    signOut () {
      localStorage.clear()
    }
  }
}
</script>

<style>
</style>
