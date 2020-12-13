<template>
    <div class="">
        <center>
        </center>
            <div id="" class="container">
            <div class="row">
               <div class ="div.col-md-6 mx-auto">
                   <h1 class = "text-center">Payment</h1>
                <form v-on:submit.prevent= "payment">
                    <input v-model= "email" type="email" id="emailidinput" class= "form-control" placeholder="Email" v-validate="'required|email'" name="email" readonly>
                    <p class="alert" v-if="errors.has('emailId')">{{ errors.first('emailId') }}</p>
                    <br>
                    <input v-model= "card_no" type="text" id="card_noinput" class= "form-control" placeholder="Card_No" v-validate="'required|digits:16'" name="card_no">
                    <p class="alert" v-if="errors.has('card_no')">{{ errors.first('card_no') }}</p>
                    <br>
                    <input v-model= "cvv" type="text" id="cvvinput" class= "form-control" placeholder="CVV" v-validate="'required|digits:3'" name="cvv">
                    <p class="alert" v-if="errors.has('cvv')">{{ errors.first('cvv') }}</p>
                    <br>
                    <input v-model= "password" type="password" id="passwordinput" class= "form-control" placeholder="Card Pin" v-validate="'required|min:4'" name="password">
                    <p class="alert" v-if="errors.has('password')">{{ errors.first('password') }}</p>
                    <br>
                    <button type = "confirm" class = "btn btn-success">
                        Confirm
                    </button>
                    <br>
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
      email: localStorage.getItem('email'),
      password: '',
      card_no: '',
      cvv: ''
    }
  },
  methods: {
    payment () {
      if (this.email) {
        axios.post('/api/payment',
          {
            email: this.email,
            password: this.password,
            card_no: this.card_no,
            cvv: this.cvv
          })
          .then((res, err) => {
            if (res.status === 200) {
              alert('Payment Successful')
              router.push({name: 'signOut'})
            }
          })
          .catch(err => {
            if (err.response.status === 404) {
              alert('Invalid Email or Password')
              this.$router.push('/Payment')
            }
            // console.log(err)
          })
      } else {
        alert('Kindly Login ')
        router.push('/sign')
      }
    }
  }
}
</script>
<style scoped>
.alert {
    background: #53e05a;
    font-weight: lighter;
    display: inline-block;
    padding: 5px;
    margin-top: -5px;
  }
  </style>
