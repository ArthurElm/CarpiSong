<template>
  <section>
      <h2>Latest French Rap Release</h2>
       <ul>
            <li v-for="category in LatestFrenchRapRelease" :key="LatestFrenchRapRelease.id">
                <img :src="category.coverAlbumUrl" class="image">
            </li>
        </ul>
  </section>
</template>

<script>
import imgZero from '../assets/img/LatestFrenchRapSongs/imgAlbum1.png'
import imgFirst from '../assets/img/LatestFrenchRapSongs/imgAlbum2.png'
import imgSecond from '../assets/img/LatestFrenchRapSongs/imgAlbum3.png'
//import imgThird from '../assets/img/LatestFrenchRapSongs/imgAlbum4.png'
    
export default {
    name: 'LatestFrenchRap',

    data(){
        return{
            LatestFrenchRapRelease: [
                {id: 1,  coverAlbumUrl: imgZero },
                {id: 2,  coverAlbumUrl: imgFirst },
                {id: 3,  coverAlbumUrl: imgSecond },
                {id: 4,  coverAlbumUrl: imgZero },
                {id: 5,  coverAlbumUrl: imgFirst },
                {id: 6,  coverAlbumUrl: imgSecond },
                {id: 7,  coverAlbumUrl: imgZero },
                {id: 8,  coverAlbumUrl: imgFirst },
            ] 
        }
    },

}
</script>

<style lang="scss" scoped>
section{
    height: 35vh;

    h2{
        display: flex;
        color: #21D4FD;
        align-self: left !important;
        font-weight: 600;
        font-size: 20px;
        text-shadow: 0px 0px 2px #21D4FD;
        padding: 20px 0 0 20px;
    }
    ul{
        padding: 0 !important;
        margin: 25px 0 0 0;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-around;
        text-align: center;
        overflow-x: auto;
        
        &::-webkit-scrollbar{
            width: 0;
        }

        li{
            list-style-type: none;
            padding: 0 15px 0 0 ;

            &:first-child{
                margin-left: 570px;
            }
            .image{
                max-width: 25vw;
            }
        }
    }
}

</style>