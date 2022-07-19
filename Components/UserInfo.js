import UserInfoPersonal from "./UserInfoPersonal"
import UserInfoSkills from "./UserInfoSkills"
export default function UserInfo() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2">

            <UserInfoPersonal />
            <UserInfoSkills />
        </div>
    )
}
