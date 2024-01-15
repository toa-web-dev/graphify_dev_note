const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const anonKey = process.env.NEXT_PUBLIC_API_KEY;

export async function fetchData(uri, queryString) {
    try {
        let URL = `${apiUrl}/${uri}`;
        if (queryString) URL = URL + `?label_fk=eq.${queryString}`;
        const response = await fetch(URL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                apikey: anonKey,
                Authorization: `Bearer ${anonKey}`,
            },
        });

        if (!response.ok) {
            throw new Error(`API 오류: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();

        return data;
    } catch (error) {
        throw error; // 필요에 따라 예외를 다시 던지거나 처리합니다.
    }
}