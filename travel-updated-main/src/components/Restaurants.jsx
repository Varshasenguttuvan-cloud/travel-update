import React from "react";
import "./Restaurant.css";

function Restaurant() {
  const states = [
    {
      state: "Tamil Nadu",
      img: "https://s7ap1.scene7.com/is/image/incredibleindia/1-meenakshi-amman-temple-madurai-tamil-nadu-attr-hero?qlt=82&ts=1726654442664",
      restaurants: [
        { name: "Annalakshmi Restaurant", img: "https://downtowngallery.com.sg/images/uploads/Annalakshmi_Restaurant_Logo.jpg" },
        { name: "Junior Kuppanna", img: "https://kuppanna.com/cdn/shop/files/Artboard-01.png?v=1633680855" },
        { name: "Buhari Hotel", img: "https://pbs.twimg.com/profile_images/1135520527840190464/OB6K0tnu.jpg" },
        { name: "Murugan Idli Shop", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQotIVmeGpS0XmsRkLqwZFmtdo1wVcY1zVjNQ&s" },
        { name: "Dindigul Thalappakatti", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeLAvnkyAb9zqsICnCGptv-pWMJFDptogw0A&s" },
        { name: "Ponnusamy Hotel", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn88SzV3IdKV7yp477qQTF4QDeL8eR9vllqg&s" },
        { name: "The Marina", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ4huzALgbPPkj1fblN2ty-J7061kJEMJAoQ&s" },
        { name: "A2B (Adyar Ananda Bhavan)", img: "https://www.a2bnewjersey.com/wp-content/uploads/2022/08/A2B-Logo-PDF-1.png" },
        { name: "Kumar Mess", img: "https://content.jdmagicbox.com/v2/comp/madurai/s6/0452px452.x452.190814121707.f4s6/catalogue/madurai-kumar-mess-pazhanganatham-madurai-mess-gzrfywhwve-250.jpg" },
        { name: "Hotel Saravana Bhavan", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqnFmpGT3RmbpaI1K-Qpf7_zTdsR7DMgXy0w&s" }
      ],
      foods: [
        { name: "Idli, Masala Dosa, Vada, Pongal", img: "https://s3-ap-south-1.amazonaws.com/betterbutterbucket-silver/divya-jain1120181209215834493.jpeg" },
        { name: "Parotta", img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_400/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/17/49ef7113-2b47-4f4f-8338-84ba32be1198_526154.ss.jpg" },
        { name: "Chicken 65", img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/03/chicken-65-restaurant-style.jpg" },
        { name: "Biryani", img: "https://cookdassets.imgix.net/lpdiq6s9cmk1kq04e28s0zctpg9o?w=250&auto=format%2Ccompress" },
        { name: "Fish Curry", img: "https://myfoodstory.com/wp-content/uploads/2021/08/spicy-fish-curry-with-coconut-and-tamarind-6-500x500.jpg" },
        { name: "Tirunelveli Halwa", img: "https://www.tirunelvelihalwa.net/wp-content/uploads/2023/08/tirunelveli-halwa-.jpg" },
        { name: "Kothu Parotta", img: "https://www.licious.in/blog/wp-content/uploads/2022/12/Shutterstock_1432403939.jpg" },
        { name: "Morkuzhambu", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScv2hn2PW7mwSnfGRq3KqWB-djlLeOjwhV7jen9gXvJPtNX-M-IcvYa79fb16aRNEV8Jo&usqp=CAU" },
        { name: "Kizhi Parotta", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgX3UaJZ93SI0VRmEXE33EBk4rGMMCF9cyzJH_Jy7a5UBzX9rg-9KbYkRRGUWdigTDB2Q-JxVhtzL6koTsQpBZeuOsRcUMs07ou0K-Zpt2hO3zEpAHXm510RWoCI9t4QhQxzDLDQ83X1Lv_/s2048/20200614113330_IMG_8345-01-01.jpeg" },
        { name: "Payasam", img: "https://www.whiskaffair.com/wp-content/uploads/2020/11/Semiya-Payasam-2-3.jpg" }
      ]
    },
    {
      state: "Karnataka",
      img: "https://s7ap1.scene7.com/is/image/incredibleindia/mysore-palace-karnataka-state-hero?qlt=82&ts=1726723003730",
      restaurants: [
        { name: "MTR (Mavalli Tiffin Room)", img: "https://upload.wikimedia.org/wikipedia/commons/5/58/MTR_LOGO_-_New.png" },
        { name: "Vidyarthi Bhavan", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQb95BTrz2HucOjB5I_lgeOOsZqEb7Ls1BhQ&s" },
        { name: "Nagarjuna Restaurant", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS__rdDImjPbwXFxKQcsUGi3Kv8oPx8yW3c4A&s" },
        { name: "Empire Restaurant", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJu2rUJFMPuuKjNVE6swbWyRgWWdbp6hPfKg&s" },
        { name: "CTR (Central Tiffin Room)", img: "https://centraltiffinroom.com/wp-content/uploads/2024/04/CTR-Final-Logo-@2x.png" },
        { name: "The Only Place", img: "https://images.lifestyleasia.com/wp-content/uploads/sites/7/2024/05/13123224/The-Only-Place-restaurant-in-Bangalore-1.jpg" },
        { name: "Brahmin's Coffee Bar", img: "https://lh3.googleusercontent.com/Ucl7_-FqNHBEeHA2EkviOfg4cdJi-wp3kYoCSyGr5JyW3CkFnriKlzm12lgxu1lnBkb7YEme_kBCx4UAyeHb2ioOKQo=w256-rw" },
        { name: "upavihar", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHagpu8X3fIV3n1PtW7CG_ebcZIzN-cpID4Q&s" },
        { name: "Hotel RRR (Mysore)", img: "https://masthmysore.com/wp-content/uploads/2022/07/8.jpg" },
        { name: "Meghana Foods", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVw3R9fCBAh3weelzYr9yniOyMjYeyyTQkjA&s" }
      ],
      foods: [
        { name: "Masala Dosa", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReVKL2cELLIERNALakFkQyhbB09kz9VwEp9JgW5cRF4UNLy9pzG3bo45PvwIY3XSKh-wE&usqp=CAU" },
        { name: "Ragi Mudde", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgQDMOBy6EvdaN1QoSvwzw_tZ5Wjhyo2lRWA&s" },
        { name: "Mysore Pak", img: "https://www.shreemithai.com/cdn/shop/products/spl-mysore-pak-206182.jpg?v=1707820107" },
        { name: "Bisi Bele Bath", img: "https://cdn.shopify.com/s/files/1/0051/4159/4210/files/WhatsAppImage2024-02-05at6.35.23PM_6_e5628554-d597-440f-9590-63b44df15bf4_480x480.jpg?v=1709990787" },
        { name: "Neer Dosa", img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/12/neer-dosa-recipe.jpg" },
        { name: "Mangalorean Fish Curry", img: "https://www.licious.in/blog/wp-content/uploads/2021/01/Mangalorean-Pomfret-Fish-Curry.jpg" },
        { name: "Benne Dosa", img: "https://content.jdmagicbox.com/v2/comp/bangalore/l9/080pxx80.xx80.220611230152.u2l9/catalogue/davangere-benne-dosa-veg-hotel-bangalore-dosa-outlets-errusbm2ja.jpg" },
        { name: "Coorg Pandi Curry", img: "https://kaveriponnapa.com/wp-content/uploads/2022/02/Pandi-curry-4.jpg" },
        { name: "Uttapam", img: "https://www.cookingcarnival.com/wp-content/uploads/2022/02/Uttapam-recipe.jpg" },
        { name: "Obbattu / Holige", img: "https://madaboutkitchen.in/wp-content/uploads/2016/10/Obattu-3-.jpg" }
      ]
    },
    {
  state: "Kerala",
  img: "https://i.pinimg.com/1200x/d3/ea/61/d3ea61bca2af8dfba72768bfe49da6e3.jpg",

  restaurants: [
    { name: "Paragon Restaurant (Kozhikode)", img: "https://paragonrestaurant.in/wp-content/themes/paragon/images/default-menu-1.jpg" },
    { name: "Kayees Rahmathulla Cafe (Kochi)", img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/0b/3e/13/photo0jpg.jpg?w=1200&h=-1&s=1" },
    { name: "Dal Roti (Kochi)", img: "https://tse4.mm.bing.net/th/id/OIP.G5nzy8HDncexrU0wFPEwhQHaFN?rs=1&pid=ImgDetMain&o=7&rm=3" },
    { name: "Ariya Bhavan (Trivandrum)", img: "https://img.restaurantguru.com/r248-Sree-Ariya-Bhavan-facade.jpg" },
    { name: "Kethal’s Chicken (Trivandrum)", img: "https://media-cdn.tripadvisor.com/media/photo-s/1a/26/e0/5c/kethal-s-chicken.jpg" },
    { name: "Hotel Rahmaniya (Kozhikode) – Beef Biryani", img: "https://image3.mouthshut.com/images/imagesp/925773949s.jpg" },
    { name: "Zain Hotel (Kozhikode)", img: "https://ibnbattutatravel.com/wp-content/uploads/listing-images/ibnbattuta-nXZHmZJ-bP4Xw-u8N.jpg" },
    { name: "Thaff Restaurant (Alappuzha)", img: "https://img.restaurantguru.com/r7f1-Thaff-Delicacy-Restaurant-design.jpg" },
    { name: "Biryani Hut (Kochi)", img: "https://tse2.mm.bing.net/th/id/OIP.DJ6K03al2EWqGxStaanOkgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" },
    { name: "Le Arabia (Kochi)", img: "https://tse3.mm.bing.net/th/id/OIP.psEUv_hoBh7o1v1BjzBhWAHaHb?rs=1&pid=ImgDetMain&o=7&rm=3" }
  ],

  foods: [
    { name: "Kerala Sadya", img: "https://i.pinimg.com/736x/a9/1d/31/a91d31d17b91014c870a9a4721787141.jpg" },
    { name: "Puttu & Kadala Curry", img: "https://i.pinimg.com/1200x/b9/0f/e8/b90fe8f9a10e6c4d81c5def662a6a82a.jpg" },
    { name: "Appam & Stew", img: "https://i.pinimg.com/1200x/ac/b7/dc/acb7dc7d0c29238b5c0f83a94e07491f.jpg" },
    { name: "Kerala Parotta & Beef Fry", img: "https://i.pinimg.com/736x/e1/b2/c1/e1b2c1584e7bca31202d703f308902e6.jpg" },
    { name: "Karimeen Pollichathu", img: "https://i.pinimg.com/1200x/ac/1a/ba/ac1abaf3351ce806b6d55c36aa32001a.jpg" },
    { name: "Malabar Biryani", img: "https://i.pinimg.com/1200x/02/67/0c/02670cfe2cb72196b666eda72e218672.jpg" },
    { name: "Kappa & Meen Curry (Tapioca + Fish Curry)", img: "https://i.pinimg.com/1200x/20/b1/19/20b119f5443de545415cfaefd59524df.jpg" },
    { name: "Idiyappam & Egg Curry", img: "https://i.pinimg.com/736x/25/da/78/25da78c762977475322edcd78612d24a.jpg" },
    { name: "Banana Chips", img: "https://i.pinimg.com/736x/af/24/f7/af24f79d3fe6e2c7d826081043a18a85.jpg" },
    { name: "Pazham Pori (Banana Fritters)", img: "https://i.pinimg.com/1200x/7c/c5/06/7cc506ccf1b0d27984e19bab93fac7e3.jpg" }
  ]
},
{
  state: "Andhra Pradesh",
  img: "https://i.pinimg.com/736x/3d/7b/a5/3d7ba56234650e9eec4b1341e9f41f87.jpg",

  restaurants: [
    { name: "Rayalaseema Ruchulu (Vijayawada/Hyderabad)", img: "https://th.bing.com/th/id/R.46eb53ea3e53046da3d5f0fbac94bc0c?rik=bCn0exFgki%2fMsg&riu=http%3a%2f%2frayalaseemaruchuluusa.net%2fassets%2fimages%2flogo%2ffooter-logo.png&ehk=HSGyTd0cLpWdcMeLP3wOoTPPX%2bHVXgLvmyT7Rgmh3H4%3d&risl=&pid=ImgRaw&r=0" },
    { name: "GRT Grand Vijayawada Restaurant", img: "https://tse3.mm.bing.net/th/id/OIP.H4AtcIWquhlr7g9CixvK7AAAAA?rs=1&pid=ImgDetMain&o=7&rm=3" },
    { name: "Babai Hotel (Vijayawada)", img: "https://www.hotelierindia.com/cloud/2025/01/12/HxT815tx-IMG-20241217-WA0009-1200x853.jpg" },
    { name: "RR Durbar (Vijayawada)", img: "https://tse3.mm.bing.net/th/id/OIP.NeoiimwSKvOx3LP-Iukl9gHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" },
    { name: "Dharani Restaurant (Tirupati)", img: "https://pbs.twimg.com/profile_images/826742134858342401/H0VuyUuJ_400x400.jpg" },
    { name: "Hotel Minerva Grand (Vijayawada)", img: "https://mbhub-wp.s3.eu-west-2.amazonaws.com/Mbhub/05/grand-hotel-minerva_logo.jpg" },
    { name: "Hotel Sarovar (Tirupati)", img: "https://tse1.mm.bing.net/th/id/OIP.Yq_G-il2Ri9fEunEKphuYAHaCu?rs=1&pid=ImgDetMain&o=7&rm=3" },
    { name: "Sweet Magic (Vijayawada)", img: "https://tse3.mm.bing.net/th/id/OIP.YptGOr51T_e52MPEi9LQIgHaEE?rs=1&pid=ImgDetMain&o=7&rm=3" },
    { name: "Sankranti Restaurant (Vijayawada)", img: "https://tse3.mm.bing.net/th/id/OIP.WBe6vKgnFtJkoPR9XNIvGAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" },
    { name: "Annavaram Temple Prasadam Hall", img: "https://www.hlimg.com/images/things2do/738X538/ttdprasadam_1511178483m.jpg" }
  ],

  foods: [
    { name: "Andhra Chicken Biryani", img: "https://i.pinimg.com/1200x/37/b8/47/37b847643844c23bee20721044837c48.jpg" },
    { name: "Gongura Pachadi", img: "https://i.pinimg.com/1200x/ba/61/6b/ba616b7897b02ac238c6bfde7cdeadb7.jpg" },
    { name: "Pesarattu (Green Gram Dosa)", img: "https://i.pinimg.com/1200x/78/db/db/78dbdb398c0d4e63fc110b401e29b120.jpg" },
    { name: "Pulasa Fish Curry", img: "https://i.pinimg.com/1200x/01/ec/01/01ec010fbb4f233204c2ec2a5a4e04d9.jpg" },
    { name: "Royyala Vepudu (Prawn Fry)", img: "https://i.pinimg.com/736x/53/74/12/5374125a6606af8867a2352a4242bfcb.jpg" },
    { name: "Gutti Vankaya Kura", img: "https://i.pinimg.com/1200x/9b/36/45/9b364591110130eb5b128345b9161008.jpg" },
    { name: "Bobbatlu / Bakshalu", img: "https://i.pinimg.com/1200x/4f/82/f6/4f82f62b51280e3b49cbff73a4edf0f2.jpg" },
    { name: "Ulava Charu (Horse Gram Soup)", img: "https://i.pinimg.com/1200x/3c/d8/bb/3cd8bbca97e309dad242e8449c8afc69.jpg" },
    { name: "Natu Kodi Pulusu (Country Chicken Curry)", img: "https://i.pinimg.com/736x/d1/45/59/d14559af639e4ccb8d4cbbe605278b0b.jpg" },
    { name: "Poornalu / Boorelu", img: "https://i.pinimg.com/736x/97/94/f5/9794f55b54449d0ed06867b8b3815141.jpg" }
  ]
},
{
  state: "Arunachal Pradesh",
  img: "https://i.pinimg.com/1200x/49/c6/ba/49c6bac9cf13646b4c2d01c3e041b548.jpg",

  restaurants: [
    { name: "Dragon Restaurant (Tawang)", img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/02/5c/40/60/outside-view.jpg?w=1200&h=-1&s=1" },
    { name: "The Bliss Café (Itanagar)", img: "https://tse4.mm.bing.net/th/id/OIP.ZLKyng4qLG-9uXd7OAn8ggHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" },
    { name: "Soha Restaurant (Ziro)", img: "https://tse3.mm.bing.net/th/id/OIP.ETssXMh0IjV5lszSpvSmqgHaNK?rs=1&pid=ImgDetMain&o=7&rm=3" },
    { name: "Phunzom Restaurant (Tawang)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAXM94VGX36cyNNb0CLqejp2lciJf_wCzuNg&s" },
    { name: "Orange Restaurant (Itanagar)", img: "https://content3.jdmagicbox.com/comp/itanagar/w3/9999px360.x360.220318212928.t2w3/catalogue/orange-tree-diner-and-restaurant-itanagar-ho-itanagar-restaurants-m6c2yt93ah.jpg" },
    { name: "Hotel Pybss Restaurant (Itanagar)", img: "https://hotelpybss.com/wp-content/uploads/2024/10/Hotel_Logos__1_-removebg-preview.png" },
    { name: "Blue Pine Restaurant (Bomdila)", img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/ba/d4/70/orange-bar-restaurant.jpg?w=400&h=300&s=1" },
    { name: "E & K Restaurant (Tawang)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG8U6snCw4Fw-k1OqMmmdkPDGSnPXgLmTcVA&s" },
    { name: "Ziro Palace Restaurant (Ziro)", img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/17/87/1f/ziro-palace-inn.jpg?w=1200&h=1200&s=1" },
    { name: "Linz Café (Itanagar)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV6dIE2qrbdWxh7M-LfA1AgjVARHu8Do3iuw&s" }
  ],

  foods: [
    { name: "Thukpa", img: "https://i.pinimg.com/1200x/71/0d/91/710d912b8045a9d13cf5702deb7c22d4.jpg" },
    { name: "Momos (Arunachal Style)", img: "https://i.pinimg.com/736x/68/c6/58/68c65849ffcdcd7f93ae91a1c3d9816f.jpg" },
    { name: "Pasa", img: "https://www.lifeberrys.com/img/article/arunachal-pradesh-6-1662441530-lb.jpg" },
    { name: "Chura Sabzi", img: "https://tse1.mm.bing.net/th/id/OIP.x2KY-PdbgAw_q6w8iD6iBwAAAA?rs=1&pid=ImgDetMain&o=7&rm=3" },
    { name: "Lukter (Beef with Chili Flakes)", img: "https://www.lifeberrys.com/img/article/arunachal-pradesh-2-1662441493-lb.jpg" },
    { name: "Pehak (Fermented Soybean Chutney)", img: "https://www.lifeberrys.com/img/article/arunachal-pradesh-3-1662441502-lb.jpg" },
    { name: "Koat Pitha", img: "https://www.lifeberrys.com/img/article/arunachal-pradesh-8-1662441548-lb.jpg" },
    { name: "Papuk", img: "https://www.lifeberrys.com/img/article/arunachal-pradesh-7-1662441540-lb.jpg" },
    { name: "Wungwut Ngam (Chicken Cooked in Bamboo)", img: "https://www.lifeberrys.com/img/article/arunachal-pradesh-5-1662441521-lb.jpg" },
    { name: "Pika Pila", img: "https://www.lifeberrys.com/img/article/arunachal-pradesh-1-1662441484-lb.jpg" }
  ]
},
{
  state: "Assam",
  img: "https://i.pinimg.com/736x/13/bc/bd/13bcbdf85302734d278b1282c1604ac4.jpg",

  restaurants: [
  { name: "Paradise Restaurant (Guwahati)", img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/a7/ee/c0/paradise-hotel-entrance.jpg?w=1200&h=1200&s=1" },
  { name: "Khorikaa (Guwahati)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1uSrbbVtp_4PzFivp6dCTKJ_E0oCNDep-bQ&s" },
  { name: "Delicacy Restaurant (Guwahati)", img: "https://media-cdn.tripadvisor.com/media/photo-s/16/e3/cc/81/gam-s-delicacy.jpg" },
  { name: "Heritage Khorikaa (Guwahati)", img: "https://media-cdn.tripadvisor.com/media/photo-s/0b/7c/6a/96/you-should-not-miss-this.jpg" },
  { name: "Makhan Bhog (Guwahati)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpTRb9TRhZsAt7ZQNkvNNYH2hrR2cnR-Ywrw&s" },
  { name: "Gams Delicacy (Guwahati)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6Kq8r7-3XBGTGX9QrLLl1Z8-30kthfFB6UA&s" },
  { name: "Assam Kitchen (Jorhat)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfjD40_LaESFoAC_Nnl-vXIxi4TLQ2eSf3JQ&s" },
  { name: "Naga Kitchen (Guwahati)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Q91_UIKdhB3opRGb00Y_Kv5vAcYOGmFapw&s" },
  { name: "Maihang (Tezpur)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ032VSG2dp7WB5lPAfeBgk70mCxRmo7xzXHg&s" },
  { name: "Parampara Thali (Guwahati)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThPg-DdGk10y67U46-jHH1tp265e8o6mD3QQ&s" }
],

  foods: [
    { name: "Assamese Thali", img: "https://i.pinimg.com/736x/1d/36/10/1d36107de2cdf1c37c8541459b696e54.jpg" },
    { name: "Masor Tenga (Sour Fish Curry)", img: "https://i.pinimg.com/736x/8c/3e/69/8c3e69ec152a64822a803ea2cb629f71.jpg" },
    { name: "Khaar", img: "https://www.feamag.com/wp-content/uploads/2020/04/FB_IMG_1586153505989.jpg" },
    { name: "Aloo Pitika", img: "https://i.pinimg.com/1200x/8f/4a/58/8f4a5804947b8da7ad7fe1ae706d151f.jpg" },
    { name: "Duck Curry (Haa Khorisa)", img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2020/12/potato-curry-instant-pot.jpg" },
    { name: "Pitha", img: "https://c8.alamy.com/comp/2EB1630/til-pitha-a-traditional-food-of-assam-isolated-stock-image-2EB1630.jpg" },
    { name: "Laru (Coconut/Rice Balls)", img: "https://thetezzyfiles.com/wp-content/uploads/2015/01/narikolor-laru.jpg" },
    { name: "Xaak Bhaji (Assorted Greens)", img: "https://th.bing.com/th/id/R.4a2cffae4d27ceed1df496be37f2715e?rik=ZBzdGBECJMRC6A&riu=http%3a%2f%2f4.bp.blogspot.com%2f_kIc3X_JZnkM%2fTINWSIiSo3I%2fAAAAAAAAABI%2fy9hH_b5qFH4%2fs1600%2fBaremehali%2bxaak%2bbhaji.jpg&ehk=%2fFgrRch%2flRd8mOnl%2fFWxRlBWGK0Lh%2fg%2fV9h1ajGJa8I%3d&risl=&pid=ImgRaw&r=0" },
    { name: "Bhorta (Mashed Mix)", img: "https://i.pinimg.com/736x/b6/6c/67/b66c67eb8a0c0c76dfe7dc1052396ec7.jpg" },
    { name: "Black Rice Kheer (Chakhao Kheer)", img: "https://i.pinimg.com/736x/68/c7/6d/68c76d67385a39b0d09b1ac2c8420775.jpg" }
  ]
},
{
  state: "Bihar",
  img: "https://i.pinimg.com/1200x/76/e7/2c/76e72c6ac42a5a5a785369a640916287.jpg",

  restaurants: [
  { name: "Pind Balluchi (Patna)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLB7KIsg6gF9cZsnMW9aJaYPj_wVY9qjBvMw&s" },
  { name: "Basant Vihar (Patna)", img: "https://media-cdn.tripadvisor.com/media/photo-s/09/e8/88/07/photo0jpg.jpg" },
  { name: "17 Degrees Restaurant (Patna)", img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/30/dc/26/44/if-there-s-something.jpg?w=500&h=-1&s=1" },
  { name: "Takshila at Hotel Chanakya (Patna)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkWWGGwG8kbepYyLT79_J0Eh1gf4F-RGO30w&s" },
  { name: "Biryani Mahal (Patna)", img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/49/f7/36/img-20190128-132542-largejpg.jpg?w=800&h=800&s=1" },
  { name: "The Yellow Chilli (Patna)", img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/35/bf/f7/main-entrance.jpg?w=1200&h=1200&s=1" },
  { name: "Bell Pepper Restaurant (Gaya)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT14PE_BX4eF5gjEKrtWjkwL2vYE1Afoo9kug&s" },
  { name: "Royal Biryani House (Patna)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ25SYoxmiggu2tlNUa8PZ42tStTULiqvhm2w&s" },
  { name: "Bihari Rasoi (Patna)", img: "https://media-cdn.tripadvisor.com/media/photo-s/0f/94/31/40/logo.jpg" },
  { name: "Nirvana - The Fine Dine (Bodh Gaya)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmKPTuf5ytmCjI70HZ4N6J-_3V6eb9AWUaztrdsypSyCN15H7IMui7YcTrzqVpzDOEJQ0&usqp=CAU" }
],

  foods: [
    { name: "Litti Chokha", img: "https://i.pinimg.com/736x/ee/46/21/ee462161b26540ebb3183a11c678de07.jpg" },
    { name: "Khaja", img: "https://i.pinimg.com/736x/a2/5d/1a/a25d1a4b5ccca2b52384f49c14b9e02d.jpg" },
    { name: "Thekua", img: "https://www.vegrecipesofindia.com/wp-content/uploads/2020/11/thekua-recipe-1152x1536.jpg" },
    { name: "Dal Pitha", img: "https://i.ytimg.com/vi/UkEb3OG3XwY/maxresdefault.jpg" },
    { name: "Sattu Paratha", img: "https://tse2.mm.bing.net/th/id/OIP.EO24PEqUhyna_4CKgOZJKgHaLL?rs=1&pid=ImgDetMain&o=7&rm=3" },
    { name: "Mutton Bihari", img: "https://images.slurrp.com/prod/recipe_images/transcribe/lunch,dinner/Bihari_Mutton_Curry.webp" },
    { name: "Bihari Kebab", img: "https://images.slurrp.com/prod/recipe_images/transcribe/snack/Bihari_Kebab.webp?impolicy=slurrp-20210601&width=1200&height=675" },
    { name: "Malpua", img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/12/malpua.jpg" },
    { name: "Balu Shahi", img: "https://tse2.mm.bing.net/th/id/OIP.KDltfeAKw9wdv7EEhodFHgHaLH?rs=1&pid=ImgDetMain&o=7&rm=3" },
    { name: "Dhuska", img: "https://i.pinimg.com/1200x/db/6c/04/db6c048dca269962b53dd7a39e61359b.jpg" }
  ]
},
{
  state: "Chhattisgarh",
  img: "https://i.pinimg.com/1200x/16/4f/66/164f6665e0f095652d44bc29f887ad78.jpg",

  restaurants: [
  { name: "The Sigdi (Raipur)", img: "https://media-cdn.tripadvisor.com/media/photo-s/0f/6a/ea/87/logo.jpg" },
  { name: "Manju Mamta Restaurant (Raipur)", img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/d1/44/4c/manju-mamta.jpg?w=900&h=-1&s=1" },
  { name: "Madhuban Restaurant (Raipur)", img: "https://content.jdmagicbox.com/comp/bhilai/i7/9999px788.x788.220504204654.a5i7/catalogue/madhuban-restaurant-and-cafe-risali-bhilai-south-indian-delivery-restaurants-1d7ui2feww.jpg" },
  { name: "Nakshatra Thali (Bilaspur)", img: "https://content3.jdmagicbox.com/v2/comp/kanpur/u3/0512px512.x512.231205013745.i4u3/catalogue/nakshatra-restro-and-lounge-indira-nagar-kanpur-restaurants-7n729qr9qg.jpg" },
  { name: "Aryan Family's Delight (Raipur)", img: "https://content.jdmagicbox.com/comp/lucknow/dc/0522px522.x522.100213102815.a3q7dc/catalogue/aryan-family-s-delight-alambagh-lucknow-north-indian-restaurants-lde3setmra-250.jpg" },
  { name: "Girnar Restaurant (Raipur)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6AmiuNwqhbQrw5KYwSkWPADUnbjIF6jE9gA&s" },
  { name: "Punjabi Rasoi (Raipur)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXLsCxj4G-QRynYPm9DGFWMlLLGM-xb4dKPUA18texxhhFGJCXowNQV3GltmcWjWst4IA&usqp=CAU" },
  { name: "Moti Mahal Delux (Bilaspur)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTolU4v9QkfH_mztvofeh7oEkTZdv8xStkGKQ&s" },
  { name: "Shyam Restaurant (Durg)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEsiqM4WT7tP1mvMvP0P2zVnPirfi_SN-DfQ&s" },
  { name: "Veggiies Restaurant (Raipur)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV0Mmpp9ix3JymJAsuDaNhqZOLnBXpcErf6Q&s" }
],

  foods: [
    { name: "Chila", img: "https://www.indianveggiedelight.com/wp-content/uploads/2023/02/besan-chilla-recipe-3.jpg" },
    { name: "Aamat (Bamboo Shoot Curry)", img: "https://tse3.mm.bing.net/th/id/OIP.PEHkciEIiozdLuumdoV8sAHaFA?rs=1&pid=ImgDetMain&o=7&rm=3" },
    { name: "Muthia", img: "https://www.vegrecipesofindia.com/wp-content/uploads/2012/08/fried-methi-muthia-recipe-1.jpg" },
    { name: "Bafauri", img: "https://cookilicious.com/wp-content/uploads/2019/01/chana-dal-8-960x1223.jpg" },
    { name: "Faraa", img: "https://tse1.explicit.bing.net/th/id/OIP._8ukHnlLmotMmY9lai-mEgHaEK?rs=1&pid=ImgDetMain&o=7&rm=3" },
    { name: "Red Ant Chutney (Chapda)", img: "https://tse1.mm.bing.net/th/id/OIP.OWWyXB1FOXjTu3Qr5f5agAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" },
    { name: "Chousela", img: "https://images.slurrp.com/prod/rich_article/w7c94l57nlc.webp?impolicy=slurrp-20210601&width=880&height=500" },
    { name: "Tilgur", img: "https://i.pinimg.com/1200x/bc/14/1e/bc141ec35e7aa67e9d53608c936cc592.jpg" },
    { name: "Dehrori", img: "https://i.pinimg.com/736x/4c/d4/c0/4cd4c077957f4a8971a4a48aa3738746.jpg" },
    { name: "Dubki Kadhi", img: "https://i.pinimg.com/1200x/90/7f/93/907f93e5cab320a07eec188930d43dbf.jpg" }
  ]
},
{
  state: "Goa",
  img: "https://www.holidify.com/images/bgImages/GOA.jpg",

  restaurants: [
  { name: "Fisherman's Wharf (South Goa)", img: "https://i.ytimg.com/vi/STCoKppJwUU/maxresdefault.jpg" },
  { name: "Gunpowder (Assagao)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7YryMLHWFL8D8OMWTr73LgxYd5vKSw_AYfQ&s" },
  { name: "Vinayak Family Restaurant (Assagao)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgpEE_IgpGK0S9JWTQ4oCEXYy52DZvmH4o2g&s" },
  { name: "Ritz Classic (Panaji)", img: "https://b.zmtcdn.com/data/pictures/4/18819534/8f19b0fe157c96c6d1f9b64d088fc657.jpg" },
  { name: "Martin’s Corner (Betalbatim)", img: "https://martinscornergoa.com/wp-content/uploads/2020/04/martins-logo.png" },
  { name: "The Black Sheep Bistro (Panaji)", img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/a6/bb/63/getlstd-property-photo.jpg?w=900&h=500&s=1" },
  { name: "Café Bodega (Panaji)", img: "https://s3-ap-southeast-1.amazonaws.com/assets-powerstores-com/data/org/7472/theme/18402/img/logo.png" },
  { name: "Suzie’s (Assagao)", img: "https://d10y46cwh6y6x1.cloudfront.net/images/CC66DF97-396D-4C57-982B-4E46C5DAD56E.png" },
  { name: "The Fisherman's Hut (Vagator)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW_hHfD2BEkO_L-rY0FRyJpF9Ktqx4-kyEnA&s" },
  { name: "Thalassa (Vagator)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8xzaqPVyfJbf7p8US2vx_MvIUw2As-UEHkg&s" }
]
,

  foods: [
    { name: "Goan Fish Curry", img: "https://i.pinimg.com/1200x/09/ef/89/09ef89cd00adc6efc5204590f75fa9de.jpg" },
    { name: "Prawn Balchao", img: "https://i.pinimg.com/1200x/c9/60/93/c960930f1c457d32784ab6fa22d05efb.jpg" },
    { name: "Goan Bebinca", img: "https://i.pinimg.com/736x/13/45/67/134567c0db151cedc79b5a96c67fe252.jpg" },
    { name: "Chicken Cafreal", img: "https://i.pinimg.com/1200x/46/b5/b4/46b5b47d1c63ab04d39bf3b91d7afb95.jpg" },
    { name: "Sorpotel", img: "https://i.pinimg.com/1200x/1e/aa/e1/1eaae1694f6d2e797e309c1217a6324f.jpg" },
    { name: "Prawn Rava Fry", img: "https://i.pinimg.com/1200x/1f/cb/42/1fcb420a0e88bf9f3381761a0fcf445f.jpg" },
    { name: "Goan Vindaloo", img: "https://i.pinimg.com/1200x/f9/6c/b2/f96cb256341ca5c54060bb5d8238f36d.jpg" },
    { name: "Sanna (Goan Steamed Bread)", img: "https://i.pinimg.com/1200x/67/79/50/6779509c47c3bc601f77e3e071b2162e.jpg" },
    { name: "Poee (Goan Bread)", img: "https://i.pinimg.com/1200x/b2/a5/43/b2a5431bfad367d3bcf2721fb6903da4.jpg" },
    { name: "Crab Xacuti", img: "https://i.pinimg.com/1200x/aa/2f/f3/aa2ff33d08cef4ed5afec1ca17bc0449.jpg" }
  ]
},
{
  state: "Gujarat",
  img: "https://www.holidify.com/images/bgImages/GUJARAT.jpg",

  restaurants: [
  { name: "Gordhan Thal (Ahmedabad)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKHg8j9m7ENSuDUhIX2lV6nanjZjtIZm2aYg&s" },
  { name: "Agashiye – The House of MG (Ahmedabad)", img: "https://media-cdn.tripadvisor.com/media/photo-m/1280/19/7d/9f/79/house-of-mg.jpg" },
  { name: "Rajwadu (Ahmedabad)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGPBNzYG5n-6w3G4ik6s6gFnEacw2SdWrRGA&s" },
  { name: "Honest Restaurant (Ahmedabad)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-R0FKSXXhN6v9vHqliJaVV8_ILBexDrmN8g&s" },
  { name: "Tomato’s Restaurant (Ahmedabad)", img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/ca/12/cd/inside-the-restaurant.jpg?w=900&h=500&s=1" },
  { name: "Barbeque Nation (Surat)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoYWYSsswAMfc1xGX8JPHHit9zNFZFPl4BaQ&s" },
  { name: "Sasuma Gujarati Thali (Surat)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStwnyDkv9jE6cl9O4rJXlpvxHCHtGeVCwr38FcdTE2XD5CZp8iNjGhFeCdY2geQUp-tVc&usqp=CAU" },
  { name: "The Grand Thakar (Rajkot)", img: "https://hotelthakar.com/images/foot-logo.png" },
  { name: "Neelkanth Patang (Ahmedabad)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAbbjSWWoTNDnQBiBID0n5sXEOh93EVf3P8w&s" },
  { name: "Iscon Thal (Ahmedabad)", img: "https://isconthaalcanada.com/wp-content/uploads/2024/08/ISCON_THAAL_LOGO_WITHGREENBACKGROUND-01.png" }
]
,

  foods: [
    { name: "Dhokla", img: "https://i.pinimg.com/736x/81/7e/7d/817e7dd5fe5c623f5e55621d0c9dbb38.jpg" },
    { name: "Khandvi", img: "https://i.pinimg.com/736x/a9/65/7d/a9657d44c8f7ec1aa597bf1df21ceed6.jpg" },
    { name: "Undhiyu", img: "https://i.pinimg.com/1200x/ad/97/fc/ad97fc74d0b36f09c2d1737eabf8f09c.jpg" },
    { name: "Thepla", img: "https://i.pinimg.com/736x/ee/18/dd/ee18ddbd952e167606ace8e7d78b5c5a.jpg" },
    { name: "Fafda Jalebi", img: "https://img.freepik.com/premium-photo/crispy-fafda-with-sweet-jalebi-is-indian-snack-most-popular-gujarat-selective-focus_466689-71779.jpg?w=2000" },
    { name: "Handvo", img: "https://i.pinimg.com/736x/6a/71/2b/6a712b12d9717871fe714fe4f71e304d.jpg" },
    { name: "Sev Tameta Nu Shaak", img: "https://2.bp.blogspot.com/-2Zj0e1EffnA/WvyBZodYAGI/AAAAAAAAgy8/r1HbvyYBknMJ9ALLdPcf7vkNd-L1OTaaACLcBGAs/s1600/Sev%2BTamatar%2B10.JPG" },
    { name: "Gujarati Kadhi", img: "https://i.pinimg.com/736x/54/52/99/545299c8d3c290719f6cd06f309bf8f6.jpg" },
    { name: "Bhakri", img: "https://i.pinimg.com/1200x/7b/0b/ee/7b0bee4beb7ebf198879c6db0b6ff631.jpg" },
    { name: "Basundi", img: "https://i.pinimg.com/736x/f5/db/d6/f5dbd6c978b902545845135aca51e0fd.jpg" }
  ]
},
{
  state: "Haryana",
  img: "https://i.pinimg.com/1200x/8c/26/94/8c2694cb4f0d1589fa4f9a696d5f3893.jpg",

  restaurants: [
  { name: "Sukhdev Dhaba (Murthal)", img: "https://pbs.twimg.com/media/En5Rtt-VEAEgsGd.jpg" },
  { name: "Haveli Restaurant (Karnal)", img: "https://haveli.co/images/jma_logo.png" },
  { name: "Pind Balluchi (Gurugram)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLD5u3Iz62ZkLNGea7hUWkGUQTFoj6fIN0OQ&s" },
  { name: "Bikanervala (Gurugram)", img: "https://cdn.uengage.io/brand_logo/image-1687162174.jpg" },
  { name: "Kitchen District — Hyatt Regency (Gurugram)", img: "https://img4.nbstatic.in/tr:w-500/68319ab0ea2e78000b68533d.jpg" },
  { name: "The Brew Estate (Panchkula)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmMM3FkV2RcAJA5dvxOrzlBo9LF2WJ9Y3-mQ&s" },
  { name: "Barbeque Nation (Gurugram)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoYWYSsswAMfc1xGX8JPHHit9zNFZFPl4BaQ&s" },
  { name: "Madhuban Resort & Spa Restaurant (Karnal)", img: "https://netlink.co.in/wp-content/uploads/2014/07/madhubhan-logo.jpg" },
  { name: "The Indian Grill Room (Gurugram)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLaziTYro-idV20nixxFPFOcr4jqdH2UYpvg&s" },
  { name: "21 Gun Salute" ,img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKBeoCT5YFjaiHQsF4W8xCWj7izXI2wjiH-w&s" }
]
,

  foods: [
    { name: "Bajra Khichdi", img: "https://i.pinimg.com/736x/40/bc/53/40bc53590e5315828d039c3dc483a0b3.jpg" },
    { name: "Bajra Roti with Desi Ghee", img: "https://i.pinimg.com/736x/39/19/b4/3919b4a0fd1bfc090c40cf506bd5afdd.jpg" },
    { name: "Hara Dhania Choliya", img: "https://images.slurrp.com/prod/recipe_images/vidhyas-home-cooking/instant-pot-hara-dhaniya-cholia-cilantro-green-chickpeas-curry-1617379323_U66JR3HTKLUMN8F39R18.webp" },
    { name: "Singri ki Sabzi", img: "https://blog.swiggy.com/wp-content/uploads/2024/04/Singri-Ki-Sabzi.jpg" },
    { name: "Bathua Raita", img: "https://i.pinimg.com/736x/b5/68/d0/b568d036d57535a6467be3effb67fc86.jpg" },
    { name: "Kadhi Pakora (Haryanvi Style)", img: "https://tse1.mm.bing.net/th/id/OIP.3wk1PK_MePzN53mi-7twpwHaIf?rs=1&pid=ImgDetMain&o=7&rm=3" },
    { name: "Besan Masala Roti", img: "https://i.pinimg.com/736x/fb/94/d1/fb94d1f4cc1542ba43bb6cb958c9c4f9.jpg" },
    { name: "Methi Gajar", img: "https://i.pinimg.com/736x/57/f7/8a/57f78a6b1daf97003ae3fe83828524ca.jpg" },
    { name: "Kachri ki Chutney", img: "https://tse2.mm.bing.net/th/id/OIP.j6WZZFZbHi34snBtJLkgEAHaFj?rs=1&pid=ImgDetMain&o=7&rm=3" },
    { name: "Rewari (Sesame Sweet)", img: "https://m.media-amazon.com/images/I/81Q9g0A0LjL._SX679_.jpg" }
  ]
},
{
  state: "Himachal Pradesh",
  img: "https://www.holidify.com/images/bgImages/HIMACHAL-PRADESH.jpg",

  restaurants: [
  { name: "The Johnson's Café (Manali)", img: "https://media-cdn.tripadvisor.com/media/photo-s/13/a7/37/fd/the-johnson-s-cafe.jpg" },
  { name: "Café 1947 (Manali)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjF05G4JYYiPhkT-WZsqt24-QtAiT9SLOWE62PNcrgBagWPLpYZgCJHdVQDYdIDs64jmA&usqp=CAU" },
  { name: "Wake & Bake Café (Shimla)", img: "https://media-cdn.tripadvisor.com/media/photo-s/11/01/1e/39/images-1-largejpg.jpg" },
  { name: "Himachali Rasoi (Shimla)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjZwnl6jF9lEuSjnSahKkJ898hdzS-nys_XQ&s" },
  { name: "Café Simla Times (Shimla)", img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/a9/30/ba/getlstd-property-photo.jpg?w=900&h=500&s=1" },
  { name: "The Corner House (Manali)", img: "https://b.zmtcdn.com/data/brand_creatives/logos/9156878ae59a94d34da17310e86455031715313523.png" },
  { name: "Nick’s Italian Kitchen (Dharamshala)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIkLBR7N3jZGXvNRfzogZOmR9iM-CKussQLg&s" },
  { name: "Morgan's Place (Dharamkot)", img: "https://media-cdn.tripadvisor.com/media/photo-s/08/7a/cf/f7/morgan-s-place.jpg" },
  { name: "Jim Morrison Café (Kasol)", img: "https://media-cdn.tripadvisor.com/media/photo-s/0a/0b/11/fb/jim-morrison-cafe.jpg" },
  { name: "Moon Dance Café (Kasol)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTstfTrBYS_o3ZJTfcRmOflR4SPZBGYnJK8fQ&s" }
]
,

  foods: [
    { name: "Dhaam", img: "https://th-i.thgim.com/public/life-and-style/food/l6uvla/article24653013.ece/alternates/LANDSCAPE_1200/10MPHimachaliDhaamjpg" },
    { name: "Siddu", img: "https://i.pinimg.com/736x/48/f6/49/48f64992b8ff2f1844e262436061a520.jpg" },
    { name: "Babru", img: "https://tse1.mm.bing.net/th/id/OIP.rhxq7JFa8mwAMZqpEHrPpwHaE8?rs=1&pid=ImgDetMain&o=7&rm=3" },
    { name: "Chha Gosht", img: "https://i.pinimg.com/1200x/f2/de/65/f2de6566c30fce73cc43beb6bd65dac7.jpg" },
    { name: "Aktori", img: "https://rakkh.com/patrika/wp-content/uploads/2022/03/Puran-Poli-Pallavi-Jayaraman.jpg" },
    { name: "Tudkiya Bhath", img: "https://rakkh.com/patrika/wp-content/uploads/2022/05/tudkiya-bhath-recipe-main-photo.jpg" },
    { name: "Bhey (Lotus Stem Curry)", img: "https://tse1.mm.bing.net/th/id/OIP.gw6huGEZK8ZR8-a4JZVutwHaFi?rs=1&pid=ImgDetMain&o=7&rm=3" },
    { name: "Mittha", img: "https://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2023/02/Mittha-Food-of-Himachal.jpg?w=948&ssl=1" },
    { name: "Kullu Trout Fish", img: "https://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2023/02/Kullu-Trout-Fish-Food-Himachal.jpg?w=800&ssl=1" },
    { name: "Madra", img: "https://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2023/02/Himachali-Chana-Madra-Food-Himachal-Pradesh.jpg?resize=1024%2C683&ssl=1" }
  ]
},
{
  state: "Jharkhand",
  img: "https://www.holidify.com/images/bgImages/JHARKHAND.jpg",

  restaurants: [
  { name: "The Yellow Chilli (Ranchi)", img: "https://media-cdn.tripadvisor.com/media/photo-s/15/c1/33/2d/flyer50942584597.jpg" },
  { name: "Barbeque Nation (Ranchi)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoYWYSsswAMfc1xGX8JPHHit9zNFZFPl4BaQ&s" },
  { name: "City Dhaba (Ranchi)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMMxdehiX2qCDqTNdMg6KK3XMw3ZYefmV7yA&s" },
  { name: "Flavours Restaurant (Jamshedpur)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC8iFngyhHEl3qdHS19phqqtvkXyXY-uW96g&s" },
  { name: "Spice Hut (Ranchi)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPF-akRwlWXFzJmHkADVh7oHwzis10wzlPyQ&s" },
  { name: "Hotel Sonnet (Ranchi)", img: "https://assets.simplotel.com/simplotel/image/upload/x_0,y_316,w_1536,h_896,r_0,c_crop,q_90/w_355,h_200,f_auto,c_fit/the-sonnet/sonnet_logo_1_phdlx2_jzqzck" },
  { name: "Pind Balluchi (Jamshedpur)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXMThHMA5xooEfj9oKIzer_gnYTN3p1Q7nGQ&s" },
  { name: "Domino’s Pizza (Ranchi)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQttEWxBl5KEgtJO8AsUdjQh9ytFZbH9FlwLg&s" },
  { name: "Royal Taj Restaurant (Bokaro)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9uFA7d1jQUBP97LRMgAr3aurspkg-oG49Ww&s" },
  { name: "Dilli Darbar (Ranchi)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCKRLjcgSCMB9eMSrRA03HDGl3_r5r3-BX6g&s" }
]
,

  foods: [
    { name: "Thekua", img: "https://static.vecteezy.com/system/resources/previews/016/283/475/non_2x/thekua-is-an-indian-sweet-dish-popular-in-uttarpradesh-bihar-and-jharkhand-offering-for-the-chhat-festival-free-photo.jpg" },
    { name: "Litti Chokha", img: "https://tse1.explicit.bing.net/th/id/OIP.icYHW_0yDn0b98AqwDy3hwHaLH?rs=1&pid=ImgDetMain&o=7&rm=3" },
    { name: "Chhilka Roti", img: "https://i.pinimg.com/1200x/63/84/6f/63846fd1a5665111d9c939c3026a6982.jpg" },
    { name: "Malpua", img: "https://i.pinimg.com/1200x/ee/8c/c1/ee8cc1d3c063776376b35c486935feb4.jpg" },
    { name: "Chana Ghugni", img: "https://i.pinimg.com/1200x/46/67/31/4667311156c7f743235fca0dc2b42f23.jpg" },
    { name: "Makhana Kheer", img: "https://i.pinimg.com/1200x/97/1f/34/971f3427d90607fe4bdce1adb2015d02.jpg" },
    { name: "Khaja", img: "https://i.pinimg.com/1200x/71/2f/87/712f87d8265f2c30a485b2b2015b8268.jpg" },
    { name: "Dal Pitha", img: "https://i.pinimg.com/736x/38/40/6f/38406f53a22dc7a3f51e596ee8cf9ea4.jpg" },
    { name: "Arsa", img: "https://c.ndtvimg.com/2020-08/p83s5au_arsa_625x300_26_August_20.jpg" },
    { name: "Tilkut", img: "https://cdn.shopify.com/s/files/1/0587/0823/0318/files/03DEB125-EF0E-434E-94A3-9371E86A4B7F_480x480.png?v=1671280974" }
  ]
},
{
  state: "Madhya Pradesh",
  img: "https://s7ap1.scene7.com/is/image/incredibleindia/chaturbhuj-temple-orchha-madhya-pradesh-2-attr-hero?qlt=82&ts=1726670981334",

  restaurants: [
  { name: "Indian Coffee House (Bhopal)", img: "https://lh3.googleusercontent.com/-ap9bIZC_16ybRjos3HnPizOl35X4mhf5fQ3JKsJD5SOuRpNetl6t4EiQJY10-y6s1aTRfCd1WKtKPcFCv3QYH2nFp786bmokpZr3B2Z" },
  { name: "Manohar Dairy (Indore)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaR1duMKvNJ164zs89T38JwLucwL4V-sqnGw&s" },
  { name: "Tandoori Galli (Indore)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1t_5rv5mQkVIuewWkfqVV1QMeVDzfIOgS4g&s" },
  { name: "The Zaika (Bhopal)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3-Fgu0x8tV8gjfKqs4dF6eWniiZAv3NpP5g&s" },
  { name: "Indian Rasoi (Gwalior)", img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/d8/ba/4a/caption.jpg?w=1100&h=1100&s=1" },
  { name: "Panchavati Gaurav (Indore)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrTW-zcgdRKHyT6VW04CxbDWYJk6aBWYqX3g&s" },
  { name: "Barbeque Nation (Bhopal)", img: "https://lh3.googleusercontent.com/DabEnNkjPPf3GJ7hwDIcAZgurNnQcXv21VrThdUQeKcepKlow7J_B5j_V-V9baAtfmDdrgAnfOb45E-plADLU3mlEMshd2GBPg0S7qg1" },
  { name: "Moti Mahal Delux (Indore)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS95voAmnOpabtUDPIAHM9PtErTVlpl2vviAw&s" },
  { name: "Rajwada (Indore)", img: "https://www.shutterstock.com/image-vector/rajwada-holkar-palace-old-indore-260nw-2470790827.jpg" },
  { name: "Chappan Dukan (Indore)", img: "https://thumbs.dreamstime.com/b/chappan-dukan-renovation-indore-india-city-s-famous-food-joint-called-dukaan-shops-gets-makeover-new-logo-signboard-175295263.jpg" }
]
,

  foods: [
    { name: "Poha", img: "https://myheartbeets.com/wp-content/uploads/2021/05/easy-poha-recipe.jpg" },
    { name: "Bhutte Ka Kees", img: "https://i.pinimg.com/1200x/94/84/f4/9484f48f386dc7004dcb9797d33b0b24.jpg" },
    { name: "Dal Bafla", img: "https://i.ndtvimg.com/i/2016-08/dal-bafla_625x350_51471066415.jpg" },
    { name: "Indori Namkeen", img: "https://i.pinimg.com/736x/73/41/e7/7341e7ce06344380755966340cd35ea3.jpg" },
    { name: "Malpua", img: "https://i.pinimg.com/1200x/c8/b3/9e/c8b39e0e3742d025c1f43d9ea131fdcf.jpg" },
    { name: "Jalebi", img: "https://i.pinimg.com/736x/40/0d/87/400d87367888486133919e951c6e6746.jpg" },
    { name: "Sev Tameta Nu Shaak", img: "https://th.bing.com/th/id/R.0026b45a02f2e4058785272303d968a2?rik=SdfEb4NZNIH8Iw&riu=http%3a%2f%2fhebbarskitchen.com%2fwp-content%2fuploads%2f2016%2f08%2fsev-tameta-nu-shaak-recipe-sev-tamatar-sabzi-gujarati-recipe-1-1024x769.jpeg&ehk=yE8xxXK7H2gEbVql2bB3Eg2Wk5hZjrd8yK7M1%2fJ7yWI%3d&risl=&pid=ImgRaw&r=0" },
    { name: "Rogan Josh (Gwalior)", img: "https://tse1.mm.bing.net/th/id/OIP.YsapdDHxhd4pJZnXW9n1cgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" },
    { name: "Poha Jalebi Combo", img: "https://i.pinimg.com/736x/e7/b5/01/e7b50152644a0650be1a9f801a8c2de8.jpg" },
    { name: "Chana Samosa", img: "https://th.bing.com/th/id/OIP.H6HILwGuC9bySKtk9TDjdQHaEL?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3" }
  ]
},
{
  state: "Maharashtra",
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXJFBrKC8nPWAej7avVm81oHCucyyx17GHMzoH7qvwUbNSN89yaLSxsdqGJlQcB45zt9s&usqp=CAU",

  restaurants: [
  { name: "Britannia & Co. Restaurant (Mumbai)", img: "https://images.squarespace-cdn.com/content/v1/5fcdc5e73b4ad40d4a7d6900/1608538461453-JT94E0QKIF8VKFXZG9XN/BRITlogo.jpg?format=1000w" },
  { name: "Leopold Café (Mumbai)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ6MGSvorRJVRuLTC977hwvWJ87W5blozJig&s" },
  { name: "The Table (Mumbai)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxjlLbxUX5Dsvq0e2DVQ-cnvxyBdtGUAL24Q&s" },
  { name: "Highway Gomantak (Pune)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScxVjOy4qV5T4h3RpGErmyR7F6WKnVyQtLJQ&s" },
  { name: "Vaishali (Pune)", img: "https://map.sahapedia.org/admin/assets/images/202104201405189F_IS_VAI_11_Image01_thumbnail.jpg" },
  { name: "Shree Thaker Bhojanalay (Mumbai)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVmkP-vpKFGoASqed7aWhigdkF7KyBRpNyUm4nP-xPBN_3cDeNXjrZoTWPwbV-864oYQQ&usqp=CAU" },
  { name: "Aaoji Khaoji (Mumbai)", img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/a9/81/f3/aao-ji-khao-ji.jpg?w=500&h=-1&s=1" },
  { name: "Malaka Spice (Mumbai)", img: "https://malakaspice.com/images/wisecow/Demo1_Logo_175x175.png" },
  { name: "Kayani Bakery (Pune)", img: "https://static.wixstatic.com/media/35c661_bffbc14d299b4df8807aacdb43f3780d~mv2.jpg/v1/fill/w_277,h_277,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/35c661_bffbc14d299b4df8807aacdb43f3780d~mv2.jpg" },
  { name: "Rajdhani Thali (Mumbai)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRNcuSkSYoCg3EHx-DEpLfDZsuz38Ua5cEIg&s" }
]
,

  foods: [
    { name: "Vada Pav", img: "https://i.pinimg.com/736x/48/7f/6b/487f6b2679a185312aedc48937c150ae.jpg" },
    { name: "Pav Bhaji", img: "https://i.pinimg.com/736x/bd/03/1b/bd031b26343b8c2cc6f035d68f8d90ab.jpg" },
    { name: "Misal Pav", img: "https://i.pinimg.com/736x/53/07/e8/5307e87aafa023268b074c262d04fe03.jpg" },
    { name: "Poha", img: "https://myheartbeets.com/wp-content/uploads/2021/05/easy-poha-recipe.jpg" },
    { name: "Sabudana Khichdi", img: "https://i.pinimg.com/1200x/e6/63/cb/e663cb555131098212328e685554e938.jpg" },
    { name: "Puran Poli", img: "https://i.pinimg.com/1200x/ee/87/c6/ee87c622879c76616cfe26ab46d8c2c7.jpg" },
    { name: "Modak", img: "https://www.spiceupthecurry.com/wp-content/uploads/2020/08/steamed-modak-1.jpg" },
    { name: "Bhakri", img: "https://i.pinimg.com/1200x/ae/19/4f/ae194f87ceaab60178912100acb4a3a9.jpg" },
    { name: "Thalipeeth", img: "https://i.pinimg.com/1200x/bb/64/b2/bb64b246e8d497e561804c69a8ec7854.jpg" },
    { name: "Bombay Sandwich", img: "https://vanitascorner.com/wp-content/uploads/2023/04/Bombay-Sandwich-VC.jpg" }
  ]
},
{
  state: "Manipur",
  img: "https://www.holidify.com/images/bgImages/MANIPUR.jpg",

  restaurants: [
  { name: "Khamba Restaurant (Imphal)", img: "https://content3.jdmagicbox.com/comp/imphal/h8/9999p3852.3852.180914152819.c8h8/catalogue/chakhum-ama-sagolband-thingom-leikai-imphal-restaurants-nrm2fn7x98.jpg" },
  { name: "Baker’s Café (Imphal)", img: "https://content3.jdmagicbox.com/v2/comp/imphal/w7/9999p3852.3852.190823061543.u9w7/catalogue/machang-bakes-and-cafe-imphal-coffee-shops-g35kao1m35.jpg" },
  { name: "The Yellow Chilli (Imphal)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQqoHUEqqlvB0QL6hDj0989EdrS2NqkxUZeA&s" },
  { name: "Golden Dragon (Imphal)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST5RnsmOhhAtDOCoOp9zGR2SgXfDbRudr9bw&s" },
  { name: "Eagle Café (Imphal)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVY6xZS4_Mrb98pS3y4H0U3ODEWpFl17MoCQ&s" },
  { name: "Ngakoup Restaurant (Imphal)", img: "https://nkpempire.com/wp-content/uploads/elementor/thumbs/brand-logo-1-qh184jl147h93iuxrewkuu1jqb9fsotr2ve56lzxrg.webp" },
  { name: "Ningol Café (Imphal)", img: "" },
  { name: "Royal Dragon (Imphal)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn_PIN09YC0DpQOWoAFmXfX2fVG2S1E1Gi8Q&s" },
  { name: "Mami's Kitchen (Imphal)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNFmDq_2bz9eFtdN0EzJIhRNJqw_SxHEaisw&s" },
  { name: "Spicy Garden (Imphal)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1EI6Xa54DF7z-xqk4twkDQc5AArFgwO8Faw&s" }
]
,

  foods: [
    { name: "Eromba", img: "https://www.friedeye.com/wp-content/uploads/2014/01/eromba.jpg" },
    { name: "Singju", img: "https://www.friedeye.com/wp-content/uploads/2014/01/sinji.jpg" },
    { name: "Nga Thongba (Fish Curry)", img: "https://www.licious.in/blog/wp-content/uploads/2021/12/Licious-Blog-Shoot11700-1024x1024.jpg" },
    { name: "Chamthong (Vegetable Stew)", img: "https://www.crazymasalafood.com/wp-content/images/2021/12/Chamthong-Or-Kangshoi.jpg.webp" },
    { name: "Sana Thongba", img: "https://www.crazymasalafood.com/wp-content/images/2021/12/Sana-Thongba-960x639.jpg.webp" },
    { name: "Mangal Ooti", img: "https://www.crazymasalafood.com/wp-content/images/2021/12/Mangal-Ooti-960x640.jpg.webp" },
    { name: "Kelli Channa", img: "https://www.crazymasalafood.com/wp-content/images/2021/12/Kelli-Channa.jpg.webp" },
    { name: "Chakhao (Black Rice Dessert)", img: "https://www.crazymasalafood.com/wp-content/images/2021/12/Chak-hao-kheer-960x504.jpg.webp" },
    { name: "Peruk Kangsu", img: "https://www.crazymasalafood.com/wp-content/images/2021/12/Peruk-Kangsu.jpg.webp" },
    { name: "Chagempomba", img: "https://www.crazymasalafood.com/wp-content/images/2021/12/Chagempomba.jpg.webp" }
  ]
},
{
  state: "Meghalaya",
  img: "https://www.holidify.com/images/bgImages/MEGHALAYA.jpg",

  restaurants: [
  { name: "Trattoria (Shillong)", img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/83/8b/3a/trattoria-is-in-the-busy.jpg?w=1100&h=1100&s=1" },
  { name: "Cafe Shillong (Shillong)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7qQMmqlXseNxDkLVOJQ2-5KU8tGbuJmSt6g&s" },
  { name: "City Hut Family Dhaba (Shillong)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz32KYc8svfatW5NAhzuFNXxbaxgNj3-LkbA&s" },
  { name: "Cafe Shillong Weaving (Shillong)", img: "https://content.jdmagicbox.com/comp/shillong/f2/9999px364.x364.130515104949.i8f2/catalogue/cafe-shillong-banasree-shillong-coffee-shops-l1kmr4.jpg" },
  { name: "Cafe Shillong Hills (Shillong)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnN3geHI7b9zvToqXqGKfON2jw0yt1jvyLJQ&s" },
  { name: "Cloud 9 (Shillong)", img: "https://content.jdmagicbox.com/v2/comp/shillong/z1/9999px364.x364.230912011050.q9z1/catalogue/cloud-9-resto-lounge-bar-police-bazar-shillong-restaurants-and-bars-x0eYtT98aS-250.jpg" },
  { name: "Dylan's Café (Shillong)", img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/b7/71/7b/caption.jpg?w=1100&h=1100&s=1" },
  { name: "Maki Café (Shillong)", img: "https://makcafe.com/wp-content/uploads/2022/10/mak-logo.jpeg-pdf.jpg" },
  { name: "Cafe Shillong Aroma (Shillong)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvcBcA0_urfKgSxBhrIczHrBmhWE1gZgh-8Q&s" },
  { name: "City Café (Shillong)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXsdevNUnNvr4qGNTI57Ctxj6jIljLOwpYCw&s" }
]
,

  foods: [
    { name: "Jadoh", img: "https://i.pinimg.com/736x/36/a9/b0/36a9b0b52ed53a14c24bef5aa4c58a8d.jpg" },
    { name: "Dohneiiong", img: "https://i.pinimg.com/736x/76/69/f8/7669f8eb907d86465158dde8be99ad8d.jpg" },
    { name: "Tungrymbai", img: "https://images.slurrp.com/prodrich_article/n5e15ea1ve.webp?impolicy=slurrp-20210601&width=880&height=500" },
    { name: "Pumaloi", img: "https://images.squarespace-cdn.com/content/v1/67988d02cd9a2747e32a9034/9437d868-c7c9-4feb-b471-f1def3cf1caf/pumaloi.jpg?format=1000w" },
    { name: "Doh Khleh", img: "https://images.slurrp.com/prod/articles/arv20s4oi4m.webp" },
    { name: "Nakham Bitchi", img: "https://images.squarespace-cdn.com/content/v1/67988d02cd9a2747e32a9034/a26f877b-6dfd-44b9-9df1-cd2e8cce2078/Meghalaya-food-Nakham-Bitchi.jpg?format=1000w" },
    { name: "Sakin Gata", img: "https://images.squarespace-cdn.com/content/v1/67988d02cd9a2747e32a9034/e1604bb1-ddfc-4379-8aa7-39609ae898d6/Sakin-Gata-Meghalaya.jpg?format=1000w" },
    { name: "Dohneiiong Pork Curry", img: "https://images.slurrp.com/prod/recipe_images/better-butter/dohneiiong-pork-with-black-sesame-seeds_6JWLOX2PR2HVQYN83ZOB.webp?impolicy=slurrp-20210601&width=1200&height=675" },
    { name: "Shutki", img: "https://uploads-ssl.webflow.com/5c481361c604e53624138c2f/60f2ead6df0bb6268479a84d_Shutki%20bata_1500%20x%201200.jpg" },
    { name: "Tungtap", img: "https://www.myspicykitchen.net/wp-content/uploads/2014/04/Tungtap-1.jpg" }
  ]
},
{
  state: "Mizoram",
  img: "https://www.holidify.com/images/bgImages/MIZORAM.jpg",

  restaurants: [
  { name: "Ginger & Garlic Restaurant (Aizawl)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReZnpwFQ8YGxtOQgjJS8FSoPxl1DJI_cesPQ&s" },
  { name: "Green Chilli (Aizawl)", img: "https://content.jdmagicbox.com/comp/kapurthala/s8/9999p1822.1822.180610140508.n9s8/catalogue/green-chilli-restaurant-begowal-kapurthala-0owpgsz0sx.jpg" },
  { name: "Northeast Café (Aizawl)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpMHBmloMoUPzjlYiZ6opAHWOi5qefqOKnsw&s" },
  { name: "The Bamboo Hut (Aizawl)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBBkhyGoUVUiBPKo3ZNdjK4BOaQNYicIAXDA&s" },
  { name: "Cafe Aizawl (Aizawl)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSadgL8AfGvtOeEwbmEs-hVe_bUN56as4SgNA&s" },
  { name: "City Café (Aizawl)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXsdevNUnNvr4qGNTI57Ctxj6jIljLOwpYCw&s" },
  { name: "Dragon's Den (Aizawl)", img: "https://static.wixstatic.com/media/964082_d0e3fe7ee3544bcf9dd6cb0166486a5c~mv2_d_1800_1800_s_2.jpg" },
  { name: "The Coffee House (Aizawl)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKJRGYbhG4vLO6v9uyhO9QqdM8FHuwfZ6ing&s" },
  { name: "Red Chili (Aizawl)", img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/bd/f4/57/red-pepper.jpg?w=800&h=500&s=1" },
  { name: "Mizoram Tandoor (Aizawl)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr5zaZsWf1Oc485mDuMRMGaC5gfGhR9ZJR7w&s" }
]
,

  foods: [
    { name: "Bai", img: "https://media.assettype.com/english-sentinelassam%2Fimport%2Fh-upload%2F2021%2F06%2F11%2F234131-bai.webp?w=1024&auto=format%2Ccompress" },
    { name: "Sawhchiar", img: "https://i.ytimg.com/vi/c3QcWEJ2-J8/maxresdefault.jpg" },
    { name: "Mizo Vawksa", img: "https://media.assettype.com/english-sentinelassam%2Fimport%2Fh-upload%2F2021%2F06%2F11%2F234132-maxresdefault.webp?w=1024&auto=format%2Ccompress" },
    { name: "Chhum Han", img: "https://blog.swiggy.com/wp-content/uploads/2024/08/Image-No-5-Chhum-Han-768x403.png" },
    { name: "Koat Pitha", img: "https://media.assettype.com/english-sentinelassam%2Fimport%2Fh-upload%2F2021%2F06%2F11%2F234135-koat-pitha.webp?w=1024&auto=format%2Ccompress" },
    { name: "Smoked Meat", img: "https://blog.swiggy.com/wp-content/uploads/2024/08/Image-No-2-Smoked-meat-1024x538.png" },
    { name: "panch phoran tarkari", img: "https://x9s2d6a3.rocketcdn.me/wp-content/uploads/2014/04/Panch-phoran-tarkari_1200x1200.jpg" },
    { name: "Vawksa Rep", img: "https://blog.swiggy.com/wp-content/uploads/2024/08/Image-No-4-Vawksa-Rep-768x403.png" },
    { name: "Sanpiau", img: "https://media.assettype.com/english-sentinelassam%2Fimport%2Fh-upload%2F2021%2F06%2F11%2F234127-sanpiau-06.webp?w=1024&auto=format%2Ccompress" },
    { name: "Bamboo Shoots", img: "https://blog.swiggy.com/wp-content/uploads/2024/08/Image-No-1-Bamboo-shoots-fry-1024x538.png" }
  ]
},
{
  state: "Nagaland",
  img: "https://www.holidify.com/images/bgImages/NAGALAND.jpg",

  restaurants: [
  { name: "Dzükou Café (Kohima)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Ob_xMPIDOt4ZhkcAa07n7kZJokjwpsCJVg&s" },
  { name: "Cafe Nagaland (Kohima)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgCltqYtp5yiZQy0VAuuiDDMKiIY1bPKpsUw&s" },
  { name: "The Heritage Café (Dimapur)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu9omTOYZStyi2rLf-SUu34mSrDyzCy34oTQ&s" },
  { name: "The Bamboo Café (Kohima)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx3trCDSyO-quYwcwJ5M-SIZwWzXjO9pQKig&s" },
  { name: "Cafe Dimapur (Dimapur)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQydYo79X0s_081N8T1IPo7P8P1G1Oggyiycg&s" },
  { name: "Hot Spot (Dimapur)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3C46WZty8KZCpcT5be4W3NusV3bSk-4f3AQ&s" },
  { name: "Turtle Café (Kohima)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj_pbtSliBG6XgUqMQKMXxGhINZszrwF6PGg&s" },
  { name: "Nagaland Tandoor (Kohima)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRebkP3yBIqZpYVG233SMj6imBPW4yL4opmXQ&s" },
  { name: "Dragon’s Den (Dimapur)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSIvIiDccLziRPMVcMgy5uWHPcpkkRT5PvRA&s" },
  { name: "City Café (Kohima)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-eL0dZMJHPM2wz-qZu6pLsbc5-w50H907jw&s" }
]
,

  foods: [
    { name: "Smoked Pork with Bamboo Shoot", img: "https://i.pinimg.com/736x/1d/b1/ef/1db1ef1ddc33a008adbb543885671e7a.jpg" },
    { name: "Axone (Fermented Soybean)", img: "https://i.pinimg.com/1200x/95/72/c3/9572c304c43dda392e0a60f4fb18f56e.jpg" },
    { name: "Naga Ghost Chili Curry", img: "https://th.bing.com/th/id/R.a0ac51f78a9d10f107d4a147c512ddd2?rik=yrHMoNFRK7%2bM9A&riu=http%3a%2f%2fcdn.shopify.com%2fs%2ffiles%2f1%2f0866%2f1944%2fproducts%2fPhaal_Curry_Life_Style_943a481a-227e-4faf-9e43-620d01d1e1ca_1200x1200.jpg%3fv%3d1675944872&ehk=vPYjoZ%2bGEHdeikavgWDAqIJG%2fyAap%2bNmz6vzM%2bsQ0BI%3d&risl=&pid=ImgRaw&r=0" },
    { name: "Zutho (Rice Beer)", img: "https://images.slurrp.com/prodrich_article/4y4llckbcwn.webp?impolicy=slurrp-20210601&width=880&height=500" },
    { name: "Galho (Naga Stew)", img: "https://i.pinimg.com/originals/2b/c1/ff/2bc1ffc9af7640ed5a5a88e2b3f0a6e2.png" },
    { name: "Anishi", img: "https://image.shutterstock.com/image-photo/anishi-naga-delicacy-fermented-leaves-260nw-2023632047.jpg" },
    { name: "Fish with Bamboo Shoot", img: "https://i.pinimg.com/736x/2d/65/5e/2d655ee49c8ec00e6c164713b6d6361d.jpg" },
    { name: "Smoked Pork Curry", img: "https://thumbs.dreamstime.com/z/naga-style-smoked-pork-curry-263016575.jpg" },
    { name: "Wokha Pork", img: "https://www.wokkanoodles.com.au/wp-content/uploads/2021/12/wokka-Thin-hokkien-1.png" },
    { name: "Naga Pork Curry", img: "https://i0.wp.com/atmykitchen.net/wp-content/uploads/2019/06/naga_pork_curry6292036383526891207.jpg?fit=771%2C1024&ssl=1" }
  ]
},
{
  state: "Odisha",
  img: "https://www.holidify.com/images/bgImages/ODISHA.jpg",

  restaurants: [
  { name: "Truptee (Bhubaneswar)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUmte9Ny0MQrbqn3ZYiyzKn_dk46yux1DUZw&s" },
  { name: "Mayfair Lagoon (Bhubaneswar)", img: "https://assets.isu.pub/document-structure/230504134407-675f77f2f539f44337e5881bae3ac2ea/v1/84d9fdf48e3087396508179afa95f695.jpeg" },
  { name: "Kanika (Bhubaneswar)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhxrU3yGs9DLEGMkKI_hB1teBXuCM3wQBuiA&s" },
  { name: "Dalma (Bhubaneswar)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDyVyVspePMbfe--oFLn9l5Psf8nCjYr0iqVO62kAX_6qdNo9szKJV0WxxK3NcdGGoVgE&usqp=CAU" },
  { name: "Gini's Restaurant (Bhubaneswar)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfSbyC-FJjWmLZTZdNKnlN8j3kBqrgMIWTzg&s" },
  { name: "Wild Grass (Puri)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ3Ghsa_m0WEFdFiWELprC76hdNaijiSB-oA&s" },
  { name: "The Yellow Chilli (Bhubaneswar)", img: "https://media-cdn.tripadvisor.com/media/photo-s/16/b7/97/dd/the-yellow-chilli-official.jpg" },
  { name: "Hare Krishna Restaurant (Bhubaneswar)", img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/6d/bc/f8/hare-krishna.jpg?w=1200&h=1200&s=1" },
  { name: "Mayfair Lagoon (Puri)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ0uXav7Of2g2AvEIYFmUU0qxGoe71ugj2Ow&s" },
  { name: "Olive Bistro (Bhubaneswar)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgrebsEZNnKqMKJyCkR6HqvjnO6R-ulPnkdQ&s" }
]
,

  foods: [
    { name: "Dalma", img: "https://i.pinimg.com/1200x/34/66/9a/34669af4c3ce793135aaee2ef12588a0.jpg" },
    { name: "Pakhala Bhata", img: "https://i.pinimg.com/736x/51/75/c0/5175c0b9908210bf4d737877d1230051.jpg" },
    { name: "Chhena Poda", img: "https://i.pinimg.com/736x/25/bb/41/25bb411745e5ef94b53171226416999e.jpg" },
    { name: "Rasgulla", img: "https://i.pinimg.com/1200x/ee/42/70/ee4270634c96dfef9b2d9d613645aaa9.jpg" },
    { name: "Macha Tarkari", img: "https://1.bp.blogspot.com/-DKAD9d7LlIs/Vuki0VabgNI/AAAAAAAANTI/MLCHM1AtnM09W88AFl7MY__O9lLUMoPeQ/s1600/Macha%2BTarkari-17.jpg" },
    { name: "Chenna Jhili", img: "https://i.ytimg.com/vi/eCPdUI4FQr0/maxresdefault.jpg" },
    { name: "Dahi Vada – Aloo Dum", img: "https://www.fabhotels.com/blog/wp-content/uploads/2022/07/Dahi-Vada-%E2%80%93-Aloo-Dum-1.jpg" },
    { name: "Kanika Sweet Rice", img: "https://www.fabhotels.com/blog/wp-content/uploads/2022/07/kanika-1.jpg" },
    { name: "Khicede", img: "https://www.fabhotels.com/blog/wp-content/uploads/2022/07/Khicede-2.jpg" },
    { name: "Macha Ghanta", img: "https://www.fabhotels.com/blog/wp-content/uploads/2022/07/Macha-Ghanta-1.jpg" }
  ]
},
{
  state: "Punjab",
  img: "https://www.holidify.com/images/bgImages/PUNJAB.jpg",

  restaurants: [
  { name: "Baba Chicken (Amritsar)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxlF_A9GEd3iBrfsHNy-M4S31Tk65rhQUtSg&s" },
  { name: "Kesar Da Dhaba (Amritsar)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqZI0xfwwgvQu2u_M4Tunb2lSGyf6c3AOU3Q&s" },
  { name: "Brothers’ Dhaba (Amritsar)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeQ8eWCOWWUOuiVecApohuv0QXKgvzwxoS9g&s" },
  { name: "Giani Tea Stall (Amritsar)", img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/e8/71/11/photo3jpg.jpg?w=900&h=500&s=1" },
  { name: "Black Pepper (Chandigarh)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZMUDtqFS3mlsayMEoSx_EqEgazBVhrxC7ew&s" },
  { name: "Barbeque Nation (Chandigarh)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoYWYSsswAMfc1xGX8JPHHit9zNFZFPl4BaQ&s" },
  { name: "Whistling Duck (Chandigarh)", img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/32/26/3c/photo5jpg.jpg?w=1200&h=1200&s=1" },
  { name: "Gopal’s Dhaba (Ludhiana)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6vR0Kw7rNt0j7E2JeH2xFA6EJQHlrb_BJNQ&s" },
  { name: "Punjabi Tandoor (Amritsar)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS32VoPwyIn8dCcs4yKyum9hH4yP8sx4hWu_w&s" },
  { name: "Surjit Food Plaza (Chandigarh)", img: "https://surjitfoodplaza.darlic.com/wp-content/uploads/sites/302/2015/03/sfp-logo1.png" }
]
,

  foods: [
    { name: "Butter Chicken", img: "https://i.pinimg.com/1200x/1e/11/5e/1e115eb17da8de8eb278df6548da461f.jpg" },
    { name: "Amritsari Kulcha", img: "https://i.pinimg.com/1200x/6f/5c/f8/6f5cf8d9a8b64cdbaebe697a28e0c3f4.jpg" },
    { name: "Chole Bhature", img: "https://i.pinimg.com/1200x/7f/55/b3/7f55b38f35f6760ed94f75f7596de747.jpg" },
    { name: "Sarson Ka Saag", img: "https://i.pinimg.com/1200x/b9/a7/a1/b9a7a1773fd90629fab591e687a5da0e.jpg" },
    { name: "Makki Ki Roti", img: "https://i.pinimg.com/1200x/a6/eb/90/a6eb90e95406502031078e31d8f4798c.jpg" },
    { name: "Lassi", img: "https://i.pinimg.com/736x/8f/86/ae/8f86ae8f2bba557c3844ef1f603e1a4c.jpg" },
    { name: "Paneer Tikka", img: "https://i.pinimg.com/1200x/be/d3/3b/bed33b7a66729d7eaf6d4360922d5e55.jpg" },
    { name: "Tandoori Chicken", img: "https://i.pinimg.com/1200x/5c/83/87/5c8387d9f4d10d108c33b8cecc6cf1d7.jpg" },
    { name: "Rajma Chawal", img: "https://i.pinimg.com/736x/cd/d4/8a/cdd48a11dfa367033881b9870aa5e8bc.jpg" },
    { name: "Gajar Halwa", img: "https://i.pinimg.com/736x/d0/12/1a/d0121a9e446613fdc8deaf284885e9e1.jpg" }
  ]
},
{
  state: "Rajasthan",
  img: "https://www.holidify.com/images/bgImages/RAJASTHAN.jpg",

  restaurants: [
  { name: "Chokhi Dhani (Jaipur)", img: "https://cdn.theorg.com/a7e0a28f-630f-4fd1-97fc-72ec2e1617e6_small.jpg" },
  { name: "Suvarna Mahal (Jaipur)", img: "https://cdn.sanity.io/images/ocl5w36p/prod5/8f3d12cecf302062cd6139022a6b52839245a678-1280x1760.jpg?w=380" },
  { name: "Handi Restaurant (Jaipur)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu0UEHkEJ10JEnHfqHr7rLMMVMlQ-9koNdKg&s" },
  { name: "The Rajput Room (Udaipur)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLObKBBwWg0VMEDky94vk5U1jmTxdq3_5m_Q&s" },
  { name: "Pukka Restaurant (Jaipur)", img: "https://play-lh.googleusercontent.com/XXw6gaaR4JNBSnjky-mUHnuItKx9MQvMNfnZl2VP07TH8_GpLbFUhELiW3pAd7F1f5c" },
  { name: "Suvarna Mahal (Udaipur)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJa9iFmnCU_FRx326FXRLp0-qqAD4sigsO-g&s" },
  { name: "Handi Restaurant (Jodhpur)", img: "https://content3.jdmagicbox.com/comp/jodhpur/s8/0291px291.x291.171001121753.u1s8/catalogue/handi-restaurant-jodhpur-restaurants-4vn2xulase.jpg" },
  { name: "Nibs Café (Jaipur)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZJvYU6ZtzNpRa-0z7r5I6WdVKUxq_2xpujQ&s" },
  { name: "The Anokhi Café (Jaipur)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb5L6nSkQ9kb3bhllT03DcQksPz1rCaSyaUQ&s" },
  { name: "Bar Palladio (Jaipur)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa3nufacu8t8KQn6tndptzJxT1mtBkBHypuQ&s" }
]
,

  foods: [
    { name: "Dal Baati Churma", img: "https://i.pinimg.com/736x/96/ab/cb/96abcbb605d6bb0f3e20c58afe9cb96a.jpg" },
    { name: "Gatte Ki Sabzi", img: "https://i.pinimg.com/736x/dd/48/74/dd487483353208af4fe6f56bc3f4c9a4.jpg" },
    { name: "Laal Maas", img: "https://i.pinimg.com/1200x/54/fe/fb/54fefb8cb3ad499d5ca98e297e1c9d0e.jpg" },
    { name: "Ker Sangri", img: "https://i.pinimg.com/1200x/86/b1/86/86b18638c4313c2101e4f3bf8baae020.jpg" },
    { name: "Rajasthani Kachori", img: "https://i.pinimg.com/736x/13/08/e8/1308e8e80ec0439ece28c18fc3fb9a1e.jpg" },
    { name: "Mawa Kachori", img: "https://i.pinimg.com/736x/df/1e/f4/df1ef4abce07039fb5b9105adfc5770c.jpg" },
    { name: "Pyaaz Kachori", img: "https://i.pinimg.com/1200x/03/82/25/03822582dc0e37cd2a92716b6d5a99bd.jpg" },
    { name: "Rajasthani Thali", img: "https://www.enhanceyourpalate.com/wp-content/uploads/Dal-Bati-Churma-3333.jpg?v=1569173780" },
    { name: "Besan Chakki", img: "https://i.pinimg.com/1200x/c4/a7/dd/c4a7ddbffb9e8e6e7b596cd502dc6fa7.jpg" },
    { name: "Malpua", img: "https://i.pinimg.com/736x/ee/8c/c1/ee8cc1d3c063776376b35c486935feb4.jpg" }
  ]
},
{
  state: "Sikkim",
  img: "https://www.holidify.com/images/bgImages/SIKKIM.jpg",

  restaurants: [
  { name: "The Elgin (Gangtok)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS05VptKpCDwA-VudhiMf9_FgwXsoQX8CAK7g&s" },
  { name: "Taste of Tibet (Gangtok)", img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/31/66/3e/46/caption.jpg?w=1100&h=1100&s=1" },
  { name: "Roll House (Gangtok)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiNk0kBtXJAgHC2nV3DfIHPL3Lr6tjZIWIdQ&s" },
  { name: "Parivar Restaurant (Gangtok)", img: "https://32e7dc674b3533078d34.cdn6.editmysite.com/uploads/b/32e7dc674b3533078d348dc28f1ec76098b58347c8babe1e2efabfd847963e37/my%20logo_1744121508.jpeg?width=2400&optimize=medium" },
  { name: "Baker's Cafe (Gangtok)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_3f-IYsxMRjxgl839EJ-81dTllQVvBSyTBw&s" },
  { name: "The Coffee Shop (Gangtok)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpCS7zZXFfcPr1mP6_VQzRbD97jZPnzzSqPw&s" },
  { name: "Taste of India (Gangtok)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_rLhypJ2bxbrbHXiW6v62u9wgT2aqkW3R4g&s" },
  { name: "Zuma (Gangtok)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_dSGK4SUz0zhoRi7g320sEnGRs44BGqdzvw&s" },
  { name: "MG Road Café (Gangtok)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR7JsMyUdbbKwWExUYx0onT9x7Gp6njG7UKA&s" },
  { name: "The Square (Gangtok)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSboQ_RtFVz71EZ9fhke53nCD3j95bvm4SNUA&s" }
]
,

  foods: [
    { name: "Momos", img: "https://i.pinimg.com/1200x/e8/35/ed/e835ed89023c2a6d2d1933321d59efc4.jpg" },
    { name: "Thukpa", img: "https://i.pinimg.com/1200x/71/0d/91/710d912b8045a9d13cf5702deb7c22d4.jpg" },
    { name: "Chhurpi", img: "https://www.postoast.com/wp-content/uploads/2021/09/Chhurpi-Soup.jpg" },
    { name: "Masauyra Curry", img: "https://www.postoast.com/wp-content/uploads/2021/09/Masauyra-Curry.jpg" },
    { name: "Kinema Curry", img: "https://www.postoast.com/wp-content/uploads/2021/09/kinema_curry.jpg" },
    { name: "Shimi Ko Achar", img: "https://www.postoast.com/wp-content/uploads/2021/09/shimi-ko-achar.jpg" },
    { name: "Sael Roti", img: "https://www.postoast.com/wp-content/uploads/2021/09/sael-roti-sikkim-local-foods.webp" },
    { name: "Thenthuk", img: "https://www.postoast.com/wp-content/uploads/2021/09/Thenthuk-sikkim-food-1.jpg" },
    { name: "Jaanr", img: "https://www.postoast.com/wp-content/uploads/2021/09/Jaanr-sikkim.jpg" },
    { name: "Chow Mein (Local Style)", img: "https://i.pinimg.com/736x/03/8e/20/038e206ad91f021d961c59f7b1e3633c.jpg" }
  ]
},
{
  state: "Telangana",
  img: "https://www.holidify.com/images/bgImages/TELANGANA.jpg",

  restaurants: [
  { name: "Bawarchi (Hyderabad)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRYksozwCzeaFLmdv2tQ7ubHz3bTD11w6H-A&s" },
  { name: "Paradise Biryani (Hyderabad)", img: "https://lh3.googleusercontent.com/NoMZ6laqshvuTXBfs5CzKJAW02MRuhd_N3tdrzYTyxgdqTvHJGpNtr0Dh7fwU9PQ3gAmzEnmUYDF3Vb02UwXG_y54mv8SHZnqDRgv4o=w256-rw" },
  { name: "Chutneys (Hyderabad)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdRTZFbFlQm6REG-ta-cy2A0KK_Vkdmu1HaQ&s" },
  { name: "Shah Ghouse (Hyderabad)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwV5DYBulMkj0SP3Yot_ix2Vr2NkuvWY3d0g&s" },
  { name: "Ohri's Tansen (Hyderabad)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE8iqht-ImhW8UrKP7CHRUuj_zewUAzuBG9A&s" },
  { name: "Barbeque Nation (Hyderabad)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoYWYSsswAMfc1xGX8JPHHit9zNFZFPl4BaQ&s" },
  { name: "The Fisherman's Wharf (Hyderabad)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_eZtTwaTheUe-ucrPYDTTKdZ59hAQImKx4A&s" },
  { name: "Rajdhani (Hyderabad)", img: "https://img4.nbstatic.in/tr:w-500/5fcf52525cc6f2000b3637fb.jpg" },
  { name: "Absolute Barbecues (Hyderabad)", img: "https://img4.nbstatic.in/tr:w-500/5f2e82554cedfd000b582fb3.jpg" },
  { name: "Ohri's 1857 (Hyderabad)", img: "https://lh3.googleusercontent.com/JssrifPm1yjPnV3rC3nQMgJUU3dtvA6w2_Nfa5Z7jEPstK67Fdm5R4UVouQmyp-4sO3rm_JZ1_eQIWTAUVvHwCRPhojz=w192-rw" }
]
,

  foods: [
    { name: "Hyderabadi Biryani", img: "https://i.pinimg.com/736x/6d/42/a1/6d42a10088343550c1eccce922e905e3.jpg" },
    { name: "Mirchi ka Salan", img: "https://i.pinimg.com/1200x/7e/26/ec/7e26ecea527660e754baa1323c21be2f.jpg" },
    { name: "Double ka Meetha", img: "https://i.pinimg.com/1200x/de/78/35/de78358b77a503fff8987fd3e135b0d0.jpg" },
    { name: "Hyderabadi Haleem", img: "https://i.pinimg.com/736x/f6/31/91/f63191fa1c5c00aec3b9825559f842e2.jpg" },
    { name: "Bagara Baingan", img: "https://i.pinimg.com/736x/1c/a5/38/1ca538e27f38f116283ad41b36ba753d.jpg" },
    { name: "Nihari", img: "https://i.pinimg.com/1200x/e2/24/f0/e224f020399415af856d0ba8227347ed.jpg" },
    { name: "Keema Samosa", img: "https://i.pinimg.com/1200x/6e/e0/b6/6ee0b6a40572b4d56b00b3d28d016c1b.jpg" },
    { name: "Qubani ka Meetha", img: "https://i.pinimg.com/1200x/c3/3f/c4/c33fc4d0148637d320747a731af5572c.jpg" },
    { name: "Chicken 65", img: "https://i.pinimg.com/1200x/6b/ee/97/6bee973baaeab4c4da15ef28eaf06241.jpg" },
    { name: "Shikampuri Kebab", img: "https://i.pinimg.com/736x/d4/4f/87/d44f87c3e27d5b82fe5603a3b1e04c55.jpg" }
  ]
},
{
  state: "Tripura",
  img: "https://i.pinimg.com/1200x/99/2a/d7/992ad75c9d743c69407a41269efbaff5.jpg",

  restaurants: [
  { name: "Cafe Neo (Agartala)", img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/78/cc/4f/logo.jpg?w=500&h=-1&s=1" },
  { name: "Hotel Sonar Bangla (Agartala)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE7KnNOdz1bChOhDC_iToo3D0AQbvghSthvg&s" },
  { name: "The Bamboo Hut (Agartala)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvV0QdSgJDp0vVceHQfZqlZbs_u7CWT9lUgw&s" },
  { name: "Cafe Tripura (Agartala)", img: "https://ind.5bestincity.com/profileimages/india/coffee-tea-me-cafes-agartala-tripura/23312-c7cb1-1.jpg" },
  { name: "Green Forest (Agartala)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1_3GkVsTwxSH61l7Tzbef5G6Rpv2AOGlagQ&s" },
  { name: "Blue Lagoon (Agartala)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIcIQ-tVWKujqJy4P6qbnBWPOHU6Tw-eF9Ng&s" },
  { name: "Hotel Palace (Agartala)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcWV5smgM8NOlDgL6DuTxSgZs0DY33Va0Yfg&s" },
  { name: "Tea Hub (Agartala)", img: "https://logomakerr.ai/uploads/output/2025/05/20/036dcaab8d2d57f8f24bdf248ce89d28.jpg" },
  { name: "Spice House (Agartala)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkmt9Rp7Z54z7bRXdEeYbhYL1vPmQGeOMisw&s" },
  { name: "City Café (Agartala)", img: "https://www.shutterstock.com/image-vector/city-cafe-logo-template-design-600w-437285905.jpg" }
]
,

  foods: [
    { name: "Mui Borok", img: "https://images.herzindagi.info/image/2024/Mar/Mui-Borok.jpg" },
    { name: "Bamboo Shoot Curry", img: "https://i1.wp.com/therecipe.website/wp-content/uploads/2017/12/Sour-Bamboo-Shoot-Curry.jpg?fit=810%2C540&ssl=1" },
    { name: "Wahan Mosdeng", img: "https://image.shutterstock.com/image-photo/wahan-mosdeng-pork-chutney-bharta-260nw-2101101865.jpg" },
    { name: "Chakhwi", img: "https://images.slurrp.com/prod/articles/wo5wpphuyik.webp" },
    { name: "Gudok", img: "https://i0.wp.com/news.jugaadin.com/wp-content/uploads/2020/09/Gudok.jpg?resize=768%2C432&ssl=1" },
    { name: "Bamboo Rice", img: "https://i.pinimg.com/1200x/a4/3c/cd/a43ccdfb7d39740e9d1c258197bad5c0.jpg" },
    { name: "Wahan Mosdeng", img: "https://i0.wp.com/news.jugaadin.com/wp-content/uploads/2020/09/Wahan-Mosdeng.jpg?resize=275%2C183" },
    { name: "Mui Borok with Pork", img: "https://i0.wp.com/news.jugaadin.com/wp-content/uploads/2020/09/Mui-Borok-final.jpg?w=225&ssl=1" },
    { name: "Chuak", img: "https://i0.wp.com/news.jugaadin.com/wp-content/uploads/2020/09/Chuak.jpg?resize=768%2C543&ssl=1" },
    { name: "Bhangui", img: "https://i0.wp.com/news.jugaadin.com/wp-content/uploads/2020/09/Bhangui.png?resize=768%2C450&ssl=1" }
  ]
},
{
  state: "Uttar Pradesh",
  img: "https://i.pinimg.com/1200x/11/20/ed/1120edb95c20bb2507a72f5dbb20a92d.jpg",

  restaurants: [
  { name: "Tunday Kababi (Lucknow)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoPg1ZAEi5vtWQzWB8bzUtLhSieOJmB5NIeg&s" },
  { name: "Royal Cafe (Lucknow)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIKBNv95GTIAcmgiJuroxUol8-y90n4SKqgg&s" },
  { name: "Dastarkhwan (Lucknow)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKUwcNuggy3MQ6nI_OWKp6dPjvXSZc7CrT-A&s" },
  { name: "SodaBottleOpenerWala (Lucknow)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzBMiG0ew4Hgd2ZVFkWgMWi5w2HFYvSrG5_w&s" },
  { name: "Prakash Kulfi (Agra)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKFtnEQwv3SI8Ujg6CBRL_GCOiy8YH7k4cpw&s" },
  { name: "Pinch of Spice (Agra)", img: "https://media-cdn.tripadvisor.com/media/photo-s/04/2e/65/cf/pinch-of-spice.jpg" },
  { name: "The Mughal Room (Agra)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpvbSPC-MGtn886QsnAjZ-0PVjGvoU-5RsEw&s" },
  { name: "Ram Babu Kulfi (Lucknow)", img: "" },
  { name: "Royal Residency (Varanasi)", img: "https://newprojects.99acres.com/projects/unknown/royal_residency/screenshot1.png" },
  { name: "Brown Bread Bakery (Lucknow)", img: "https://content3.jdmagicbox.com/comp/varanasi/y9/0542px542.x542.141225151146.r3y9/catalogue/brown-bread-bakery-dasasumedh-varanasi-bakeries-ammx0y82y5.jpg" }
]
,

  foods: [
    { name: "Tunday Kababi", img: "https://i.pinimg.com/736x/85/b7/4e/85b74e4da378b6ff66b3320f85b29828.jpg" },
    { name: "Lucknawi Biryani", img: "https://i.pinimg.com/1200x/cd/77/71/cd77717b3fb3d948442330413fb713e3.jpg" },
    { name: "Petha (Agra)", img: "https://i.pinimg.com/736x/2e/ae/ea/2eaeea0ca81e8a96699ae3fdb58a8bfa.jpg" },
    { name: "Kebabs", img: "https://i.pinimg.com/1200x/91/5c/f8/915cf8a2545d1b2738e7ceb8184ac80d.jpg" },
    { name: "Bedmi Puri", img: "https://i.pinimg.com/1200x/63/61/cf/6361cf1ae49d374161c328d638deec65.jpg" },
    { name: "Chaat (Varanasi)", img: "https://i.pinimg.com/1200x/42/07/ba/4207baaf5cc9328476215bad9cb956d0.jpg" },
    { name: "Rogan Josh", img: "https://i.pinimg.com/1200x/95/aa/9e/95aa9e5a3d04fec30440e7be14948ceb.jpg" },
    { name: "Malaiyo", img: "https://i.pinimg.com/736x/d2/d0/27/d2d0278e53b9a9ac1078b42bdb77257b.jpg" },
    { name: "Kulfi", img: "https://i.pinimg.com/736x/17/b5/8f/17b58f3cd0472cf7c4d15876dd1431a6.jpg" },
    { name: "Banarasi Lassi", img: "https://i.pinimg.com/736x/cb/aa/8e/cbaa8e0c330fb930efc040a5db1874c4.jpg" }
  ]
},
{
  state: "Uttarakhand",
  img: "https://www.holidify.com/images/bgImages/UTTARAKHAND.jpg",

  restaurants: [
  { name: "Ellora's Melting Moments (Dehradun)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9DYAxjsq0CKu0zr5-26uXkhRovuLNEg9cvw&s" },
  { name: "Kalsang Ama Cafe (Dehradun)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWkS4HYc3Su8NfLXJYdjbwBUk7CacB8FB8og&s" },
  { name: "The Great Indian Pub (Dehradun)", img: "https://lh3.googleusercontent.com/u11BMIyiDMq_8ObYC2q2nTfRxT2f2blOMtVLbdbL96u02zMEklxZt4WI3nnnPy2M18XqQYx1AFjtWvfvZlM-LyeFZyZg3oqGnJvyY9TA=w360-rw" },
  { name: "Ellora's Cafe (Dehradun)", img: "https://cdn.shopify.com/s/files/1/0617/7380/7804/files/image_6483441_5.jpg?v=1656501925" },
  { name: "Orchard Restaurant (Nainital)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE-QbTas58KC4jgkk2DMESorMreNnq7cM_YA&s" },
  { name: "Sakley’s Restaurant (Nainital)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE29oc6NZWr0UfQUnprNRy44t8Ggwd4PgBtA&s" },
  { name: "Machaan Restaurant (Rishikesh)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6GXocU3vQTXnWhkLMPAEGvtMnZ4U06hOZag&s" },
  { name: "Little Buddha Café (Rishikesh)", img: "https://b.zmtcdn.com/data/pictures/5/18692665/ec730bd8f4a4e4971dbb35b8a8d3e185_featured_v2.jpg" },
  { name: "Chotiwala Restaurant (Rishikesh)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlyaq-E22SLkPej4NXPtvzCLsP6IdS6mnGuQ&s" },
  { name: "Himalayan Aroma (Dehradun)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaInSXgEbM7CBsksfD4Oz7KBdK1Izw9IslPw&s" }
]
,
  foods: [
    { name: "Aloo Ke Gutke", img: "https://i.pinimg.com/1200x/4d/b8/1d/4db81df247ad94ebcc590bea687edec4.jpg" },
    { name: "Kafuli", img: "https://tse2.mm.bing.net/th/id/OIP.OnyUKgsbDrUGvxqlCRoWPQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3" },
    { name: "Bal Mithai", img: "https://static.wixstatic.com/media/910b6a_8bccf3d175c44bcc92d29e73a6ebbabc~mv2.jpeg/v1/fill/w_560,h_560,al_c,lg_1,q_80/910b6a_8bccf3d175c44bcc92d29e73a6ebbabc~mv2.jpeg" },
    { name: "Singodi", img: "https://images.slurrp.com/prodarticles/bbcsa83352r.webp?impolicy=slurrp-20210601&width=1200&height=900&q=75" },
    { name: "Chainsoo", img: "https://images.slurrp.com/prodarticles/moj4j4azg49.webp" },
    { name: "Aloo Ke Gutke (Aloo Gutook)", img: "https://i.pinimg.com/736x/16/1e/bb/161ebb547a46eb4628249a0b8d453f3a.jpg" },
    { name: "Bhang Ki Chutney", img: "https://tse3.mm.bing.net/th/id/OIP.Ww8ri1OusaUtvF4KoNvk6QHaFj?rs=1&pid=ImgDetMain&o=7&rm=3" },
    { name: "Jhangora Ki Kheer", img: "https://tse3.mm.bing.net/th/id/OIP.GQg2Qk9v-CDTW5KRjAJHFQHaD4?rs=1&pid=ImgDetMain&o=7&rm=3" },
    { name: "Baadi", img: "https://www.uttarakhandi.com/wp-content/uploads/Baadi-uttarakhand.jpg" },
    { name: "Jholi", img: "https://recipes.timesofindia.com/thumb/61915240.cms?imgsize=643550&width=800&height=800" }
  ]
},
{
  state: "West Bengal",
  img: "https://i.pinimg.com/1200x/56/ed/e6/56ede656911f9623a2cd2adb979936b7.jpg",

  restaurants: [
  { name: "6 Ballygunge Place (Kolkata)", img: "https://static.businessworld.in/Untitled%20design%20-%202024-09-13T225937.060_20240914054748_original_image_33.webp" },
  { name: "Oh! Calcutta (Kolkata)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoLF_tWmvsnzv3BMy1tvLu8_H6QTVjo6eBrw&s" },
  { name: "Peter Cat (Kolkata)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjpcFhQRwJq_00AbyWiBA8IvIVRasQhJLtZg&s" },
  { name: "Bohemian (Kolkata)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyLf_rMz1EpYX5fQEmBgBG8lSUpol0pAZB1Q&s" },
  { name: "Arsalan (Kolkata)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqAHui42Fwk-3q8Sf8MJ5EEm3flsSWITUODA&s" },
  { name: "Bhojohori Manna (Kolkata)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpaR_iN-NTjuFWkk-Up4UMhgrydv1R23tRrg&s" },
  { name: "The Blue Poppy (Darjeeling)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs482crLb4RcU-qAcW4gH5VqZEtY5ghoZTTA&s" },
  { name: "Sonargaon (Kolkata)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFE5lzF1Fvck36v1UnU-dS9AUriNVvl9po_g&s" },
  { name: "6 Ballygunge Place (Darjeeling)", img: "" },
  { name: "Flurys (Kolkata)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSzPqwrk2KEPBEJbV_Ugb5nd70HuDRBvH-AQ&s" }
]
,
  foods: [
    { name: "Rosogolla", img: "https://i.pinimg.com/1200x/34/cf/63/34cf6386c850d334889c17ce6b235657.jpg" },
    { name: "Sandesh", img: "https://i.pinimg.com/736x/3e/14/dd/3e14dd758196c711aada5bdf14e37bae.jpg" },
    { name: "Mishti Doi", img: "https://bakewithshivesh.com/wp-content/uploads/2023/04/mishti-doi-scaled.jpg" },
    { name: "Fish Curry (Bengali Style)", img: "https://tse2.mm.bing.net/th/id/OIP.GceEzeMauPpG-tS-iqLg8QHaFr?rs=1&pid=ImgDetMain&o=7&rm=3" },
    { name: "Shutki", img: "https://i.ytimg.com/vi/G915Rm1yXnk/hqdefault.jpg?sqp=-oaymwEmCOADEOgC8quKqQMa8AEB-AHUBoAC4AOKAgwIABABGGUgVChDMA8=&rs=AOn4CLCygcfOOJWlia_9NnFtwbYTvp0gwA" },
    { name: "Paturi", img: "https://img.freepik.com/premium-psd/bengali-sobji-paturi-traditional-dish-transparent-background_1156090-11894.jpg?w=2000" },
    { name: "Chingri Malai Curry", img: "https://images.slurrp.com/prod/recipe_images/transcribe/main%20course/Chingri-Malai-Curry.webp" },
    { name: "Luchi", img: "https://tse3.mm.bing.net/th/id/OIP.IwZ6IquVhu6Ea2aTZVcMhwHaE8?rs=1&pid=ImgDetMain&o=7&rm=3" },
    { name: "Kosha Mangsho", img: "https://headbangerskitchen.com/wp-content/uploads/2024/05/KOSHAMANGSHO-H2.jpg" },
    { name: "Aloo Posto", img: "https://i1.wp.com/onewholesomemeal.com/wp-content/uploads/2020/03/Aaloo-Posto-1.jpg?resize=864%2C1080&ssl=1" }
  ]
}
];

  return (
    <div className="main-container">
      <h1 className="title">Best Restaurants & Popular Foods</h1>

      {states.map((state, sIndex) => (
        <div key={sIndex} className="state-card-grid">
          <img src={state.img} alt={state.state} className="state-hero-img" />
          <h2 className="state-name">{state.state}</h2>

          <div className="grid-sections">
            {/* Restaurants Section */}
            <div className="section-box">
              <h3>Top Restaurants</h3>
              <div className="mini-card-container">
                {state.restaurants.map((item, index) => (
                  <div key={index} className="mini-card">
                    <img src={item.img} alt={item.name} />
                    <p>{item.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Foods Section */}
            <div className="section-box">
              <h3>Top Foods</h3>
              <div className="mini-card-container">
                {state.foods.map((food, index) => (
                  <div key={index} className="mini-card">
                    <img src={food.img} alt={food.name} />
                    <p>{food.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Restaurant;