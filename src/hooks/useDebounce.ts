import { useEffect, useState } from "react";

export const useDebounce = (value: string, delay = 500) => {
	const [debounceSearch, setDebounceSearch] = useState(value);

	useEffect(() => {
		const timer = setTimeout(() => {
			setDebounceSearch(value);
		}, delay);

		return () => {
			clearTimeout(timer);
		};
	}, [value, delay]);

	return debounceSearch;
};
