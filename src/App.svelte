<script lang="ts">
    import Expandable from './lib/Expandable.svelte';
    import IconGallery from './lib/IconGallery.svelte';

    import { frontendTechnologies, backendTechnologies, languages, tools, professionalExperience, type ProXP } from './content';
    import Experiece from './lib/Experiece.svelte';
    import { allTools, shuffle, toolsFilterStore } from './toolsFilterStore';
    import { fade } from 'svelte/transition';

    let selectedXP: ProXP | undefined
    let viewedSection: string | undefined
</script>

<main>
    <div id='header' style='background-color:var(--color-5);color:var(--color-light)'>
        <h1>Dekel Sror</h1>
        <h3>Fullstack web dev</h3>
    </div>

    <div id='hireable'  >
        <a href='mailto: srordekel@gmail.com'> 
            <h2 style='color: var(--color-light)' >Hire me</h2> 
            <p style='color: var(--color-dark)'>
                as an expert on all things and matters, I say you really should
            </p>
        </a>
    </div>

    <div id='tabs'>
        <div>
            <button on:click={() => viewedSection = 'skills'}> skills </button>
            <button on:click={() => viewedSection = 'experience'}> experience </button>
        </div>
        <!-- <Expandable title='' expanded={viewedSection !== undefined} > -->
            {#if viewedSection === 'skills'}
                <div id='skills' transition:fade>
                    <div style='display:flex; justify-content:center' >
                        <IconGallery tools={shuffle(allTools)} />
                    </div>
            
                    <div style='display:flex; justify-content:center' >
                        <button on:click={() => toolsFilterStore.set(frontendTechnologies.map(v => v.name))} > FE </button>
                        <button on:click={() => toolsFilterStore.set(backendTechnologies.map(v => v.name))} > BE </button>
                        <button on:click={() => toolsFilterStore.set(languages.map(v => v.name))} > Languages </button>
                        <button on:click={() => toolsFilterStore.set(tools.map(v => v.name))} > Tools </button>
                        <button on:click={() => toolsFilterStore.set(allTools.map(v => v.name))} > reset </button>
                    </div>
                </div>
            {:else if viewedSection === 'experience'}
            <div id='experience' transition:fade> 
                <div class='section-container'>
                    {#each professionalExperience as xp}
                        <button on:click={() => {
                            if (selectedXP?.companyName === xp.companyName) {
                                selectedXP = undefined
                            }
                            else {
                                selectedXP = xp
                                const el = document.querySelector('#expanded-xp')
                                el.scrollIntoView({behavior: 'smooth'})
                            }
                        }}>
                            {xp.companyName} 
                        </button>
                    {/each}
                </div>
                <div id='expanded-xp'>
                    {#if selectedXP}
                        <div transition:fade>
                            <Experiece xp={selectedXP} />
                        </div>
                    {/if}
                </div>
            </div>
            {/if}
        <!-- </Expandable> -->
    </div>


    <div id='footer'>
        <button on:click={() => window.open('https://www.linkedin.com/in/dekel-sror-a36a56167/')}> LinkedIn </button>
        <button on:click={() => window.open('https://github.com/DekelSror')}> GitHub </button>
        <button on:click={() => window.open('https://drive.google.com/file/d/1khGT9Y4LkIgpR7ydbKE8B8eBK6bLOC-B/view?usp=drive_link')} > 
            cv (PDF) 
        </button>
        <button on:click={() => {
            const el = document.querySelector('#header')
            el.scrollIntoView({behavior: 'smooth'})
        }}> TOP 
        </button>
    </div>
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        /* gap: 2rem; */
        /* padding: 1rem 3rem 5rem 3rem; */
    }
    
    .section-container {
        display: flex;
        gap: 1rem;
        justify-content: center;
    }

    #hireable {
        background-color: var(--color-3); 
        text-align: start;
        padding: 0 5rem 0 5rem;
    }

    #footer {
        margin-bottom: 1rem;
        padding: 1em;
        background-color: var(--color-5);
    }

    #footer button {
        outline: none;
    }
    
    #tabs {
        display: flex;
        flex-direction: column;
    }
</style>