module.exports = function(eleventyConfig) {
  // Date formatting filter
  eleventyConfig.addFilter('readableDate', (dateObj, formatOpts = {}) => {
    if (!dateObj) return '';
    
    const defaults = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return dateObj.toLocaleDateString('en-US', { ...defaults, ...formatOpts });
  });

  // Primary posts collection with reliable sorting
  eleventyConfig.addCollection("sortedPosts", function(collectionApi) {
    return collectionApi.getFilteredByTag("post")
      .sort((a, b) => {
        // Fallback to file creation time if date missing
        const dateA = a.date || a.inputPath.stats?.birthtime || new Date(0);
        const dateB = b.date || b.inputPath.stats?.birthtime || new Date(0);
        
        // Newest first (b - a for descending)
        return dateB - dateA;
      });
  });

  // Alternative strict date-only sorting (remove if not needed)
  eleventyConfig.addCollection("strictlySortedPosts", function(collectionApi) {
    return collectionApi.getFilteredByTag("post")
      .filter(post => post.date) // Only posts with explicit dates
      .sort((a, b) => b.date - a.date); // Pure date sorting
  });
};