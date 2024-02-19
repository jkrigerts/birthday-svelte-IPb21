<script>
  import Birthday from "./Birthday.svelte";
  import BirthdayForm from "./BirthdayForm.svelte";

  export let data;
  console.log(data);
</script>

<h1>Birthday list</h1>

<ul>
  {#each data.birthdays as {name, dob}}
    <li>
      <Birthday {name} {dob} />
    </li>
  {/each}
</ul>

<h1>Birthdays forms</h1>
<BirthdayForm />
