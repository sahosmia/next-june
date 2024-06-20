import { categories } from "@/app/data/categories";
import { getNextId } from "@/app/types";
import { NextRequest } from "next/server";

export const GET = (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams;
  const title = searchParams.get("title");
  if (title) {
    const data = categories.filter((item) =>
      item.title.toLowerCase().includes(title.toLowerCase())
    );
    return new Response(JSON.stringify(data));
  }
  return new Response(JSON.stringify(categories));

  //  try {
  //    return res.status(200).json(getSuccessResponse(categories));
  //  } catch (error) {
  //    return res.status(500).json(errorResponse(error));
  //  }
};

export const POST = async (request: Request) => {
  const res = await request.json(); // get request veriable
  const id = getNextId(categories); // random id
  const newItem: { id: number; title: string } = { id: id, title: res.title };

  categories.push(newItem);

  return new Response(JSON.stringify(newItem), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201, // 201 is created
  });
};
