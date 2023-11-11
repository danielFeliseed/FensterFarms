<script>
  export let data;
</script>

<ul>
  {#each data.countries as country}
    <li >{country.name}</li>
  {/each}
</ul>

<button class="bg-black rounded color-red" >Hey</button>