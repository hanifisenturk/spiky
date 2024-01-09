'use client';
import Toggle from './ui/toggle';

import {useAudioContext} from '../store/audioContext';

const AppSettings = () => {
  const {
    toggleMusicHandler,
    toggleEffectHandler,
    isMusicPlaying,
    isEffectPlaying,
  } = useAudioContext();

  return (
    <>
      <div>
        <p className="text-xl font-semibold mb-4 mt-8">Audio</p>
        <div className="flex justify-between mb-4">
          <p>Sound Effects</p>
          <Toggle
            onChange={toggleEffectHandler}
            defaultChecked={isEffectPlaying}
          />
        </div>

        <div className="flex justify-between">
          <p>Music</p>
          <Toggle
            onChange={toggleMusicHandler}
            defaultChecked={isMusicPlaying}
          />
        </div>
      </div>
    </>
  );
};

export {AppSettings, AppSettings as default};
