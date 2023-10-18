import { prisma } from '@/lib/prisma'
import { randomUUID } from 'crypto'
import { createWriteStream } from 'fs'
import { NextRequest, NextResponse } from 'next/server'
import path from 'path'
import { Writable } from 'stream'

export async function POST(request: NextRequest) {
  const formData = await request.formData()

  const file = formData.get('file') as File

  if (!file) {
    return NextResponse.json({ error: 'Missing file input.' }, { status: 400 })
  }

  const extension = path.extname(file.name)

  if (extension !== '.mp3') {
    return NextResponse.json(
      { error: 'Invalid input type, please upload a MP3.' },
      { status: 400 },
    )
  }

  const fileBaseName = path.basename(file.name, extension)

  const fileUploadName = `${fileBaseName}-${randomUUID()}${extension}`

  const uploadDestination = path.resolve(
    __dirname,
    '..',
    '..',
    '..',
    '..',
    '..',
    'tmp',
    fileUploadName,
  )

  const fileWriteStream = createWriteStream(uploadDestination, 'binary')

  const chunkFile = Writable.toWeb(fileWriteStream)

  file.stream().pipeTo(chunkFile)

  const video = await prisma.video.create({
    data: {
      name: file.name,
      path: uploadDestination,
    },
  })

  return NextResponse.json({ video }, { status: 200 })
}
