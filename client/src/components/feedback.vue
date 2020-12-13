<template>
<div class="">
    <div id="" class="container">
        <div class="row-left">
            <div class ="div.col-md-6 mx-auto">
                <h1 class = "text-center">Feedback</h1>
              <form>
                <b>
                <label for="reginput">Email:</label>
                </b>
                <input v-model="email" type="email" id="reginput" placeholder="email" readonly>
                <br>
                  <b>
                    <label>How was the service ?</label>
                  </b>
                  <input type="radio" id="one" value="Excellent" v-model="picked">
                  <label for="one">Excellent</label>
                  <input type="radio" id="two" value="Good" v-model="picked">
                  <label for="two">Good</label>
                  <input type="radio" id="three" value="Average" v-model="picked">
                  <label for="three">Average</label>
                  <input type="radio" id="four" value="bad" v-model="picked">
                  <label for="four">bad</label>
                  <br>
                  <b>
                    <label>How was the Coffee Quality ?</label>
                  </b>
                  <input type="radio" id="one" value="Excellent" v-model="picked_1">
                  <label for="one">Excellent</label>
                  <input type="radio" id="two" value="Good" v-model="picked_1">
                  <label for="two">Good</label>
                  <input type="radio" id="three" value="Average" v-model="picked_1">
                  <label for="three">Average</label>
                  <input type="radio" id="four" value="bad" v-model="picked_1">
                  <label for="four">bad</label>
                  <br>
                 <b>
                    <label>Order Processing Time?</label>
                  </b>
                  <input type="radio" id="one" value="Excellent" v-model="picked_2">
                  <label for="one">Excellent</label>
                  <input type="radio" id="two" value="Good" v-model="picked_2">
                  <label for="two">Good</label>
                  <input type="radio" id="three" value="Average" v-model="picked_2">
                  <label for="three">Average</label>
                  <input type="radio" id="four" value="bad" v-model="picked_2">
                  <label for="four">bad</label>
                  <br>
                <b>
                    <label>How is the pricing?</label>
                  </b>
                  <input type="radio" id="one" value="Excellent" v-model="picked_3">
                  <label for="one">Excellent</label>
                  <input type="radio" id="two" value="Good" v-model="picked_3">
                  <label for="two">Good</label>
                  <input type="radio" id="three" value="Average" v-model="picked_3">
                  <label for="three">Average</label>
                  <input type="radio" id="four" value="bad" v-model="picked_3">
                  <label for="four">bad</label>
                  <br>
                <b>
                    <label>Would you recommend others?</label>
                  </b>
                  <input type="radio" id="one" value="Fequently" v-model="picked_4">
                  <label for="one">Fequently</label>
                  <input type="radio" id="two" value="Rarely" v-model="picked_4">
                  <label for="two">Rarely</label>
                  <input type="radio" id="three" value="Never" v-model="picked_4">
                  <label for="three">Never</label>
                  <input type="radio" id="four" value="Not Applicable" v-model="picked_4">
                  <label for="four">Not Applicable</label>
                  <br>
                <button type="button" class = "btn btn-success" @click="addfeedback">Submit</button>
                  </form>
        </div>
    </div>
    </div>
</div>
</template>
<script>
import axios from 'axios'
import router from '../router'
export default {
  data () {
    return {
      todos: [],
      email: localStorage.getItem('email'),
      picked: '',
      picked_1: '',
      picked_2: '',
      picked_3: '',
      picked_4: ''
    }
  },
  methods: {
    addfeedback () {
      if (this.email) {
        axios.post('/api/feedback', { email: this.email, feedback1: this.picked, feedback2: this.picked_1, feedback3: this.picked_2, feedback4: this.picked_3, feedback5: this.picked_4 })
          .then((res) => {
            this.email = ''
            this.picked = ''
            this.picked_1 = ''
            this.picked_2 = ''
            this.picked_3 = ''
            this.picked_4 = ''
            router.push({name: 'signOut'})
          }).catch((err) => {
            console.log(err)
          })
      } else {
        alert('Kindly Login ')
        router.push('/sign')
      }
    }
  }
}
</script>
