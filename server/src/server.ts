//é preciso baixar uma lib adicional para o express com TS, pois o ts não é nativo nele
import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
import { convertHourToMinutes } from "./utils/convert-hour-to-minutes";
import { convertMinutesToHours } from "./utils/convert-minutes-to-hours";

const app = express();

//o express por padrão nao entende que estamos usando json, então temos que passar para ele
app.use(express.json());
app.use(
  cors()
  //  {
  //   origin:'http://dominio'
  // }
);

const prisma = new PrismaClient({
  log: ["query"],
});

app.get("/games", async (req, res) => {
  const games = await prisma.game.findMany({
    //estamos fazendo um join
    include: {
      //fazemos um count
      _count: {
        //e vemos a quantidade de ads vinculadas com o jogo
        //vem junto com as informações
        select: {
          ads: true,
        },
      },
    },
  });
  return res.json(games);
});
//post é criar, não precisamos verbalizar, fazemos apenas uma rota no plural
app.post("/games/:id/ads", async (req, res) => {
  const gameId = req.params.id;
  const body: any = req.body;

  const ad = await prisma.ad.create({
    data: {
      gameId,
      name: body.name,
      yearsPlaying: body.yearsPlaying,
      discord: body.discord,
      weekDays: body.weekDays.join(","),
      hourStart: convertHourToMinutes(body.hourStart),
      hourEnd: convertHourToMinutes(body.hourEnd),
      useVoiceChannel: body.useVoiceChannel,
    },
  });

  return res.status(201).json(ad);
});

//metodo get, o primeiro parametro é o endereço que o usuário vai estar acessando
//o url que vem depois da barra, o PATH
//como segundo parametro passamos o que será executado, normalmente uma função
//nessa função tem 2 parametros
app.get("/games/:id/ads", async (req, res) => {
  const gameId = req.params.id;

  const ads = await prisma.ad.findMany({
    select: {
      id: true,
      name: true,
      weekDays: true,
      useVoiceChannel: true,
      yearsPlaying: true,
      hourStart: true,
      hourEnd: true,
    },
    where: {
      gameId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return res.json(
    ads.map((ad: any) => {
      return {
        ...ad,
        hourStart: convertMinutesToHours(ad.hourStart),
        hourEnd: convertMinutesToHours(ad.hourEnd),
        weekDays: ad.weekDays.split(","),
      };
    })
  );
});

app.get("/ads/:id/discord", async (req, res) => {
  const adId = req.params.id;

  const ad = await prisma.ad.findUniqueOrThrow({
    select: {
      discord: true,
    },
    where: {
      id: adId,
    },
  });
  return res.json({
    discord: ad.discord,
  });
});

//o listen faz com que o server continue 'ouvindo' e deixando o server aberto
app.listen(3333);
