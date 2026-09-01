import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "gym-progress-v1";

export interface ExerciseLog {
  done: boolean;
  weight: string;
}

// key = `${dateISO}:${sessionId}:${exerciseId}`
type ProgressMap = Record<string, ExerciseLog>;

function loadProgress(): ProgressMap {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as ProgressMap) : {};
  } catch {
    return {};
  }
}

function makeKey(dateISO: string, sessionId: string, exerciseId: string) {
  return `${dateISO}:${sessionId}:${exerciseId}`;
}

export function useProgress(dateISO: string, sessionId: string) {
  const [progress, setProgress] = useState<ProgressMap>(() => loadProgress());

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  const getLog = useCallback(
    (exerciseId: string): ExerciseLog => {
      const key = makeKey(dateISO, sessionId, exerciseId);
      return progress[key] ?? { done: false, weight: "" };
    },
    [progress, dateISO, sessionId],
  );

  const toggleDone = useCallback(
    (exerciseId: string) => {
      const key = makeKey(dateISO, sessionId, exerciseId);
      setProgress((prev) => {
        const current = prev[key] ?? { done: false, weight: "" };
        return { ...prev, [key]: { ...current, done: !current.done } };
      });
    },
    [dateISO, sessionId],
  );

  const setWeight = useCallback(
    (exerciseId: string, weight: string) => {
      const key = makeKey(dateISO, sessionId, exerciseId);
      setProgress((prev) => {
        const current = prev[key] ?? { done: false, weight: "" };
        return { ...prev, [key]: { ...current, weight } };
      });
    },
    [dateISO, sessionId],
  );

  return { getLog, toggleDone, setWeight };
}
