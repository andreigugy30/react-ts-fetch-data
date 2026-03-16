import { useState } from "react";
import "./App.css";
import { useFetch } from "./hooks/useFetch";
import type { UserData } from "./types";
import AvailableMembers from "./components/AvailableMembers";

function App() {
	const { data } = useFetch();

	const users: UserData[] = data && "users" in data ? (data as any).users : [];
	console.log("🚀 ~ App ~ data:", users);
	return (
		<>
			<div className="container flex">
				<div className="flex flex-col gap-5 w-full max-w-md">
					<AvailableMembers users={users} />
				</div>
				<div className="text-lg font-bold w-full max-w-md">
					Selected members
				</div>
			</div>
		</>
	);
}

export default App;
