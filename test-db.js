const { createClient } = require('@supabase/supabase-js');

const supabase = createClient('https://wnuczjopfotkwgaqkdio.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndudWN6am9wZm90a3dnYXFrZGlvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY3MTQ1ODMsImV4cCI6MjA5MjI5MDU4M30.CSylXLmOy4gu_d8LH1vJGrO2Mj3uqAyBrsht_Ty4Zwg');

async function check() {
  const { data: ana } = await supabase.from('ana_basliklar').select('*').limit(1);
  console.log("ANA BASLIKLAR:", ana);
  
  const { data: alt } = await supabase.from('alt_olcutler').select('*').limit(1);
  console.log("ALT OLCUTLER:", alt);
}

check();
