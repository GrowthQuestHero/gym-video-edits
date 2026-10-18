# Promise Upper Body Short — final QC

**Verified: exactly 58 seconds / 1,740 video frames, 1080×1920, 30 fps, H.264 with stereo 48 kHz AAC.**

## Render accounting and source preservation

One full 58-second low-resolution preview was rendered at 540×960, validated, and followed by exactly one final 1080×1920 render. Still images and cover conversion are not additional video renders. The final composition and all its inputs match the preview's saved hashes. Finalization shortened the MP4 audio presentation edit from 58.005 to exactly 58.000 seconds by updating three duration metadata fields; the entire encoded media payload remained byte-identical. There was no re-encoding or additional render.

Both finished long videos and their protected source composition files retain their original SHA-256 hashes. The Short is a separate entry point and output. No full raw-recording reanalysis was performed: selections came from the verified episode cut plan, with only selected-shot framing samples checked.

## Verified editorial story

Machine-fly workout hook → beginning of session with barbell bench press → incline dumbbell press → flat dumbbell press → seated shoulder press → machine fly → cable pressdown → final effort → exact closing message **1% BETTER EVERY DAY.**

All nine excerpts are bounded subsets of this episode's approved long cut map. Source frames, parent cut IDs, output frames, grade and captions are in Promise_Short_Cut_Map.json. There are no weights, rep totals, results, new dialogue, science claims, or ice-bath scene. Final two excerpts are source-contiguous and the last frame retains real footage and the closing caption.

## Framing and picture

Each foreground image uses a single proportional scale. Wide shots retain the complete 16:9 image; square-source shots remove existing black pillars only. New captions sit above the footage and clear the usual right/bottom Shorts controls. Opening, selected-shot endpoints, every caption midpoint, ending and last frame were visually checked.

Full video/audio decode completed with all 1,740 frames and no errors. Every decoded frame also underwent darkness/uniformity checks in both the full picture and a region always inside the active footage. This prevents a blurred background from hiding a missing foreground video.

- Full-picture blank/flat flags: 0 / 1,740; minimum sampled mean 36.81, standard deviation 42.34.
- Active-footage blank/flat flags: 0 / 1,740; minimum sampled mean 88.97, standard deviation 45.33.
- Pixel format/color metadata: yuvj420p / pc / bt470bg, retaining the existing Remotion v4 JPEG/default pipeline.

## Audio

Only the approved Deep Urban by Eugenio Mininni (Mixkit 623) is used. Every footage video is muted. The existing normalized music WAV plays continuously at gain 0.9 with 24-frame / 0.8 s opening and 60-frame / 2 s ending fades.

Measured final audio: -17.91 LUFS, -6.02 dBTP, -6.37 dBFS decoded sample peak, 0 clipped float samples. Audio is finite and present. Video, AAC presentation and MP4 container durations are all exactly 58.000000 seconds; video contains exactly 1,740 frames. The final AAC codec packet may contain inaudible padding outside the presentation timeline.

The decoded music waveform matches the approved source/envelope: correlation 0.9984407, fitted gain 0.992305, residual SNR 25.05 dB after accounting for -16 samples (-0.333ms) of codec/resampler alignment. This alignment is a verification measurement; the media was not altered or rerendered.

## Playback and cover

Chromium opened the actual final MP4, advanced at normal 1× speed, sought through all nine sections, and reached a clean ended state without a media error. Test autoplay was muted; audible content was verified separately by full audio decode, loudness, waveform comparison and fade measurements.

Cover: Promise_Short_Cover.jpg, 1080×1920 JPEG, based on actual Short frame 45 / 1.5 s (verified original source frame 14745 / 491.5 s). No generated or retouched person. Packaging contains exactly three truthful title options, one recommendation, description, hashtags and comma-separated tags.

## Limits

The source is compressed 720p. Wide shots use insets to preserve movement, and the vertical canvas cannot recover extra detail or camera framing already absent from the source. The editable ZIP requires the same original source MP4 at its documented path; the large original footage is excluded from the ZIP. These limits do not block the finished MP4. No critical unresolved export, audio, duration or blank-frame issue was found. Nothing was published to YouTube.

Final SHA-256: 78a03822ca82503d5a03fad6f7338377d1de27cde457a81617b5b6aa23445412
