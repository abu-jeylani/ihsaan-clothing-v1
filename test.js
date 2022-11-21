const Buttons = (color) => {
  object = {
    green: "purple",
    yellow: false,
  };
  if (color) {
    return {
      ...object,
      ...color,
    };
  } else {
    return object;
  }
};

const createObject = (type, payload) => ({ type, payload });

console.log(createObject("send_text", { name: "abu" }));
