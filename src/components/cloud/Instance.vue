<template>
    <section class="content">
      <div class="row">
        <div class="col-md-3 col-sm-6 col-xs-12">
          <div class="info-box bg-yellow">
            <span class="info-box-icon"><i class="ion ion-ios-pricetag-outline"></i></span>

            <div class="info-box-content">
              <span class="info-box-text">Inventory</span>
              <span class="info-box-number">5,200</span>

              <div class="progress">
                <div class="progress-bar" style="width: 50%"></div>
              </div>
              <span class="progress-description">
                50% Increase
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script>

import Instance from '@/api/cloud/instance'

export default {
  name: 'Instance',
  data () {
    return {
      instances: null
    }
  },
  methods: {
    list () {
      Instance.list()
        .then(response => {
          console.log('success', response.data.length)
        })
        .catch(error => {
          console.log('error', error.response)
        })
    }
  },
  mounted () {
    this.list()
  }
}

</script>

<style>
</style>
