
const Logout = () => {
  access_token :localStorage.getItem('token')
  localStorage.clear();
  window.location.href = '/'
}

export default Logout
