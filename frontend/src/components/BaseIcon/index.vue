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
      iconComponent: null // Set a default value to null
    };
  },
  async created() {
    this.iconComponent = await this.loadIconComponent(); // Load the icon component asynchronously
  },
  methods: {
    async loadIconComponent() {
      try {
        const iconModule = await import(`./icons/${this.icon}.vue`);
        return iconModule.default;
      } catch (error) {
        console.error('Error while loading icon component:', error);
        return null;
      }
    }
  }
}
</script>
