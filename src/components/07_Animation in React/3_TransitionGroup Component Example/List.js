import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './styles.css';
 
const List = ({ items }) => (
  <TransitionGroup>
    {items.map(item => (
      <CSSTransition
        key={item}
        timeout={400}
        classNames="fade"
      >
     <div>{item}</div>
      </CSSTransition>
    ))}
  </TransitionGroup>
);

export default List;