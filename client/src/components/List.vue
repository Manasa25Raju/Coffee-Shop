<template>
    <div class="hello">
        <div id="todo-list-example" class="container">
            <div class="row">
               <div class ="div.col-md-6 mx-auto">
                   <h1 class = "text-center">Ordered list </h1>
                <!-- <form v-on:submit.prevent= "addNewTask">
                    <label for = "tasknameinput"> Task Name </label>
                    <input v-model= "taskname" type="text" id="tasknameinput" class= "form-control" placeholder="Add New Task">
                    <button v-if= "this.isEdit == false" type = "submit" class = "btn btn success btn-block mt-3">
                        Submit
                    </button>
                    <button v-else v-on:click= "updateTask()" type = "button" class = "btn btn primary btn-block mt-3">
                        Update
                    </button>
            </form>-->
            <table class="table">
              <tr>
                <td class = "text-left">Order Id</td>
                <td>beverage_type</td>
                  <td>size</td>
                    <td>cream</td>
                      <td>sugar</td>
                        <td>extra_shots</td>
                  <td>milk_type</td>
                    <td>flavour</td>
                  <td>quantity</td>
                <td class = "text-right"> Paid Status </td>
                <td class = "text-right"> Order Processed</td>
            </tr>
            <tr v-for= "(order) in orders"
                v-bind:key= "order.order_id"
                v-bind:title = "order.size">
                <td class = "text-left">{{order.order_id}}</td>
                <td>{{order.beverage_type}}</td>
                  <td>{{order.size}}</td>
                    <td>{{order.cream}}</td>
                      <td>{{order.sugar}}</td>
                        <td>{{order.extra_shots}}</td>
                  <td>{{order.milk_type}}</td>
                    <td>{{order.flavour}}</td>
                  <td>{{order.quantity}}</td>
                <td class = "text-right">
                    <button class=" btn btn-info" v-on:click= "editTask(todo.task_name,todo.id)">Paid</button></td>
                  <td class = "text-right"><button class=" btn btn-danger" v-on:click= "deleteTask(todo.id)">Order Prossed</button>
                </td>
            </tr>
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
