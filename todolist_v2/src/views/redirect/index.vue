<script>
export default ({
    created(){
        const {param, query} = this.$route
        const {path} = param 
        console.log(this.$route);
        this.$router.replace({ path:'/' + path, query})    
    },
    render: function (h) {
        return h(); //avoid warning message
    }
})
</script>
