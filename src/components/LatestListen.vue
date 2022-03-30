<template>
<div>
    
        <h2>Latest listen</h2>
        <section class="categories">
            <ul>
                <li v-for="category in LatestListen" :key="LatestListen.id">
                    <img :src="category.coverUrl" class="image">
                    <p class="category-name">{{category.name}}</p>
                </li>
            </ul>
        </section>
</div>
  
</template>

<script>
import imgZero from '../assets/img/LatestListenImages/img0.png'
import imgFirst from '../assets/img/LatestListenImages/img1.png'
import imgSecond from '../assets/img/LatestListenImages/img2.png'
import imgthird from '../assets/img/LatestListenImages/img3.png'

export default {
    name: 'LatestListen',

    data(){
        return{
            LatestListen: [
                {name: 'Liked songs', id: 1,  coverUrl: imgZero },
                {name: 'PNL - Deux frères', id: 2,  coverUrl: imgFirst },
                {name: 'Dinos - Taciturne', id: 3,  coverUrl: imgSecond },
                {name: 'Freeze Corleone - LMF', id: 4,  coverUrl: imgthird },
            ] 
        }
    },

    // mounted(){
    //     fetch('http://localhost:3000/latest-Listen')
    //     .then(res => res.json())
    //     .then(data => this.LatestListen = data)
    //     .catch(err => console.log(err.message))
    //     console.log(this.LatestListen)
    // }
    
}
</script>

<style lang="scss" scoped>

h2{
    display: flex;
    color: #21D4FD;
    align-self: left !important;
    font-weight: 600;
    font-size: 20px;
    text-shadow: 0px 0px 2px #21D4FD;
    padding: 10px 0 20px 20px;
}

ul{
    padding: 0 !important;
    margin: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    text-align: center;
    
    li{
        list-style-type: none;
        padding: 0 20px ;
        .image{
            max-width: 40vw;
        }
        .category-name{
            font-size: 12px;
            color: #fff;
            margin-bottom: 5px;
        }
    }
}


</style>