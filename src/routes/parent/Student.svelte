<script>
	
  import axios from 'axios';
	import {token, info} from '../../stores'
	import { link} from 'svelte-spa-router'
  import {tokenConfig, apiURL} from '../../axiosConfig'

  export let params = {}

  async function loadStudent() {
    const {data} = await axios.get(
      `${apiURL}/v1/parent/student?id=${params.studentID}`,
      tokenConfig($token),
    )
    return data
  }

</script>

<main>
	{#await loadStudent() then student}
    {#each student.subjects as subject}
      <a href="/parent/{params.studentID}/{subject.id}" use:link>{subject.name}</a><br>
    {/each}
  {/await}
</main>
