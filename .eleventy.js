module.exports = function(eleventyConfig) {
  // passthru copy
  eleventyConfig.addPassthroughCopy("bundle.css");
  eleventyConfig.addPassthroughCopy("./assets");

  eleventyConfig.addFilter("readableDate", dateObj => {
    // Check if the input is a valid date.
    if (!dateObj instanceof Date) {
      return dateObj; // Return original value if not a Date object
    }

    // Use a standard format for dates.
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return dateObj.toLocaleDateString(undefined, options);
  });
  
  return {
    dir: {
      // The directory containing your templates (markdown, html, etc.).
      input: "./",
      // The directory where your final, built site will be saved.
      output: "_site"
    }
  };



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

