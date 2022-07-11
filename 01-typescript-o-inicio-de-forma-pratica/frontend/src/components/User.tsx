import React from 'react'

interface IUser {
    name: string,
    email?: string
}

interface Props {
    user: IUser;
}

// Usar tipagem feita pelo react
const User: React.FC<Props> = ({ user }) => {
    return (
        <div>
            <strong>Nome: {user.name} </strong> <br />
            <strong>Email: {user.email || 'Não possui email'} </strong> <br /> <br />
        </div>
    )
}

export default User;