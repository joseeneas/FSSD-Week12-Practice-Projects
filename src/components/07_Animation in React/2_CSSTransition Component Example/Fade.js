import { CSSTransition } from 'react-transition-group';
import './styles.css'

const Fade = ({ in: inProp }) => (
  <CSSTransition
    in={inProp}
    timeout={400}
    classNames="fade">
<div>An example of a fade Transition!</div>
</CSSTransition> );

export default Fade;