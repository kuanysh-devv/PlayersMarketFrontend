<template>
    <div class="card">
        <div class="card_header">{{ title }} - {{ price }}$</div>
        <div class="banner" :style="`background-image: url(${imageUrl})`"></div>
        <div class="card_footer" v-if="!inCart">
            <button class="btn btn-info" @click="$emit('addToCart')">Добавить в корзину</button>
        </div>
 
        <div class="card_footer" v-else>
            <button class="btn btn-danger" @click="$emit('addToCart')">Убрать из корзины</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ProductCard',
        props: {
            title: {
                type: String,
                default: "",
            },
            price: {
                type: Number,
                default: 0,
            },
            imageUrl: {
                type: String,
                default: "",
            },
            inCart: {
                type: Boolean,
                default: false,
            }
        }
    }
</script>

<style lang="scss" scoped>
    .card {
        width: 340px;
        height: 200px;
        padding: 20px;
        margin: 10px;
        border: 1px solid black;
        border-radius: 12px;
        .banner {
            width: 100%;
            height: 80%;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
        }

        &_footer {
            margin-top: 10px;
        }
    }
    
</style>