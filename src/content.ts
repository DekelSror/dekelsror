const frontendTechnologies = [
    {name: 'svelte', icon: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg'},
    {name: 'react', icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'},
    {name: 'mui', icon: 'https://cdn.worldvectorlogo.com/logos/material-ui-1.svg'},
    {name: 'react-native', icon: 'https://cdn.worldvectorlogo.com/logos/react-native-1.svg'},
    {name: 'sass', icon: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg'},
    {name: 'Vite', icon: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg'},
]

const backendTechnologies = [
    {name: 'node.js', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg'},
    {name: '.net core', icon: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/.NET_Core_Logo.svg'},
    {name: 'FastApi', icon: 'https://cdn.worldvectorlogo.com/logos/fastapi-1.svg'},
    {name: 'Django', icon: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Django_logo.svg'},
]

const languages = [
    {name: 'JavaScript', icon: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'},
    {name: 'TypeScript', icon: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg'},
    {name: 'C', icon: 'https://upload.wikimedia.org/wikipedia/commons/3/35/The_C_Programming_Language_logo.svg'},
    {name: 'Python', icon: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg'},
    {name: 'C#', icon: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Logo_C_sharp.svg'},
    {name: 'html', icon: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg'},
    {name: 'css', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg'},
]

const tools = [
    {name: 'Linux', icon: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Linux_Logo_in_Linux_Libertine_Font.svg'},
    {name: 'Bash', icon: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Gnu-bash-logo.svg'},
    {name: 'Git', icon: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg'},
    {name: 'pandas', icon: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Pandas_logo.svg'},
    {name: 'MongoDB', icon: 'https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg'},
    {name: 'Postgres', icon: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg'},
    {name: 'Vercel', icon: 'https://cdn.worldvectorlogo.com/logos/vercel.svg'},
    {name: 'Auth0', icon: 'https://www.vectorlogo.zone/logos/auth0/auth0-icon.svg'},
    {name: 'openai', icon: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg'},
    {name: 'Azure', icon: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg'},
    {name: 'Nginx', icon: 'https://upload.wikimedia.org/wikipedia/commons/c/c5/Nginx_logo.svg'}
]

export type TimelinePoint = {start: Date, end: Date, name: string, shortText: string}


export type ProXP = {
    companyName: string,
    homepage?: string 
    teamName?: string,
    workFrom: Date,
    workUntil?: Date,
    companyDescription: string, 
    positionDescription: string, 
    tools: string[]
    projects: {name: string, challenge: string, description: string}[]
}

const professionalExperience: ProXP[] = [
    {
        companyName: 'Landa Digita Printing',
        homepage: 'https://landanano.com/',
        teamName: 'Cloud & Big Data',
        companyDescription: 'An Israeli Unicorn, Landa makes digital printing presses with nano-ink capabilities',
        workFrom: new Date(2019, 8),
        workUntil: new Date(2021, 7),
        positionDescription: 'Specialised in data aggregation, queries, pipelines and IoT',
        tools: ['.net core', 'C#', 'Azure DevOps', 'Azure IoT Hub', 'React', 'TypeScript', 'Mui', 'SQL', 'MongoDB'],
        projects: [
            {
                name: 'OEE', 
                challenge: "translate the IoT messages the press' controllers send to the hub into a standardized metric.",
                description: "Since each IoT controller is independent, the messages would naturaly create overlappig events. We devised a priority system for different types and sequences of messages, to be able to create a coherent timeline for the press. We then mapped each such event to a factor, a category and finaly into a part of the OEE score"
            },
            {
                name: 'Jobs data aggregation',
                challenge: "be the one true source",
                description: "gathered jobs data from independent sources, on a changing and developing system."
            }
        ]
    },
    {
        companyName: 'Aquant',
        homepage: 'https://aquant.io/',
        companyDescription: 'A fast paced startup, Aquant develops solutions for the service industry',
        teamName: 'Service Insights',
        workFrom: new Date(2021, 11),
        workUntil: new Date(2022, 8),
        tools: ['React', 'TypeScript', 'SalesForce', 'Python', 'pandas', 'MongoDB'],
        positionDescription: 'React infrastructure, backend refactoring and CRM integration',
        projects: [
            {
                name: 'Cross platform event tracking',
                challenge: 'We wanted to track user actions in a Salesforce dashboard',
                description: "we wrote an invisible lightning component that authenticates, connects to a service, then collects Salesforce data and sends the event via a REST api."
            },
            {
                name: 'Async Tree Select',
                challenge: 'a select component that represents the SObject structure, where the user selects a path down the objcect',
                description: "SObjects have many circular and recursive references. We wanted to only pre-load the top fields, then load whatever branch the user expanded. We also needed to cache the results on the front end, because many fields share types and for better UX. I wrote it in React in one day."
            }
        ]
    },
    {
        companyName: 'Freelace Software Developer',
        companyDescription: 'A newborn startup that develops consumer AI solution for content generation',
        workFrom: new Date(2023, 5),
        tools: ['React', 'Typescript', 'Auth0', 'Vercel', 'openai'],
        positionDescription: 'I am the sole developer',
        projects: []
    }
]

const timelinePoints: TimelinePoint[] = [
    {start: new Date(2013, 0), name: 'musician', end: new Date(2018, 0), shortText: 'Musician and music producer'},
    {start: new Date(2019, 2), name: 'infinity', end: new Date(2019, 8), shortText: 'Infinity Labs R&D'},
    {start: new Date(2019, 8), name: 'landa', end: new Date(2021, 7), shortText: 'Landa Digital Printing'},
    {start: new Date(2021, 11), name: 'aqaunt', end: new Date(2022, 8), shortText: 'Aquant'},
    {start: new Date(2023, 5), name: 'cactus', end: new Date(2023, 8), shortText: 'Cactus Group'},
]


export {frontendTechnologies, backendTechnologies, tools, languages, professionalExperience, timelinePoints}