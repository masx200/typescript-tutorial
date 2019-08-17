const fetchajaxgettext = async function(u) {
  return await fetch(u).then(async r => {
    if (r.ok) {
      return await r.text();
    } else {
      throw new Error("fetch failed" + u);
    }
  });
};
export default fetchajaxgettext;
