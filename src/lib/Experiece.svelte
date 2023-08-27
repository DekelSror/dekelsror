<script lang='ts'>
    import { fade } from "svelte/transition";
    import type { ProXP } from "../content";
    import Expandable from "./Expandable.svelte";

    export let xp: ProXP

    const formatYM = (d?: Date) => {
        return d ? d.toLocaleString('default', {month: 'long', year: 'numeric'}) : 'current'
    }

    let projectsExpanded = false
</script>

<div class='xp-container' transition:fade>
    <div class='xp-title-container'>
        <div style='border: 1px solid var(--color-4); margin-bottom: 1em;' />
        <h4> {xp.companyName} </h4>
        <span > {xp.companyDescription} </span>
    
        <span > {formatYM(xp.workFrom)} - {formatYM(xp.workUntil)} </span>
        {#if xp.teamName}
            <span> Team {xp.teamName} </span>
        {/if}
    </div>

    <span > What I did </span>
    <span >{xp.positionDescription} </span>

    <div class='projects'>
        {#if xp.projects.length > 0}
            <Expandable title={projectsExpanded ? 'close' : 'projects'} onToggle={val => projectsExpanded = val} >
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

    .xp-title-container {
        background-color: var(--color-3);
        color: var(--color-light);
        padding: 3rem;
        display: flex;
        flex-direction: column;
    }
</style>