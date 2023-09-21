<script lang='ts'>
    import { fade } from "svelte/transition"
    import type { ProXP } from "../content"
    import Expandable from "./Expandable.svelte"
    export let xp: ProXP

    const formatYM = (d?: Date) => {
        return d ? d.toLocaleString('default', {month: 'long', year: 'numeric'}) : 'current'
    }

    let projectsExpanded = false
</script>

<div class='xp-container' transition:fade>
    <h4 
        style={xp.homepage ? 'cursor: pointer;' : 'inherit'}
        on:click={() => {
            if (xp.homepage) {
                window.open(xp.homepage)
            }
        }} 
        on:keydown
    >
        {xp.companyName} 
    </h4>

    <div style='border: 1px solid var(--color-4); margin-bottom: 1em;' />
    <span > {xp.companyDescription} </span>

    <span > {formatYM(xp.workFrom)} - {formatYM(xp.workUntil)} </span>
    {#if xp.teamName}
        <span> Team {xp.teamName} </span>
    {/if}
    
    <h5 > What I did </h5>
    <span >{xp.positionDescription} </span>
    <div class='projects'>
        {#if xp.projects.length > 0}
            <Expandable title={projectsExpanded ? 'close' : 'projects'} expanded={projectsExpanded} onToggle={val => projectsExpanded = val} >
                {#each xp.projects as proj}
                    <div class='proj-container' >
                        <span >Project - {proj.name}</span>
                        <span >Challenge - {proj.challenge}</span>
                        <span >{proj.description}</span>
                    </div>
                {/each}
            </Expandable>
        {/if}
    </div>
</div>


<style>
    .xp-container {
        display: flex;
        flex-direction: column;
        gap: 1vh;
        text-align: start;
        background-color: var(--color-5);
        color: var(--color-light);
        padding: 1.5rem;
    }

    .projects {
        max-width: 61%;
        margin-left:auto;
        margin-right: auto;
    }

    .proj-container {
        display: flex;
        flex-direction: column;
        white-space: break-spaces;
        text-align: start;
        margin-bottom: 7%;
        white-space: wrap;
        overflow: hidden;
    }
</style>