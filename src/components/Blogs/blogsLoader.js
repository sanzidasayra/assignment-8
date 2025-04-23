// blogsLoader.js
export const blogsLoader = async () => {
    const response = await fetch('/blogsData.json');
    if (!response.ok) {
      throw new Error('Failed to load blog data');
    }
    const data = await response.json();
    return data;
  };
  