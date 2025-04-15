module.exports = function(eleventyConfig) {
  // Add 'readableDate' filter
  eleventyConfig.addFilter('readableDate', (dateObj, options) => {
    if (!dateObj) {
      return '';
    }

    // Default options if none are provided
    const defaultOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const combinedOptions = { ...defaultOptions, ...options };

    return dateObj.toLocaleDateString(undefined, combinedOptions);
  });

  // Add 'sortedPosts' collection (inside module.exports!)
  eleventyConfig.addCollection("sortedPosts", function(collectionApi) {
    return collectionApi.getFilteredByTag("post")
      .sort((a, b) => {
        const dateA = a.date || a.inputPath.stats.birthtime;
        const dateB = b.date || b.inputPath.stats.birthtime;
        return dateB - dateA; // Newest first
      });
  });
}; // <-- Closing brace for module.exports