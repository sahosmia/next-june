import { categories } from "@/app/data/categories";
import { getNextId } from "@/app/types";
import { NextRequest } from "next/server";

export const dynamic = "force-dynamic";
export const GET = (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams;
  const title = searchParams.get("title");
  if (title) {
    const data = categories.filter((item) =>
      item.title.toLowerCase().includes(title.toLowerCase())
    );
    return Response.json(data);
  }
  return Response.json({ data: categories, status: 200 });

};


export const POST = async (request: NextRequest) => {
  const res = await request.json(); // get request veriable
  const id = getNextId(categories); // random id
  const newItem: { id: number; title: string } = { id: id, title: res.title };

  categories.push(newItem);

  return new Response(JSON.stringify(newItem), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201, 
  });
};
