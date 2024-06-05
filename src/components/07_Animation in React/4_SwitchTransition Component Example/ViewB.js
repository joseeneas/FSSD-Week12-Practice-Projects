import { CSSTransition } from 'react-transition-group';
import './styles.css';

const ViewB = () => (
    <CSSTransition
      key='b'
      timeout={400}
      classNames="fade"
    >
      <div>View B</div>
    </CSSTransition>
  );
   
export default ViewB;  