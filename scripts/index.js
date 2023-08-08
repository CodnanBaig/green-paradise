let getData = async () => {
    try {
        let res = await fetch("http://localhost:3000/products");
        let data = await res.json();
        console.log(data);
    }
    catch (err) {
        throw err;
    }
}

getData();

