# Final QC report — Promise episode

Status: completed and verified within the checks below. No publication performed.

## Render accounting

Exactly one 15-second MP4 preview and one 3:00 final MP4 were rendered. Static composition checks and the cover are still images, not additional video renders. The full render began only after preview review. Original source video, audio files, presets, and existing project components were preserved.

## Final MP4

- H.264, 1280×720, progressive 30/1 fps, yuvj420p.
- Color metadata: full-range pc / bt470bg, from the preserved Remotion v4 JPEG/default pipeline; this matches the reviewed preview.
- 5,400 video frames; 180.000000 seconds.
- Stereo AAC, 48000 Hz; audio stream duration 180.011000 seconds (AAC padding may extend audio slightly).
- Integrated loudness -18.08 LUFS; true peak -2.95 dBTP; decoded sample peak -2.97 dBFS; 0 clipped 16-bit decoded samples; loudness range 5.60 LU.
- Full video/audio decode completed without errors; decoder reached all 5,400 frames and end-of-file.
- 19 rendered samples reviewed: every timeline event plus the final frame. Opening text, middle/inset framing, labels, closing transition, and last-frame brand card were checked. See review/final-contact.jpg.
- Music-only soundtrack, as explicitly requested. No dialogue or action-synchronous sound effect was added; original camera audio is absent. Final measurements establish audio is present and has headroom.
- SHA-256: 47d76a9e74f342b5528e6a93049aaaa675391ab4f0e20c70a1441e94f57375c0
- File size: 60,329,358 bytes.

## Preview and preflight

The single preview contains five windows from the exact final timeline and passed full decode, 450-frame / 15-second / 640×360 validation, visual sample checks, and audio measurement. A sampler intentionally jumps between timeline windows; it is not a standalone trailer. The final timeline/composition was not changed after preview review.

Source checksum, every cut's bounds, contiguous output timing, no repeated source frames, referenced music, retained license record, and fresh render destinations passed preflight. TypeScript and ESLint completed with zero errors. Two warnings were present before changes in the unrelated UpperBodyShortV2.tsx; the new episode files introduced no lint errors.

## Source and project preservation

Source SHA-256: ddfed6a2d8879c1ae51925049552ba44a3ffbe3076e89451ba336ab5fe2937d7. All five uploaded video parts and the uploaded ZIP matched their manifest checksums. Reassembled video was not re-encoded or overwritten. All original extracted archive members were byte-compared against the upload before rendering and checked again at delivery. New episode configuration/entry points were added separately.

## Cover and packaging

Promise_Cover.jpg uses actual source frame 14,745 (8:11.5), with typography and a restrained gradient. No generated face/body or fake workout detail. YouTube_Packaging.md supplies the creator's original title theme, accurate exercise descriptions, usable chapter times of at least ten seconds, and credits for the two music tracks actually used. No ice-bath, weights, reps, science, transformation, or health-benefit claim was added.

## Limits

The footage is an already compressed 720p source; native output resolution is retained. Full technical decode and sampled visual review are verified; this is not a claim that a human watched every second in real time. Meaningful-speech exclusion follows the creator's explicit confirmation. The supplied Mixkit rights record was retained; no new legal determination is claimed. Final playback preference and publication remain with the creator.
