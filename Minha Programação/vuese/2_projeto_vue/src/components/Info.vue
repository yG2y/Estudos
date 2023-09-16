<template>
    <div>
        <p v-if="esta_trabalhando">Estou trabalhando no momento.</p>
        <p v-else>Estou em busca de novas oportunidades!</p>
        <p>Utilizo as seguintes tecnologias para o back-end:</p>
        <ul >
            <li v-for="(technology, index) in backend_technologies" v-bind:key="index">
                {{technology}}
            </li>
        </ul>
        <p>Utilizo as seguintes tecnologias para front-end:</p>
        <ul>
            <li v-for="technology in frontend_techologies" :key="technology.id">
                {{ technology.language }}
            </li>
        </ul>
        <div> 
            <button @click="showEmail">{{ textoBotao }}</button>
        </div> 
        <p v-show="mostrar_email">Mande uma mensagem para: {{ email }}</p>
        <p class="teste">Para acessar meu portifólio <a v-bind:href="meu_link" target="_blank">basta clicar aqui</a></p>
        <Picture />
    
    </div>
</template>
<script>
import Picture from './Picture.vue';

export default {
    name: 'Info',
    data() {
        return {
            esta_trabalhando: true,
            mostrar_email: false,
            email: 'matheus@cursovue.com',
            meu_link: 'https://google.com',
            textoBotao: 'Mostrar e-mail',
            backend_technologies: ['JavaScript', 'PHP','Python'],
            frontend_techologies: [
                {id: 1, language: 'HTML'},
                {id: 2, language: 'CSS'},
                {id: 3, language: 'Vue'},
            ]
        };
    },
    components: { 
        Picture,
    },
    methods: {
        showEmail() {
            this.mostrar_email = !this.mostrar_email
            if(!this.mostrar_email){
                this.textoBotao = "Mostrar e-mail"
            } else {
                this.textoBotao = "Esconder e-mail"
            }
        }
    },
}
</script>
<style>
    .paragrafo-pai {
        color: red;   
    }
</style>