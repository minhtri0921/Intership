// ex-1
var data = { a: 1 }

var vm = new Vue({
    data: data
})

// console.log(vm.a == data.a);
vm.a = 2
// ex - 2 
var obj = {
    foo: 'bar'
}

Object.freeze(obj)

new Vue({
    el: '#app',
    data: obj
})

// ex-3

var data1 = { a: 1 };
var vm1 = new Vue({
    el: '#example',
    data: data1,
    created: function () {
        // `this` trỏ đến đối tượng Vue hiện hành
        console.log('giá trị của a là ' + this.a)
    }
});

console.log(vm1.$data === data1); // => true
console.log(vm1.$el === document.getElementById('example')); // => true

vm1.$watch('a', function (newValue, oldValue) {
    // Hàm callback này sẽ được gọi khi `vm.a` thay đổi
})

// ex - example

var vm2 = new Vue({
    el: '#example1',
    data: {
        message: 'người đông bến đợi thuyền xuôi ngược'
    },
    computed: {
        // một computed getter
        reversedMessage: function () {
            // `this` trỏ tới đối tượng vm
            return this.message.split(' ').reverse().join(' ')
        }
    }
})

console.log(vm2.reversedMessage);

// ex - demo 

var vm3 = new Vue({
    el: '#demo',
    data: {
        firstName: 'Evan',
        lastName: 'You'
    },
    computed: {
        fullName: function () {
            return this.firstName + ' ' + this.lastName
        }
    }
})

vm3.lastName = " Tri "

// ex - get - set 

var vm4 = new Vue({
    el: '#getset',
    data: {
        firstName: 'Minh',
        lastName: 'Tri'
    },
    computed: {
        fullName: {
            // getter
            get: function () {
                return this.firstName + ' ' + this.lastName
            },
            // setter
            set: function (newValue) {
                var names = newValue.split(' ')
                console.log(names);
                this.firstName = names[0]
                this.lastName = names[names.length - 1]
            }
        }
    }
})

vm4.fullName = 'John Evan'

// ex - watch

var watchExampleVM = new Vue({
    el: '#watch-example',
    data: {
      question: '',
      answer: 'Không thể trả lời nếu bạn chưa đặt câu hỏi!'
    },
    watch: {
      // bất cứ lúc nào câu hỏi thay đổi, hàm bên dưới sẽ chạy
      question: function (newQuestion, oldQuestion) {
        this.answer = 'Đang chờ bạn đặt xong câu hỏi...'
        this.getAnswer()
      }
    },
    methods: {
      // _.debounce là một hàm do Lodash cung cấp
      // Để tìm hiểu rõ hơn cách hoạt động của hàm này,
      // bạn có thể truy cập: https://lodash.com/docs#debounce 
      getAnswer: _.debounce(
        function () {
          if (this.question.indexOf('?') === -1) {
            this.answer = 'Câu hỏi thì thường chứa một dấu "?" ;-)'
            return
          }
          this.answer = 'Đang suy nghĩ...'
          var vm = this
          axios.get('https://yesno.wtf/api')
            .then(function (response) {
              vm.answer = _.capitalize(response.data.answer)
            })
            .catch(function (error) {
              vm.answer = 'Lỗi! Không thể truy cập API. ' + error
            })
        },
        // Đây là thời gian (đơn vị mili giây) chúng ta đợi người dùng dừng gõ.
        500
      )
    }
  })