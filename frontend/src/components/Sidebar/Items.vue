<template>
    <component
    :is="required ? 'router-link' : 'div'"
    :to="required ? to : ''"
    >
    <div class="sidebar-item">
        <div class="sidebar-item-logo">
            <base-icon
            :icon="icon"
            :icon-color="iconColor"
            />
        </div>
        <div class="sidebar-item-content">
            <slot />
        </div>
    </div>
    </component>
</template>

<script>
import BaseIcon from '../BaseIcon/index.vue';

export default {
    name: 'SidebarItem',
    components: {
        BaseIcon
    },
    props: {
        icon:{
            type:String,
            default: "more"
        },
        iconColor:{
            type:String,
            default: "#fff"
        },
        to: {
            type: String,
            default: ''
        },
        required: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        isStringAndValid: function(str){
            return str && typeof str == 'string' && str.length > 0
        }
    }
}
</script>

<style lang="scss">
@import '../../assets/theme/colors.scss';
a{
    display: block;
    text-decoration: none;
}

.sidebar-item{
    position: relative;
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    padding: 12px;
    border-radius: 999px;
    transition: 120ms ease-in-out;
    color: #fff;
    &-logo{
        width: 2rem;
        height: 2rem;
        svg{
            transition: 20ms ease-in-out fill;
            fill: #fff;
        }
    }
    &-content{
        transition: 20ms ease-in-out color;
        margin: 0 20px;
        color: inherit;
        font-size: 20px;
        font-weight: bold;
    }
    &:hover{
        background-color: rgba($color: $color-blue, $alpha: 0.2);;
        &{
            color: $color-blue;
        }
        svg{
            fill: $color-blue;
        }
    }
}



.router-link-active, .router-link-exact-active{
    .sidebar-item{
        &-logo{
            svg{
                fill: $color-blue;
            }
        }
        &-content{
            color: $color-blue;
        }
    }
}
</style>