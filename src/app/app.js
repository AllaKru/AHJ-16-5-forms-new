// TODO: write code here
import RegisterForm from './components/RegisterForm/RegisterForm';
import Tooltip from './components/Tooltip/Tooltip';

const registerForm = new RegisterForm('.btn', new Tooltip());
window.registerForm = registerForm;
