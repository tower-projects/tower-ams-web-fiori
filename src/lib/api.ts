import axios, {AxiosError} from "axios";
import NoticeUtils, {Notice} from "./notice";

// Create a instance of axios to use the same base url.
const axiosAPI = axios.create({
    baseURL: "http://127.0.0.1:8985/message/" // it's not recommended to have this info here.
});

async function apiRequest(method: string, url: string, request: unknown) {
    const headers = {
        authorization: ""
    };
    //using the axios instance to perform the request that received from each http method
    return axiosAPI({
        method,
        url,
        data: request,
        headers
    }).then(res => {
        return Promise.resolve(res.data);
    }).catch((err: AxiosError) => {
        console.log(err);
        if (err.code == 'ERR_NETWORK') {
            NoticeUtils.error(err.name, err.message);
            return Promise.reject;
        }

        if (err.response != null) {
            if (err.response.status == 417) {
                const data: any = err.response.data
                NoticeUtils.error(data.errorCode, "", data.error)
                return Promise.reject
            }
        }

        return Promise.reject(err)
    });
}

// function to execute the http get request
export function get(url:string, request) {
    return apiRequest("get", url, request)
}

export function query(url: string, request) {
    return apiRequest("get", url + "/query", request)
}

export function queries(url: string, request) {
    return apiRequest("get", url + "/queries", request)
}

// function to execute the http delete request
export function del(url: string, request) {
    return apiRequest("delete", url, request)
}

// function to execute the http post request
export function post(url: string, request) {
    return apiRequest("post", url, request)
}

// function to execute the http put request
export function put(url: string, request) {
    return apiRequest("put", url, request)
}

// function to execute the http path request
export function patch(url: string, request) {
    return apiRequest("patch", url, request)
}