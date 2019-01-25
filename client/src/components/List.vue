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
                <th scope="col"> Paid Status </th>
                <th scope="col"> Order Processed</th>
            </tr></thead><tbody><tr class="" v-for= "(order) in orders"
                v-bind:key= "order.order_id"
                v-bind:title = "order.size" scope="row">
                <td>{{order.order_id}}</td>
                <td>{{order.beverage_type}}</td>
                <td>{{order.size}}</td>
                <td>{{order.cream}}</td>
                <td>{{order.sugar}}</td>
                <td>{{order.extra_shots}}</td>
                <td>{{order.milk_type}}</td>
                <td>{{order.flavour}}</td>
                <td>{{order.quantity}}</td>
                <td>
                  <button class=" btn btn-primary" v-on:click= "goToPayment()">Paid</button></td>
                  <td><button class=" btn btn-success " v-on:click= "deleteTask(todo.id)">Order Prossed</button>
                </td>
            </tr>
            </tbody>
            </table>
            </div>

        </div>
    </div>

    </div>

</template>
<script>
import axios from 'axios'

export default {
  data () {
    return {
      orders: [],
      order_id: '',
      Registration_id: '',
      beverage_type: '',
      size: '',
      cream: '',
      sugar: '',
      extra_shots: '',
      milk_type: '',
      flavour: '',
      quantity: ''
    }
  },
  mounted () {
    this.getTasks()
  },
  methods: {
    getTasks () {
      axios.get('/api/orders').then(
        result => {
          console.log(result.data)
          this.orders = result.data
        },
        error => {
          console.error(error)
        }
      )
    }
  }
}
</script>
