export const getPoetry = async () => {
  try {
    const result = await fetch("https://v1.jinrishici.com/all.json", {
      method: "GET",
      headers: {
        accept: "text/html",
      },
      credentials: "same-origin",
    });

    if (result.ok) {
      const arr = [];
      const json = await result.json();
      arr.push(json.origin);
      arr.push(json.author);
      arr.push(json.content);
      return arr;
    }
  } catch (e) {
    console.log(e);
  }
};
