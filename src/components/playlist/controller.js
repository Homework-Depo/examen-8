import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const findAll = async (req, res) => {
  try {
    const playlists = await prisma.playlist.findMany();
    res.json({
      ok: true,
      data: playlists,
    });
  } catch (error) {
    res.json({
      ok: false,
      data: error.message,
    });
  }
};

export const create = async (req, res) => {
  try {
    const { body } = req;
    const playlist = await prisma.playlist.create({
      include: {
        songs: true
      },
      data: {
        name: body.name,
        author: {
          connect: {
            id: body.userId
          }
        },
        songs: {
          connect: body.songs
        }
      },
    });
    res.json({
      ok: true,
      data: playlist,
    });
  } catch (error) {
    res.json({
      ok: false,
      data: error.message,
    });
  }
};

export const findById = async (req, res) => {
  try {
    console.log(parseInt(req.param.id))
    const playlists = await prisma.playlist.findUnique({
      where: {
        id: parseInt(req.params.id)
      }
    });
    res.json({
      ok: true,
      data: playlists,
    });
  } catch (error) {
    res.json({
      ok: false,
      data: error.message,
    });
  }
}