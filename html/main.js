var app10 = new Vue({
  el: '#app-10',
  vuetify: new Vuetify(),
  data: {
    qr_size: 0.057,
    box_w: 0.1,
    box_d: 0.1,
    box_h: 0.1,
    count: 4
  },
  methods: {
    postVal() {
      // alert("asd")
      var iframe = document.querySelector('#iframeid');
      iframe.contentWindow.postMessage({
        qr_size: this.qr_size,
        box_w: this.box_w,
        box_d: this.box_d,
        box_h: this.box_h
      }, '*');
    }
  },
  mounted() {
    window.setTimeout(this.postVal, 3000);
  },
  beforeDestroy() {
  }
})

// alert("test")
