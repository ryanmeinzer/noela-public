'use client'

import React, { useEffect, useState } from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { ThemeProviderProps } from 'next-themes/dist/types'

import { TooltipProvider } from '@/components/ui/tooltip'

export function Providers({ children, ...props }: ThemeProviderProps) {
  //resolving client server hydration error
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    // keeping defaultTheme consistent with layout for initial hydration
    <NextThemesProvider defaultTheme="light" {...props}>
      {isMounted && <TooltipProvider>{children}</TooltipProvider>}
    </NextThemesProvider>
  )
}