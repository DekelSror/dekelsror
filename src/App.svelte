<script lang="ts">
    import IconGallery from './lib/IconGallery.svelte';
    import { frontendTechnologies, backendTechnologies, languages, tools, professionalExperience, timelinePoints } from './content';
    import Experiece from './lib/Experience.svelte';
    import { allTools, shuffle, toolsFilterStore } from './toolsFilterStore';
    import { fade } from 'svelte/transition';
    import links from './links';
    import Timeline from './lib/Timeline.svelte';

    let selectedXP = 0
</script>

<main>
    <!-- HEADER -->
    <div id='header' style='background-color:var(--color-5);color:var(--color-light)'>
        <h1>Dekel Sror</h1>
        <h3>Fullstack web dev</h3>
    </div>

    <!-- INFO / ACTIONS CARD -->
    <div id='hireable' >
        <p style='color: var(--color-dark);width:50%;'>
            this is some text about what I like and look to be doing. If by happenstance it turns out to be very long, longer
            that one line can allow, it should also break elegantly.
        </p>

        <div style='display:flex;align-items:center;gap:2rem;padding-bottom:2rem;'>
            <a href={links.email}> 
                
            </a>

            <img 
                src={links.emailLogo} 
                alt='email logo'
                on:keydown
                on:click={() => window.open(links.email)}
                style='width:3rem;height:3rem;cursor:pointer;filter:invert(100%)' 
            >
            
            <img 
                src='https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg' 
                alt='WA logo' 
                on:keydown
                on:click={() => window.open(links.whatsapp)}
                style='width:3rem;height:3rem;cursor:pointer;' 
            />
        </div>
        
    </div>

    <h2>EXPERIENCE</h2>
    <div id='experience'> 
        <button style='flex:1;' on:click={() => selectedXP = (selectedXP === 0 ? 2 : selectedXP - 1)}>{'<'}</button>
        <div style='flex:8;'>
                <Experiece xp={professionalExperience[selectedXP]} />
            </div>
        <button style='flex:1;' on:click={() => selectedXP = (selectedXP === 2 ? 0 : selectedXP + 1)}>{'>'}</button>
    </div>
    
    <h2>SKILLS</h2>
    <div id='skills' transition:fade>
        <div style='display:flex; justify-content:center' >
            <IconGallery tools={shuffle(allTools)} />
        </div>

        <div style='display:flex; justify-content:center' >
            <button class='foc-button' on:click={() => toolsFilterStore.set(frontendTechnologies.map(v => v.name))} > FE </button>
            <button class='foc-button' on:click={() => toolsFilterStore.set(backendTechnologies.map(v => v.name))} > BE </button>
            <button class='foc-button' on:click={() => toolsFilterStore.set(languages.map(v => v.name))} > Languages </button>
            <button class='foc-button' on:click={() => toolsFilterStore.set(tools.map(v => v.name))} > Tools </button>
            <button class='foc-button' on:click={() => toolsFilterStore.set(allTools.map(v => v.name))} > reset </button>
        </div>
    </div>
    
    <!-- <div style='display:flex; justify-content:center' >
        <Timeline points={timelinePoints} />
    </div> -->

    <div id='footer'>
        <button class='foc-button' on:click={() => window.open(links.linkedInProfile)}> 
            <img style='width:3rem;height:3rem;' src={links.linkedInLogo} alt="LinkedIn Logo">
        </button>
        <button class='foc-button' on:click={() => window.open(links.githubProfile)}> 
            <img style='width:3rem;height:3rem;' src={links.githubLogo} alt="GitHub logo">
        </button>
        <button class='foc-button' on:click={() => window.open(links.cvDriveLink)} > 
            cv (PDF) 
        </button>
        <button class='foc-button' on:click={() => {
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
        font-size: 1.3em;
    }

    #experience {
        display: flex;
        flex-direction: row;
        flex: 10;
        height: 5rem;
        overflow-y: scroll;
    }

    #experience button {
        border: unset;
        transition: 200ms;
        font-size: 5rem;
        background-color: var(--color-light);
        color: var(--color-dark);
    }

    #experience button:hover {
        background-color: var(--color-dark);
        color: var(--color-light);
    }

    #hireable {
        background-color: var(--color-3); 
        text-align: start;
        padding: 0 5rem 0 5rem;
    }

    #footer {
        padding: 1rem;
        background-color: var(--color-5);
    }

    #footer button {
        outline: none;
    }
</style>