import { categories } from "@/app/data/categories";
import { headers } from "next/headers";

export const GET = () => {
  return new Response(JSON.stringify(categories));
};

export const POST = async (request) => {
  const res = await request.json(); // get request veriable
  const id = crypto.randomUUID(); // random id
  const newItem = {
    // create new item using requst data and id
    id: id,
    title: res.title,
  };

  categories.push(newItem); // created new item is push in item collection

  return new Response(JSON.stringify(newItem), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201, // 201 is created
  });
};
