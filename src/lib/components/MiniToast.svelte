<script lang="ts">
    import { Toast } from 'flowbite-svelte';
    import { toast } from '$lib/toast.ts';
    import { fly } from 'svelte/transition';
    import { onDestroy } from 'svelte';
    import { CheckCircleFill, Fire, InfoSquareFill, Record } from 'svelte-bootstrap-icons';

    export let href: string | undefined = undefined;
    export let linkText: string | undefined = undefined;


    onDestroy(() => {
        $toast.show = false;
    });

    $: if($toast.show) {
        setTimeout(() =>  {
            $toast.show = false;
        }, $toast.duration);
    }

</script>

<Toast color={$toast.color} bind:position={$toast.position}
    bind:open={$toast.show} on:close={() => $toast.message = ""} class="z-[999]">

    <svelte:fragment slot="icon">
        <!-- Insert n Icon component or a <i>, whatever suits you. -->
        {#if $toast.type == "success"}
            <CheckCircleFill/>
        {:else if $toast.type == "error"}
            <Fire/>
        {:else if $toast.type == "info"}
            <InfoSquareFill/>
        {/if}
    </svelte:fragment>
    <div class="flex flex-col items-start">
        {@html $toast.message}
        <br/>
        {#if href}
            <a {href}>{linkText ?? href}</a>
        {/if}
    </div>
</Toast>