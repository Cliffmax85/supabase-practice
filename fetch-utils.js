const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTUwODU3MCwiZXhwIjoxOTU1MDg0NTcwfQ.b9_dCGIQkWfhzS3QZihLzQkD3n-sAt3L9swaEU7JzqI';
const SUPABASE_URL = 'https://rfwnchvtfqbachqhdfbi.supabase.co';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);


export async function getCars() {
    const response = await client
        .from('cars')
        .select('*');
    console.log(response.data);
    return response.data;

}

export async function getMovies() {
    const response = await client 
        .from('movies')
        .select();
    return response.data;
}

export async function getBands() {
    const response = await client 
        .from('bands')
        .select();
    return response.data;
}

export async function getBirds() {
    const response = await client 
        .from('birds')
        .select();
        
    return response.data;
}