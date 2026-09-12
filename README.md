# The Letters — TTPD-inspired archive

A dark, distressed, typewriter-style personal letter archive inspired by the mood of *The Tortured Poets Department* — not an official Taylor Swift site.

## Current version
- Classic homepage/card arrangement retained
- Original dark gray/black homepage background retained
- 18 paper variations, now mostly dark ink/night/charcoal designs
- Centered letter modal with direct opening (no envelope animation)
- Falling bond-paper effect retained
- 100 individually editable letter objects in `script.js`
- 15 elevated letters with expanded archival styling
- Optional voice-recording player for each of the 15 elevated letters
- Voice player stays completely hidden unless its configured audio file loads successfully
- Search across letters
- Spotify placeholders
- Compact, centered mobile/tablet reading view

## Easy editing
### Homepage — `index.html`
Edit the header text near the top of the file.

### Letters — `script.js`
Each of the 100 letters is written out separately. Edit:
- `person`
- `date`
- `song`
- `artist`
- `spotifyId`
- `keywords`
- `preview`
- `text`

For the 15 elevated letters (`PERSON 01` through `PERSON 15`), you can also edit:
- `voiceRecording`
- `voiceTitle`
- `voiceDescription`

## Voice recordings — easiest GitHub setup
You do **not** need an `audio` folder.

Put your MP3 files directly beside `index.html`, `style.css`, and `script.js` in the GitHub repository:

```text
index.html
style.css
script.js
letter-01.mp3
letter-02.mp3
letter-03.mp3
...
letter-15.mp3
```

The 15 elevated letters are already configured like this:
- PERSON 01 → `letter-01.mp3`
- PERSON 02 → `letter-02.mp3`
- ...
- PERSON 15 → `letter-15.mp3`

You **do not** have to upload all 15 recordings. If a particular MP3 is not present, its voice player stays hidden automatically.

To add a recording on GitHub:
1. Open your repository.
2. Click **Add file → Upload files**.
3. Drag the MP3 into the upload area.
4. Make sure it appears in the repository root beside `index.html`.
5. Commit the change.

The website waits for the audio file to load successfully before showing the voice player, so letters without recordings will not show a brief or broken player.

Recommended formats: MP3, M4A, or OGG. Keep recordings reasonably compressed for GitHub Pages.

## Paper variations
The paper style cycles through 18 designs automatically. Most are intentionally dark; six lighter archival sheets are mixed in for contrast. To control a specific letter's look, change the `paper-${index % 18}` logic in `script.js` or edit the CSS classes in `style.css`.

## GitHub Pages
Upload/extract the site files (`index.html`, `style.css`, `script.js`) and any MP3 recordings into the root of your repository, commit them, and refresh the Pages site. Use Ctrl+Shift+R for a hard refresh if an old version is cached.
