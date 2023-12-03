<script lang="ts">
    import { Toast } from 'flowbite-svelte';
    import { fly } from 'svelte/transition';
    import { onDestroy } from 'svelte';
    import { CheckCircleFill, Fire, InfoSquareFill, Record } from 'svelte-bootstrap-icons';
    import { twMerge } from 'tailwind-merge';

    export let href: string | undefined = undefined;
    export let linkText: string | undefined = undefined;
    export let toast: any = undefined;

    export let duration: number = $toast.duration;
    export let position: any = $toast.position;

    onDestroy(() => {
        $toast.show = false;
    });

    function handleClose() {
        $toast.show = false;
        $toast.message = "";
    }

    $: if($toast.show) {
        setTimeout(() =>  {
            $toast.show = false;
        }, duration);
    }
</script>

<Toast color={$toast.color} bind:position dismissable
    bind:open={$toast.show} on:close={handleClose} class={twMerge("z-[9999] fixed",$$restProps.class)}>

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