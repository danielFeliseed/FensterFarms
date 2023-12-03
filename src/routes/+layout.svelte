<script>
    import "../app.css";
    import MiniToast from "../lib/components/MiniToast.svelte";
    import { toast } from "$lib/stores.ts";

</script>

<MiniToast {toast} position="bottom-left" />

<slot />