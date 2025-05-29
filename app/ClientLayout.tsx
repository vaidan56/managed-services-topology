'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { useAuth } from "@/lib/auth/AuthContext";

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const { user, loading } = useAuth();
  const pathname = usePathname();
  const router = useRouter();
  
  // Define public routes that don't require authentication
  const publicRoutes = ['/login'];
  const isPublicRoute = publicRoutes.includes(pathname);
  
  // Debug logging
  console.log('[ClientLayout] Debug:', {
    user: !!user,
    userEmail: user?.email,
    loading,
    pathname,
    isPublicRoute,
    shouldRedirect: !loading && !user && !isPublicRoute
  });

  // Redirect unauthenticated users to login (except when already on public routes)
  useEffect(() => {
    if (!loading && !user && !isPublicRoute) {
      console.log('[ClientLayout] Redirecting to login - user not authenticated');
      router.push('/login');
    }
  }, [user, loading, isPublicRoute, router]);

  // Show loading screen while checking authentication
  if (loading) {
    return (
      <div className="min-h-screen bg-bg flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand mx-auto mb-4"></div>
          <p className="text-text">Loading...</p>
        </div>
      </div>
    );
  }

  // If user is not authenticated and not on a public route, show loading while redirecting
  if (!user && !isPublicRoute) {
    return (
      <div className="min-h-screen bg-bg flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand mx-auto mb-4"></div>
          <p className="text-text">Redirecting to login...</p>
        </div>
      </div>
    );
  }

  // If on login page or user is not authenticated, show without sidebar
  if (isPublicRoute || !user) {
    return (
      <div className="min-h-screen w-full bg-bg text-text">
        {children}
      </div>
    );
  }

  // User is authenticated and not on login page - show with sidebar
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar />
        <main className="flex-1 min-w-0 max-w-full w-full h-full overflow-x-auto bg-bg text-text">
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
}