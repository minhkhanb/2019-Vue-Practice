export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      isShowModal: false
    }
  },
  methods: {
    showModal () {
      console.log('show modal')
      this.isShowModal = true
    }
  }
}
