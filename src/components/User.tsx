import type { UserData } from "../types";

const User = ({ user }: { user: UserData }) => {
	return (
		<div className="container flex flex-col items-start">
			<div>{`${user.firstName} ${user.lastName}`}</div>
			<div>{user.email}</div>
		</div>
	);
};

export default User;
