<template>
    <div>
        <center>
        <div>
    <nav class="navbar navbar-light" style="background-color: #e3f2fd;">
    <div class="nav-item float-right">
    <router-link to="/feedback">Feedback</router-link>
     </div>
    </nav>
    </div>
  <div>
     <p>Your Drink will be ready soon...</p>
     <p> Your Order No is <b>{{ orderId}}</b></p>
      <p>Thank You For Using this Application...</p>
  </div>
  <button type = "submit" class = "btn btn-success" @click = "signOut"> Log Out</button>
  <router-view></router-view>
  </center>
</div></template>

<script>
import axios from 'axios'
import sign from './sign.vue'
import router from '../router'
export default {
  components: {
    'app-input': sign
  },
  data () {
    return {
      orderId: '',
      email: ''
    }
  },
  mounted () {
    this.getOrderId()
  },
  methods: {
    signOut () {
      axios.get('/api/signOut')
        .then((res) => {
          localStorage.clear()
          router.push({name: 'Welcome'})
        })
    },
    getOrderId () {
      this.email = localStorage.email
      axios.get(`/api/orderId/${this.email}`).then(
        result => {
          console.log(result.data.orderId)
          this.orderId = result.data.orderId
        },
        error => {
          console.error(error)
        }
      )
    }
  }
}
</script>

<style>
</style>
