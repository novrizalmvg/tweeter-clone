<template>
    <component :is="iconComponent" />
</template>

<script>
export default {
  name: 'BaseIcon',
  props: {
    icon: {
      type: String,
      default: 'home'
    },
  },
  data() {
    return {
      iconComponent: null // Initialize iconComponent as null
    };
  },
  created() {
    this.loadIconComponent();
  },
//   computed: {
//     iconComponent(){
//       return require(`./icons/${this.icon}`).default
//     }
//   }
  methods: {
    async loadIconComponent() {
    //   try {
    //     const iconModule = await import(`./icons/${this.icon}`);
    //     this.iconComponent = iconModule.default;
    //   } catch (error) {
    //     console.error('Error while loading component:', error);
    //     // Handle the error gracefully, set a default component, etc.
    //   }
    }
  }
}
</script>
