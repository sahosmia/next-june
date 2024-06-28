import { categories } from "@/app/data/categories";
import { getNextId } from "@/app/types";
import { NextRequest, NextResponse } from "next/server";
import * as yup from "yup";

export const dynamic = "force-dynamic";

// Get All Data ===================================================
export const GET = (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams;
  const search = searchParams.get("search");
  const sort = searchParams.get("sort") || "";
  const page = parseInt(searchParams.get("page") || "1", 10);
  const limit = parseInt(searchParams.get("limit") || "10", 10);

  if (isNaN(page) || isNaN(limit)) {
    return new Response(
      JSON.stringify({ error: "Invalid pagination parameters" }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
  let data = categories;

  // Filter

  // Search
  if (search) {
    data = data.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
  }

  // Short
  if (sort) {
    data = data.sort((a, b) => {
      if ((a as any)[sort] < (b as any)[sort]) return -1;
      if ((a as any)[sort] > (b as any)[sort]) return 1;
      return 0;
    });
  }

  // Pagination
  const startIndex = (page - 1) * limit;
  const paginatedData = data.slice(startIndex, startIndex + limit);
  const total = data.length;
  const totalPage = Math.ceil(total / limit);

  // response
  return new Response(
    JSON.stringify({
      total: total,
      totalPage: totalPage,
      page: page,
      limit: limit,
      data: paginatedData,
    }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
};

// validation =====================================================
const itemSchema = yup.object().shape({
  title: yup.string().trim().required("Title is required"),
});

// Create Request =================================================
export const POST = async (request: NextRequest) => {
  try {
    const res = await request.json(); // get request veriable
    await itemSchema.validate(res);
    const id = getNextId(categories); // random id

    const newItem: { id: number; title: string } = { id: id, title: res.title };

    categories.push(newItem);

    return new Response(JSON.stringify(newItem), {
      status: 201,
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
