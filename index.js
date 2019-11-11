import React from 'react';
import PropTypes from 'prop-types';

const FeelingDucky = ({ WebView, searchTerm, ...extraProps }) => (
  <WebView
    {...extraProps}
    source={{
      uri: typeof searchTerm === 'string' ? `https://duckduckgo.com/?q=!${encodeURIComponent(searchTerm.replace(/ +(?= )/g, '+'))}` : undefined,
    }}
  />
);

FeelingDucky.propTypes = {
  WebView: PropTypes.elementType.isRequired,
  searchTerm: PropTypes.string,
};

FeelingDucky.propTypes = {
  searchTerm: undefined,
};

export default FeelingDucky;
