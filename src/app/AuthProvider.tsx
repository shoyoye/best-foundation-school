'use client';

import { SessionProvider } from '@supabase/auth-helpers-react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Database } from '@supabase/supabase-js'; // Optional: for type safety
import React from 'react';

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const supabase = createClientComponentClient<Database>();

  return <SessionProvider supabaseClient={supabase}>{children}</SessionProvider>;
};
