<template>
    <div class="">
        <center>
        </center>
            <div id="" class="container">
            <div class="row">
               <div class ="div.col-md-6 mx-auto">
                   <h1 class = "text-center">Registration</h1>
                <form>
                    <input v-model= "firstname" type="text" id="firstnameinput" class= "form-control" placeholder="First Name" v-validate="'required'" name="firstName">
                    <p class="alert" v-if="errors.has('firstName')">{{ errors.first('firstName') }}</p>
                    <br>
                    <input v-model= "lastname" type="text" id="lastnameinput" class= "form-control" placeholder="Last Name" v-validate="'required'" name="lastName">
                    <p class="alert" v-if="errors.has('lastName')">{{ errors.first('lastName') }}</p>
                    <br>
                    <input v-model= "emailid" type="email" id="emailidinput" class= "form-control" placeholder="Email Id" v-validate="'required|email'" name="emailId">
                    <p class="alert" v-if="errors.has('emailId')">{{ errors.first('emailId') }}</p>
                    <br>
                    <input v-model= "phonenumber" type="text" id="phonenumberinput" class= "form-control" placeholder="Phone Number" v-validate="'digits:10'" name="phoneNo">
                    <p class="alert" v-if="errors.has('phoneNo')">{{ errors.first('phoneNo') }}</p>
                    <br>
                    <input v-model= "password" type="password" id="passwordinput" class= "form-control" placeholder="Password" v-validate="'required|min:6'" name="password">
                    <p class="alert" v-if="errors.has('password')">{{ errors.first('password') }}</p>
                    <br>
                    <button @click="addNewRegisterTask" class ="btn btn-success">
                        Submit
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
      todos: [],
      firstname: '',
      lastname: '',
      emailid: '',
      phonenumber: '',
      password: ''
    }
  },
  methods: {
    addNewRegisterTask () {
      axios.post('/api/register', { first_name: this.firstname, last_name: this.lastname, email: this.emailid, phone_no: this.phonenumber, password: this.password })
      this.$validator.validateAll().then((res) => {
        if (res) {
          this.firstname = ''
          this.lastname = ''
          this.emailid = ''
          this.phonenumber = ''
          this.password = ''
          alert('You Registered Successfully')
          router.push('/')
        }
      })
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
  }</style>
