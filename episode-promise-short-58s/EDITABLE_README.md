# Promise Upper Body Short — 58 seconds

Separate episode derivative: **1080×1920, 30 fps, 1,740 frames / exactly 58 seconds**. Original long videos and their existing compositions remain unchanged.

## Creative and source map

Strong machine-fly opening excerpt → beginning with barbell bench press → incline dumbbell press → flat dumbbell press → seated shoulder press → machine fly → cable pressdown → final effort → **1% BETTER EVERY DAY.**

The Short uses only the verified source intervals already present in the Promise episode. See Promise_Short_Cut_Map.json and Promise_Short_Cut_Map.md for the exact parent long-cut IDs, original source frames, output frames, captions, and grade filters. Only selected-shot framing samples were examined; the full raw recording was not reanalyzed.

All footage plays at normal speed. No new weights, rep counts, personal results, dialogue, training claims, or ice-bath scene. Existing camera audio is muted in every video element.

## Framing and style

Reuses the existing UpperIceShort inset/background pattern and UpperBodyShortV2 sequence/caption pattern. The original example files were not modified. Foreground picture scales uniformly: full landscape image for wide shots; removal of existing black pillars for square-source shots. No full-height fill crop is used. Brief captions sit above the movement and away from typical right/bottom Shorts controls. Animation is limited to short caption fades and a small text rise.

The original Promise per-section grade filters are reused unchanged. Backgrounds are real selected-shot midpoints, blurred and darkened. The last five seconds keep actual continuing footage and a readable closing message; the picture never fades to a blank card.

Limitation: the original source is compressed 1280×720. A 1080×1920 canvas does not recover missing source detail. Wide footage remains in a landscape inset to preserve all visible movement. Framing already missing from the source cannot be reconstructed.

## Audio

Approved track: **Deep Urban — Eugenio Mininni**, Mixkit music ID 623. The already approved normalized working WAV is reused at gain 0.9. Opening fade: 24 frames / 0.8 s. Ending fade: 60 frames / 2 s. No camera audio, new speech, reference-card soundtrack, or added SFX. The original Mixkit rights record is included.

## Editing

Entry: `src/promise-short-index.ts`.

Composition: `PromiseUpperBodyShort58s`.

- `src/PromiseUpperBodyShort.tsx`: footage, captions, layout, and music.
- `src/promise-short-edit.json`: authoritative editable cut map.
- `public/media/promise-short-58/`: actual-frame backgrounds.
- `public/media/promise-episode/deep-urban-normalized.wav`: prepared licensed music.

The editable ZIP excludes the large original recording. Copy your original uploaded **I Kept a Promise to Myself Today.mp4** (11:45, 115,959,501 bytes) into:

`public/media/promise-episode/source.mp4`

Use the original source, not a finished long export. SHA-256:

`ddfed6a2d8879c1ae51925049552ba44a3ffbe3076e89451ba336ab5fe2937d7`

Then `npm ci` and `npm run lint`. Open with `npx remotion studio src/promise-short-index.ts --no-open`. Extract to a new folder to preserve your old projects.

For a separately requested future revision, choose fresh output filenames:

```sh
npx remotion render src/promise-short-index.ts PromiseUpperBodyShortPreview NEW_preview.mp4 --codec=h264 --audio-codec=aac --scale=0.5 --concurrency=1
npx remotion render src/promise-short-index.ts PromiseUpperBodyShort58s NEW_final.mp4 --codec=h264 --audio-codec=aac --sample-rate=48000 --audio-bitrate=192k --crf=18 --concurrency=4
```

For exact MP4 presentation duration after a future render, run:

```sh
python scripts/normalize_mp4_duration.py NEW_final.mp4
```

This portable helper requires Python 3 and FFprobe. It removes only the known 5 ms AAC presentation tail from the MP4 duration metadata, verifies that all encoded media bytes are identical, and reports 58.000000 seconds for video, audio presentation and container. It refuses unexpected formats or durations. It does not re-encode the video or audio.

This task renders exactly one full-length low-resolution preview, validates it, and then exports the final MP4 once. Cover generation is a still image, not another video render. The cloud render uses the installed Chromium with `--browser-executable=/usr/bin/chromium --gl=angle`.

## Delivery

- Promise_Upper_Body_Short_58s.mp4
- Promise_Short_Cover.jpg — actual Short frame 45, 1080×1920 JPEG.
- Promise_Short_Editable.zip
- PromiseUpperBodyShort.tsx, promise-short-index.ts and promise-short-edit.json — direct editable files.
- Promise_Short_Cut_Map.json and Promise_Short_Cut_Map.md
- Shorts_Packaging.md — three truthful titles, recommendation, description, hashtags, tags.
- Promise_Short_Preview.mp4
- QC_Report.md — actual completed checks and limitations.

No YouTube upload/publication is part of this work. GitHub delivery provides download files only.
