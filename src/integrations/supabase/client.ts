// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://ubmrbxeygvnfxodqplbc.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVibXJieGV5Z3ZuZnhvZHFwbGJjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ4ODM2MTMsImV4cCI6MjA2MDQ1OTYxM30.oy5fPymO4rT1gpKg5NX1gG0upxoq5es2u8Zag37NfDs";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);