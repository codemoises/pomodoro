import { PomodoroTimer } from "./components/pomodoro-timer";

export default function App(): JSX.Element {
    return (
        <div className="App">
            <PomodoroTimer defaultPomodoroTime={1500} />
        </div>
    );
}