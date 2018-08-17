import React from 'react';
import PropTypes from 'prop-types';

const TextInputGroup = ({
  icon,
  label,
  name,
  value,
  type,
  onChange,
  error // recebe a mensagem do erro definida no state
}) => {
  return (
    <div className="row">
      <div className="input-field">
        <i className="material-icons prefix">{icon}</i>
        <input
          id={name}
          name={name}
          type={type}
          className="validade"
          value={value}
          onChange={onChange}
        />
        <label htmlFor={name}>{label}</label>
        {error && (
          <span className="helper-text red-text" data-error={error}>
            {error}
          </span>
        )}
      </div>
    </div>
  );
};

TextInputGroup.propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string
};

TextInputGroup.defaultProps = {
  type: 'text'
};

export default TextInputGroup;
