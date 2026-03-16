import type { UserData } from "../types";

export const SelectedMembers = ({
	selectedUsers,
}: {
	selectedUsers: UserData[];
}) => {
	return (
		<>
			<h3 className="text-lg font-bold">Selected members</h3>
			{selectedUsers.length === 0 ? (
				<div>No selected users</div>
			) : (
				selectedUsers.map((user) => (
					<div key={user.id} className="container flex flex-col items-start">
						<div>{`${user.firstName} ${user.lastName}`}</div>
						<div>{user.email}</div>
					</div>
				))
			)}
		</>
	);
};

export default SelectedMembers;
