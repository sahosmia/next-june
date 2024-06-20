import { categories } from "@/app/data/categories";

export const GET = async (_request, { params }) => {
  const id = params.id;
  const categoryCheck = categories.find(
    (category) => category.id === parseInt(id)
  );

  if (categoryCheck) {
    const categoryIndex = categories.findIndex(
      (category) => category.id === parseInt(id)
    );
    return Response.json(categories[categoryIndex]);
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
  const categoryCheck = categories.find(
    (category) => category.id === parseInt(id)
  );

  if (categoryCheck) {
    const categoryIndex = categories.findIndex(
      (category) => category.id === parseInt(id)
    );

    categories[categoryIndex].title = res.title;

    return Response.json(categories[categoryIndex]);
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
  const categoryCheck = categories.find(
    (category) => category.id === parseInt(id)
  );

  if (categoryCheck) {
    const categoryIndex = categories.findIndex(
      (category) => category.id === parseInt(id)
    );
    const deletedItem = categories[categoryIndex];

    categories.splice(categoryIndex, 1);

    return Response.json(deletedItem);
  }
  return new Response(JSON.stringify({ message: "Not found this item" }), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 404,
  });
};
