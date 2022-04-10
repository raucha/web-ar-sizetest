var app = new Vue({
  el: '#sceneid',
  data: {
    message: 'hellow Vue!',
    box_scale: "1 1 1"
  },
  methods: {
    receiveMessage (event) {
      console.log(event.data);

      // 値を生成
      var scalef = 1/event.data.qr_size;
      var scale_x = event.data.box_d * scalef;
      var scale_y = event.data.box_h * scalef;
      var scale_z = event.data.box_w * scalef;
      var pos_y = scale_y/2;
      
      // 値を設定
      this.box_scale = {x:scale_x, y:scale_y, z:scale_z};
      this.box_pos = {x:0, y:pos_y, z:0};
      this.message = event.data.qr_size;
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
// app.box_scale = "2 2 2";

