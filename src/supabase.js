import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://qhwvfhkxygjbytwsdbpu.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFod3ZmaGt4eWdqYnl0d3NkYnB1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzMyOTAzOTAsImV4cCI6MTk4ODg2NjM5MH0.z07xQXp9M_QnOlvxpDH607FtI4keB17Te1_eJpKXRlE"
);

export default supabase;
