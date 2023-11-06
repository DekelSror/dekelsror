<script lang="ts">
    import { toolsFilterStore } from "../toolsFilterStore";

    export let tools: {name: string, icon: string}[]

    const randInt = (range: number) => Math.floor(Math.random() * 999999) % range
</script>


<div class="container">
    {#each tools as tool}
        <div class={$toolsFilterStore.includes(tool.name) ? 'item-base item-highlighted' : 'item-base item-blurred'} >
            <img 
                class={$toolsFilterStore.includes(tool.name) ? 'icon-base icon-large' : ['icon-base icon-medium', 'icon-base icon-small'][randInt(2)]} 
                src={tool.icon} 
                alt={tool.name}
            >
            <span> {tool.name} </span>
        </div>
    {/each}
</div>


<style>
    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }

    
    .item-base {
        transition: 200ms ease-in;
        padding: 1em;
    }

    .item-highlighted {
        filter: contrast(1.1);
    }

    .icon-base {
        width: 4rem;
        height: 4rem;
        transition: transform 400ms;
    }

    @media (max-width: 600px) {
        .item-base {
            padding: 0.2em;
        }
        .icon-base {
            width: 3rem;
            height: 3rem;
            padding: 0;
        }
    }

    .icon-medium {
        transform: scale(0.8);
    }

    .icon-small {
        transform: scale(0.6);
    }
    
    .item-base span {
        color: white;
        background-color: var(--color-dark);
        border-radius: 1dvh;
        padding: 0.5em;
        z-index: 1;
        font-size: large;
        visibility: hidden;
        white-space: nowrap;
        opacity: 0;
        transition: opacity 250ms;
        position: absolute;
        left: 0px;
    }

    .item-base:hover span {
        filter: drop-shadow(1px 1px 10px var(--color-dark));
        visibility: visible;
        opacity: 1;
    }
    
    .item-blurred {
        filter: contrast(0.2) blur(2px);
    }

    .item-blurred:hover span {
        visibility: hidden;
        background-color: var(--color-4);
    }
</style>