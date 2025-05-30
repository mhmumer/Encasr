import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || '';
  const url = request.nextUrl.clone();

  const isLocalhost = host.includes('localhost');
  const domainParts = host.split('.');

  let subdomain = '';

  // Handle localhost (e.g., men.localhost:3000)
  if (isLocalhost) {
    subdomain = domainParts[0]; // e.g., men
  } else if (domainParts.length === 3) {
    // e.g., men.encasr.com
    subdomain = domainParts[0];
  }

  // Route to correct page
  if (subdomain === 'men') {
    url.pathname = '/men';
    return NextResponse.rewrite(url);
  }
  if (subdomain === 'women') {
    url.pathname = '/women';
    return NextResponse.rewrite(url);
  }
  if (subdomain === 'originals') {
    url.pathname = '/originals';
    return NextResponse.rewrite(url);
  }

  // Default to /home for encasr.com or unknown subdomain
  url.pathname = '/home';
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ['/((?!_next|favicon.ico|static).*)'],
};
