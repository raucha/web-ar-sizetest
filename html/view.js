var app = new Vue({
  el: '#sceneid',
  data: {
    message: 'hellow Vue!'
  },
  methods: {
    receiveMessage (event) {
      console.log(event.data);
      this.message = event.data.qr_size
    }
  },
  mounted () {
    window.addEventListener('message', this.receiveMessage)
  },
  beforeDestroy () {
    window.removeEventListener('message', this.receiveMessage)
  }
})

app.message = 'I have changed the data!';
