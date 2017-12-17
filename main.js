module.exports = {
  test_ok: () =>true,
  test_fail: () =>{
    throw Error('this is an error message')
  }
}
