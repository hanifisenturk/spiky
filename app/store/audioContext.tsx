'use client';
import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useRef,
  useMemo,
} from 'react';

import {type AudioContext} from '@/types';

const createAudio = (src: string, loop: boolean = true) => {
  const audio = new Audio(src);
  audio.loop = loop;
  return audio;
};

const AudioContext = createContext<AudioContext>({} as AudioContext);

const AudioProvider = ({children}: {children: React.ReactNode}) => {
  // Get the initial values from local storage.
  const [isMusicPlaying, setIsMusicPlaying] = useState(() => {
    if (typeof window === 'undefined') return false;
    return JSON.parse(window.localStorage.getItem('music') || 'false');
  });
  const [isEffectPlaying, setIsEffectPlaying] = useState(() => {
    if (typeof window === 'undefined') return false;
    return JSON.parse(window.localStorage.getItem('sound') || 'true');
  });

  // Create the audio elements.
  const musicAudio = useRef<HTMLAudioElement | null>(null);
  const correctAnswerAudio = useRef<HTMLAudioElement | null>(null);
  const wrongAnswerAudio = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // initialize the audio elements.
    musicAudio.current = createAudio('/music.mp3');
    correctAnswerAudio.current = createAudio('/correct.mp3', false);
    wrongAnswerAudio.current = createAudio('/wrong.mp3', false);
  }, []);

  useEffect(() => {
    // Check if music is currently enabled.
    if (isMusicPlaying) {
      musicAudio.current?.play();
    } else {
      musicAudio.current?.pause();
    }
  }, [isMusicPlaying]);

  const toggleMusicHandler = useCallback(() => {
    // Toggle the music and save the new value to local storage.
    setIsMusicPlaying((prev: boolean) => {
      window.localStorage.setItem('music', JSON.stringify(!prev));
      return !prev;
    });
  }, []);

  const toggleEffectHandler = useCallback(() => {
    // Toggle the sound effects and save the new value to local storage.
    setIsEffectPlaying((prev: boolean) => {
      window.localStorage.setItem('sound', JSON.stringify(!prev));
      return !prev;
    });
  }, []);

  const playEffectHandler = useCallback(
    (isCorrect: boolean) => {
      // Check if sound effects are currently enabled.
      if (!isEffectPlaying) return;

      // Play the appropriate sound effect based on correctness.
      if (isCorrect === true) {
        // If the answer is correct, pause the wrong answer sound and play the correct answer sound.
        wrongAnswerAudio.current!.pause();
        correctAnswerAudio.current!.currentTime = 0;
        correctAnswerAudio.current!.play();
      } else {
        // If the answer is incorrect, pause the correct answer sound and play the wrong answer sound.
        correctAnswerAudio.current!.pause();
        wrongAnswerAudio.current!.currentTime = 0;
        wrongAnswerAudio.current!.play();
      }
    },
    [isEffectPlaying],
  );

  const value = useMemo(
    () => ({
      isMusicPlaying,
      isEffectPlaying,
      toggleMusicHandler,
      toggleEffectHandler,
      playEffectHandler,
    }),
    [
      isMusicPlaying,
      isEffectPlaying,
      toggleMusicHandler,
      toggleEffectHandler,
      playEffectHandler,
    ],
  );

  return (
    <AudioContext.Provider value={value}>{children}</AudioContext.Provider>
  );
};

const useAudioContext = () => useContext(AudioContext);

export {AudioProvider, useAudioContext};
