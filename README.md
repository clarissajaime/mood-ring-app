
# Mood Ring App

This is a [Next.js](https://nextjs.org/) project that dynamically displays moods using animated GIFs fetched from the GIPHY API and adjusts the background color based on the selected mood. The project was bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Features

- **Dynamic Mood Ring**: The app features a mood ring that changes its appearance based on the selected mood (e.g., Anger, Fear, Joy, Love, Sadness, Surprise).
- **GIF Background**: Fetches and displays a GIF related to the selected mood from the GIPHY API.
- **Responsive Design**: The app is fully responsive and works seamlessly on both desktop and mobile devices.

## Getting Started

First, set up the environment variables:

Create a `.env.local` file in the root of your project and add your GIPHY API key:

\`\`\`plaintext
NEXT_PUBLIC_GIPHY_API_KEY=your_giphy_api_key_here
\`\`\`

Then, run the development server:

\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying \`components/MoodRing.tsx\`. The page auto-updates as you edit the file.

## API Routes

The app uses a custom API route to securely fetch GIFs from the GIPHY API:

- **GET /api/giphy?mood={mood}**: Fetches a GIF related to the provided mood.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [GIPHY API Documentation](https://developers.giphy.com/docs/) - learn how to use the GIPHY API.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
