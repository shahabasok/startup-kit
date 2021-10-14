import {verifyLogin} from './shared/verifyLogin';
import {setAppNav, setLoginNav} from './navigation/navigation';
// import Notification from "./Services/notification";

const app = () => {
  // Notification.init();
  verifyLogin().then(isValid => {
    if (isValid) {
      setAppNav();
    } else {
      setLoginNav();
    }
  });
};

export default app;
