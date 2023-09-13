<template >
    <div>
        <img :src="avatar" :alt="descricao">
        <!-- atrás dos dois pontos há um v-bind: -->
    </div>
</template>
<script>
export default {
    name: 'Pictute',
    data() {
        return {
            avatar: "/img/menteDoPalhaco.jpeg",
            descricao: "O Palhaco",
        }
    },
}
</script>
<style >
    
</style>