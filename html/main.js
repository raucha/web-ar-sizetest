var app10 = new Vue({
  el: '#app-10',
  vuetify: new Vuetify(),
  data: {
    qr_size: 0.1,
    box_w: 0.5,
    box_d: 0.5,
    box_h: 0.5,
    count: 4
  },
  methods: {
    // increment() {
    //   // `this` はコンポーネントインスタンスを参照
    //   this.count++
    // }
  },
  mounted() {
    window.addEventListener('message', this.receiveMessage);
    setInterval(() => {
      var iframe = document.querySelector('#iframeid');
      // alert(iframe);
      iframe.contentWindow.postMessage({
        qr_size: 10,
        box_w: 10,
        box_d: 10,
        box_h: 10
      }, '*');
    }, 5000)
  },
  beforeDestroy() {
    window.removeEventListener('message', this.receiveMessage)
  }
})

// alert(app10.count) // => 4

// app10.increment()

// alert(app10.count) // => 5
