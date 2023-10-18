import { z } from 'zod'
import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { createReadStream } from 'fs'
import { openai } from '@/lib/openai'

export async function POST(
  request: NextRequest,
  { params }: { params: { videoId: string } },
) {
  const paramSchema = z.object({
    videoId: z.string().uuid(),
  })
  const bodySchema = z.object({
    prompt: z.string(),
  })

  const body = await request.json()

  const { prompt } = bodySchema.parse(body)
  const { videoId } = paramSchema.parse(params)

  const video = await prisma.video.findUniqueOrThrow({
    where: {
      id: videoId,
    },
  })

  const videoPath = video.path
  const audioReadStream = createReadStream(videoPath)

  const response = await openai.audio.transcriptions.create({
    file: audioReadStream,
    model: 'whisper-1',
    language: 'pt',
    response_format: 'json',
    temperature: 0,
    prompt,
  })

  const transcription = response.text

  await prisma.video.update({
    where: {
      id: videoId,
    },
    data: {
      transcription,
    },
  })

  return NextResponse.json({ response: transcription })
}
