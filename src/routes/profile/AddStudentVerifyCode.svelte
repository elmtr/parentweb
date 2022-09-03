<script>

  import axios from 'axios'
  import {apiURL, tokenConfig} from '../../axiosConfig'
  import {push} from 'svelte-spa-router'
  import {token} from '../../stores'

  let code

  async function submit() {
    try {
      const {data} = await axios.post(
        `${apiURL}/v1/parent/profile/students/verify-code`,
        {"phone": localStorage.getItem("studentPhone"), code},
        tokenConfig($token),
      )
      localStorage.removeItem('studentPhone')
      
      // changing localStorage
      let parent = JSON.parse(localStorage.getItem("userInfo"))
      parent.students = data.parent.students
      localStorage.setItem("userInfo", JSON.stringify(parent))
      
      token.set(data.token)

      push('/profile')
    } catch(error) {
      console.log(error.response.data.message)
    }
  }

</script>

<main>
  <br>
  <input name="code" placeholder="code" type="text" bind:value={code}>

  <input type="submit" value="submit" on:click={submit}/>
</main>