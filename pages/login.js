import { useEffect } from 'react'
import { supabase } from '@/util/supabase'

const Login = () => {
  useEffect(() => {
    supabase.auth.signInWithOAuth({
      provider: 'github',
    });
  }, []);

  return (
    <p>Log In</p>
  )
}

export default Login
