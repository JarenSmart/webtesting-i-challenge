function succeed(item) {
  if (item.enhancement < 20) {
    return {
      ...item,
      enhancement: item.enhancement + 1,
    };
  } else {
    return {
      ...item,
      message: "You're at max level!",
    };
  }
}

function fail(item) {
  if (item.enhancement < 15) {
    item.durability = item.durability - 5;
  } else {
    item.durability = item.durability - 10;
  }
  if (item.enhancement > 16) {
    item.enhancement = item.enhancement - 1;
  }
  return { ...item };
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}

module.exports = {
  succeed,
  fail,
  repair,
  get,
};
