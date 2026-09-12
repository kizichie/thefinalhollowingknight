/*
  THE LETTERS — DATA
  ------------------
  Replace the placeholders below.

  Spotify:
  1. Find a Spotify track URL such as:
     https://open.spotify.com/track/XXXXXXXXXXXX
  2. Copy the part after /track/ (the track ID).
  3. Put that ID in spotifyId.

  NOTE: Browsers/Spotify control autoplay, so the embedded player
  may require the visitor to press play.
*/

const letters = [
  {
    special: true, // Set special: true on any one letter to give it the deluxe design.
    // Optional recording: place letter-01.mp3 beside index.html (or change this path).
    voiceRecording: "letter-01.mp3",
    voiceTitle: "A voice, kept here.",
    voiceDescription: "A little recording that belongs only to this letter.",
    elevated: true,
    person: "PERSON 01",
    date: "SEPTEMBER 2026",
    song: "SONG TITLE",
    artist: "ARTIST NAME",
    spotifyId: "PLACEHOLDER",
    keywords: "person 01 placeholder letter",
    preview: "A little preview of what this letter contains...",
    text: `Dear Person 01,

[WRITE YOUR LETTER HERE]

This is where your actual letter goes. You can write as much as you want.

— me`
  },
  {
    elevated: true,
    person: "PERSON 02",
    date: "SEPTEMBER 2026",
    voiceRecording: "letter-02.mp3",
    voiceTitle: "A voice, kept here — 02.",
    voiceDescription: "An audio note attached to this elevated letter.",
    song: "SONG TITLE",
    artist: "ARTIST NAME",
    spotifyId: "PLACEHOLDER",
    keywords: "person 02 placeholder letter",
    preview: "A little preview of what this letter contains...",
    text: `Dear Person 02,

[WRITE YOUR LETTER HERE]

This is where your actual letter goes. You can write as much as you want.

— me`
  },
  {
    elevated: true,
    person: "PERSON 03",
    date: "SEPTEMBER 2026",
    voiceRecording: "letter-03.mp3",
    voiceTitle: "A voice, kept here — 03.",
    voiceDescription: "An audio note attached to this elevated letter.",
    song: "SONG TITLE",
    artist: "ARTIST NAME",
    spotifyId: "PLACEHOLDER",
    keywords: "person 03 placeholder letter",
    preview: "A little preview of what this letter contains...",
    text: `Dear Person 03,

[WRITE YOUR LETTER HERE]

This is where your actual letter goes. You can write as much as you want.

— me`
  },
  {
    elevated: true,
    person: "PERSON 04",
    date: "SEPTEMBER 2026",
    voiceRecording: "letter-04.mp3",
    voiceTitle: "A voice, kept here — 04.",
    voiceDescription: "An audio note attached to this elevated letter.",
    song: "SONG TITLE",
    artist: "ARTIST NAME",
    spotifyId: "PLACEHOLDER",
    keywords: "person 04 placeholder letter",
    preview: "A little preview of what this letter contains...",
    text: `Dear Person 04,

[WRITE YOUR LETTER HERE]

This is where your actual letter goes. You can write as much as you want.

— me`
  },
  {
    elevated: true,
    person: "PERSON 05",
    date: "SEPTEMBER 2026",
    voiceRecording: "letter-05.mp3",
    voiceTitle: "A voice, kept here — 05.",
    voiceDescription: "An audio note attached to this elevated letter.",
    song: "SONG TITLE",
    artist: "ARTIST NAME",
    spotifyId: "PLACEHOLDER",
    keywords: "person 05 placeholder letter",
    preview: "A little preview of what this letter contains...",
    text: `Dear Person 05,

[WRITE YOUR LETTER HERE]

This is where your actual letter goes. You can write as much as you want.

— me`
  },
  {
    elevated: true,
    person: "PERSON 06",
    date: "SEPTEMBER 2026",
    voiceRecording: "letter-06.mp3",
    voiceTitle: "A voice, kept here — 06.",
    voiceDescription: "An audio note attached to this elevated letter.",
    song: "SONG TITLE",
    artist: "ARTIST NAME",
    spotifyId: "PLACEHOLDER",
    keywords: "person 06 placeholder letter",
    preview: "A little preview of what this letter contains...",
    text: `Dear Person 06,

[WRITE YOUR LETTER HERE]

This is where your actual letter goes. You can write as much as you want.

— me`
  },
  {
    elevated: true,
    person: "PERSON 07",
    date: "SEPTEMBER 2026",
    voiceRecording: "letter-07.mp3",
    voiceTitle: "A voice, kept here — 07.",
    voiceDescription: "An audio note attached to this elevated letter.",
    song: "SONG TITLE",
    artist: "ARTIST NAME",
    spotifyId: "PLACEHOLDER",
    keywords: "person 07 placeholder letter",
    preview: "A little preview of what this letter contains...",
    text: `Dear Person 07,

[WRITE YOUR LETTER HERE]

This is where your actual letter goes. You can write as much as you want.

— me`
  },
  {
    elevated: true,
    person: "PERSON 08",
    date: "SEPTEMBER 2026",
    voiceRecording: "letter-08.mp3",
    voiceTitle: "A voice, kept here — 08.",
    voiceDescription: "An audio note attached to this elevated letter.",
    song: "SONG TITLE",
    artist: "ARTIST NAME",
    spotifyId: "PLACEHOLDER",
    keywords: "person 08 placeholder letter",
    preview: "A little preview of what this letter contains...",
    text: `Dear Person 08,

[WRITE YOUR LETTER HERE]

This is where your actual letter goes. You can write as much as you want.

— me`
  },
  {
    elevated: true,
    person: "PERSON 09",
    date: "SEPTEMBER 2026",
    voiceRecording: "letter-09.mp3",
    voiceTitle: "A voice, kept here — 09.",
    voiceDescription: "An audio note attached to this elevated letter.",
    song: "SONG TITLE",
    artist: "ARTIST NAME",
    spotifyId: "PLACEHOLDER",
    keywords: "person 09 placeholder letter",
    preview: "A little preview of what this letter contains...",
    text: `Dear Person 09,

[WRITE YOUR LETTER HERE]

This is where your actual letter goes. You can write as much as you want.

— me`
  },
  {
    elevated: true,
    person: "PERSON 10",
    date: "SEPTEMBER 2026",
    voiceRecording: "letter-10.mp3",
    voiceTitle: "A voice, kept here — 10.",
    voiceDescription: "An audio note attached to this elevated letter.",
    song: "SONG TITLE",
    artist: "ARTIST NAME",
    spotifyId: "PLACEHOLDER",
    keywords: "person 10 placeholder letter",
    preview: "A little preview of what this letter contains...",
    text: `Dear Person 10,

[WRITE YOUR LETTER HERE]

This is where your actual letter goes. You can write as much as you want.

— me`
  },
  {
    elevated: true,
    person: "PERSON 11",
    date: "SEPTEMBER 2026",
    voiceRecording: "letter-11.mp3",
    voiceTitle: "A voice, kept here — 11.",
    voiceDescription: "An audio note attached to this elevated letter.",
    song: "SONG TITLE",
    artist: "ARTIST NAME",
    spotifyId: "PLACEHOLDER",
    keywords: "person 11 placeholder letter",
    preview: "A little preview of what this letter contains...",
    text: `Dear Person 11,

[WRITE YOUR LETTER HERE]

This is where your actual letter goes. You can write as much as you want.

— me`
  },
  {
    elevated: true,
    person: "PERSON 12",
    date: "SEPTEMBER 2026",
    voiceRecording: "letter-12.mp3",
    voiceTitle: "A voice, kept here — 12.",
    voiceDescription: "An audio note attached to this elevated letter.",
    song: "SONG TITLE",
    artist: "ARTIST NAME",
    spotifyId: "PLACEHOLDER",
    keywords: "person 12 placeholder letter",
    preview: "A little preview of what this letter contains...",
    text: `Dear Person 12,

[WRITE YOUR LETTER HERE]

This is where your actual letter goes. You can write as much as you want.

— me`
  },
  {
    elevated: true,
    person: "PERSON 13",
    date: "SEPTEMBER 2026",
    voiceRecording: "letter-13.mp3",
    voiceTitle: "A voice, kept here — 13.",
    voiceDescription: "An audio note attached to this elevated letter.",
    song: "SONG TITLE",
    artist: "ARTIST NAME",
    spotifyId: "PLACEHOLDER",
    keywords: "person 13 placeholder letter",
    preview: "A little preview of what this letter contains...",
    text: `Dear Person 13,

[WRITE YOUR LETTER HERE]

This is where your actual letter goes. You can write as much as you want.

— me`
  },
  {
    elevated: true,
    person: "PERSON 14",
    date: "SEPTEMBER 2026",
    voiceRecording: "letter-14.mp3",
    voiceTitle: "A voice, kept here — 14.",
    voiceDescription: "An audio note attached to this elevated letter.",
    song: "SONG TITLE",
    artist: "ARTIST NAME",
    spotifyId: "PLACEHOLDER",
    keywords: "person 14 placeholder letter",
    preview: "A little preview of what this letter contains...",
    text: `Dear Person 14,

[WRITE YOUR LETTER HERE]

This is where your actual letter goes. You can write as much as you want.

— me`
  },
  {
    elevated: true,
    person: "PERSON 15",
    date: "SEPTEMBER 2026",
    voiceRecording: "letter-15.mp3",
    voiceTitle: "A voice, kept here — 15.",
    voiceDescription: "An audio note attached to this elevated letter.",
    song: "SONG TITLE",
    artist: "ARTIST NAME",
    spotifyId: "PLACEHOLDER",
    keywords: "person 15 placeholder letter",
    preview: "A little preview of what this letter contains...",
    text: `Dear Person 15,

[WRITE YOUR LETTER HERE]

This is where your actual letter goes. You can write as much as you want.

— me`
  },
  {
    person: "PERSON 16",
    date: "SEPTEMBER 2026",
    song: "SONG TITLE",
    artist: "ARTIST NAME",
    spotifyId: "PLACEHOLDER",
    keywords: "person 16 placeholder letter",
    preview: "A little preview of what this letter contains...",
    text: `Dear Person 16,

[WRITE YOUR LETTER HERE]

This is where your actual letter goes. You can write as much as you want.

— me`
  },
  {
    person: "PERSON 17",
    date: "SEPTEMBER 2026",
    song: "SONG TITLE",
    artist: "ARTIST NAME",
    spotifyId: "PLACEHOLDER",
    keywords: "person 17 placeholder letter",
    preview: "A little preview of what this letter contains...",
    text: `Dear Person 17,

[WRITE YOUR LETTER HERE]

This is where your actual letter goes. You can write as much as you want.

— me`
  },
  {
    person: "PERSON 18",
    date: "SEPTEMBER 2026",
    song: "SONG TITLE",
    artist: "ARTIST NAME",
    spotifyId: "PLACEHOLDER",
    keywords: "person 18 placeholder letter",
    preview: "A little preview of what this letter contains...",
    text: `Dear Person 18,

[WRITE YOUR LETTER HERE]

This is where your actual letter goes. You can write as much as you want.

— me`
  },
  {
    person: "PERSON 19",
    date: "SEPTEMBER 2026",
    song: "SONG TITLE",
    artist: "ARTIST NAME",
    spotifyId: "PLACEHOLDER",
    keywords: "person 19 placeholder letter",
    preview: "A little preview of what this letter contains...",
    text: `Dear Person 19,

[WRITE YOUR LETTER HERE]

This is where your actual letter goes. You can write as much as you want.

— me`
  },
  {
    person: "PERSON 20",
    date: "SEPTEMBER 2026",
    song: "SONG TITLE",
    artist: "ARTIST NAME",
    spotifyId: "PLACEHOLDER",
    keywords: "person 20 placeholder letter",
    preview: "A little preview of what this letter contains...",
    text: `Dear Person 20,

[WRITE YOUR LETTER HERE]

This is where your actual letter goes. You can write as much as you want.

— me`
  },
  {
    person: "PERSON 21",
    date: "SEPTEMBER 2026",
    song: "SONG TITLE",
    artist: "ARTIST NAME",
    spotifyId: "PLACEHOLDER",
    keywords: "person 21 placeholder letter",
    preview: "A little preview of what this letter contains...",
    text: `Dear Person 21,

[WRITE YOUR LETTER HERE]

This is where your actual letter goes. You can write as much as you want.

— me`
  },
  {
    person: "PERSON 22",
    date: "SEPTEMBER 2026",
    song: "SONG TITLE",
    artist: "ARTIST NAME",
    spotifyId: "PLACEHOLDER",
    keywords: "person 22 placeholder letter",
    preview: "A little preview of what this letter contains...",
    text: `Dear Person 22,

[WRITE YOUR LETTER HERE]

This is where your actual letter goes. You can write as much as you want.

— me`
  },
  {
    person: "PERSON 23",
    date: "SEPTEMBER 2026",
    song: "SONG TITLE",
    artist: "ARTIST NAME",
    spotifyId: "PLACEHOLDER",
    keywords: "person 23 placeholder letter",
    preview: "A little preview of what this letter contains...",
    text: `Dear Person 23,

[WRITE YOUR LETTER HERE]

This is where your actual letter goes. You can write as much as you want.

— me`
  },
  {
    person: "PERSON 24",
    date: "SEPTEMBER 2026",
    song: "SONG TITLE",
    artist: "ARTIST NAME",
    spotifyId: "PLACEHOLDER",
    keywords: "person 24 placeholder letter",
    preview: "A little preview of what this letter contains...",
    text: `Dear Person 24,

[WRITE YOUR LETTER HERE]

This is where your actual letter goes. You can write as much as you want.

— me`
  },
  {
    person: "PERSON 25",
    date: "SEPTEMBER 2026",
    song: "SONG TITLE",
    artist: "ARTIST NAME",
    spotifyId: "PLACEHOLDER",
    keywords: "person 25 placeholder letter",
    preview: "A little preview of what this letter contains...",
    text: `Dear Person 25,

[WRITE YOUR LETTER HERE]

This is where your actual letter goes. You can write as much as you want.

— me`
  },
  {
    person: "PERSON 26",
    date: "SEPTEMBER 2026",
    song: "SONG TITLE",
    artist: "ARTIST NAME",
    spotifyId: "PLACEHOLDER",
    keywords: "person 26 placeholder letter",
    preview: "A little preview of what this letter contains...",
    text: `Dear Person 26,

[WRITE YOUR LETTER HERE]

This is where your actual letter goes. You can write as much as you want.

— me`
  },
  {
    person: "PERSON 27",
    date: "SEPTEMBER 2026",
    song: "SONG TITLE",
    artist: "ARTIST NAME",
    spotifyId: "PLACEHOLDER",
    keywords: "person 27 placeholder letter",
    preview: "A little preview of what this letter contains...",
    text: `Dear Person 27,

[WRITE YOUR LETTER HERE]

This is where your actual letter goes. You can write as much as you want.

— me`
  },
  {
    person: "PERSON 28",
    date: "SEPTEMBER 2026",
    song: "SONG TITLE",
    artist: "ARTIST NAME",
    spotifyId: "PLACEHOLDER",
    keywords: "person 28 placeholder letter",
    preview: "A little preview of what this letter contains...",
    text: `Dear Person 28,

[WRITE YOUR LETTER HERE]

This is where your actual letter goes. You can write as much as you want.

— me`
  },
  {
    person: "PERSON 29",
    date: "SEPTEMBER 2026",
    song: "SONG TITLE",
    artist: "ARTIST NAME",
    spotifyId: "PLACEHOLDER",
    keywords: "person 29 placeholder letter",
    preview: "A little preview of what this letter contains...",
    text: `Dear Person 29,

[WRITE YOUR LETTER HERE]

This is where your actual letter goes. You can write as much as you want.

— me`
  },
  {
    person: "PERSON 30",
    date: "SEPTEMBER 2026",
    song: "SONG TITLE",
    artist: "ARTIST NAME",
    spotifyId: "PLACEHOLDER",
    keywords: "person 30 placeholder letter",
    preview: "A little preview of what this letter contains...",
    text: `Dear Person 30,

[WRITE YOUR LETTER HERE]

This is where your actual letter goes. You can write as much as you want.

— me`
  },
  {
    person: "PERSON 31",
    date: "SEPTEMBER 2026",
    song: "SONG TITLE",
    artist: "ARTIST NAME",
    spotifyId: "PLACEHOLDER",
    keywords: "person 31 placeholder letter",
    preview: "A little preview of what this letter contains...",
    text: `Dear Person 31,

[WRITE YOUR LETTER HERE]

This is where your actual letter goes. You can write as much as you want.

— me`
  },
  {
    person: "PERSON 32",
    date: "SEPTEMBER 2026",
    song: "SONG TITLE",
    artist: "ARTIST NAME",
    spotifyId: "PLACEHOLDER",
    keywords: "person 32 placeholder letter",
    preview: "A little preview of what this letter contains...",
    text: `Dear Person 32,

[WRITE YOUR LETTER HERE]

This is where your actual letter goes. You can write as much as you want.

— me`
  },
  {
    person: "PERSON 33",
    date: "SEPTEMBER 2026",
    song: "SONG TITLE",
    artist: "ARTIST NAME",
    spotifyId: "PLACEHOLDER",
    keywords: "person 33 placeholder letter",
    preview: "A little preview of what this letter contains...",
    text: `Dear Person 33,

[WRITE YOUR LETTER HERE]

This is where your actual letter goes. You can write as much as you want.

— me`
  },
  {
    person: "PERSON 34",
    date: "SEPTEMBER 2026",
    song: "SONG TITLE",
    artist: "ARTIST NAME",
    spotifyId: "PLACEHOLDER",
    keywords: "person 34 placeholder letter",
    preview: "A little preview of what this letter contains...",
    text: `Dear Person 34,

[WRITE YOUR LETTER HERE]

This is where your actual letter goes. You can write as much as you want.

— me`
  },
  {
    person: "PERSON 35",
    date: "SEPTEMBER 2026",
    song: "SONG TITLE",
    artist: "ARTIST NAME",
    spotifyId: "PLACEHOLDER",
    keywords: "person 35 placeholder letter",
    preview: "A little preview of what this letter contains...",
    text: `Dear Person 35,

[WRITE YOUR LETTER HERE]

This is where your actual letter goes. You can write as much as you want.

— me`
  },
  {
    person: "PERSON 36",
    date: "SEPTEMBER 2026",
    song: "SONG TITLE",
    artist: "ARTIST NAME",
    spotifyId: "PLACEHOLDER",
    keywords: "person 36 placeholder letter",
    preview: "A little preview of what this letter contains...",
    text: `Dear Person 36,

[WRITE YOUR LETTER HERE]

This is where your actual letter goes. You can write as much as you want.

— me`
  },
  {
    person: "PERSON 37",
    date: "SEPTEMBER 2026",
    song: "SONG TITLE",
    artist: "ARTIST NAME",
    spotifyId: "PLACEHOLDER",
    keywords: "person 37 placeholder letter",
    preview: "A little preview of what this letter contains...",
    text: `Dear Person 37,

[WRITE YOUR LETTER HERE]

This is where your actual letter goes. You can write as much as you want.

— me`
  },
  {
    person: "PERSON 38",
    date: "SEPTEMBER 2026",
    song: "SONG TITLE",
    artist: "ARTIST NAME",
    spotifyId: "PLACEHOLDER",
    keywords: "person 38 placeholder letter",
    preview: "A little preview of what this letter contains...",
    text: `Dear Person 38,

[WRITE YOUR LETTER HERE]

This is where your actual letter goes. You can write as much as you want.

— me`
  },
  {
    person: "PERSON 39",
    date: "SEPTEMBER 2026",
    song: "SONG TITLE",
    artist: "ARTIST NAME",
    spotifyId: "PLACEHOLDER",
    keywords: "person 39 placeholder letter",
    preview: "A little preview of what this letter contains...",
    text: `Dear Person 39,

[WRITE YOUR LETTER HERE]

This is where your actual letter goes. You can write as much as you want.

— me`
  },
  {
    person: "PERSON 40",
    date: "SEPTEMBER 2026",
    song: "SONG TITLE",
    artist: "ARTIST NAME",
    spotifyId: "PLACEHOLDER",
    keywords: "person 40 placeholder letter",
    preview: "A little preview of what this letter contains...",
    text: `Dear Person 40,

[WRITE YOUR LETTER HERE]

This is where your actual letter goes. You can write as much as you want.

— me`
  },
  {
    person: "PERSON 41",
    date: "SEPTEMBER 2026",
    song: "SONG TITLE",
    artist: "ARTIST NAME",
    spotifyId: "PLACEHOLDER",
    keywords: "person 41 placeholder letter",
    preview: "A little preview of what this letter contains...",
    text: `Dear Person 41,

[WRITE YOUR LETTER HERE]

This is where your actual letter goes. You can write as much as you want.

— me`
  },
  {
    person: "PERSON 42",
    date: "SEPTEMBER 2026",
    song: "SONG TITLE",
    artist: "ARTIST NAME",
    spotifyId: "PLACEHOLDER",
    keywords: "person 42 placeholder letter",
    preview: "A little preview of what this letter contains...",
    text: `Dear Person 42,

[WRITE YOUR LETTER HERE]

This is where your actual letter goes. You can write as much as you want.

— me`
  },
  {
    person: "PERSON 43",
    date: "SEPTEMBER 2026",
    song: "SONG TITLE",
    artist: "ARTIST NAME",
    spotifyId: "PLACEHOLDER",
    keywords: "person 43 placeholder letter",
    preview: "A little preview of what this letter contains...",
    text: `Dear Person 43,

[WRITE YOUR LETTER HERE]

This is where your actual letter goes. You can write as much as you want.

— me`
  },
  {
    person: "PERSON 44",
    date: "SEPTEMBER 2026",
    song: "SONG TITLE",
    artist: "ARTIST NAME",
    spotifyId: "PLACEHOLDER",
    keywords: "person 44 placeholder letter",
    preview: "A little preview of what this letter contains...",
    text: `Dear Person 44,

[WRITE YOUR LETTER HERE]

This is where your actual letter goes. You can write as much as you want.

— me`
  },
  {
    person: "PERSON 45",
    date: "SEPTEMBER 2026",
    song: "SONG TITLE",
    artist: "ARTIST NAME",
    spotifyId: "PLACEHOLDER",
    keywords: "person 45 placeholder letter",
    preview: "A little preview of what this letter contains...",
    text: `Dear Person 45,

[WRITE YOUR LETTER HERE]

This is where your actual letter goes. You can write as much as you want.

— me`
  },
  {
    person: "PERSON 46",
    date: "SEPTEMBER 2026",
    song: "SONG TITLE",
    artist: "ARTIST NAME",
    spotifyId: "PLACEHOLDER",
    keywords: "person 46 placeholder letter",
    preview: "A little preview of what this letter contains...",
    text: `Dear Person 46,

[WRITE YOUR LETTER HERE]

This is where your actual letter goes. You can write as much as you want.

— me`
  },
  {
    person: "PERSON 47",
    date: "SEPTEMBER 2026",
    song: "SONG TITLE",
    artist: "ARTIST NAME",
    spotifyId: "PLACEHOLDER",
    keywords: "person 47 placeholder letter",
    preview: "A little preview of what this letter contains...",
    text: `Dear Person 47,

[WRITE YOUR LETTER HERE]

This is where your actual letter goes. You can write as much as you want.

— me`
  },
  {
    person: "PERSON 48",
    date: "SEPTEMBER 2026",
    song: "SONG TITLE",
    artist: "ARTIST NAME",
    spotifyId: "PLACEHOLDER",
    keywords: "person 48 placeholder letter",
    preview: "A little preview of what this letter contains...",
    text: `Dear Person 48,

[WRITE YOUR LETTER HERE]

This is where your actual letter goes. You can write as much as you want.

— me`
  },
  {
    person: "PERSON 49",
    date: "SEPTEMBER 2026",
    song: "SONG TITLE",
    artist: "ARTIST NAME",
    spotifyId: "PLACEHOLDER",
    keywords: "person 49 placeholder letter",
    preview: "A little preview of what this letter contains...",
    text: `Dear Person 49,

[WRITE YOUR LETTER HERE]

This is where your actual letter goes. You can write as much as you want.

— me`
  },
  {
    person: "PERSON 50",
    date: "SEPTEMBER 2026",
    song: "SONG TITLE",
    artist: "ARTIST NAME",
    spotifyId: "PLACEHOLDER",
    keywords: "person 50 placeholder letter",
    preview: "A little preview of what this letter contains...",
    text: `Dear Person 50,

[WRITE YOUR LETTER HERE]

This is where your actual letter goes. You can write as much as you want.

— me`
  }
,
  {
    person: "PERSON 51",
    date: "SEPTEMBER 2026",
    song: "SONG TITLE",
    artist: "ARTIST NAME",
    spotifyId: "PLACEHOLDER",
    keywords: "person 51 placeholder letter",
    preview: "A little preview of what this letter contains...",
    text: `Dear Person 51,

[WRITE YOUR LETTER HERE]

This is where your actual letter goes. You can write as much as you want.

— me`
  },
  {
    person: "PERSON 52",
    date: "SEPTEMBER 2026",
    song: "SONG TITLE",
    artist: "ARTIST NAME",
    spotifyId: "PLACEHOLDER",
    keywords: "person 52 placeholder letter",
    preview: "A little preview of what this letter contains...",
    text: `Dear Person 52,

[WRITE YOUR LETTER HERE]

This is where your actual letter goes. You can write as much as you want.

— me`
  },
  {
    person: "PERSON 53",
    date: "SEPTEMBER 2026",
    song: "SONG TITLE",
    artist: "ARTIST NAME",
    spotifyId: "PLACEHOLDER",
    keywords: "person 53 placeholder letter",
    preview: "A little preview of what this letter contains...",
    text: `Dear Person 53,

[WRITE YOUR LETTER HERE]

This is where your actual letter goes. You can write as much as you want.

— me`
  },
  {
    person: "PERSON 54",
    date: "SEPTEMBER 2026",
    song: "SONG TITLE",
    artist: "ARTIST NAME",
    spotifyId: "PLACEHOLDER",
    keywords: "person 54 placeholder letter",
    preview: "A little preview of what this letter contains...",
    text: `Dear Person 54,

[WRITE YOUR LETTER HERE]

This is where your actual letter goes. You can write as much as you want.

— me`
  },
  {
    person: "PERSON 55",
    date: "SEPTEMBER 2026",
    song: "SONG TITLE",
    artist: "ARTIST NAME",
    spotifyId: "PLACEHOLDER",
    keywords: "person 55 placeholder letter",
    preview: "A little preview of what this letter contains...",
    text: `Dear Person 55,

[WRITE YOUR LETTER HERE]

This is where your actual letter goes. You can write as much as you want.

— me`
  },
  {
    person: "PERSON 56",
    date: "SEPTEMBER 2026",
    song: "SONG TITLE",
    artist: "ARTIST NAME",
    spotifyId: "PLACEHOLDER",
    keywords: "person 56 placeholder letter",
    preview: "A little preview of what this letter contains...",
    text: `Dear Person 56,

[WRITE YOUR LETTER HERE]

This is where your actual letter goes. You can write as much as you want.

— me`
  },
  {
    person: "PERSON 57",
    date: "SEPTEMBER 2026",
    song: "SONG TITLE",
    artist: "ARTIST NAME",
    spotifyId: "PLACEHOLDER",
    keywords: "person 57 placeholder letter",
    preview: "A little preview of what this letter contains...",
    text: `Dear Person 57,

[WRITE YOUR LETTER HERE]

This is where your actual letter goes. You can write as much as you want.

— me`
  },
  {
    person: "PERSON 58",
    date: "SEPTEMBER 2026",
    song: "SONG TITLE",
    artist: "ARTIST NAME",
    spotifyId: "PLACEHOLDER",
    keywords: "person 58 placeholder letter",
    preview: "A little preview of what this letter contains...",
    text: `Dear Person 58,

[WRITE YOUR LETTER HERE]

This is where your actual letter goes. You can write as much as you want.

— me`
  },
  {
    person: "PERSON 59",
    date: "SEPTEMBER 2026",
    song: "SONG TITLE",
    artist: "ARTIST NAME",
    spotifyId: "PLACEHOLDER",
    keywords: "person 59 placeholder letter",
    preview: "A little preview of what this letter contains...",
    text: `Dear Person 59,

[WRITE YOUR LETTER HERE]

This is where your actual letter goes. You can write as much as you want.

— me`
  },
  {
    person: "PERSON 60",
    date: "SEPTEMBER 2026",
    song: "SONG TITLE",
    artist: "ARTIST NAME",
    spotifyId: "PLACEHOLDER",
    keywords: "person 60 placeholder letter",
    preview: "A little preview of what this letter contains...",
    text: `Dear Person 60,

[WRITE YOUR LETTER HERE]

This is where your actual letter goes. You can write as much as you want.

— me`
  },
  {
    person: "PERSON 61",
    date: "SEPTEMBER 2026",
    song: "SONG TITLE",
    artist: "ARTIST NAME",
    spotifyId: "PLACEHOLDER",
    keywords: "person 61 placeholder letter",
    preview: "A little preview of what this letter contains...",
    text: `Dear Person 61,

[WRITE YOUR LETTER HERE]

This is where your actual letter goes. You can write as much as you want.

— me`
  },
  {
    person: "PERSON 62",
    date: "SEPTEMBER 2026",
    song: "SONG TITLE",
    artist: "ARTIST NAME",
    spotifyId: "PLACEHOLDER",
    keywords: "person 62 placeholder letter",
    preview: "A little preview of what this letter contains...",
    text: `Dear Person 62,

[WRITE YOUR LETTER HERE]

This is where your actual letter goes. You can write as much as you want.

— me`
  },
  {
    person: "PERSON 63",
    date: "SEPTEMBER 2026",
    song: "SONG TITLE",
    artist: "ARTIST NAME",
    spotifyId: "PLACEHOLDER",
    keywords: "person 63 placeholder letter",
    preview: "A little preview of what this letter contains...",
    text: `Dear Person 63,

[WRITE YOUR LETTER HERE]

This is where your actual letter goes. You can write as much as you want.

— me`
  },
  {
    person: "PERSON 64",
    date: "SEPTEMBER 2026",
    song: "SONG TITLE",
    artist: "ARTIST NAME",
    spotifyId: "PLACEHOLDER",
    keywords: "person 64 placeholder letter",
    preview: "A little preview of what this letter contains...",
    text: `Dear Person 64,

[WRITE YOUR LETTER HERE]

This is where your actual letter goes. You can write as much as you want.

— me`
  },
  {
    person: "PERSON 65",
    date: "SEPTEMBER 2026",
    song: "SONG TITLE",
    artist: "ARTIST NAME",
    spotifyId: "PLACEHOLDER",
    keywords: "person 65 placeholder letter",
    preview: "A little preview of what this letter contains...",
    text: `Dear Person 65,

[WRITE YOUR LETTER HERE]

This is where your actual letter goes. You can write as much as you want.

— me`
  },
  {
    person: "PERSON 66",
    date: "SEPTEMBER 2026",
    song: "SONG TITLE",
    artist: "ARTIST NAME",
    spotifyId: "PLACEHOLDER",
    keywords: "person 66 placeholder letter",
    preview: "A little preview of what this letter contains...",
    text: `Dear Person 66,

[WRITE YOUR LETTER HERE]

This is where your actual letter goes. You can write as much as you want.

— me`
  },
  {
    person: "PERSON 67",
    date: "SEPTEMBER 2026",
    song: "SONG TITLE",
    artist: "ARTIST NAME",
    spotifyId: "PLACEHOLDER",
    keywords: "person 67 placeholder letter",
    preview: "A little preview of what this letter contains...",
    text: `Dear Person 67,

[WRITE YOUR LETTER HERE]

This is where your actual letter goes. You can write as much as you want.

— me`
  },
  {
    person: "PERSON 68",
    date: "SEPTEMBER 2026",
    song: "SONG TITLE",
    artist: "ARTIST NAME",
    spotifyId: "PLACEHOLDER",
    keywords: "person 68 placeholder letter",
    preview: "A little preview of what this letter contains...",
    text: `Dear Person 68,

[WRITE YOUR LETTER HERE]

This is where your actual letter goes. You can write as much as you want.

— me`
  },
  {
    person: "PERSON 69",
    date: "SEPTEMBER 2026",
    song: "SONG TITLE",
    artist: "ARTIST NAME",
    spotifyId: "PLACEHOLDER",
    keywords: "person 69 placeholder letter",
    preview: "A little preview of what this letter contains...",
    text: `Dear Person 69,

[WRITE YOUR LETTER HERE]

This is where your actual letter goes. You can write as much as you want.

— me`
  },
  {
    person: "PERSON 70",
    date: "SEPTEMBER 2026",
    song: "SONG TITLE",
    artist: "ARTIST NAME",
    spotifyId: "PLACEHOLDER",
    keywords: "person 70 placeholder letter",
    preview: "A little preview of what this letter contains...",
    text: `Dear Person 70,

[WRITE YOUR LETTER HERE]

This is where your actual letter goes. You can write as much as you want.

— me`
  },
  {
    person: "PERSON 71",
    date: "SEPTEMBER 2026",
    song: "SONG TITLE",
    artist: "ARTIST NAME",
    spotifyId: "PLACEHOLDER",
    keywords: "person 71 placeholder letter",
    preview: "A little preview of what this letter contains...",
    text: `Dear Person 71,

[WRITE YOUR LETTER HERE]

This is where your actual letter goes. You can write as much as you want.

— me`
  },
  {
    person: "PERSON 72",
    date: "SEPTEMBER 2026",
    song: "SONG TITLE",
    artist: "ARTIST NAME",
    spotifyId: "PLACEHOLDER",
    keywords: "person 72 placeholder letter",
    preview: "A little preview of what this letter contains...",
    text: `Dear Person 72,

[WRITE YOUR LETTER HERE]

This is where your actual letter goes. You can write as much as you want.

— me`
  },
  {
    person: "PERSON 73",
    date: "SEPTEMBER 2026",
    song: "SONG TITLE",
    artist: "ARTIST NAME",
    spotifyId: "PLACEHOLDER",
    keywords: "person 73 placeholder letter",
    preview: "A little preview of what this letter contains...",
    text: `Dear Person 73,

[WRITE YOUR LETTER HERE]

This is where your actual letter goes. You can write as much as you want.

— me`
  },
  {
    person: "PERSON 74",
    date: "SEPTEMBER 2026",
    song: "SONG TITLE",
    artist: "ARTIST NAME",
    spotifyId: "PLACEHOLDER",
    keywords: "person 74 placeholder letter",
    preview: "A little preview of what this letter contains...",
    text: `Dear Person 74,

[WRITE YOUR LETTER HERE]

This is where your actual letter goes. You can write as much as you want.

— me`
  },
  {
    person: "PERSON 75",
    date: "SEPTEMBER 2026",
    song: "SONG TITLE",
    artist: "ARTIST NAME",
    spotifyId: "PLACEHOLDER",
    keywords: "person 75 placeholder letter",
    preview: "A little preview of what this letter contains...",
    text: `Dear Person 75,

[WRITE YOUR LETTER HERE]

This is where your actual letter goes. You can write as much as you want.

— me`
  },
  {
    person: "PERSON 76",
    date: "SEPTEMBER 2026",
    song: "SONG TITLE",
    artist: "ARTIST NAME",
    spotifyId: "PLACEHOLDER",
    keywords: "person 76 placeholder letter",
    preview: "A little preview of what this letter contains...",
    text: `Dear Person 76,

[WRITE YOUR LETTER HERE]

This is where your actual letter goes. You can write as much as you want.

— me`
  },
  {
    person: "PERSON 77",
    date: "SEPTEMBER 2026",
    song: "SONG TITLE",
    artist: "ARTIST NAME",
    spotifyId: "PLACEHOLDER",
    keywords: "person 77 placeholder letter",
    preview: "A little preview of what this letter contains...",
    text: `Dear Person 77,

[WRITE YOUR LETTER HERE]

This is where your actual letter goes. You can write as much as you want.

— me`
  },
  {
    person: "PERSON 78",
    date: "SEPTEMBER 2026",
    song: "SONG TITLE",
    artist: "ARTIST NAME",
    spotifyId: "PLACEHOLDER",
    keywords: "person 78 placeholder letter",
    preview: "A little preview of what this letter contains...",
    text: `Dear Person 78,

[WRITE YOUR LETTER HERE]

This is where your actual letter goes. You can write as much as you want.

— me`
  },
  {
    person: "PERSON 79",
    date: "SEPTEMBER 2026",
    song: "SONG TITLE",
    artist: "ARTIST NAME",
    spotifyId: "PLACEHOLDER",
    keywords: "person 79 placeholder letter",
    preview: "A little preview of what this letter contains...",
    text: `Dear Person 79,

[WRITE YOUR LETTER HERE]

This is where your actual letter goes. You can write as much as you want.

— me`
  },
  {
    person: "PERSON 80",
    date: "SEPTEMBER 2026",
    song: "SONG TITLE",
    artist: "ARTIST NAME",
    spotifyId: "PLACEHOLDER",
    keywords: "person 80 placeholder letter",
    preview: "A little preview of what this letter contains...",
    text: `Dear Person 80,

[WRITE YOUR LETTER HERE]

This is where your actual letter goes. You can write as much as you want.

— me`
  },
  {
    person: "PERSON 81",
    date: "SEPTEMBER 2026",
    song: "SONG TITLE",
    artist: "ARTIST NAME",
    spotifyId: "PLACEHOLDER",
    keywords: "person 81 placeholder letter",
    preview: "A little preview of what this letter contains...",
    text: `Dear Person 81,

[WRITE YOUR LETTER HERE]

This is where your actual letter goes. You can write as much as you want.

— me`
  },
  {
    person: "PERSON 82",
    date: "SEPTEMBER 2026",
    song: "SONG TITLE",
    artist: "ARTIST NAME",
    spotifyId: "PLACEHOLDER",
    keywords: "person 82 placeholder letter",
    preview: "A little preview of what this letter contains...",
    text: `Dear Person 82,

[WRITE YOUR LETTER HERE]

This is where your actual letter goes. You can write as much as you want.

— me`
  },
  {
    person: "PERSON 83",
    date: "SEPTEMBER 2026",
    song: "SONG TITLE",
    artist: "ARTIST NAME",
    spotifyId: "PLACEHOLDER",
    keywords: "person 83 placeholder letter",
    preview: "A little preview of what this letter contains...",
    text: `Dear Person 83,

[WRITE YOUR LETTER HERE]

This is where your actual letter goes. You can write as much as you want.

— me`
  },
  {
    person: "PERSON 84",
    date: "SEPTEMBER 2026",
    song: "SONG TITLE",
    artist: "ARTIST NAME",
    spotifyId: "PLACEHOLDER",
    keywords: "person 84 placeholder letter",
    preview: "A little preview of what this letter contains...",
    text: `Dear Person 84,

[WRITE YOUR LETTER HERE]

This is where your actual letter goes. You can write as much as you want.

— me`
  },
  {
    person: "PERSON 85",
    date: "SEPTEMBER 2026",
    song: "SONG TITLE",
    artist: "ARTIST NAME",
    spotifyId: "PLACEHOLDER",
    keywords: "person 85 placeholder letter",
    preview: "A little preview of what this letter contains...",
    text: `Dear Person 85,

[WRITE YOUR LETTER HERE]

This is where your actual letter goes. You can write as much as you want.

— me`
  },
  {
    person: "PERSON 86",
    date: "SEPTEMBER 2026",
    song: "SONG TITLE",
    artist: "ARTIST NAME",
    spotifyId: "PLACEHOLDER",
    keywords: "person 86 placeholder letter",
    preview: "A little preview of what this letter contains...",
    text: `Dear Person 86,

[WRITE YOUR LETTER HERE]

This is where your actual letter goes. You can write as much as you want.

— me`
  },
  {
    person: "PERSON 87",
    date: "SEPTEMBER 2026",
    song: "SONG TITLE",
    artist: "ARTIST NAME",
    spotifyId: "PLACEHOLDER",
    keywords: "person 87 placeholder letter",
    preview: "A little preview of what this letter contains...",
    text: `Dear Person 87,

[WRITE YOUR LETTER HERE]

This is where your actual letter goes. You can write as much as you want.

— me`
  },
  {
    person: "PERSON 88",
    date: "SEPTEMBER 2026",
    song: "SONG TITLE",
    artist: "ARTIST NAME",
    spotifyId: "PLACEHOLDER",
    keywords: "person 88 placeholder letter",
    preview: "A little preview of what this letter contains...",
    text: `Dear Person 88,

[WRITE YOUR LETTER HERE]

This is where your actual letter goes. You can write as much as you want.

— me`
  },
  {
    person: "PERSON 89",
    date: "SEPTEMBER 2026",
    song: "SONG TITLE",
    artist: "ARTIST NAME",
    spotifyId: "PLACEHOLDER",
    keywords: "person 89 placeholder letter",
    preview: "A little preview of what this letter contains...",
    text: `Dear Person 89,

[WRITE YOUR LETTER HERE]

This is where your actual letter goes. You can write as much as you want.

— me`
  },
  {
    person: "PERSON 90",
    date: "SEPTEMBER 2026",
    song: "SONG TITLE",
    artist: "ARTIST NAME",
    spotifyId: "PLACEHOLDER",
    keywords: "person 90 placeholder letter",
    preview: "A little preview of what this letter contains...",
    text: `Dear Person 90,

[WRITE YOUR LETTER HERE]

This is where your actual letter goes. You can write as much as you want.

— me`
  },
  {
    person: "PERSON 91",
    date: "SEPTEMBER 2026",
    song: "SONG TITLE",
    artist: "ARTIST NAME",
    spotifyId: "PLACEHOLDER",
    keywords: "person 91 placeholder letter",
    preview: "A little preview of what this letter contains...",
    text: `Dear Person 91,

[WRITE YOUR LETTER HERE]

This is where your actual letter goes. You can write as much as you want.

— me`
  },
  {
    person: "PERSON 92",
    date: "SEPTEMBER 2026",
    song: "SONG TITLE",
    artist: "ARTIST NAME",
    spotifyId: "PLACEHOLDER",
    keywords: "person 92 placeholder letter",
    preview: "A little preview of what this letter contains...",
    text: `Dear Person 92,

[WRITE YOUR LETTER HERE]

This is where your actual letter goes. You can write as much as you want.

— me`
  },
  {
    person: "PERSON 93",
    date: "SEPTEMBER 2026",
    song: "SONG TITLE",
    artist: "ARTIST NAME",
    spotifyId: "PLACEHOLDER",
    keywords: "person 93 placeholder letter",
    preview: "A little preview of what this letter contains...",
    text: `Dear Person 93,

[WRITE YOUR LETTER HERE]

This is where your actual letter goes. You can write as much as you want.

— me`
  },
  {
    person: "PERSON 94",
    date: "SEPTEMBER 2026",
    song: "SONG TITLE",
    artist: "ARTIST NAME",
    spotifyId: "PLACEHOLDER",
    keywords: "person 94 placeholder letter",
    preview: "A little preview of what this letter contains...",
    text: `Dear Person 94,

[WRITE YOUR LETTER HERE]

This is where your actual letter goes. You can write as much as you want.

— me`
  },
  {
    person: "PERSON 95",
    date: "SEPTEMBER 2026",
    song: "SONG TITLE",
    artist: "ARTIST NAME",
    spotifyId: "PLACEHOLDER",
    keywords: "person 95 placeholder letter",
    preview: "A little preview of what this letter contains...",
    text: `Dear Person 95,

[WRITE YOUR LETTER HERE]

This is where your actual letter goes. You can write as much as you want.

— me`
  },
  {
    person: "PERSON 96",
    date: "SEPTEMBER 2026",
    song: "SONG TITLE",
    artist: "ARTIST NAME",
    spotifyId: "PLACEHOLDER",
    keywords: "person 96 placeholder letter",
    preview: "A little preview of what this letter contains...",
    text: `Dear Person 96,

[WRITE YOUR LETTER HERE]

This is where your actual letter goes. You can write as much as you want.

— me`
  },
  {
    person: "PERSON 97",
    date: "SEPTEMBER 2026",
    song: "SONG TITLE",
    artist: "ARTIST NAME",
    spotifyId: "PLACEHOLDER",
    keywords: "person 97 placeholder letter",
    preview: "A little preview of what this letter contains...",
    text: `Dear Person 97,

[WRITE YOUR LETTER HERE]

This is where your actual letter goes. You can write as much as you want.

— me`
  },
  {
    person: "PERSON 98",
    date: "SEPTEMBER 2026",
    song: "SONG TITLE",
    artist: "ARTIST NAME",
    spotifyId: "PLACEHOLDER",
    keywords: "person 98 placeholder letter",
    preview: "A little preview of what this letter contains...",
    text: `Dear Person 98,

[WRITE YOUR LETTER HERE]

This is where your actual letter goes. You can write as much as you want.

— me`
  },
  {
    person: "PERSON 99",
    date: "SEPTEMBER 2026",
    song: "SONG TITLE",
    artist: "ARTIST NAME",
    spotifyId: "PLACEHOLDER",
    keywords: "person 99 placeholder letter",
    preview: "A little preview of what this letter contains...",
    text: `Dear Person 99,

[WRITE YOUR LETTER HERE]

This is where your actual letter goes. You can write as much as you want.

— me`
  },
  {
    person: "PERSON 100",
    date: "SEPTEMBER 2026",
    song: "SONG TITLE",
    artist: "ARTIST NAME",
    spotifyId: "PLACEHOLDER",
    keywords: "person 100 placeholder letter",
    preview: "A little preview of what this letter contains...",
    text: `Dear Person 100,

[WRITE YOUR LETTER HERE]

This is where your actual letter goes. You can write as much as you want.

— me`
  }
];

/* ---------------------------- */
/* DOM                           */
/* ---------------------------- */

const grid = document.getElementById("lettersGrid");
const emptyState = document.getElementById("emptyState");
const archiveCount = document.getElementById("archiveCount");
const searchInput = document.getElementById("searchInput");

const modal = document.getElementById("modal");
const backdrop = document.getElementById("backdrop");
const closeButton = document.getElementById("close");

const paper = document.getElementById("paper");

const numberEl = document.getElementById("number");
const dateEl = document.getElementById("date");
const personEl = document.getElementById("person");
const specialMark = document.getElementById("specialMark");
const letterEl = document.getElementById("letter");
const songEl = document.getElementById("song");
const artistEl = document.getElementById("artist");
const spotifyFrame = document.getElementById("spotifyFrame");
const voiceNote = document.getElementById("voiceNote");
const voiceAudio = document.getElementById("voiceAudio");
const voiceTitle = document.getElementById("voiceTitle");
const voiceDescription = document.getElementById("voiceDescription");
const spotifyNote = document.getElementById("spotifyNote");

let currentLetter = null;
let animationTimers = [];

/* ---------------------------- */
/* Helpers                       */
/* ---------------------------- */


function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  }[char]));
}

function spotifyEmbedUrl(id) {
  return `https://open.spotify.com/embed/track/${encodeURIComponent(id)}?utm_source=generator&theme=0`;
}

/* ---------------------------- */
/* Homepage                      */
/* ---------------------------- */

function render(query = "") {
  const q = query.trim().toLowerCase();

  const results = letters.filter(letter => {
    const haystack = [
      letter.person,
      letter.song,
      letter.artist,
      letter.preview,
      letter.keywords,
      letter.text
    ].join(" ").toLowerCase();

    return !q || haystack.includes(q);
  });

  grid.innerHTML = results.map(letter => {
    const index = letters.indexOf(letter);
    return `
      <article class="card${letter.elevated ? " elevated-card" : ""}${letter.special ? " special-card" : ""}" data-index="${index}" tabindex="0" role="button"
        aria-label="Open letter ${escapeHtml(letter.person)}">
        <span class="card-number">LETTER ${String(index + 1).padStart(2, "0")}</span>
        ${letter.special ? '<span class="special-card-label">SPECIAL ARCHIVE</span>' : ''}
        <h3>${escapeHtml(letter.person)}</h3>
        <p>${escapeHtml(letter.preview)}</p>
        <span class="card-song">${escapeHtml(letter.song)} — ${escapeHtml(letter.artist)}</span>
      </article>
    `;
  }).join("");

  archiveCount.textContent =
    `${results.length} OF ${letters.length} LETTERS ${results.length === 1 ? "FOUND" : "FOUND"}`;

  emptyState.hidden = results.length !== 0;

  grid.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => open(Number(card.dataset.index)));
    card.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        open(Number(card.dataset.index));
      }
    });
  });
}

/* ---------------------------- */
/* Letter opening                */
/* ---------------------------- */

function open(index) {
  const data = letters[index];
  if (!data) return;

  currentLetter = index;

  numberEl.textContent = `LETTER ${String(index + 1).padStart(2, "0")}`;
  dateEl.textContent = data.date;
  personEl.textContent = data.person;
  letterEl.textContent = data.text;
  specialMark.textContent = data.special ? "FOR KEEPS" : "";
  songEl.textContent = data.song;
  artistEl.textContent = data.artist;

  // Eighteen visible paper variations, cycling across all 100 letters.
  paper.className = `paper paper-${index % 18}${data.elevated ? " elevated-letter" : ""}${data.special ? " special-letter" : ""}`;

  // Voice recordings are opt-in per letter. Keep the entire player hidden until
  // the browser confirms that the configured audio file can actually load.
  voiceAudio.pause();
  voiceAudio.removeAttribute("src");
  voiceAudio.load();
  voiceNote.hidden = true;
  voiceNote.style.display = "none";

  if (data.elevated && data.voiceRecording) {
    voiceTitle.textContent = data.voiceTitle || "A voice, kept here.";
    voiceDescription.textContent = data.voiceDescription || "A recording attached to this letter.";

    const showVoicePlayer = () => {
      voiceNote.hidden = false;
      voiceNote.style.display = "block";
    };

    const hideVoicePlayer = () => {
      voiceNote.hidden = true;
      voiceNote.style.display = "none";
    };

    voiceAudio.addEventListener("loadedmetadata", showVoicePlayer, { once: true });
    voiceAudio.addEventListener("canplay", showVoicePlayer, { once: true });
    voiceAudio.addEventListener("error", hideVoicePlayer, { once: true });
    voiceAudio.src = data.voiceRecording;
    voiceAudio.load();
  }

  spotifyFrame.innerHTML = "";
  if (data.spotifyId && data.spotifyId !== "PLACEHOLDER") {
    const iframe = document.createElement("iframe");
    iframe.src = spotifyEmbedUrl(data.spotifyId);
    iframe.title = `Spotify player for ${data.song} by ${data.artist}`;
    iframe.loading = "lazy";
    iframe.allow = "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture";
    iframe.allowFullscreen = true;
    spotifyFrame.appendChild(iframe);
    spotifyNote.textContent = "Press play in the Spotify player to listen while reading.";
  } else {
    spotifyFrame.innerHTML = `
      <div class="spotify-placeholder">SPOTIFY PLAYER PLACEHOLDER</div>
    `;
    spotifyNote.innerHTML =
      'Replace <code>spotifyId</code> in <code>script.js</code> with a Spotify track ID.';
  }

  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");

  // The paper fades/slides into the exact center of the viewport.
  requestAnimationFrame(() => paper.classList.add("visible"));
  paperRain();
}

function closeModal() {
  currentLetter = null;
  paper.classList.remove("visible");
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  document.getElementById("rain").innerHTML = "";
  voiceAudio.pause();
}

closeButton.addEventListener("click", closeModal);
backdrop.addEventListener("click", closeModal);

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && modal.classList.contains("show")) {
    closeModal();
  }
});

/* ---------------------------- */
/* Paper fall                    */
/* ---------------------------- */

function paperRain() {
  const rain = document.getElementById("rain");
  animationTimers.forEach(clearTimeout);
  animationTimers = [];
  rain.innerHTML = "";

  const amount = window.innerWidth < 600 ? 15 : 23;

  for (let i = 0; i < amount; i++) {
    const piece = document.createElement("div");
    piece.className = "confetti-paper";

    const left = Math.random() * 100;
    const drift = (Math.random() - 0.5) * 42 + "vw";
    const rotation = (Math.random() - 0.5) * 1000 + "deg";
    const delay = Math.random() * 180;
    const duration = 1350 + Math.random() * 1100;

    piece.style.left = `${left}vw`;
    piece.style.setProperty("--drift", drift);
    piece.style.setProperty("--rotation", rotation);
    piece.style.setProperty("--fall-time", `${duration}ms`);
    piece.style.animationDelay = `${delay}ms`;

    /* Slight size variation while keeping the pieces bond-paper sized */
    const scale = 0.72 + Math.random() * 0.48;
    piece.style.width = `${58 * scale}px`;
    piece.style.height = `${78 * scale}px`;

    rain.appendChild(piece);
  }

  animationTimers.push(setTimeout(() => {
    rain.innerHTML = "";
  }, 3000));
}

/* ---------------------------- */
/* Search                        */
/* ---------------------------- */

searchInput.addEventListener("input", event => {
  render(event.target.value);
});

/* Initial render */
render();
