import Mascot from './components/mascot';
import SettingsButton from './components/settingsButton';
import Views from './views';

export default function Home() {
  return (
    <main className="relative flex min-h-screen items-center justify-center  bg-backgroundColor px-8">
      <Views />
      <SettingsButton />
      <Mascot />
    </main>
  );
}
