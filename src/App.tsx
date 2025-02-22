import './App.css';
import darkLogoUrl from './assets/wd_full.svg';
import SVG from 'react-inlinesvg';

function App() {
  return (
    <div className='App'>
      <div className='content'>
        <SVG
          src={darkLogoUrl}
          width={200}
          title={'wamafi digital'}
        />
        {/* <p>games &middot; data &middot; art</p> */}
        <p>contact: <a href='mailto:walker@wamafi.com'>walker@wamafi.com</a></p>
      </div>
    </div>
  )
}

export default App
