<template>
    <div class="row-center">
            <div class="form-group">
              <h1 class="text-center">MENU</h1>
              <form v-on:submit.prevent="addNewItem">
                <div class>
                  <b>
                    <label class="align-left">Beverage Type:</label>
                  </b>
                  <input type="radio" id="one" value="Coffee" v-model="picked">
                  <label for="one">Coffee</label>
                  <input type="radio" id="two" value="Tea" v-model="picked">
                  <label for="two">Tea</label>
                </div>
                <b>
                  <label>Size:</label>
                </b>
                <select v-model="selected" v-validate="'required'" name="size">
                  <option disabled value>Please select one</option>
                  <option>Small</option>
                  <option>Medium</option>
                  <option>Large</option>
                </select>
                 <p class="alert" v-if="errors.has('size')">{{ errors.first('size') }}</p>
                <br>
                <b>
                  <label>Cream:</label>
                </b>
                <input type="radio" id="one" value="Yes" v-model="picked_1">
                <label for="one">Yes</label>
                <input type="radio" id="two" value="No" v-model="picked_1">
                <label for="two">No</label>
                <br>
                <b>
                  <label>Sugar:</label>
                </b>
                <input type="radio" id="one" value="Yes" v-model="picked_2">
                <label for="one">Yes</label>
                <input type="radio" id="two" value="No" v-model="picked_2">
                <label for="two">No</label>
                <br>
                <b>
                  <label>Number of shots:</label>
                </b>
                <select v-model="selected_1"  v-validate="'required'" name="shots">
                  <option disabled value>Please select one</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
                <p class="alert" v-if="errors.has('shots')">{{ errors.first('shots') }}</p>
                <br>
                <b>
                  <label>Milk Type:</label>
                </b>
                <input
                  type="radio"
                  id="one"
                  value="Fat"
                  v-model="picked_3"
                  class="custom-control-input"
                >
                <label for="one">Fat</label>
                <input type="radio" id="two" value="Skimmed" v-model="picked_3">
                <label for="two">Skimmed</label>
                <input type="radio" id="one" value="Semi-Skimmed" v-model="picked_3">
                <label for="one">Semi-Skimmed</label>
                <br>
                <b>
                  <label>Flavour:</label>
                </b>
                <select v-model="selected_2" v-validate="'required'" name="SelectOne">
                  <option disabled value>Please select one</option>
                  <option>Chocolate</option>
                  <option>Vanilla</option>
                  <option>Caramel</option>
                  <option>Regular</option>
                </select>
                <p class="alert" v-if="errors.has('SelectOne')">{{ errors.first('SelectOne') }}</p>
                <br>
                <b>
                  <label for="quantityinput">Quantity:</label>
                </b>
                <input
                  v-model="taskquantity"
                  type="text"
                  id="quantityinput"
                  placeholder="Add Quantity"
                v-validate="'required|numeric|min:1'" name="qty"><br>
                <p class="alert" v-if="errors.has('qty')">{{ errors.first('qty') }}</p>
                <b>
                  <label for="reginput">email:</label>
                </b>
                <input v-model="reg" type="email" id="reginput" placeholder="email">
                <br>
                <button v-if="this.isEdit == false" type="submit" class="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      todos: [],
      id: '',
      reg: '',
      picked: '',
      selected: '',
      picked_1: '',
      picked_2: '',
      selected_1: '',
      picked_3: '',
      selected_2: '',
      taskquantity: '',
      isEdit: false
    }
  },
  methods: {
    addNewItem () {
      axios
        .post('/api/orderMenu', {
          registration_id: this.reg,
          beverage_type: this.picked,
          size: this.selected,
          cream: this.picked_1,
          sugar: this.picked_2,
          extra_shots: this.selected_1,
          milk_type: this.picked_3,
          flavour: this.selected_2,
          quantity: this.taskquantity
        })
      this.$validator.validateAll().then(res => {
        this.reg = ''
        this.picked = ''
        this.selected = ''
        this.picked_1 = ''
        this.picked_2 = ''
        this.selected_1 = ''
        this.picked_3 = ''
        this.selected_2 = ''
        this.taskquantity = ''
      })
        .catch(err => {
          console.log(err)
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
  }</style>
