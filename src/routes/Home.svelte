<script>
	
	import {token, info} from '../stores'
	import {push, link} from 'svelte-spa-router'

	if ($token == "") {
		push("/login/update")
	}

	let students = $info.students
	console.log(students)

</script>

<main>
	{#if students}
		{#each students as student}
			<a href="/parent/{student.id}" use:link>
				{student.lastName} {student.firstName}
			</a>
			<br>
		{/each}
	{/if}
</main>
