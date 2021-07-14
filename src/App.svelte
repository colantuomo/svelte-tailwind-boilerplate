<script lang="ts">
  import { Router, Route } from "svelte-navigator";
  import Details from "./pages/Details.svelte";
  import Home from "./pages/Home.svelte";
  import Tailwind from "./utils/Tailwind.svelte";
</script>

<main class="flex items-center flex-col gap-2">
  <h1>Svelte/Tailwind Boilerplate</h1>
  <Router>
    <Route path="/" component={Home} />
    <Route path="details" component={Details} />
  </Router>
</main>

<Tailwind />
