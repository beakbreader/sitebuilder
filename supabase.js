// Replace these with your values from Supabase
const SUPABASE_URL = 'https://vuemwgrfvogtzmmiwleg.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ1ZW13Z3Jmdm9ndHptbWl3bGVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc1NTgzNjcsImV4cCI6MjA2MzEzNDM2N30.9ZBKu-ApgpbOqb26kuCs98Gyzf-RaHzbi4zzWsczE9E';

// Initialize Supabase client
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

