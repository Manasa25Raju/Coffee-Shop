<template>
    <div class="hello">
      <div class="">
      </div>
        <div class="container">
            <div class="row">
               <div class="table-responsive-lg"><h1 class = "text-center">Review list </h1>
            <table class="table table-hover table-breviewed ">
              <thead class="thead-secondary">
              <tr>
                <th scope="col">Email</th>
                <th scope="col">Service Quality</th>
                <th scope="col">Coffee Quality</th>
                <th scope="col">Processing Time</th>
                <th scope="col">Pricing</th>
                <th scope="col">Recommendation</th>
            </tr>
            </thead>
            <tbody>
                <tr class="" v-for= "(review) in reviews"
                v-bind:key= "review.email"
                v-bind:title = "review.size" scope="row">
                <td>{{review.email}}</td>
                <td>{{review.feedback1}}</td>
                <td>{{review.feedback2}}</td>
                <td>{{review.feedback3}}</td>
                <td>{{review.feedback4}}</td>
                <td>{{review.feedback5}}</td>
            </tr>
            </tbody>
            </table>
            </div>
        </div>
        <button class=" btn btn-info " v-on:click= "signOut">Log Out</button>
    </div>

    </div>

</template>
<script>
import axios from 'axios'
import router from '../router'
export default {
  data () {
    return {
      reviews: [],
      picked: '',
      picked_1: '',
      picked_2: '',
      picked_3: '',
      picked_4: '',
      email: localStorage.getItem('email')
    }
  },
  mounted () {
    this.addfeedback()
  },
  methods: {
    addfeedback () {
      if (this.email) {
        axios.get('/api/review').then(
          result => {
            console.log(result.data)
            this.reviews = result.data
          },
          error => {
            console.error(error)
          }
        )
      } else {
        alert('Kindly Login ')
        router.push('/sign')
      }
    },
    signOut () {
      axios.get('/api/signOut')
        .then((res) => {
          localStorage.clear()
          router.push({name: 'Welcome'})
        })
    }
  }
}
</script>
