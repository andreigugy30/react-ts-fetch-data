import type { UserData } from "../types";

export const SelectedMembers = ({
	selectedUsers,
	handleDeleteSelectedMember,
}: {
	selectedUsers: UserData[];
	handleDeleteSelectedMember: (id: number) => void;
}) => {
	return (
		<>
			<h3 className="text-lg font-bold">Selected members</h3>
			{selectedUsers.length === 0 ? (
				<div>No selected users</div>
			) : (
				selectedUsers.map((user) => (
					<div key={user.id} className="flex flex-row items-center gap-2">
						<div className="container flex flex-col items-start">
							<div>{`${user.firstName} ${user.lastName}`}</div>
							<div>{user.email}</div>
						</div>
						<button
							className="rounded bg-red-500 px-2 py-1 text-white"
							onClick={() => handleDeleteSelectedMember(user.id)}
						>
							X
						</button>
					</div>
				))
			)}
		</>
	);
};

export default SelectedMembers;
