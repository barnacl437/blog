module.exports = function(eleventyConfig) {
  // European-style date formatter (DD/MM/YYYY)
  eleventyConfig.addFilter('readableDate', (dateObj) => {
    if (!(dateObj instanceof Date)) {
      console.warn('Invalid date:', dateObj);
      return '';
    }
    
    const day = String(dateObj.getDate()).padStart(2, '0');
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    const year = dateObj.getFullYear();
    
    return `${day}/${month}/${year}`;
  });

  // Reliable newest-first sorting
  eleventyConfig.addCollection("sortedPosts", function(collectionApi) {
    const posts = collectionApi.getFilteredByTag("post");
    
    return posts.sort((a, b) => {
      // Convert all dates to timestamps for reliable comparison
      const getValidDate = (post) => {
        if (post.date instanceof Date) return post.date;
        if (typeof post.date === 'string') return new Date(post.date);
        return new Date(post.inputPath.stats?.birthtime || 0);
      };
      
      const dateA = getValidDate(a);
      const dateB = getValidDate(b);
      
      return dateB.getTime() - dateA.getTime(); // Newest first
    });
  });
};