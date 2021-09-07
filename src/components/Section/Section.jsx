import './Section.css';
import PropTypes from 'prop-types';

function Section({ title, children }) {
  return (
    <>
      {title && <h2>{title}</h2>}
      {children}
    </>
  );
}

export default Section;

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
