import { subcategories } from "@/app/data/subcategories";

export const GET = () => {
  return new Response(JSON.stringify(subcategories));
};

export const POST = async (request) => {
  const res = await request.json(); // get request veriable
  const id = crypto.randomUUID(); // random id
  const newItem = {
    // create new item using requst data and id
    id: id,
    title: res.title,
    category: res.category,
  };

  subcategories.push(newItem); // created new item is push in item collection

  return new Response(JSON.stringify(newItem), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201, // 201 is created
  });
};
