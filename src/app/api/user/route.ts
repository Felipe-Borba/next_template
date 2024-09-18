import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest): NextResponse<{}> {
  return NextResponse.json(
    {
      error: "not implemented yet",
    },
    { status: 500 },
  );
}

export function POST(request: NextRequest): NextResponse<{}> {
  return NextResponse.json(
    {
      error: "not implemented yet",
    },
    { status: 500 },
  );
}
