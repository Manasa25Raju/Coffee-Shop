<template>
    <div class="hello">
      <div class="">
      </div>
        <div class="container">
            <div class="row">
               <div class="table-responsive-lg"><h1 class = "text-center">Ordered list </h1>
            <table class="table table-hover table-bordered ">
               <caption>List of Orders</caption>
              <thead class="thead-secondary">
              <tr>
                <th scope="col">Order Number</th>
                <th scope="col">beverage_type</th>
                <th scope="col">size</th>
                <th scope="col">cream</th>
                <th scope="col">sugar</th>
                <th scope="col">extra_shots</th>
                <th scope="col">milk_type</th>
                <th scope="col">flavour</th>
                <th scope="col">quantity</th>
                <th scope="col"> Order Processed</th>
            </tr></thead><tbody><tr class="" v-for= "(order) in orders"
                v-bind:key= "order.order_id"
                v-bind:title = "order.size" scope="row">
                <td>{{order.orderId}}</td>
                <td>{{order.beverage_type}}</td>
                <td>{{order.size}}</td>
                <td>{{order.cream}}</td>
                <td>{{order.sugar}}</td>
                <td>{{order.extra_shots}}</td>
                <td>{{order.milk_type}}</td>
                <td>{{order.flavour}}</td>
                <td>{{order.quantity}}</td>
                <td><button class=" btn btn-success " v-on:click= "deleteOrder(order.orderId)">Order Prossed</button></td>
            </tr>
            </tbody>
            </table>
            <button class=" btn btn-info " v-on:click= "signOut">Log Out</button>
            <router-link to="/review" class=" btn btn-info">Reviews</router-link>
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
      orders: [],
      orderId: '',
      Registration_id: '',
      beverage_type: '',
      size: '',
      cream: '',
      sugar: '',
      extra_shots: '',
      milk_type: '',
      flavour: '',
      quantity: '',
      password: '',
      email: localStorage.getItem('email')
    }
  },
  mounted () {
    this.getTasks()
  },
  methods: {
    getTasks () {
      if (this.email) {
        axios.get('/api/orders').then(
          result => {
            console.log(result.data)
            this.orders = result.data
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
    deleteOrder (orderId) {
      alert('Is the Order Processed?')
      axios.delete(`/api/deleteOrder/${orderId}`)
        .then((res) => {
          // this.orderId = ''
          this.getTasks()
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
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
