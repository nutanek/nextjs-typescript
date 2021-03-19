import { ApiUsers } from './../../models/apiModels'

interface Props {
    users: ApiUsers
}

const UserList = (props: Props) => {
    let { users } = props
    return (
        <div>
            <div className="grid grid-cols-3 gap-4">
                {users?.data.map(user => (
                    <div key={user.id} className="flex flex-col items-center mb-10">
                        <div>
                            <img
                                className="rounded-full"
                                src={user.avatar}
                                alt={user.first_name}
                            />
                        </div>
                        <div className="text-lg py-2">{user.first_name}</div>
                        <div className="text-md py-2">{user.email}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default UserList
