import { Component } from 'react'
import { NextPageContext } from 'next'
import UserList from './../components/User/UserList'
import { getUsers } from './../services/apiServices'
import { ApiUsers } from './../models/apiModels'

interface Props {
    users: ApiUsers
}

class UsersPage extends Component<Props> {
    static async getInitialProps({ req }: NextPageContext) {
        let users: ApiUsers
        try {
            users = await getUsers()
        } catch (error) {
            console.log(error)
        }

        return {
            users
        }
    }

    render() {
        return <UserList {...this.props} />
    }
}

export default UsersPage
