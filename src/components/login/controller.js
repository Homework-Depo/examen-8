import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const login = async (req, res) => {
  const { body } = req
  try {
    const users = await prisma.user.findFirst({
      where: {
        name: body.name,
        password: body.password
      }
    });
    res.json({
      ok: true,
      message: "Successful Login!",
      data: users,
    });
  } catch (error) {
    res.json({
      ok: false,
      data: error.message,
    });
  }
};