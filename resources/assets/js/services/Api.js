import axios from 'axios'
import Nprogress from 'nprogress'

export default () => {
    const instance = axios.create({
        baseURL: APP_URL + '/vue-laravel/public/api/'
    })

    // Authorization header
    instance.interceptors.request.use(function (config) {
        config['headers'] = {
            'Authorization': 'Bearer ' + localStorage.getItem('access_token')
        };
        // NProgress.start();
        // console.log('starting..')
        return config
    }, error => Promise.reject(error))

    // Show toast with message for non OK responses
    instance.interceptors.response.use(response => {
        // console.log('done..')
        // console.log(response.request.headers);
        return response
    }, error => {
      // store.dispatch('addToastMessage', {
      //   text: error.response.data.message || 'Request error status: ' + error.response.status,
      //   type: 'danger'
      // })
      alert(error.response.data.message)
      return Promise.reject(error)
    })

    return instance
}
