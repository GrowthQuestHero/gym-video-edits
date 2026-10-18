# Reference replacement — final QC

Completed: exactly one 19.2-second opening/ending preview and one new final export. No existing MP4 or cover was overwritten. Three real-frame thumbnails were also delivered separately, each verified as 1280×720 JPEG.

## Replacement and timing

Only the generated 2-second intro and 5-second outro were replaced. The supplied reference videos play complete at normal speed: 186 frames / 6.2 seconds for the intro and 210 frames / 7 seconds for the outro. Total: 5,586 frames / 186.2 seconds at 30 fps, 1280×720 H.264 with stereo 48 kHz AAC.

The intro occupies output 0:06–0:12.2; the workout resumes at 0:12.2. The outro occupies 2:59.2–3:06.2. Both 1920×1080 assets are uniformly scaled by 2/3 using contain framing. Their picture and embedded audio are retained, with no extra overlays or grade.

## Original content preservation

All 16 footage excerpts retain the same source times, durations, captions, grade, and order. Original Shot and Caption implementations are byte-identical in the visual derivative. The original composition files and final MP4 are hash-verified unchanged.

All 5,190 retained hook/workout frames were compared against the previous encoded final in sequence: mean SSIM 0.99980780, minimum SSIM 0.994314. This supports the unchanged content and timing; minor pixel differences are from lossy re-encoding.

The original finished MP4 remains at SHA-256 `47d76a9e74f342b5528e6a93049aaaa675391ab4f0e20c70a1441e94f57375c0`. The existing cover and all three delivered thumbnails also pass preservation hashes.

## Audio isolation

The existing bed is structurally absent during both replacement assets. A 100 ms bed fade at boundaries prevents clicks; the embedded audio is kept at its supplied gain of 1, including its quiet level. The original track clock, gains and envelopes are otherwise retained across the workout.

Waveform comparisons against the supplied asset audio, excluding only 250 ms at each end:

- Intro: correlation 0.99992681, fitted gain 0.998235, residual SNR 38.34 dB.
- Outro: correlation 0.99996068, fitted gain 0.999261, residual SNR 41.04 dB.

These results match the supplied embedded tracks within AAC encoding differences; no added music bed is detected. Whole-file loudness: -18.02 LUFS, true peak -2.94 dBTP; 0 clipped samples.

## File verification

Full video/audio decode passed with all 5,586 frames and no errors. Preview decode and 576-frame duration validation passed. Scaled reference pictures were numerically compared against the preview; final opening, replacement joins, representative body frames, outro and last frame were visually checked. Source assets remain checksum-identical to their uploads.

Encoding retains the existing Remotion v4 JPEG/default full-range pipeline: yuvj420p / pc / bt470bg. No extra color change was introduced to the workout.

TypeScript and ESLint passed with zero errors. The same two pre-existing warnings remain in the unrelated UpperBodyShortV2 component.

Final filename: `I_Kept_a_Promise_Reference_V2.mp4`.

Final size: 61,868,100 bytes.

Final SHA-256: `2ca3e580a3498448116280f80aa294a3bd2e138cb2518dbc6b1f8a49df20eca1`.

Limits: sampled final pictures were reviewed; the entire file was decoded and all retained workout frames were compared computationally. Reference soundtrack provenance is supplied by the uploaded assets, not newly verified here. Nothing was published to YouTube.
