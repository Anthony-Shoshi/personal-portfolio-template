const skills = [
    {
        id: 1,
        name: "Strategy & Direction",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        image: "src/assets/chain.png",
    },
    {
        id: 2,
        name: "Branding & Logo",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        image: "src/assets/chain.png",
    },
    {
        id: 3,
        name: "UI & UX Design",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        image: "src/assets/chain.png",
    },
    {
        id: 4,
        name: "Webflow Development",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        image: "/src/assets/chain.png",
    },
];

const Skills = () => {
    return (
        <div className="lg:mx-12 mx-4 py-32" id="skills">
            <div className="mb-20">
                <h3 className="text-heading-color text-xl font-semibold mb-5">My Skills</h3>
                <h1 className="text-heading-color md:text-6xl text-4xl font-bold mb-20">My Expertise</h1>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
                {skills.map(skill => <div className="bg-bg-shade rounded p-6 cursor-pointer hover:border-b-2 hover:border-primary hover:rounded-br-lg hover:rounded-bl-lg transition-all duration-300 hover:translate-y-5" key={skill.id}>
                    <img src={skill.image} alt="chain" className=" bg-white w-14 h-14 p-3 rounded shadow-lg" />
                    <p className="text-heading-color text-2xl py-5 font-bold">{skill.name}</p>
                    <p className="text-body">{skill.description}</p>
                </div>)}
            </div>
        </div>
    );
}

export default Skills;