<template>
    <div class="profile-body">
        <div class="sections">
            <div class="sections-item active">
                Tweet
            </div>
            <div class="sctions-item">
                Tweets & replies
            </div>
            <div class="sections-item">
                Media
            </div>
            <div class="sections-item">
                Likes
            </div>
        </div>
        <div
        v-if="userTweet"
        class="tweeets-wrapper"
        >
        <tweet
        v-for="tweet in userTweets"
        :key="tweet.id"
        :tweet-data="tweet"
        @delete-tweet="handleTweetDelete"
        />
    </div>
    </div>
</template>

<script>
import { getUserTweets } from '../../services/api'
import Tweet from './components/Tweet'
import { mapGetters } from 'vuex'
export default {
    name: 'ProfileBody',
    components:{
        Tweet
    },
    data(){
        return{
            userTweets: []
        }
    },
    computed:{
        ...mapGetters(['getMyProfileId'])
    },
    mounted(){
        this.getTweets();
    },
    methods:{
        handleTweetDelete(){
            this.getTweets()
        },
        async getTweets(){
            try{
                const response = await getUserTweets({
                    id: this.getMyProfileId
                })
                this.userTweets = response.data.tweets;
                this.$store.commit("setProfileTweetCount", response.data.tweets.length)
            }catch(err){
                this.$notification({
                    type: 'error',
                    message: 'Eror when fetching tweets'
                })
            }
        }
    }
}
</script>

<style lang="scss">
@import '../../assets/theme/colors.scss';
.profile-body{
    .sections{
        border-bottom: $border-dark;
        display: flex;
        &-item{
            width: calc(100%/4);
            text-align: center;
            padding: 1.5rem 0;
            color: $color-dark-gray;
            font-weight: bold;
            &.active{
                border-bottom: 2px solid $color-blue;
                color: $color-blue;
            }
        }
    }
}
</style>