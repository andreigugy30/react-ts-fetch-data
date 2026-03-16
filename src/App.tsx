import { useState } from "react";
import { useFetch } from "./hooks/useFetch";
import type { UserData } from "./types";
import AvailableMembers from "./components/AvailableMembers";
import SelectedMembers from "./components/SelectedMembers";

function App() {
	const { data } = useFetch();
	const users: UserData[] = data && "users" in data ? (data as any).users : [];
	const [selectedUsers, setSelectedUsers] = useState<UserData[]>([]);

	const addUser = (user: UserData) => {
		if (!selectedUsers.some((u) => u.id === user.id)) {
			setSelectedUsers([...selectedUsers, user]);
		}
	};

	return (
		<>
			<div className="container flex">
				<div className="flex flex-col gap-5 w-full max-w-md">
					<AvailableMembers
						users={users}
						selectedUsers={selectedUsers}
						onMemberClick={addUser}
					/>
				</div>
				<div className="text-lg font-bold w-full max-w-md">
					<SelectedMembers selectedUsers={selectedUsers} />
				</div>
			</div>
		</>
	);
}

export default App;
