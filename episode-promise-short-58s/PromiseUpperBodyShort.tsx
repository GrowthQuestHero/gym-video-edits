import React from 'react';
import {AbsoluteFill, Audio, Composition, Img, OffthreadVideo, Sequence, interpolate, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';
import plan from './promise-short-edit.json';

// Reuses the inset/real-frame background pattern from UpperIceShort and the
// caption/sequence pattern from UpperBodyShortV2. Old episode files are untouched.
type Cut = (typeof plan.cuts)[number];
const clamp = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};
const font = 'Arial, Helvetica, sans-serif';

const Caption: React.FC<{cut: Cut}> = ({cut}) => {
  const frame = useCurrentFrame();
  const {width} = useVideoConfig();
  const k = width / 1080;
  const closing = cut.role === 'closing';
  const opacity = closing ? interpolate(frame, [0, 8], [0, 1], clamp) : interpolate(frame, [0, 7, cut.durationFrames - 7, cut.durationFrames - 1], [0, 1, 1, 0], clamp);
  const rise = interpolate(frame, [0, 10], [9, 0], clamp);
  return <div style={{position: 'absolute', top: 310*k, left: 74*k, width: 850*k, color: '#f7f7f2', opacity, transform: `translateY(${rise*k}px)`, pointerEvents: 'none'}}>
    <div style={{width: 78*k, height: 4*k, background: '#bdc9c5', marginBottom: 25*k}} />
    <div style={{whiteSpace: 'pre-line', font: `800 ${(closing || cut.role === 'hook' ? 80 : 67)*k}px ${font}`, lineHeight: 1.07, letterSpacing: -.8*k, textShadow: '0 3px 16px #0009'}}>{cut.caption}</div>
  </div>;
};

const Shot: React.FC<{cut: Cut}> = ({cut}) => {
  const {width} = useVideoConfig();
  const k = width / 1080;
  const scale = cut.displayWidth / cut.activeCrop.width;
  const frameWidth = cut.displayWidth*k;
  const frameHeight = cut.activeCrop.height*scale*k;
  const left = (cut.displayCenterX-cut.displayWidth/2)*k;
  const top = cut.displayCenterY*k-frameHeight/2;
  return <AbsoluteFill style={{background: '#10171c', overflow: 'hidden'}}>
    <Img src={staticFile(cut.background)} style={{width: '100%', height: '100%', objectFit: 'cover', filter: 'blur(48px) brightness(.23) saturate(.72)', transform: 'scale(1.14)'}} />
    <AbsoluteFill style={{background: 'linear-gradient(180deg,rgba(8,14,18,.6),rgba(8,14,18,.12) 50%,rgba(8,14,18,.78))'}} />
    <div style={{position: 'absolute', left, top, width: frameWidth, height: frameHeight, overflow: 'hidden', border: `${1*k}px solid #52615b`, boxShadow: '0 18px 70px #0008'}}>
      <OffthreadVideo src={staticFile(plan.source)} muted trimBefore={cut.sourceStartFrame} durationInFrames={cut.durationFrames}
        style={{position: 'absolute', left: -cut.activeCrop.x*scale*k, top: -cut.activeCrop.y*scale*k, width: 1280*scale*k, height: 720*scale*k, filter: cut.filter}} />
    </div>
    <div style={{position: 'absolute', left: 74*k, top: 169*k, color: '#c5d4ce', font: `700 ${27*k}px ${font}`, letterSpacing: 2.8*k}}>1% BETTER WITH BIBEK</div>
    <Caption cut={cut} />
    <div style={{position: 'absolute', left: 74*k, top: 1540*k, color: '#b9c7c1', font: `700 ${21*k}px ${font}`, letterSpacing: 2.5*k}}>{cut.role === 'hook' ? 'UPPER BODY / OPENING EXCERPT' : cut.role === 'closing' ? 'ONE SESSION. ANOTHER STEP.' : `UPPER BODY / ${cut.id}`}</div>
  </AbsoluteFill>;
};

export const PromiseShortStory: React.FC = () => <AbsoluteFill style={{background: '#10171c'}}>
  {plan.cuts.map((cut) => <Sequence key={cut.id} from={cut.timelineStartFrame} durationInFrames={cut.durationFrames} name={`${cut.id}. ${cut.name}`}><Shot cut={cut} /></Sequence>)}
  <Audio src={staticFile(plan.audio.file)} trimBefore={plan.audio.trimBefore} volume={(frame) => plan.audio.gain * interpolate(frame, [0, plan.audio.fadeInFrames, plan.totalFrames-plan.audio.fadeOutFrames-1, plan.totalFrames-1], [0, 1, 1, 0], clamp)} />
</AbsoluteFill>;

export const PromiseShortCompositions: React.FC = () => <>
  <Composition id="PromiseUpperBodyShort58s" component={PromiseShortStory} width={plan.width} height={plan.height} fps={plan.fps} durationInFrames={plan.totalFrames} />
  <Composition id="PromiseUpperBodyShortPreview" component={PromiseShortStory} width={plan.width} height={plan.height} fps={plan.fps} durationInFrames={plan.totalFrames} />
</>;
