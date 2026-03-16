import type { UserData } from "../types";

type UserProps = {
	onMemberClick: () => void;
	user: UserData;
	isSelected?: boolean;
};

const User = ({ user, onMemberClick, isSelected = false }: UserProps) => {
	const handleMemberClick = () => {
		console.log("clicked", user.firstName);
		onMemberClick();
	};
	return (
		<div
			className={`container flex flex-col items-start cursor-pointer p-2 rounded ${
				isSelected ? "bg-yellow-200" : ""
			}`}
			onClick={handleMemberClick}
		>
			<div>{`${user.firstName} ${user.lastName}`}</div>
			<div>{user.email}</div>
		</div>
	);
};

export default User;
