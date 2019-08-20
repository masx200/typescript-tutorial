const fetchajaxgettext = async function(u) {
  const r = await fetch(u);
  if (r.ok) {
    return r.text();
  } else {
    throw new Error("fetch failed" + u);
  }
};
export default fetchajaxgettext;
