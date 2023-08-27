<script lang=ts>
    import { fade } from "svelte/transition";

    export let items: {name: string, icon: string}[]
</script>

<div class='container' transition:fade={{duration: 250}} >
    {#each items as item}
        <div class='skill-icon'>
            <img width='65px' height='65px' src={item.icon} alt={item.name + ' icon'} />
            <span>{item.name}</span>
        </div>
    {/each}
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
        flex: 5;
        gap: 1vi;
        align-items: center;
        justify-content: space-around;
    }
    .skill-icon {
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 1;
        flex: 1;
    }
    .skill-icon img {
        transition: filter 200ms ease-in;
    }
    .skill-icon span {
        color: white;
        background-color: #44444444;
        border-radius: 1dvh;
        padding: 0.5em;
        z-index: 1;
        font-size: large;
        visibility: hidden;
        white-space: nowrap;
        opacity: 0;
        transition: opacity 250ms;
    }
    .skill-icon:hover img {
        filter: blur(1px) drop-shadow(1px 1px 10px #000);
    }
    .skill-icon:hover span {
        visibility: visible;
        opacity: 1;
    }
    
</style>