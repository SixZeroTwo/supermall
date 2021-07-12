import { request } from "./request";
export function getHomeData() {
    return request({
        url: 'home/multidata'
    })
}

export function getHomeGoods(queryParams) {
    //传入type和page
    /* var { type, page } = queryParams */
    return request({
        url: 'home/data',
        params: queryParams
    })
}