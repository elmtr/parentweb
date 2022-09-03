<script>

  import axios from 'axios'
  import {apiURL, tokenConfig} from '../../axiosConfig'
  import {push} from 'svelte-spa-router'
  import {token} from '../../stores'

  let phone

  async function submit() {
    try {
      const {data} = await axios.post(
        `${apiURL}/v1/parent/profile/students`,
        {phone},
        tokenConfig($token),
      )
      localStorage.setItem('studentPhone', phone)
      push('/profile/add-student/verify-code')
    } catch(error) {
      console.log(error.response.data.message)
    }
  }

</script>

<main>
  <br>
  <input name="phone" placeholder="phone" type="text" bind:value={phone}>

  <input type="submit" value="submit" on:click={submit}/>
</main>