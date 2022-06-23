import PropTypes from 'prop-types';
import Container from '../Container';

const Section = ({ children }) => (
  <section>
    <Container>{children}</Container>
  </section>
);

export default Section;

Section.propTypes = {
  nameForClass: PropTypes.string.isRequired,
};
