<template>
    <div class="hello">
        <div id="todo-list-example" class="container">
            <div class="row">
               <div class ="div.col-md-6 mx-auto">
               <br>
               <br>
                   <h1 class = "text-center">Sign In</h1>
                   <br>
                <form v-on:submit.prevent= "login">
                    <input v-model= "email" type="text" id="email" class= "form-control" placeholder="Email" v-validate="'required|email'" name="Username">
                    <p class="alert" v-if="errors.has('Username')">{{ errors.first('Username') }}</p>
                    <br>
                    <input v-model= "password" type="password" id="passwordinput" class= "form-control" placeholder="Password" v-validate="'required|min:6'" name="password">
                    <p class="alert" v-if="errors.has('password')">{{ errors.first('password') }}</p>
                    <br>
                    <button type = "submit" class = "btn btn-success">
                        Sign in
                    </button>
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
      email: '',
      password: '',
      UserAva: localStorage.setItem('UserAva', false)
    }
  },
  methods: {
    login () {
      localStorage.setItem('email', this.email)
      axios.post('/api/sign_task',
        {
          email: this.email,
          password: this.password
        }).then((res, err) => {
        if (res.status === 201) {
          alert('Welcome Barista')
          router.push({name: 'OrderedList'})
        }
        if (res.status === 200) {
          this.email = ''
          this.password = ''
          router.push({name: 'OrderMenu'})
        }
      })
        .catch(err => {
          if (err.response.status === 404) {
            alert('Invalid Email or Password')
          }
        })
    }
  }
}
</script>
<style scoped>
.alert {
    background: #42cf2f;
    font-weight: lighter;
    display: inline-block;
    padding: 5px;
    margin-top: -5px;
  }
</style>
