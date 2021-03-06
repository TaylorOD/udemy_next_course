export default func => (res, req, next) =>
  Promise.resolve(func(res, req, next))
    .catch(next)