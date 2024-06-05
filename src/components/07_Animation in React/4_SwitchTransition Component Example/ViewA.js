import { CSSTransition } from 'react-transition-group';
import './styles.css';
const ViewA = () => (
  <CSSTransition
    key='a'
    timeout={400}
    classNames="fade"
  >
    <div>View A</div>
  </CSSTransition>
);

   
export default ViewA;  