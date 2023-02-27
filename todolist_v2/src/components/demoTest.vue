<template>
    <div>
        <h1>{{title}}</h1>
        <button v-on:click="increment">increment</button>
        <h1>{{ counter }}</h1>
    </div>
</template>

<script>
export default {
    name: 'myCompent',
    data() {
        return {
            title: 'myCompent',
            counter: 0,
        };
    },
    methods: {
        increment() {
            this.counter++;
        }
    }
}
</script>


