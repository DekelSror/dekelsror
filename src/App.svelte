<script lang="ts">
    import IconGallery from './lib/IconGallery.svelte';
    import { frontendTechnologies, backendTechnologies, languages, tools } from './content';
    import { allTools, shuffle, toolsFilterStore } from './toolsFilterStore';
    import links from './links';
    import Expandable from './lib/Expandable.svelte';
</script>

<main>
    <!-- HEADER -->
    <div id='header' style='background-color:var(--color-6);color:white'>
        <h1>Dekel Sror</h1>
        <h3>Full Stack Engineer</h3>
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
    
    <div id='skills'>
        <Expandable
            title='SKILLS' 
            onToggle={expanded => {
                if (expanded)
                {

                }
                else
                {
                    toolsFilterStore.set(allTools.map(v => v.name))
                }
            }}
        >
            <div style='display:flex; flex-direction: column; align-items:center' >
                <IconGallery tools={shuffle(allTools)} />
                <div style='display:flex; justify-content:center' >
                    <button class='foc-button' on:click={() => toolsFilterStore.set(frontendTechnologies.map(v => v.name))} > FE </button>
                    <button class='foc-button' on:click={() => toolsFilterStore.set(backendTechnologies.map(v => v.name))} > BE </button>
                    <button class='foc-button' on:click={() => toolsFilterStore.set(languages.map(v => v.name))} > Languages </button>
                    <button class='foc-button' on:click={() => toolsFilterStore.set(tools.map(v => v.name))} > Tools </button>
                    <button class='foc-button' on:click={() => toolsFilterStore.set(allTools.map(v => v.name))} > reset </button>
                </div>
            </div>
        </Expandable>
    </div>

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

    #hireable {
        background-color: var(--color-2); 
        text-align: start;
        padding: 0 5rem 0 5rem;
    }

    #skills {
        margin-top: 1rem;
        margin-bottom: 1rem;
    }

    #footer {
        padding: 1rem;
        background-color: var(--color-6);
    }

    #footer button {
        outline: none;
        height: 4rem;
        contain: content;
    }
</style>