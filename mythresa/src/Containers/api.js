export const fetchProducts = async () => {
    let url = `https://mytheresa.herokuapp.com/men`;
    let res = await fetch(url)
    // console.log(res)
    let data = await res.json()
    // console.log(data.data)
    return data
    // return fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?limit=${limit}&orderBy=${orderBy}&page=${page}`)
    // .then((res)=>{
    //   res.json()
    // })
  };
 