import API_Path from "./path";
export const get_token = () => {
    try {
        return fetch(API_Path[111], {
            method: "GET",
        })
            .then((res) => res.json())
            .then((data) => {
                console.log("token", data);
                return data;
            })
            .catch((error) => {
                console.error("Error:", error);
                return error;
            });
        // .then((response) => console.log('Success:', response));
    } catch (e) {
        // 用於處理例外的陳述式
        console.log(e); // 將例外物件傳給 error handler
        return false;
    }
};
