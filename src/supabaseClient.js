import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;


if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    throw new Error("⚠️ Missing Supabase environment variables! Make sure to set them in .env.local");
}

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export default supabase;
