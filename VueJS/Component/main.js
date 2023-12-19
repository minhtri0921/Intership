// Vue.component('button-counter', {
//     data: function () {
//         return {
//             count: 0
//         }
//     },
//     template: '<button v-on:click="count++">Bạn đã bấm {{ count }} lần.</button>'
// })

// new Vue({ el: '#components-demo' })

Vue.component('blog-post', {
    props: ['post'],
    template: `
        <div class="blog-post">
            <h3>{{ post.title }}</h3>
            <button @click="enlargeText">
                Phóng to
            </button>
            <div v-html="post.content"></div>
        </div>
    `,
    methods: {
        enlargeText: function () {
            // Gửi sự kiện "enlarge-text" lên component cha
            this.$emit('enlarge-text');
        }
    }
});

new Vue({
    el: '#blog-posts-events-demo',
    data: {
        posts: [
            {
                id: 1,
                title: 'Học speedrun',
                content: 'Học speedrun là .......'
            },
            {
                id: 2,
                title: 'Học slowrun',
                content: 'Học slowrun là ....'
            }
        ],
        postFontSize: 1
    },
    methods: {
        enlargeText: function () {
            // Xử lý sự kiện phóng to ở đây
            this.postFontSize += 0.1;
        }
    }
});

