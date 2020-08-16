module.exports = (env) => {
  const friendship = {};

  if (env === "production") {
    return {
      ...friendship,
    };
  } else {
    return {
      DB_USER: "postgres",
      DB_PASSWORD: "alakamyok8",
      DB_HOST: "localhost",
      DB_DATABASE: "",
      ...friendship,
    };
  }
};
