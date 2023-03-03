import classes from './App.module.scss';
import { GlobalStateProvider } from '@/contexts/GlobalState';

/* Pages -------------------------------------------------------------------- */

// import SignIn from '@/pages/SignIn/SignIn';
import SignUp from '@/pages/SignUp/SignUp';
// import { useToggle } from '@/hooks/useToggle';

/* Component ---------------------------------------------------------------- */

function App() {
  <GlobalStateProvider>
    <div className={classes.App}>
      <SignUp />
    </div>
  </GlobalStateProvider>;
}

export default App;
