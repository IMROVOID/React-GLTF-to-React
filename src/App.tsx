import { Suspense } from 'react';
import Overlay from './components/Overlay.tsx';
import { FadeIn } from './layout/styles.ts';
import Bananas from './components/Bananas.tsx';

function App() {
  return (
    <>
      <Suspense fallback={null}>
        <Bananas />
        <FadeIn />
      </Suspense>
      <Overlay />
    </>
  );
}

export default App;