<script lang='ts'>

    import type { TimelinePoint } from '../content'
    import TlpLanda from './tl/TLP_Landa.svelte';

    export let points: TimelinePoint[] = []
    let hoveredPoint: TimelinePoint | undefined
    let expandedPoint: TimelinePoint | undefined

    const desc = {
        'landa': TlpLanda
    }
</script>

<div style='width:65%;' >
    
    {#each points as point}
        <div 
            on:mouseenter={() => hoveredPoint = point} 
            on:mouseleave={() => hoveredPoint = undefined}
            on:keydown
            on:click={() => expandedPoint = point}
            on:close={() => expandedPoint = undefined}
        >
            <div style='border-radius:50%;border:1px solid green;'></div>
            {point.start.getFullYear()}
            {#if point === hoveredPoint} 
                <span>{point.shortText}</span>
            {/if}

            {#if expandedPoint && (expandedPoint.name === point.name)}
                <TlpLanda />
            {/if}
        </div>
    {/each}
</div>