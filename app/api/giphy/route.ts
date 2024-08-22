import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const mood = searchParams.get('mood');

  const apiKey = process.env.GIPHY_API_KEY

  if (!apiKey) {
    console.error('GIPHY_API_KEY is not defined in the environment variables');
    return NextResponse.json({ error: 'API key is missing' }, { status: 500 });
  }

  const giphyUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${mood}&limit=1&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;

  try {
    const response = await fetch(giphyUrl);
    const data = await response.json();
    
    if (data.data && data.data[0].images && data.data[0].images.original) {
      const gifUrl = data.data[0].images.original.url;
      return NextResponse.json({ gifUrl });
    } else {
      console.error('Unexpected Giphy API response structure:', data);
      return NextResponse.json({ error: 'Invalid Giphy API response' }, { status: 500 });
    }
  } catch (error) {
    console.error('Error fetching GIF:', error);
    return NextResponse.json({ error: 'Failed to fetch GIF' }, { status: 500 });
  }
}
