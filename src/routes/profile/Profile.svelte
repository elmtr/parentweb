<script>
  import {link} from 'svelte-spa-router'
  import {info} from '../../stores'
  let profile = $info
</script>

<main>
  {#if profile}
    {profile.lastName} {profile.firstName}
    <br>

    <a href="/profile/change-password" use:link>schimba parola</a><br>
    <a href="/profile/change-passcode" use:link>schimba codul de acces</a><br>
    <a href="/profile/add-student" use:link>adauga elev</a>

  {/if}
</main>