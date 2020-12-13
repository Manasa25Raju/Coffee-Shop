<template>
  <section class="bg-dark" id="menu">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2>MENU</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4 col-sm-6 portfolio-item">
          <a>
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fas fa-plus fa-3x"></i>
              </div>
            </div>
            <div>
                <router-link to="/sign"><img class="img-fluid" src="../assets/c1.jpg" alt=""></router-link>
                </div>
          </a>
          <div class="portfolio-caption">
            <h4>Macchiato</h4>
            <p class="text-muted">Grande ($3.20)</p>
          </div>
        </div>
        <div class="col-md-4 col-sm-6 portfolio-item">
          <a class="portfolio-link" data-toggle="modal" href="#portfolioModal2">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fas fa-plus fa-3x"></i>
              </div>
            </div>
            <router-link to="/sign"><img class="img-fluid" src="../assets/c5.jpg" alt=""></router-link>
          </a>
          <div class="portfolio-caption">
            <h4>Iced Coffee</h4>
            <p class="text-muted">Grande ($5.20)</p>
          </div>
        </div>
        <div class="col-md-4 col-sm-6 portfolio-item">
          <a class="portfolio-link" data-toggle="modal" href="#portfolioModal3">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fas fa-plus fa-3x"></i>
              </div>
            </div>
            <router-link to="/sign"><img class="img-fluid" src="../assets/c4.jpg" alt=""></router-link>
          </a>
          <div class="portfolio-caption">
            <h4>Caffe Latte</h4>
            <p class="text-muted">Venti ($4.15)</p>
          </div>
        </div>
        <div class="col-md-4 col-sm-6 portfolio-item">
          <a class="portfolio-link" data-toggle="modal" href="#portfolioModal4">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fas fa-plus fa-3x"></i>
              </div>
            </div>
            <router-link to="/sign"><img class="img-fluid" src="../assets/t1.jpg" alt=""></router-link>
          </a>
          <div class="portfolio-caption">
            <h4>Green Lemon Tea</h4>
            <p class="text-muted">Grande ($3.20)</p>
          </div>
        </div>
        <div class="col-md-4 col-sm-6 portfolio-item">
          <a class="portfolio-link" data-toggle="modal" href="#portfolioModal5">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fas fa-plus fa-3x"></i>
              </div>
            </div>
            <router-link to="/sign"><img class="img-fluid" src="../assets/c3.jpg" alt=""></router-link>
          </a>
          <div class="portfolio-caption">
            <h4>Caffe Americano</h4>
            <p class="text-muted">Venti ($4.39)</p>
          </div>
        </div>
        <div class="col-md-4 col-sm-6 portfolio-item">
          <a class="portfolio-link" data-toggle="modal" href="#portfolioModal6">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fas fa-plus fa-3x"></i>
              </div>
            </div>
            <router-link to="/sign"><img class="img-fluid" src="../assets/t2.jpg" alt=""></router-link>
          </a>
          <div class="portfolio-caption">
            <h4>Iced Tea</h4>
            <p class="text-muted">Grande ($4.20)</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  </template>
<script>
export default {
  data () {
    return {
    }
  },
  mounted () {
    this.sign()
  }
}
</script>

<style>
</style>
