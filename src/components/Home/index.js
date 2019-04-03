import { TimelineLite, Back } from 'gsap';

export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      isShowModal: false
    };
  },
  methods: {
    showModal() {
      console.log('show modal');
      this.isShowModal = true;
    }
  },
  mounted() {
    const { box } = this.$refs;
    const timeline = new TimelineLite();
    timeline.to(box, 1, {
      x: 200,
      rotation: 90,
      ease: Back.easeInOut
    });
    timeline.to(
      box, 0.5,
      {
        background: 'green'
      },
      '-=0.5' // Run the animation 0.5s early
    );
  }
};
