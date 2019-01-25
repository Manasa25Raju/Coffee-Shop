<template>
<center><div id="App" class="card text-white bg-danger" >
    <div class="float-left">
      <nav class="navbar navbar-light" style="background-color: #e3f2fd;">
        <img src="./assets/images.jpg" id="logo">
    <div class="nav-item">
    <router-link to="/">About</router-link> |
     <router-link to="/Register">Register</router-link> |
     <router-link to="/OrderMenu">Order</router-link> |
     <router-link to="/OrderedList">View Orders</router-link> |
     <router-link to="/signOut">SignOut</router-link></div>
    <div class="float-right"></div>
    </nav>
    </div>
         <router-view></router-view>
  </div>
  </center>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body{
  background:#e3f2fd;
  font-family: Arial, Helvetica, sans-serif;
  }
  html,body{
    height: calc(100%-50px);
  }
  #app{
    background: #e3f2fd;
    width: 80%;
    border-radius: 10px;
    margin: 50px auto 0 auto;
    height: calc(60%-50px);
  }
  #logo {
  border-radius: 15px 50px 30px;
  background: rgb(31, 1, 1);
  padding: 20px;
  width: 200px;
  height: 150px;
}
  .page{
    position: fixed;
    width:inherit;
  }</style>
