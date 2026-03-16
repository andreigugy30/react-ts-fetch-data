import { useEffect, useState } from "react";
import type { UserData } from "../types";

const API_URL = "https://dummyjson.com/users";

export const useFetch = () => {
	const [data, setData] = useState<UserData[]>([]);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const response = await fetch(API_URL);
				const responseData = await response.json();
				setData(responseData);
			} catch (error: Error | any) {
				setError(error);
			} finally {
				setLoading(false);
			}
		};
		fetchData();
	}, []);

	return { data, error, loading };
};
