import { useMemo, useState } from "react";
import { program } from "./data/program";
import { useProgress } from "./hooks/useProgress";
import "./App.css";

function todayISO() {
  return new Date().toISOString().slice(0, 10);
}

function App() {
  const [sessionId, setSessionId] = useState(program[0].id);
  const [dateISO, setDateISO] = useState(todayISO());

  const session = useMemo(
    () => program.find((s) => s.id === sessionId) ?? program[0],
    [sessionId],
  );

  const { getLog, toggleDone, setWeight } = useProgress(dateISO, session.id);

  const totalExercises = session.groups.reduce((n, g) => n + g.exercises.length, 0);
  const doneCount = session.groups.reduce(
    (n, g) => n + g.exercises.filter((e) => getLog(e.id).done).length,
    0,
  );
  const progressPct = totalExercises === 0 ? 0 : Math.round((doneCount / totalExercises) * 100);

  return (
    <div className="app">
      <header className="app-header">
        <h1>Suivi Musculation</h1>
        <input
          type="date"
          value={dateISO}
          onChange={(e) => setDateISO(e.target.value)}
          className="date-input"
        />
      </header>

      <nav className="session-tabs">
        {program.map((s) => (
          <button
            key={s.id}
            className={`session-tab ${s.id === sessionId ? "active" : ""}`}
            onClick={() => setSessionId(s.id)}
          >
            {s.label}
          </button>
        ))}
      </nav>

      <div className="session-focus">{session.focus}</div>

      <div className="progress-bar">
        <div className="progress-bar-fill" style={{ width: `${progressPct}%` }} />
        <span className="progress-bar-label">
          {doneCount}/{totalExercises} exercices
        </span>
      </div>

      <main className="session-content">
        {session.groups.map((group) => (
          <section key={group.title} className="group">
            <h2>{group.title}</h2>
            <ul className="exercise-list">
              {group.exercises.map((ex) => {
                const log = getLog(ex.id);
                return (
                  <li key={ex.id} className={`exercise-item ${log.done ? "done" : ""}`}>
                    <img className="exercise-image" src={ex.image} alt={`Démonstration : ${ex.name}`} loading="lazy" />
                    <label className="exercise-check">
                      <input
                        type="checkbox"
                        checked={log.done}
                        onChange={() => toggleDone(ex.id)}
                      />
                      <span className="exercise-name">{ex.name}</span>
                    </label>
                    <div className="exercise-meta">
                      <span>{ex.sets} séries</span>
                      <span>{ex.reps} rép.</span>
                      <span>{ex.rest} repos</span>
                    </div>
                    {ex.note && <div className="exercise-note">{ex.note}</div>}
                    <input
                      type="text"
                      inputMode="decimal"
                      placeholder="Poids (kg)"
                      className="weight-input"
                      value={log.weight}
                      onChange={(e) => setWeight(ex.id, e.target.value)}
                    />
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </main>
    </div>
  );
}

export default App;
