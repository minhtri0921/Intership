var app = new Vue({
  el: '#app',
  data: {
    message: 'Bạn muốn xây dựng một ứng dụng Vue không?'
  }
});
var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'Bạn đã mở trang này vào ' + new Date().toLocaleString()
  }
})
app2.message = ' Cái gì đó khác '
var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
})
var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'Học JavaScript' },
      { text: 'Học Vue' },
      { text: 'Xây dựng cái gì đó hay ho' }
    ]
  }
})
var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'qua lại khách chờ sông lặng sóng'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split(' ').reverse().join(' ')
    }
  }
})
var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hãy sửa thông điệp này'
  }
})
Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { id: 0, text: 'Cà pháo' },
      { id: 1, text: 'Mắm tôm' },
      { id: 2, text: 'Miễn ăn được là được' }
    ]
  }
})