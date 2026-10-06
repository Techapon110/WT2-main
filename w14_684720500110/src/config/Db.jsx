import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
const supabase_storage = import.meta.env.VITE_SUPABASE_STORAGE;

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export default supabase;
export { supabase_storage }

