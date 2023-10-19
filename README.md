## upload.ai

`upload.ai` is a project that allows users to upload videos (.mp4) and generate transcriptions of the video content and create responses based on predefined prompts. This is useful for generating titles and descriptions for YouTube videos.

This project was developed during the **[Next Level Week Together](https://www.rocketseat.com.br/nlw)**.

**Originally the project stack was different. They created the front-end and back-end separated using Vite and Fastify. But for study proporses I used only Next.js 13 for both.**

![Project Cover](https://raw.githubusercontent.com/lui7henrique/upload-ai/main/cover.jpeg)

## Features
- [x] Automatic generation of audio transcriptions
- [x] Creation of responses based on custom prompts

## Technologies
- [Nextjs](https://nextjs.org/)
- [Shadcn/ui](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [axios](https://axios-http.com/)
- [ffmpeg](https://ffmpeg.org/)
- [ai](https://www.npmjs.com/package/ai)
- [Prisma](https://www.prisma.io/)
- [OpenAI](https://openai.com/)
- [zod](https://github.com/colinhacks/zod)

## How to Run:

1. Clone the repository:

   ```shell
   $ git clone https://github.com/your-username/upload-ai.git
   ```

2. Navigate to the folder:

   ```shell
   $ cd upload-ai
   ```

3. Install dependencies:

   ```shell
   $ pnpm install
   ```

4. Configure environment variables in a `.env.local` file.

   ```shell
   # Example environment variables
   DATABASE_URL='file:./dev.db'
   OPENAI_API_KEY='your-openai-api-key'
   NEXT_PUBLIC_BACKEND_BASE_URL="http://localhost:3000/api"
   ```

5. Start the database:

   ```shell
   # npx prisma migrate dev 
   ```

6. Populate the `prompts` table:

   ```shell
   # npx prisma db seed
   ```

7. Start the server:

   ```shell
   $ pnpm run dev
   ```

## Contact

Pedro Renan - Software Developer

<div style="display: flex;">
  <a href="https://www.linkedin.com/in/pedro-renan/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" style="margin-right: 2vw" target="_blank"></a>
  <a href="mailto:prenansb@gmail.com" target="_blank"><img src="https://img.shields.io/badge/-Gmail-%23333?style=for-the-badge&logo=gmail&logoColor=white" style="margin-right: 2vw""></a>
</div>
