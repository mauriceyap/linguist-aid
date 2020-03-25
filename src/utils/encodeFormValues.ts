const encodeFormValues = (data: Record<string, any>) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

export default encodeFormValues;
