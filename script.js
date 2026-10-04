let brands=[
{name:"Khaadi",cat:"ladies",floor:"GF-01",img:"https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=500"},
{name:"Sapphire",cat:"ladies",floor:"GF-02",img:"https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500"},
{name:"Maria B",cat:"ladies",floor:"FF-02",img:"https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=500"},
{name:"J. Junaid Jamshed",cat:"gents",floor:"GF-05",img:"https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500"},
{name:"Bonanza",cat:"gents",floor:"FF-01",img:"https://images.unsplash.com/photo-1617137968427-85924c800a22?w=500"},
{name:"Nike",cat:"luxury",floor:"GF-08",img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"},
{name:"Ideas",cat:"ladies",floor:"GF-03",img:"https://images.unsplash.com/photo-1551232864-3f0890e580d9?w=500"},
{name:"Limelight",cat:"ladies",floor:"FF-03",img:"https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=500"}
];
let ladies=[
{name:"Lawn 3Pc - Khaadi",price:4500,img:"https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500"},
{name:"Linen 3Pc - Sapphire",price:5200,img:"https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=500"},
{name:"Khaddar - Maria B",price:5800,img:"https://images.unsplash.com/photo-1605763245857-2e4f0a0d7b5f?w=500"},
{name:"Silk - Ideas",price:6500,img:"https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=500"}
];
let gents=[
{name:"Cotton - J. White",price:4200,img:"https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500"},
{name:"Wash & Wear - Bonanza",price:4300,img:"https://images.unsplash.com/photo-1617137968427-85924c800a22?w=500"},
{name:"Kurta Cotton - J.",price:4600,img:"https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500"},
{name:"Khaddar - J. Brown",price:4800,img:"https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=500"}
];
let cart=[];

function renderBrands(list){
 let g=document.getElementById('brandGrid');g.innerHTML="";
 list.forEach(b=>{g.innerHTML+=`<div class="brand-card"><img src="${b.img}"><h4>${b.name}</h4><small>${b.floor} | ${b.cat}</small></div>`})
}
function renderProducts(data,id){
 let g=document.getElementById(id);g.innerHTML="";
 data.forEach(p=>{
   g.innerHTML+=`<div class="product-card"><img src="${p.img}"><div class="body"><h4>${p.name}</h4><div class="price">Rs. ${p.price}</div><div class="btns"><button class="buy" onclick="addCart('${p.name}',${p.price})">Buy</button><button class="cart" onclick="addCart('${p.name}',${p.price})">Add to Cart</button></div></div></div>`
 })
}
renderBrands(brands);renderProducts(ladies,'ladiesGrid');renderProducts(gents,'gentsGrid');

function filterBrands(cat,btn){
 document.querySelectorAll('.filter button').forEach(b=>b.classList.remove('active'));btn.classList.add('active');
 if(cat=='all')renderBrands(brands);else renderBrands(brands.filter(b=>b.cat==cat))
}
function addCart(name,price){
 cart.push({name,price});document.getElementById('cartCount').innerText=cart.length+" CART";
 let list=document.getElementById('cartList');let total=0;list.innerHTML="";
 cart.forEach(c=>{total+=c.price;list.innerHTML+=`• ${c.name} - Rs.${c.price}<br>`});
 if(total>0)list.innerHTML+=`<b>Total: Rs.${total}</b>`;
}
function aiSearch(){
 let q=document.getElementById('aiInput').value.toLowerCase();
 let r=document.getElementById('aiResult');r.innerText="AI Searching...";
 setTimeout(()=>{r.innerText=`Best match for "${q}": Check collection below. We found matching fabrics!`},1000)
}
function scrollToId(id){document.getElementById(id).scrollIntoView({behavior:'smooth'})}
function placeOrder(){
 let text=`Hello Grand Luxe Mall, Order:\n${cart.map(c=>c.name+" Rs."+c.price).join("\n")}\nName: ${document.getElementById('cName').value}`;
 window.open("https://wa.me/923000000000?text="+encodeURIComponent(text),"_blank");
}
