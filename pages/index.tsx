import { User } from './../models/userModels'

function About() {
    let user: User = getUserData(8, 'Nut')
    return <div>About {user.age} {user.name}ddd</div>
}

function getUserData(id: number, name: string): User {
    let user: User = {
        id,
        name,
        age: 25
    }
    return user
}

export default About
