# Promise episode — reference intro/outro replacement

Scope: replace only the generated intro and outro cards. Preserve the original completed MP4 and its source composition. No changes to the opening hook or any workout excerpt's source, duration, order, captions, framing, or grade.

## Exact timing

| New output time | Content | Mapping |
|---|---|---|
| 0:00–0:06 | Unchanged opening hook | Original timeline 0:00–0:06 |
| 0:06–0:12.2 | Reference_Intro_Final.mp4 | Complete 186-frame asset at normal speed |
| 0:12.2–2:59.2 | Unchanged workout body | Original timeline 0:08–2:55 |
| 2:59.2–3:06.2 | Reference_Outro_Final.mp4 | Complete 210-frame asset at normal speed |

Final: 5,586 frames, 30 fps, 1280×720. The 1920×1080 references use contain framing at the same 16:9 aspect ratio: uniform 2/3 scaling, no stretch or crop. No extra grade, caption, or channel overlay is applied to either uploaded reference video.

## Audio

Reference video audio plays unmodified at gain 1. The old bed is mounted only in the hook and workout sections, never during either replacement asset. Track source timing, gain, trims, and existing fades are carried over from the original timeline. A 3-frame/100 ms bed fade at replacement boundaries prevents clicks without overlapping the embedded tracks. The original reference audio is quiet (about −28.68 LUFS intro and −32.07 LUFS outro); its supplied level is preserved.

The old intro's 2 seconds and old outro's 5 seconds are removed. Native reference durations add 6.2 seconds overall. The first workout cut and every later exercise move 4.2 seconds later in output time; their content and durations do not change.

## Editable files

New entry point: `src/promise-reference-index.ts`.

- `PromiseReferenceReplacement.tsx`: replacement assembly and isolated music sections.
- `promise-reference-edit.json`: card assets, exact frame map, preview windows, and preservation information.
- `PromiseReferenceVisual.tsx`: visual-only derivative of the original composition. Its Shot and Caption implementations are byte-identical; its music bed is intentionally omitted so audio can be gated separately.
- The original `PromiseEpisode.tsx`, `promise-edit.json`, and `promise-index.ts` remain unchanged. The original finished MP4's SHA-256 remains `47d76a9e74f342b5528e6a93049aaaa675391ab4f0e20c70a1441e94f57375c0`.

Reference assets are copied unmodified into `public/media/promise-reference/`. The original source and music remain under their existing paths. The editable ZIP is a fresh project snapshot including all composition source, both reference MP4s, prepared music WAVs, and the npm lockfile. The large original source video is preserved in the cloud but excluded from this ZIP. To use the ZIP on another machine, copy that same original video into public/media/promise-episode/source.mp4 and verify its SHA-256 as described in RESTORE_SOURCE.md. You can also copy the new episode files into the existing editor without replacing its original composition.

## Render and verification

Exactly one opening/ending preview and one new final are intended. Preview: 19.2 seconds, sampling output 0:04–0:14.2 and 2:57.2–3:06.2. It includes both entire reference assets and their adjacent transitions. The final uses a new filename: `I_Kept_a_Promise_Reference_V2.mp4`.

Run from the existing project directory, choosing new output names for any separately requested later revision:

```sh
npm run lint
npx remotion render src/promise-reference-index.ts PromiseReferencePreview <NEW-preview.mp4> --codec=h264 --audio-codec=aac --scale=0.5 --concurrency=1
npx remotion render src/promise-reference-index.ts PromiseReferenceFinal <NEW-final.mp4> --codec=h264 --audio-codec=aac --sample-rate=48000 --audio-bitrate=192k --crf=18 --concurrency=4
```

The current cloud renderer uses `/usr/bin/chromium` with `--browser-executable=/usr/bin/chromium --gl=angle`. On another machine Remotion may use its own installed browser.

QC will record actual results separately: full decode/frame/duration checks, old-file hashes, exercise invariance, matching reference pictures, and a waveform comparison proving the reference intervals contain their embedded audio without the old music bed. Embedded asset soundtrack licensing is not newly established here; the supplied assets are used as requested.
