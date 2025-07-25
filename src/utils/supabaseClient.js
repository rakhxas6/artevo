// supabaseClient.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.REACT_APP_SUPABASE_PROJECT_URL
const supabaseAnonKey = process.env.REACT_APP_PUBLIC_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
