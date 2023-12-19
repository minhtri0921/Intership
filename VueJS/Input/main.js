new Vue({
    el: '#example-3',
    data: {
        checkedNames: []
    }
})

new Vue({
    el: '#radio-ex',
    data: {
        picked: ''
    }
})

var vm = new Vue({
    el: '#example-2',
    data: {
        selected: ``,
        options: [
            { text: 'Khóa học FE', value: '1tr' },
            { text: 'Khóa học BE', value: '2tr' },
            { text: 'Khóa học Node', value: '3tr' },
            { text: '---Chọn khóa học---', value: '' }
        ]
    }
})
vm.selected = vm.options[3].value