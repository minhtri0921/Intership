var vm = new Vue({
    el: '#v-for-object',
    data: {
        object: {
            // tất nhiên chúng ta đều biết ông Bành Tổ không phải
            // họ Bành tên Tổ, nhưng đây chỉ là một ví dụ…
            'họ': 'Bành',
            'tên': 'Tổ',
            'tuổi': 800
        }
    }
})

console.log(vm.object['họ']);

var vm1 = new Vue({
    data: {
        items: [
            'Js',
            'Node',
            'Django'
        ]
    }
})

// vm1.items[0] = 'html'
vm1.items.splice(0, 1, 'html')
vm.$set(vm.object, 'age', 800)
vm.object = Object.assign({}, vm.object, {
    pet: 'dog',
    favoriteColor: 'Tím mộng mơ'
})
console.log(vm1.items);
console.log(vm.object);

// to-do-list

Vue.component('todo-item', {
    template: '\
      <li>\
        {{ title }}\
        <button v-on:click="$emit(\'remove\')">X</button>\
      </li>\
    ',
    props: ['title']
})

new Vue({
    el: '#todo-list-example',
    data: {
        newTodoText: '',
        todos: [
            {
                id: 1,
                title: 'luộc khoai',
            },
            {
                id: 2,
                title: 'cùng chị giã gạo',
            },
            {
                id: 3,
                title: 'thổi cơm'
            },
            {
                id: 4,
                title: 'nhổ cỏ vườn'
            }
        ],
        nextTodoId: 5
    },
    methods: {
        addNewTodo: function () {
            this.todos.push({
                id: this.nextTodoId++,
                title: this.newTodoText
            })
            this.newTodoText = ''
        }
    }
})