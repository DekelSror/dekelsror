

<script lang='ts'>
    import ArrowDropUp from '../assets/arrow_drop_up.svg'
    import { fade } from 'svelte/transition';

    export let title: string
    export let onToggle: (val: boolean) => void = undefined
    
    export let expanded = false
</script>


<div class='expandable'>
    <button 
        class='controls' 
        on:click={() => {
            if (onToggle) onToggle(!expanded)
            
            expanded = !expanded
        }}
    >
        <h2 class={expanded ? 'title title-small' : 'title'} style='margin: unset'> {title} </h2>
        
        <img class={expanded ? 'caret' : 'caret caret-up'} src={ArrowDropUp} alt='' />
    </button>

    {#if expanded}
        <div transition:fade>
            <slot  />
        </div>
    {/if}
</div>

<style>
    .expandable {
        display: flex;
        flex-direction: column;
        gap: 0.5em;
        align-items: center;
    }

    .controls {
        display: flex;
        flex-direction: row;
        align-items: center;
        border: unset;
    }

    .title {
        transition: transform 300ms;
    }
    .title-small {
        transform: scale(0.5);
    }

    .caret {
        max-block-size: 2rem;
        max-inline-size: 2rem;
        transition: transform 150ms ease-out;
    }

    .caret-up {
        transform: rotate(180deg);
    }
</style>