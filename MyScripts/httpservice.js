export class HttpService {
    constructor() {
        this.url = "http://apiapptrainingservice.azurewebsites.net/api/Products";
    }
    getData() {
        let promise = fetch(this.url, {
            method: "GET"
        });
        return promise;
    }
    postData(product) {
        let promise = fetch(this.url, {
            method: "POST",
            body: JSON.stringify(product),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return promise;
    }
    putData(id, product) {
        let promise = fetch(`${this.url}/${id}`, {
            method: "PUT",
            body: JSON.stringify(product),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return promise;
    }
    deleteData(id) {
        let promise = fetch(`${this.url}/${id}`, {
            method: "DELETE"
        });
        return promise;
    }
}