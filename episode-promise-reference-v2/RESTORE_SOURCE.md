# Restore the original source on another machine

The ZIP omits only the large original footage file. It includes the composition, both replacement MP4s, prepared music, npm lockfile, and license record. Extract to a NEW directory to preserve existing projects.

Copy your uploaded original **I Kept a Promise to Myself Today.mp4** (11:45, 115,959,501 bytes) to:

`public/media/promise-episode/source.mp4`

Do not use the 3-minute finished video as this source. The original source SHA-256 must be:

`ddfed6a2d8879c1ae51925049552ba44a3ffbe3076e89451ba336ab5fe2937d7`

On macOS you can verify it with `shasum -a 256 public/media/promise-episode/source.mp4`.

Then run `npm ci`, `npm run lint`, and open the new composition with `npx remotion studio src/promise-reference-index.ts --no-open`. Use new output filenames for any separately requested future renders.
