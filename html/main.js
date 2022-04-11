var app10 = new Vue({
  el: '#app-10',
  vuetify: new Vuetify(),
  data: {
    // qr_size: 0.207, //url
    // qr_size: 0.057, //hiro
    qr_size: 0.108, //印刷
    box_w: 0.1,
    box_d: 0.1,
    box_h: 0.1,
    count: 4,
    file: null,
    fileData: null,
    obj_url: "./asset/cube_10cm.obj",
    obj_scale: 2.5,
    show_box: true,
    show_obj: true,
    show_gltf: true,
  },
  methods: {
    postVal() {
      // alert("asd")
      var iframe = document.querySelector('#iframeid');
      iframe.contentWindow.postMessage({
        qr_size: this.qr_size,
        box_w: this.box_w,
        box_d: this.box_d,
        box_h: this.box_h,
        obj_url: this.obj_url,
        obj_scale: this.obj_scale,
        show_box: this.show_box,
        show_obj: this.show_obj,
        show_gltf: this.show_gltf,
      }, '*');
    },
    // ファイル入力が変更された時呼び出されます。
    onChangeFileInput(selectedFile) {
      // alert();
      this.fileData = new Object();
      // ファイルタイプを設定します。
      this.fileData.type = selectedFile.type;
      // ファイル名を設定します。
      this.fileData.fileName = selectedFile.name;

      // ファイルデータを非同期で読み込みます。
      this.readFileAsync(selectedFile)
        .then((result) => {
          // ファイルデータが読み込めた場合
          // ファイルデータを設定します。
          this.fileData.data = result;
          // alert(this.fileData.type);
          // alert(this.fileData.fileName);
          // alert(this.fileData.data);
        })
        .then(() => {
          // var blobObj = new Blob([atob(this.fileData.data)], { type: 'text/plain'});
          var blobObj = new Blob([this.fileData.data], { type: 'text/plain' });
          this.obj_url = window.URL.createObjectURL(blobObj);

          // alert(this.obj_url);
          this.postVal();
        })
        .catch((e) => {
          // エラーの場合
          alert("error");
          alert(`e=${e}`);
          console.log(`e=${e}`);
        });
    },

    readFileAsync(file) {
      return new Promise((resolve, reject) => {
        // alert("readFileAsync");
        const reader = new FileReader();
        reader.onload = () => {
          resolve(reader.result);
        };
        reader.onerror = reject;
        reader.readAsArrayBuffer(file);
      });
    },
  },
  mounted() {
    window.setTimeout(this.postVal, 5000);
  },
  beforeDestroy() {
  }
})

// alert("test")
