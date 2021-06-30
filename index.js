const app = Vue.createApp({
  data(){
    return{
      firstName: 'Norvillie',
      lastName: 'Villaruel',
      email: 'nozkie@gmail.com',
      gender: 'male',
      picture: 'https://randomuser.me/api/portraits/men/10.jpg'
    }
  },
  methods: {
    getUser: async function(){
      try {
        const response = await fetch('https://randomuser.me/api',{
        mode: 'cors',
        headers:{
          'content-type': 'application/json'
        },
      })
      
      const result = await response.json()
      console.log( result.results[0] )

      this.firstName = result.results[0].name.first
      this.lastName = result.results[0].name.last
      this.email = result.results[0].email
      this.gender = result.results[0].gender
      this.picture = result.results[0].picture.large


      } catch (error) {
        console.log( error )
      }
    }
  },
})

app.mount('#app')