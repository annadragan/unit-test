function hello(name = 'you') {
  if (name === 'Sindbad') {
    return `Hey Capitan!`;
  }

  if (!name) {
    return `Hey you!`;
  }

  return `Hey ${name}!`;
}

export default hello;
