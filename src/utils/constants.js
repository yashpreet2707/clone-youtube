const GOOGLE_API_KEY = "AIzaSyCu_c8aQXK7J8fZEdbOlYEkDBRgssc9DmY";


export const YOUTUBE_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=us&key="+GOOGLE_API_KEY+"&maxResults=";

export const VIDEO_DETAILS = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key="+GOOGLE_API_KEY+"&id=" ;


export const YOUTUBE_SEARCH_API = "http://suggestqueries.google.com/complete/search?client=chrome&ds=yt&q=" ;

export const YOUTUBE_CHANNEL_API = "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&key="+GOOGLE_API_KEY+"&id=" ;

export const YOUTUBE_COMMENT_THREAD_API = "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&key=" + GOOGLE_API_KEY + "&videoId=" ;