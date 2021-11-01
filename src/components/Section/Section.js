import React from "react";
import PropTypes from 'prop-types'


function Section(props) {
    const { title, children } = props;
    return (
      <>
        <h1>{title}</h1>
        {children}
      </>
    );
  }
  
  Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
  };
  
  export default Section;