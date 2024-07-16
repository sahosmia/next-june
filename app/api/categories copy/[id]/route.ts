import { categories } from "@/app/data/categories";
import { NextRequest, NextResponse } from "next/server";
import * as yup from "yup";

//show method =================================================
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
  return new Response(JSON.stringify({ error: "Not found this item" }), {
    status: 404,
    headers: {
      "Content-Type": "application/json",
    },
  });
};

// Validation =================================================
const itemSchema = yup.object().shape({
  title: yup.string().trim().required("Title is required"),
});

// update method =============================================
export const PATCH = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    const res = await request.json();
    const id = params.id;
    await itemSchema.validate(res);

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
    return new Response(JSON.stringify({ error: "Not found this item" }), {
      status: 404,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};

// delete method  =============================================
export const DELETE = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
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
  return new Response(JSON.stringify({ error: "Not found this item" }), {
    status: 404,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
