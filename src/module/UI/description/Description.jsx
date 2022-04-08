import React from 'react';
import propTypes from "prop-types";
import classNames from "classnames";


const Description = ({className, isPrimary, isSecondary, children, ...attrs}) => {

  const classes = classNames('ui-text', className, {
    isPrimary,
    isSecondary,
  })
  //TODO using contentEditable because data not send to server
  return (
    <p className={classes} {...attrs} contentEditable suppressContentEditableWarning spellCheck={true}>
      {children}
    </p>
  );
};

Description.propTypes = {
  isPrimary: propTypes.bool,
  isSecondary: propTypes.bool,
  className: propTypes.string,
  children: propTypes.node.isRequired,
}

Description.defaultProps = {
  isPrimary: false,
  isSecondary: false,
  className: "",
}


export default Description;
