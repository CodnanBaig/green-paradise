//!global variables

let products=[
    {
        "img": "https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_hyde-planter_gallery_medium_all_all_01.jpg?v=1686850328",
        "id": 1,
        "price": 459,
        "category": "Planters",
        "categoryImage": "https://cdn.sanity.io/images/y346iw48/production/b31557b4166ed74b56d4c8460787d2fa90c2e668-1200x1553.webp?auto=format",
        "name": "Hyde",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus!"
    },
    {
        "img": "https://cdn.shopify.com/s/files/1/0150/6262/files/the-sill_money-tree_gallery_small_all_all_03_fed0e22b-7fb3-424c-8801-046f087f590d.jpg?v=1686850547",
        "id": 2,
        "price": 359,
        "category": "Planters",
        "categoryImage": "https://cdn.sanity.io/images/y346iw48/production/b31557b4166ed74b56d4c8460787d2fa90c2e668-1200x1553.webp?auto=format",
        "name": "Money Tree",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus!"
    },
    {
        "img": "https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_grant-planter_gallery_medium_all_all_01.jpg?v=1686850366",
        "id": 3,
        "price": 259,
        "category": "Planters",
        "categoryImage": "https://cdn.sanity.io/images/y346iw48/production/b31557b4166ed74b56d4c8460787d2fa90c2e668-1200x1553.webp?auto=format",
        "name": "Grant",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus!"
    },
    {
        "img": "https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_hyde-planter_gallery_medium_all_all_01.jpg?v=1686850328",
        "id": 4,
        "price": 459,
        "category": "Planters",
        "categoryImage": "https://cdn.sanity.io/images/y346iw48/production/b31557b4166ed74b56d4c8460787d2fa90c2e668-1200x1553.webp?auto=format",
        "name": "Hyde",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus!"
    },
    {
        "img": "https://cdn.shopify.com/s/files/1/0150/6262/files/the-sill_money-tree_gallery_small_all_all_03_fed0e22b-7fb3-424c-8801-046f087f590d.jpg?v=1686850547",
        "id": 5,
        "price": 359,
        "category": "Planters",
        "categoryImage": "https://cdn.sanity.io/images/y346iw48/production/b31557b4166ed74b56d4c8460787d2fa90c2e668-1200x1553.webp?auto=format",
        "name": "Money Tree",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus!"
    },
    {
        "img": "https://cdn.shopify.com/s/files/1/0150/6262/files/the-sill_medium-fiddle-leaf-fig_Momma-Pots_Mustard_Variant.jpg?v=1689972692",
        "id": 6,
        "price": 359,
        "category": "Planters",
        "categoryImage": "https://cdn.sanity.io/images/y346iw48/production/b31557b4166ed74b56d4c8460787d2fa90c2e668-1200x1553.webp?auto=format",
        "name": "Fiddle Leaf",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus!"
    },
    {
        "img": "https://cdn.shopify.com/s/files/1/0150/6262/files/the-sill_medium-snake-plant_Momma-Pots_Antique-Teal_Variant_e8924cc6-fefc-46c6-ab81-df6439823d1c.jpg?v=1690439273",
        "id": 7,
        "price": 459,
        "category": "Planters",
        "categoryImage": "https://cdn.sanity.io/images/y346iw48/production/b31557b4166ed74b56d4c8460787d2fa90c2e668-1200x1553.webp?auto=format",
        "name": "Snake Plant",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus!"
    },
    {
        "img": "https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_hyde-planter_gallery_medium_all_all_01.jpg?v=1686850328",
        "id": 8,
        "price": 459,
        "category": "Planters",
        "categoryImage": "https://cdn.sanity.io/images/y346iw48/production/b31557b4166ed74b56d4c8460787d2fa90c2e668-1200x1553.webp?auto=format",
        "name": "Hyde",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus!"
    },
    
    {
        "img": "https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_Faux-Palm-Tree_growpot.jpg?v=1684507189",
        "id": 50,
        "price": 459,
        "category": "Faux",
        "categoryImage": "https://cdn.sanity.io/images/y346iw48/production/13f9350ddd653338697f3acaa955c35dbd530289-1200x1553.webp?auto=format",
        "name": "Palm",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum doloremque suscipit tempora excepturi maxime quasi molestiae, soluta similique ipsam laborum mollitia? Nisi, consectetur repudiandae nam dicta rerum tempora natus!"
    }
]
// {
//     "products": 
// }
//! importing 

//!rest
// document.querySelector('.logo').addEventListener('click',()=>{
//     location.href='./index.html'
// })
//!fetching data
let pagenumber=1
let fetchData=async()=>{
    try {
        // let result=await fetch(`https://shy-ruby-chimpanzee-sari.cyclic.app/products?_limit=6&_page=${pagenumber}`)
        // let data=await result.json()
        products=data
        displayData(data)
    } catch (error) {
        console.log(error)
    }
}
fetchData()
//!appending data
let displayData=(data)=>{
    console.log(data)
    data.forEach((item)=>{
        let img=document.createElement('img')
        img.src=item.img
        let name=document.createElement('p')
        name.textContent=item.name
        let price=document.createElement('p')
        price.textContent='$'+item.price
        let div=document.createElement('div')
        div.setAttribute('class','carditem')
        let div2= document.createElement('div')
        div2.setAttribute('class', 'cardtext')
        div2.append(name,price)
        div.append(img,div2)
        div.addEventListener('click',()=>{
           localStorage.setItem('id',item.id)
           localStorage.setItem('description',item.description)
           localStorage.setItem('image',item.img)
           localStorage.setItem('price',item.price)
           localStorage.setItem('title',item.name)
           location.href='productDetails.html'
        })
        document.querySelector('#mainitems').append(div)
    })
}
displayData(products)
document.querySelector('#viewmorebutton').addEventListener('click',()=>{
    ++pagenumber
    if(pagenumber==3) document.querySelector('#viewmore').style.display='none'
    fetchData(pagenumber)
})
document.querySelector('#sortbtn').addEventListener('click',async()=>{
     document.querySelector('#mainitems').innerHTML=''
     let sortValue=document.querySelector('#sortbtn').value
     try {
        // let result=await fetch(`https://shy-ruby-chimpanzee-sari.cyclic.app/products?_limit=6&_page=${pagenumber}`)
        // let data=await result.json()
        let data= products
        if(sortValue=='asc'){
            data.sort((a,b)=>{
                return a.price-b.price
            })
        }else if(sortValue=='desc'){
            data.sort((a,b)=>{
                return b.price-a.price
            })
        }  
        displayData(data)
    } catch (error) {
        console.log(error)
    }
})