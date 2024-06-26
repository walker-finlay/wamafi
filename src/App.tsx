import * as React from 'react';
import './App.css';
import darkLogoUrl from './assets/wd_full_dark.png';
import lightLogoUrl from './assets/wd_full_light.png';



function App() {
  const [darkMode, setDarkMode] = React.useState<boolean>(false);


  function getPreferredColorScheme(): boolean {
    if (window.matchMedia) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    return true;
  }

  function updateColorScheme() {
    setDarkMode(getPreferredColorScheme());
  }

  React.useEffect(() => {
    if (window.matchMedia) {
      const colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
      colorSchemeQuery.addEventListener('change', updateColorScheme);
      updateColorScheme();
    }

    return () => {
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', updateColorScheme);
    }
  }, []);

  return (
    <div>
      <img src={darkMode ? darkLogoUrl : lightLogoUrl} width={200} />
    </div>
  )
}

export default App
