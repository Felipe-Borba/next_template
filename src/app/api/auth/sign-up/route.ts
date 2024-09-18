import { UserSignInResponse } from "@/actions/signIn";
import { UserSignUpResponse } from "@/actions/signUp";
import { NextRequest, NextResponse } from "next/server";

export function POST(request: NextRequest): NextResponse<UserSignUpResponse> {
  return NextResponse.json(
    {
      id: 1,
      name: "mock",
      role: "admin",
      token:
        "eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJ3ZWJUZW1wbGF0ZSIsInN1YiI6ImFkbWluIiwiZXhwIjoxNzI2NjUwMzM2LCJpYXQiOjE3MjY2MTQzMzYsInNjb3BlIjoiUk9MRV9BRE1JTiBST0xFX0NMSUVOVCJ9.azs1GQelH028KX1cRQfrxOcBTLuwRxH4oS0l5S-487HzKP1ueCLs2Da_mk2iqgGmrqpa9l66R4LfKax5YseTzRlaA4qHK2ntVKUYUXAVRCMvHU7Dmb7QTMg9bAw-onaT-v48DCQ03xL1AF2-ua4Celb9RFM04a0GDKJ2XVnOIX23Qjl-h0fGxPCnnNXm9TS_Yo52yJQbQjz6HknOlz8mCCalcRLm2CGGICHp2gPDlam0OtT95wsrtxmFE1TaRibqx2pcPz9hv4Wa7lSwnE25QC7qJ3048y08A65jasGRlt9ZamfU5F78yzooHpJBbhgp6v85feI3oXdcmtXe-8kSVw",
    },
    { status: 200 },
  );
}
