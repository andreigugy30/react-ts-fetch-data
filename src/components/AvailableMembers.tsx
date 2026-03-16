import { useMemo, useState } from "react";
import type { UserData } from "../types";
import User from "./User";
import SearchUser from "./SearchUser";

const AvailableMembers = ({ users }: { users: UserData[] }) => {
	const [searchTerm, setSearchTerm] = useState("");

	const filteredUsersByLastName = useMemo(() => {
		return users.filter((user) => {
			console.log("Hello");
			return user.lastName.toLowerCase().includes(searchTerm.toLowerCase());
		});
	}, [users, searchTerm]);

	const handleSearchChange = (newSearchTerm: string) => {
		setSearchTerm(newSearchTerm);
	};
	return (
		<>
			<h3 className="text-lg font-bold">Available members</h3>
			<SearchUser onSearchChange={handleSearchChange} />
			{filteredUsersByLastName.length === 0 ? (
				<div>No users found</div>
			) : (
				filteredUsersByLastName.map((user) => (
					<User key={user.id} user={user} />
				))
			)}
		</>
	);
};

export default AvailableMembers;
