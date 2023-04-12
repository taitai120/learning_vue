const nextElementInList = (list, el) => {
  const currentActionIndex = list.indexOf(el);
  const nextActionIndex = (currentActionIndex + 1) % 4;
  const nextAction = list[nextActionIndex];
  return nextAction;
};

export default nextElementInList;
