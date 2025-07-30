// Next.js App Router API route
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ name: "John Doe222" });
}
