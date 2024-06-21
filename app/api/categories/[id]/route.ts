import { categories } from "@/app/data/categories";
import { NextRequest } from "next/server";

//show method
export const GET = async (
  _request: NextRequest,
  { params }: { params: { id: string } }
) => {
  //context = {params : {id:1}}
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


// update method
export const PATCH = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
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

// delete method
export const DELETE = async (request:NextRequest, { params }:{params:{id:string}}) => {
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
