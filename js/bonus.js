const first = new Vue ({
  el:'#first',
  data:{
    title: 'Bonus stuff',
    checked: false,
    prova: '',
    class: {
      box: 'box-diff'
    }
  },
  methods:{
    provaF: function() {
      if(this.checked === true){
        this.prova = 'Prova'
      } else {
        this.prova = ''
      }
    },
    reverse: function() {
      this.prova = this.prova.split('').reverse().join('')
    }
  }
});

const second = new Vue ({
  el: '#second',
  data:{
    title: 'Seconda Prova',
    color: '#00f'
  }
});

Vue.config.devtools = true;
