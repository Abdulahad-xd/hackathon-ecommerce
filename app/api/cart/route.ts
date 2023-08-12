import { NextRequest, NextResponse } from "next/server";

export function GET(request:NextRequest){
    return NextResponse.json({message:"DID YOU JUST CALLED THIS API?"})
}