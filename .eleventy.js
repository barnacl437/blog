module.exports = function(eleventyConfig) {
  
    eleventyConfig.addFilter('readableDate', (dateObj, options) => {
      if (!dateObj) {
        return '';
      }
  
      // Default options if none are provided
      const defaultOptions = { year: 'numeric', month: 'long', day: 'numeric' };
      const combinedOptions = { ...defaultOptions, ...options };
  
      return dateObj.toLocaleDateString(undefined, combinedOptions);
    });
  

  };