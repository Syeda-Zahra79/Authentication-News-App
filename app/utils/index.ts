
export async function fetchNews (category : string | null ) {
    let url = `
        https://newsdata.io/api/1/news?apikey=pub_35463d67c350b855a93c89ba494f4a4d92a2b&q=${category}&language=en`;
        try {
            const response = await fetch(url);
            const result = await response.json();
            return result.results;
        } catch (error) {
            console.error(error);
        }
}
