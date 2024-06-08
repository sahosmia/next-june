import { subcategories } from "@/app/data/subcategories";

export const GET = async (_request, { params }) => {
  const id = params.id;
  const itemCheck = subcategories.find((item) => item.id === parseInt(id));

  if (itemCheck) {
    const itemIndex = subcategories.findIndex(
      (item) => item.id === parseInt(id)
    );
    return Response.json(subcategories[itemIndex]);
  }
  return new Response(JSON.stringify({ message: "Not found this item" }), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 404,
  });
};

export const PATCH = async (request, { params }) => {
  const res = await request.json(); // get request veriable
  const id = params.id;
  const itemCheck = subcategories.find((item) => item.id === parseInt(id));

  if (itemCheck) {
    const itemIndex = subcategories.findIndex(
      (item) => item.id === parseInt(id)
    );

    subcategories[itemIndex].title = res.title;
    subcategories[itemIndex].category = res.category;

    return Response.json(subcategories[itemIndex]);
  }
  return new Response(JSON.stringify({ message: "Not found this item" }), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 404,
  });
};

export const DELETE = async (request, { params }) => {
  const id = params.id;
  const itemCheck = subcategories.find((item) => item.id === parseInt(id));

  if (itemCheck) {
    const itemIndex = subcategories.findIndex(
      (item) => item.id === parseInt(id)
    );
    const deletedItem = subcategories[itemIndex];

    subcategories.splice(itemIndex, 1);

    return Response.json(deletedItem);
  }
  return new Response(JSON.stringify({ message: "Not found this item" }), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 404,
  });
};
