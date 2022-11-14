import '../css/style.css'

const SkillsPage = () => {
    return ( 
        <>
        <section className="skill" id="Skill">
            <h2 className="title">Skill</h2>
            <div className="hard-skill">
                <h4>Technical Skill</h4>
                <img src="img/canva.png" alt=""/>
                <img src="img/figma.png" alt=""/>
                <img src="img/html.png" alt=""/>
                <img src="img/css.png" alt=""/>
            </div>
            <div className="soft-skill">
                <h4>Professional Skill</h4>
                <img src="img/communication.png" alt=""/>
                <img src="img/critical thinking.png" alt=""/>
                <img src="img/problem solving.png" alt=""/>
                <img src="img/teamwork.png" alt=""/>
            </div>
        </section>
        </>
    )
}

export default SkillsPage