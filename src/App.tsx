import { Suspense, useState } from 'react';
import Overlay from './components/Overlay.tsx';
import { FadeIn, LeftMiddle } from './layout/styles.ts';
import Bananas from './components/Bananas.tsx';

function App() {
  const [speed, set] = useState(1);
  return (
    <>
      <Suspense fallback={null}>
        <Bananas speed={speed} />
        <FadeIn />
      </Suspense>
      <Overlay />
      <LeftMiddle>
        <input type="range" min="0" max="10" value={speed} step="1" onChange={(e) => set(Number(e.target.value))} />
      </LeftMiddle>
    </>
  );
}

export default App;