<script lang="ts">
  import { navigate } from "svelte-navigator";
</script>

<section>
  <button
    on:click={() => navigate("details")}
    class="p-5 rounded-md w-44 bg-blue-500 text-white">Do something</button
  >
</section>
