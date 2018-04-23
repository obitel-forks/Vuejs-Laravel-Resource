import Api from './Api'

export default {
    get (url) {
        url = url || 'articles';
        return Api().get('api/' + url)
    },
    show (id) {
        return Api().get(`api/article/${id}`)
    },
    post (article) {
        return Api().post('api/article', article, { headers: {'Content-Type': 'multipart/form-data'} })
    },
    put (article) {
        return Api().put('api/article', article, { headers: {'Content-Type': 'multipart/form-data'} })
    },
    delete (id) {
        return Api().delete(`api/article/${id}`)
    }
}
