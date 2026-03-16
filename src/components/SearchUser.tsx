import React, { useState } from "react";

type SearchUserProps = {
	onSearchChange: (searchTerm: string) => void;
};

const SearchUser = ({ onSearchChange }: SearchUserProps) => {
	const [searchTerm, setSearchTerm] = useState("");
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setSearchTerm(value);
		onSearchChange(value);
	};
	return (
		<div className="flex flex-col items-start">
			<label htmlFor="lastName" className="text-emerald-600 font-bold">
				Search by last name:
			</label>
			<input
				type="text"
				name="lastName"
				id="lastName"
				placeholder="Search by last name"
				className="border-2 border-solid border-emerald-600"
				onChange={handleChange}
				value={searchTerm}
			/>
		</div>
	);
};

export default SearchUser;
