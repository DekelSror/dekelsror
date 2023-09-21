<script lang="ts">
    import { toolsFilterStore } from "../toolsFilterStore";

    export let tools: {name: string, icon: string}[]

    // get the tools from parent
    // get the highlighted from store
    
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
            <span class='label'> {tool.name} </span>
        </div>
    {/each}
</div>


<style>
    .container {
        max-width: 80%;
        max-height: 64%;
        display: flex;
        flex-wrap: wrap;
    }
    
    .item-base {
        transition: 200ms ease-in;
        padding: 1em;
    }

    .item-highlighted {
        filter: contrast(1.1);
    }

    .icon-base {
        width: 6rem;
        height: 6rem;
        transition: transform 400ms;
    }

    .icon-medium {
        transform: scale(0.8);
    }

    .icon-small {
        transform: scale(0.6);
    }

    .item-blurred {
        filter: contrast(0.2) blur(2px);
    }

    .item-base span {
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
        position: absolute;
        left: 0px;
    }

    .item-base:hover span {
        filter: drop-shadow(1px 1px 10px #000);
        visibility: visible;
        opacity: 1;
    }
</style>