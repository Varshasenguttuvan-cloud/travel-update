import "./visitingplace.css";
const visitingPlaces = {
  "Andhra Pradesh": [
    { name: "Tirupati Temple", img: "https://tse2.mm.bing.net/th/id/OIP.MpwwmoIH--kEuI6zrbMdGAHaE6?rs=1&pid=ImgDetMain&o=7&rm=3", desc: "Famous temple and pilgrimage site." },
    { name: "Araku Valley", img: "https://tse4.mm.bing.net/th/id/OIP.ksFLmGuz0tGTE6BTXFm_vAHaFj?rs=1&pid=ImgDetMain&o=7&rm=3", desc: "Beautiful hills and coffee plantations." },
    { name: "Borra Caves", img: "https://i0.wp.com/weekendyaari.in/wp-content/uploads/2024/09/caves-1.jpg?resize=800%2C530&ssl=1", desc: "Ancient limestone caves with stalactites and stalagmites." },
  { name: "Ramoji Film City", img: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Ramoji_Film_City.jpg", desc: "World’s largest film studio complex with theme park attractions." },
  { name: "Visakhapatnam Beach", img: "https://media.tripinvites.com/places/visakhapatnam/visakhapatnam-beach-views-featured.jpg", desc: "Popular beach destination with scenic coastline." },
  { name: "Kailasagiri", img: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Kailasagiri.jpg", desc: "Hilltop park with panoramic views of Visakhapatnam city and coast." },
  { name: "Sri Sailam Temple", img: "https://cdn.shopify.com/s/files/1/0946/3329/6157/files/Srisailam-1-1024x683.jpg?v=1753266306", desc: "Ancient temple dedicated to Lord Mallikarjuna on the banks of Krishna river." },
  { name: "Konaseema", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Prabhalu_Festival.jpg/1200px-Prabhalu_Festival.jpg", desc: "Lush green delta region with coconut groves and backwaters." },
  { name: "Simhachalam Temple", img: "https://holidaysdna.com/wp-content/uploads/simhachalam-temple-visakhapatnam-india-tourism-1.jpg", desc: "Historic hilltop temple near Visakhapatnam." },
  { name: "Maredumilli Forests", img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/fe/f8/29/the-beautiful-mountain.jpg?w=900&h=500&s=1", desc: "Dense forests ideal for eco-tourism and waterfalls." }

  ],
  "Arunachal Pradesh": [
    { name: "Tawang Monastery", img: "https://i.pinimg.com/736x/1f/03/7e/1f037e5a655beaa2eacdd1ff5d449982.jpg", desc: "Largest monastery in Arunachal Pradesh." },
    { name: "Ziro Valley", img: "https://i.pinimg.com/736x/60/e6/8d/60e68d00c36e3cc00b1770a52c22c888.jpg", desc: "Famous for rice fields and scenic beauty." },
    { name: "Bomdila", img: "https://upload.wikimedia.org/wikipedia/commons/3/32/Bomdila.jpg", desc: "Hill town known for apple orchards and monasteries." },
  { name: "Sela Pass", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaCZCXWk-QfUO2eY3eOuQSeeBJPaIwNMU9SF8jA3psY7-SbDfxc0_7PEGTqtAC1nMw6lw&usqp=CAU", desc: "High-altitude mountain pass with snow-capped views." },
  { name: "Namdapha National Park", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh7HTp6fGoLiDGZ82z7BboPdMgFR8rjU3Iq6EVmhtYHyLsmBy7N0-0p7n8v7jC1_b8t27C6zpL2gSTLp66kqrs-lS2pVmy200DLobPTthyZ-Vz_aF1HNkjeOlvzW__iJ10JGF9QJOtk-tJn/s1600/1E1A5586.jpeg", desc: "Biodiverse park home to rare flora and fauna." },
  { name: "Mechuka Valley", img: "https://easternroutes.com/wp-content/uploads/2019/02/Mechuka_Arunachal_Pradesh.jpg", desc: "Secluded valley with picturesque landscapes." },
  { name: "Pangin", img: "https://www.tourmyindia.com/states/arunachalpradesh/images/pangin1.jpg", desc: "Riverside town with scenic views and tribal culture." },
  { name: "Itanagar", img: "https://www.esikkimtourism.in/wp-content/uploads/2018/07/Itanagar-Jawaharlal-Nehru-State-Museum.jpg", desc: "State capital with historical sites and museums." },
  { name: "Parshuram Kund", img: "https://static.toiimg.com/photo/94883598.cms", desc: "Sacred Hindu pilgrimage site along the Lohit river." },
  { name: "Tippi", img: "https://d3sftlgbtusmnv.cloudfront.net/blog/wp-content/uploads/2025/01/Tippi-Travel-Guide-840x425.jpg", desc: "Known for bamboo forests and traditional tribal life." }

  ],
  "Assam": [
    { name: "Kaziranga National Park", img: "https://www.tigersafariindia.com/wp-content/uploads/2023/11/elephants-playing-in-kaziranga-national-park.jpg", desc: "Home of the one-horned rhinoceros." },
    { name: "Majuli Island", img: "https://i.pinimg.com/1200x/97/c5/a4/97c5a4de65f1915315bf7afe40a4bc10.jpg", desc: "World's largest river island." },
    { name: "Manas National Park", img: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Manas_landscape_rhino.jpg", desc: "UNESCO World Heritage site with rich wildlife." },
{ name: "Sivasagar", img: "https://s7ap1.scene7.com/is/image/incredibleindia/shiva-dol-sivasagar-assam-2-attr-hero?qlt=82&ts=1751459547120", desc: "Historic town known for Ahom-era monuments and temples." },
{ name: "Guwahati – Kamakhya Temple", img: "https://s7ap1.scene7.com/is/image/incredibleindia/kamakhya-temple-dispur-assam-2-attr-hero?qlt=82&ts=1742179171313", desc: "Famous hilltop temple and pilgrimage site." },
{ name: "Haflong", img: "https://static.toiimg.com/photo/msid-66346220,width-96,height-65.cms", desc: "Scenic hill station with lakes and waterfalls." },
{ name: "Tezpur", img: "https://upload.wikimedia.org/wikipedia/commons/8/80/Agnigarh_Hill%2C_Tezpur.JPG", desc: "Cultural town with historical sites and riverfront views." },
{ name: "Dibrugarh", img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/07/82/4f/mai-temple.jpg?w=600&h=-1&s=1", desc: "Tea city surrounded by lush plantations." },
{ name: "Jorhat", img: "https://s7ap1.scene7.com/is/image/incredibleindia/lachit-borphukan-maidam-jorhat-assam-1-attr-hero?qlt=82&ts=1742174331361", desc: "Gateway to tea gardens and cultural heritage." },
{ name: "Diphu", img: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Diphu_hills.JPG", desc: "Hill town in Karbi Anglong district with tribal culture." }

  ],
  "Bihar": [
    { name: "Bodh Gaya", img: "https://i.pinimg.com/736x/a3/2c/71/a32c716e7edfcc56aa77770ac9f21d56.jpg", desc: "Place of enlightenment of Buddha." },
    { name: "Nalanda University", img: "https://i.pinimg.com/1200x/33/33/db/3333dbd078d093cce94a2d9b79e71ef9.jpg" , desc: "Historic city with hot springs and Buddhist sites." },
{ name: "Vaishali", img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/23/68/8a/caption.jpg?w=1200&h=-1&s=1", desc: "Ancient city associated with Mahavira and Buddha." },
{ name: "Patna Sahib Gurudwara", img: "https://hblimg.mmtcdn.com/content/hubble/img/patna/mmt/activities/m_activities_patna_takht_sri_patna_sahib_l_453_604.jpg", desc: "Important Sikh pilgrimage site in Patna." },
{ name: "Kesaria Stupa", img: "https://dy3rma73kowlp.cloudfront.net/uploads/2024/08/kesaria-buddha-stupa.jpg", desc: "Ancient Buddhist stupa, one of the tallest in the world." },
{ name: "Gaya", img: "https://static.wixstatic.com/media/4d32f3_94cf08eff5a94f8580aa7e5b3ffdc648~mv2.jpg/v1/fill/w_568,h_320,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/4d32f3_94cf08eff5a94f8580aa7e5b3ffdc648~mv2.jpg", desc: "Religious city famous for Vishnupad Temple." },
{ name: "Buxar Fort", img: "https://atmabuxar.in/public/assets/images/hp4.jpg", desc: "Historic fort with archaeological significance." },
{ name: "Sasaram", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHKkD2lzaOuM9uskZF_KKA6ytN2j0aIXCTYg&s", desc: "City with the grand tomb of Sher Shah Suri." },
{ name: "Bihar Sharif", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq9bDsIKH0WeQQFWGMCoMF4moONbNrhoOeKepB56tb7ctXeTNEKG-5W1z1bFmN9GoBygo&usqp=CAU", desc: "Town known for historical mosques and shrines." }

  ],
  "Chhattisgarh": [
    { name: "Chitrakote Falls", img: "https://s7ap1.scene7.com/is/image/incredibleindia/chitrakote-water-falls-jagdalpur-chhattisgarh-1-attr-hero?qlt=82&ts=1727011277081", desc: "Niagara of India." },
    { name: "Barnawapara Wildlife Sanctuary", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoByWY3s9caVgQJ0LQu1p2iSk_arTNmoo2Sw&s", desc: "Rich flora and fauna." },
    { name: "Bhoramdeo Temple", img: "https://puratattva.in/wp-content/uploads/2022/07/Chhapari_Bhoramdev-Temple_Chhattisgarh-135.jpeg", desc: "Ancient temple known as the 'Khajuraho of Chhattisgarh'." },
{ name: "Kanger Valley National Park", img: "https://static.toiimg.com/thumb/msid-118943591,width-1280,height-720,resizemode-72/118943591.jpg", desc: "Home to the famous Kutumsar and Kailash caves." },
{ name: "Raipur", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Jawahar_Bazar%2C_Raipur.jpg/1200px-Jawahar_Bazar%2C_Raipur.jpg", desc: "Capital city with cultural and historical landmarks." },
{ name: "Sirpur", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9QxWIZEdbHYi5cBk0lpbPRpiN9xJOulVca7wAoqVzcJPGaHji0O2pzCxIePH4ao-jJsA&usqp=CAU", desc: "Archaeological site with Buddhist and Hindu monuments." },
{ name: "Dantewada", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPFVUOJcHeNGfgan42WinMIwom8kQdou76dBTErJuKrgIO5i23wG-WiQJ0ymBwYcHBVy4&usqp=CAU", desc: "Town near the famous Danteshwari Temple." },
{ name: "Maitri Bagh Zoo", img: "https://chhattisgarhpedia.com/upload/blog/maitri-garden-or-maitri-bagh-zoo-bhilai-chhattisgarh.webp", desc: "Zoo and botanical garden in Bhilai." },
{ name: "Achanakmar Wildlife Sanctuary", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh6vHit3y9Y4McXuZnaKLiZ0mRg_KPZ8RmtA&s", desc: "Biodiverse forest area ideal for safaris." },
{ name: "Dongargarh", img: "https://s7ap1.scene7.com/is/image/incredibleindia/old-maa-bamleshwari-devi-dongargarh-rajnandgaon-chhattisgarh-3-attr-hero?qlt=82&ts=1754895220823", desc: "Famous for the Maa Bamleshwari Temple on a hilltop." }

  ],
  "Goa": [
    { name: "Baga Beach", img: "https://i.pinimg.com/736x/0e/a0/da/0ea0da98ada84baffa10e8d3e15e4d08.jpg", desc: "Famous beach with nightlife." },
    { name: "Basilica of Bom Jesus", img: "https://i.pinimg.com/736x/a4/b8/c8/a4b8c83f8a2cd8713ab6826051534afd.jpg", desc: "UNESCO World Heritage site." },
    { name: "Calangute Beach", img: "https://www.holidify.com/images/cmsuploads/compressed/shutterstock_289603190_20200113114525.jpg", desc: "Largest and most popular beach in Goa." },
{ name: "Fort Aguada", img: "https://i.pinimg.com/736x/cb/ff/df/cbffdf3538036c41844ebd10c80382cd.jpg", desc: "17th-century Portuguese fort with sea views." },
{ name: "Dudhsagar Falls", img: "https://i.pinimg.com/1200x/8d/a2/82/8da2827f64c91076393ab0de7f0d7876.jpg", desc: "Spectacular four-tiered waterfall." },
{ name: "Anjuna Beach", img: "https://i.pinimg.com/736x/f9/7a/2a/f97a2a1058d0defc9280099b353e85a0.jpg", desc: "Known for its flea market and parties." },
{ name: "Chapora Fort", img: "https://i.pinimg.com/1200x/1f/10/9f/1f109f8a6b6df51cf6149ba16d7d3894.jpg", desc: "Iconic fort offering panoramic views." },
{ name: "Colva Beach", img: "https://i.pinimg.com/736x/df/09/1e/df091e1b68335a137629b1c376c15236.jpg", desc: "Popular beach with water activities." },
{ name: "Palolem Beach", img: "https://i.pinimg.com/1200x/37/67/74/3767741a84d8fd77b330b317339284b5.jpg", desc: "Scenic crescent-shaped beach." },
{ name: "Se Cathedral", img: "https://i.pinimg.com/1200x/3f/28/b8/3f28b8b56c63075aac8a2f9c915dccce.jpg", desc: "One of Asia’s largest churches." }

    ],
  "Gujarat": [
    { name: "Statue of Unity", img: "https://i.pinimg.com/736x/1a/7f/ff/1a7fffab99c12c12e227e8a7ed62b42a.jpg", desc: "Tallest statue in the world." },
    { name: "Gir National Park", img: "https://i.pinimg.com/736x/5f/d9/90/5fd990a28c73bcefd785ef9e490b5df2.jpg", desc: "Home of Asiatic lions." },
    { name: "Somnath Temple", img: "https://i.pinimg.com/1200x/65/80/11/658011808d7a409403f097bd0856dc47.jpg", desc: "Ancient temple and important pilgrimage site." },
    { name: "Rann of Kutch", img: "https://i.pinimg.com/736x/e9/d3/a9/e9d3a94780ac12463e0b71479ebbaa05.jpg", desc: "Vast salt desert known for Rann Utsav festival." },
    { name: "Ahmedabad", img: "https://i.pinimg.com/736x/67/5a/e0/675ae0f24ecf7b1d98fb45847f12f2f7.jpg", desc: "Historic city famous for heritage sites and Sabarmati Ashram." },
    { name: "Dwarkadhish Temple", img: "https://i.pinimg.com/1200x/e6/f3/a3/e6f3a3de9e134319002f1e395cf59c54.jpg", desc: "Temple dedicated to Lord Krishna in Dwarka." },
    { name: "Saputara", img: "https://i.pinimg.com/1200x/ee/ea/78/eeea787c19311cb6589b90f4f6de54b9.jpg", desc: "Hill station on the Gujarat-Maharashtra border." },
    { name: "Bhuj", img: "https://i.pinimg.com/1200x/89/ef/61/89ef61b12e78a502ecb9df9e3af20d8a.jpg", desc: "Gateway to Kutch region with rich culture and crafts." },
    { name: "Lothal", img: "https://i.pinimg.com/1200x/c1/fc/48/c1fc48a766c6e74d72d1ea64a2905c6b.jpg", desc: "Ancient Indus Valley Civilization site." },
    { name: "Modhera Sun Temple", img: "https://i.pinimg.com/1200x/23/91/97/239197ec916e4c032dc1e3439797533e.jpg", desc: "Ancient temple dedicated to the Sun God." }

  ],
  "Haryana": [
    { name: "Kurukshetra", img: "https://i.pinimg.com/1200x/2b/7a/3b/2b7a3b681f4093a1e05ad3ebe495a523.jpg", desc: "Historic city from Mahabharata." },
    { name: "Sultanpur Bird Sanctuary", img: "https://tse3.mm.bing.net/th/id/OIP.c8bubEUwoHKCuzeVh3JB7wHaEK?rs=1&pid=ImgDetMain&o=7&rm=3", desc: "Famous for migratory birds." },
    { name: "Pinjore Gardens", img: "https://i.pinimg.com/1200x/39/88/70/398870ca41902f68de97446c63612a31.jpg", desc: "Historic Mughal-style terraced garden." },
{ name: "Morni Hills", img: "https://i.pinimg.com/1200x/d7/88/0d/d7880d31db204251fa573df878c6f4f3.jpg", desc: "Only hill station of Haryana." },
{ name: "Badkhal Lake", img: "https://i.pinimg.com/1200x/48/b8/c0/48b8c038fb2ac1f3fc18a580afc8b616.jpg", desc: "Scenic lake surrounded by Aravalli hills." },
{ name: "Kingdom of Dreams, Gurugram", img: "https://i.pinimg.com/736x/6a/fc/1d/6afc1da7246dc3edb42dd7880780d9fb.jpg", desc: "Entertainment and cultural destination." },
{ name: "Tilyar Lake", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROecEjzwoWod3jbvD1GU5r-Wc78KAftXyQiw&s", desc: "Popular picnic spot with boating." },
{ name: "Brahma Sarovar", img: "https://i.pinimg.com/1200x/5e/38/ff/5e38ff442f05e068ca8e299d59a2636c.jpg", desc: "Sacred water tank in Kurukshetra." },
{ name: "Damdama Lake", img: "https://i.pinimg.com/736x/5d/c4/b8/5dc4b864fa1a026560a2b631748c8fa6.jpg", desc: "Adventure activities and scenic views." },
{ name: "Star Monument", img: "https://i.pinimg.com/736x/e8/48/47/e84847d5f2543343909e3256f7294c6c.jpg", desc: "Unique star-shaped architectural structure." }

  ],
  "Himachal Pradesh": [
    { name: "Manali", img: "https://i.pinimg.com/736x/8c/14/3e/8c143e84594eafe45e5db7ce2ce503a3.jpg", desc: "Popular hill station." },
    { name: "Shimla", img: "https://i.pinimg.com/736x/b5/19/f6/b519f640fed0bcd63c4da98640bd320d.jpg", desc: "Famous colonial town." },
    { name: "Dharamshala", img: "https://i.pinimg.com/736x/51/d6/3a/51d63a663731a3bf3000336b4c4565b3.jpg", desc: "Home of the Dalai Lama with scenic beauty." },
{ name: "McLeod Ganj", img: "https://i.pinimg.com/736x/61/51/af/6151afbcaf55aa2690b707371ffea43e.jpg", desc: "Known for monasteries and Tibetan culture." },
{ name: "Kasol", img: "https://i.pinimg.com/1200x/14/d6/23/14d623be7936330b260da9f593b472fb.jpg", desc: "Popular with trekkers and backpackers." },
{ name: "Dalhousie", img: "https://lonelyplanetimages.imgix.net/mastheads/GettyImages-514084465_high.jpg?sharp=10&vib=20&w=1200", desc: "Peaceful hill town with colonial charm." },
{ name: "Spiti Valley", img: "https://i.pinimg.com/1200x/5d/d8/a0/5dd8a015d5e57e9e3d6aadc7b77cebd9.jpg", desc: "High-altitude desert with stunning views." },
{ name: "Kasauli", img: "https://i.pinimg.com/1200x/76/18/39/76183983f9b090a765586eb5cd927d1a.jpg", desc: "Quiet, picturesque cantonment town." },
{ name: "Kullu", img: "https://i.pinimg.com/1200x/d2/29/8e/d2298e963cb64255f5a8e65e936101f0.jpg", desc: "Known for valleys and adventure sports." },
{ name: "Chamba", img: "https://i.pinimg.com/1200x/49/0f/61/490f61a11273f82c06c6646d52ecab97.jpg", desc: "Historic town with temples and scenic beauty." }

  ],
  "Jharkhand": [
    { name: "Ranchi", img: "https://i.pinimg.com/736x/0b/ba/8f/0bba8f45f25f9542cf6b3e70ec27f5e0.jpg", desc: "Capital city with natural beauty." },
    { name: "Betla National Park", img: "https://i.pinimg.com/736x/86/35/5b/86355b704618b6e39398eef3790e82d1.jpg", desc: "Wildlife sanctuary with forests." },
    { name: "Netarhat", img: "https://i.pinimg.com/736x/ab/2c/bc/ab2cbc9fbca619c934cc2dd655aa0296.jpg", desc: "Scenic hill station known as the Queen of Chotanagpur." },
{ name: "Hundru Falls", img: "https://i.pinimg.com/736x/86/35/81/86358154aba4541f830e070ab26447f4.jpg", desc: "One of the highest and most beautiful waterfalls in Jharkhand." },
{ name: "Dassam Falls", img: "https://i.pinimg.com/736x/bd/3a/b1/bd3ab1eb2a6cf17d95f2c913099ed565.jpg", desc: "Popular waterfall near Ranchi." },
{ name: "Jagannath Temple, Ranchi", img: "https://i.pinimg.com/1200x/28/98/4a/28984ad26392474b662b25c689c2f53b.jpg", desc: "Historic 17th-century temple." },
{ name: "Jubilee Park, Jamshedpur", img: "https://i.pinimg.com/736x/ba/5e/3b/ba5e3b00e25151e221c33cb5eabea039.jpg", desc: "Large green park with fountains." },
{ name: "Dalma Wildlife Sanctuary", img: "https://i.pinimg.com/1200x/b9/45/88/b945888bf724944ccadc8c27a3e5504c.jpg", desc: "Elephant reserve with trekking trails." },
{ name: "Deoghar (Baidyanath Dham)", img: "https://i.pinimg.com/736x/ab/8d/56/ab8d56e75c7027246ca2f63471f07e48.jpg", desc: "Major pilgrimage site and Jyotirlinga temple." },
{ name: "Canary Hill Hazaribagh", img: "https://i.pinimg.com/1200x/97/32/97/973297e5804f70aae8fa44ec867884c6.jpg", desc: "Wildlife park known for scenic landscapes." }

  ],
  "Karnataka": [
    { name: "Bengaluru", img: "https://i.pinimg.com/1200x/09/ca/88/09ca881b5d86fa27a24c9bc3558706f0.jpg", desc: "Silicon Valley of India." },
    { name: "Mysuru Palace", img: "https://i.pinimg.com/736x/36/d1/7b/36d17b7470e2ebdd367a930a753ee1b3.jpg", desc: "Famous royal palace." },
    { name: "Hampi", img: "https://i.pinimg.com/736x/5f/66/44/5f664400af4293594b5422ecc86e0abe.jpg", desc: "UNESCO World Heritage site with ancient ruins." },
{ name: "Coorg", img: "https://i.pinimg.com/1200x/34/1a/84/341a84706f2389c4374753fbde8d7ad0.jpg", desc: "Scenic hill station known for coffee plantations." },
{ name: "Gokarna", img: "https://i.pinimg.com/1200x/93/89/04/93890407b584b0cb9cbf66de284efd41.jpg", desc: "Peaceful beach destination." },
{ name: "Chikmagalur", img: "https://i.pinimg.com/1200x/d7/89/2e/d7892ea88131df3b58dba3ef16c2e3cf.jpg", desc: "Famous for hills and coffee estates." },
{ name: "Udupi", img: "https://i.pinimg.com/736x/44/71/12/44711247e54fd6374f6b259f7dd2ad89.jpg", desc: "Known for temples and beaches." },
{ name: "Badami", img: "https://i.pinimg.com/736x/e4/97/e0/e497e06b4263f7d3d8efdc3bb53433b3.jpg", desc: "Historic rock-cut cave temples." },
{ name: "Jog Falls", img: "https://i.pinimg.com/736x/1d/3b/1f/1d3b1fd13070edd96937e35089f85ea3.jpg", desc: "One of India's highest waterfalls." },
{ name: "Bandipur National Park", img: "https://i.pinimg.com/736x/fa/05/08/fa050805755292dfedd4b706735d496b.jpg", desc: "Popular wildlife sanctuary." }

  ],
  "Kerala": [
    { name: "Munnar", img: "https://i.pinimg.com/736x/5d/72/65/5d7265ce666625f748d86b3e5a516a21.jpg", desc: "Tea gardens and scenic beauty." },
    { name: "Alleppey Backwaters", img: "https://i.pinimg.com/1200x/2e/3b/1f/2e3b1f79f84c223fec14818bb369c769.jpg", desc: "Houseboat experience in Kerala." },
    { name: "Kochi", img: "https://i.pinimg.com/736x/58/bf/a7/58bfa7820279c37c9f4f2c320d7aa873.jpg", desc: "Historic port city with colonial charm." },
{ name: "Kovalam Beach", img: "https://i.pinimg.com/1200x/6d/e3/6e/6de36eebee436d1caef1f44024194794.jpg", desc: "Famous beach with lighthouse views." },
{ name: "Wayanad", img: "https://i.pinimg.com/1200x/da/a7/93/daa793143383ad100f609dd627f67936.jpg", desc: "Hill district known for wildlife and waterfalls." },
{ name: "Thekkady", img: "https://i.pinimg.com/1200x/a7/7d/65/a77d651ab5f71cc1a182df7124722927.jpg", desc: "Home to Periyar Wildlife Sanctuary." },
{ name: "Varkala", img: "https://i.pinimg.com/1200x/dd/15/30/dd1530369b64a2e1e99408fe9be88d16.jpg", desc: "Cliffside beach with stunning scenery." },
{ name: "Kumarakom", img: "https://i.pinimg.com/736x/c9/c4/09/c9c4098813a581c756dbf85c5765df10.jpg", desc: "Backwater destination with bird sanctuary." },
{ name: "Thrissur", img: "https://i.pinimg.com/736x/ab/b3/8e/abb38e4b2017e60f2b00c74fc9701c94.jpg", desc: "Cultural capital known for festivals." },
{ name: "Palakkad", img: "https://i.pinimg.com/1200x/9a/77/5e/9a775e6f1a83ed1d8626f2e9ff6316e1.jpg", desc: "Known for dams, forts, and paddy fields." }

  ],
  "Madhya Pradesh": [
    { name: "Khajuraho Temples", img: "https://i.pinimg.com/736x/6f/02/ea/6f02ea59022f3a586c742d0584fef92f.jpg", desc: "UNESCO World Heritage site." },
    { name: "Kanha National Park", img: "https://i.pinimg.com/736x/5b/2c/c8/5b2cc8f0cfd1f6266a9e5031a39ba1e3.jpg", desc: "Famous wildlife sanctuary." },
    { name: "Bandhavgarh National Park", img: "https://i.pinimg.com/736x/4f/45/51/4f455115d1c1a79079baf00a29702cae.jpg", desc: "Known for tigers and rich wildlife." },
{ name: "Sanchi Stupa", img: "https://i.pinimg.com/736x/7a/29/20/7a2920e3d878835e64355e5fedec5ead.jpg", desc: "Ancient Buddhist monument and UNESCO site." },
{ name: "Gwalior Fort", img: "https://i.pinimg.com/736x/a2/47/95/a24795ad8578cf026330086c59fe637b.jpg", desc: "Majestic hilltop fort with rich history." },
{ name: "Ujjain", img: "https://i.pinimg.com/1200x/10/b1/11/10b1113a602a02389a614bcc2c47675e.jpg", desc: "Holy city known for Mahakaleshwar Temple." },
{ name: "Pachmarhi", img: "https://i.pinimg.com/736x/53/1c/69/531c695992c1c15c7f304ea6c5c3f635.jpg", desc: "Scenic hill station in the Satpura range." },
{ name: "Omkareshwar", img: "https://i.pinimg.com/1200x/da/f1/ed/daf1ed152c027c7b36d718603a75dd1d.jpg", desc: "Island temple shaped like 'Om'." },
{ name: "Bhimbetka Caves", img: "https://i.pinimg.com/1200x/b0/5e/df/b05edfbae7afa5e81c8d3422708538d7.jpg", desc: "Prehistoric rock shelters and paintings." },
{ name: "Orchha", img: "https://i.pinimg.com/736x/8b/07/ca/8b07ca8e1516b555042319f0d894bb98.jpg", desc: "Historic town with palaces and temples." }

  ],
  "Maharashtra": [
    { name: "Mumbai", img: "https://i.pinimg.com/736x/58/f8/3f/58f83fca1a9a45e95fd940000bdc7b03.jpg", desc: "Financial hub and Bollywood." },
    { name: "Ajanta & Ellora Caves", img: "https://i.pinimg.com/736x/20/e9/e5/20e9e5115a8ed1fed84542f4923d393e.jpg", desc: "Ancient rock-cut monuments." },
    { name: "Pune", img: "https://i.pinimg.com/1200x/17/e1/df/17e1df1b213251b5cf084fa4f1a563b4.jpg", desc: "Cultural city with historical landmarks." },
{ name: "Mahabaleshwar", img: "https://i.pinimg.com/736x/d1/8c/3b/d18c3bef7254e23167ef763b9d1f5ecd.jpg", desc: "Popular hill station known for viewpoints." },
{ name: "Lonavala & Khandala", img: "https://i.pinimg.com/736x/f4/ba/0d/f4ba0de85a489b82826aa3ac47fcf22f.jpg", desc: "Famous twin hill stations near Mumbai." },
{ name: "Nashik", img: "https://i.pinimg.com/736x/fa/fc/4a/fafc4af27800387e6438f7bb794263d8.jpg", desc: "Wine capital of India and pilgrimage city." },
{ name: "Shirdi", img: "https://i.pinimg.com/736x/7d/f7/e7/7df7e7999d36509e1c60e5c193819db3.jpg", desc: "Pilgrimage site of Sai Baba." },
{ name: "Alibaug", img: "https://i.pinimg.com/736x/1f/35/46/1f3546ec843c8e862c7fc9d48f0b6de7.jpg", desc: "Coastal town known for clean beaches." },
{ name: "Tadoba National Park", img: "https://i.pinimg.com/736x/5f/c6/eb/5fc6eb094a5442ca2ba294c73a5925ff.jpg", desc: "Tiger reserve with rich wildlife." },
{ name: "Sindhudurg Fort", img: "https://i.pinimg.com/1200x/4d/49/fe/4d49fe9bf92e44c062de92b63e0ed93d.jpg", desc: "Historic sea fort built by Shivaji Maharaj." }

  ],
  "Manipur": [
    { name: "Loktak Lake", img: "https://i.pinimg.com/474x/8b/c2/a0/8bc2a027b8e28a101afa94535ccd0d6f.jpg", desc: "Famous floating lake." },
    { name: "Imphal", img: "https://www.adotrip.com/public/images/city/5c3dca6c673ae-Imphal%20Sightseeing.jpg", desc: "Capital city with historical sites." },
    { name: "Keibul Lamjao National Park", img: "https://i.pinimg.com/1200x/b7/b6/d1/b7b6d11fe4b4881e13cea09d5f1dacfb.jpg", desc: "World’s only floating national park." },
{ name: "Kangla Fort", img: "https://i.pinimg.com/736x/03/d8/6c/03d86ce4e949876f26536e09a464ff9c.jpg", desc: "Historic fort and cultural heritage site." },
{ name: "Ukhrul", img: "https://i.pinimg.com/736x/1e/3f/28/1e3f28c9ff95239bf1aab336fd2f4ffd.jpg", desc: "Hill town known for Shiroy Lily." },
{ name: "Senapati", img: "https://i.pinimg.com/1200x/47/f5/25/47f52504cb8a81442fd0299f7076c978.jpg", desc: "Scenic district with green landscapes." },
{ name: "Andro Village", img: "https://i.pinimg.com/1200x/c5/52/b9/c552b9283ee87ab79b121ffa308afc96.jpg", desc: "Traditional village known for pottery." },
{ name: "Thoubal", img: "https://www.adotrip.com/public/images/city/master_images/5e411ac5650ea-Thoubal_Attractions.jpg", desc: "Popular for trekking and scenic views." },
{ name: "Moreh", img: "https://images.moneycontrol.com/static-mcnews/2025/01/20250106053911_9.jpg", desc: "Border town and trade center." },
{ name: "Bishnupur", img: "https://i.pinimg.com/736x/cb/79/63/cb7963ae842b7e960df47539a210f75d.jpg", desc: "Famous for temples and natural beauty." }

  ],
  "Meghalaya": [
    { name: "Cherrapunji", img: "https://i.pinimg.com/736x/e7/ed/12/e7ed127f71d79073df76e2154ada8cf7.jpg", desc: "Wettest place on Earth." },
    { name: "Living Root Bridges", img: "https://i.pinimg.com/1200x/53/a1/38/53a138d65679f3c596f0307efa69f3df.jpg", desc: "Natural root bridges." },
    { name: "Shillong", img: "https://i.pinimg.com/1200x/98/3b/9b/983b9bfe12d68c723f5eb5761e7b237b.jpg", desc: "Scenic hill station known as the Scotland of the East." },
{ name: "Dawki", img: "https://i.pinimg.com/736x/0b/dd/b6/0bddb66fb5f1160f2968c884a38d48b2.jpg", desc: "Crystal-clear river near the India-Bangladesh border." },
{ name: "Mawlynnong", img: "https://i.pinimg.com/1200x/3e/9a/ce/3e9acef6c550963df46e3bab05c2e61c.jpg", desc: "Asia’s cleanest village." },
{ name: "Nongriat", img: "https://i.pinimg.com/1200x/95/67/29/9567292cf2aad21dd2a13fcacec61200.jpg", desc: "Famous for the double-decker living root bridge." },
{ name: "Jowai", img: "https://i.pinimg.com/736x/d9/44/ae/d944ae3371b8534c16bcbf91a6e8871f.jpg", desc: "Known for lakes, waterfalls, and caves." },
{ name: "Elephant Falls", img: "https://i.pinimg.com/736x/81/19/d9/8119d9d350f23912327e82ababfc6059.jpg", desc: "Popular multi-tiered waterfall near Shillong." },
{ name: "Laitlum Canyons", img: "https://i.pinimg.com/1200x/06/e6/4f/06e64f97d96fe5fecaab6b712a9dc896.jpg", desc: "Breathtaking canyon viewpoints." },
{ name: "Siju Cave", img: "https://i.pinimg.com/1200x/8f/1e/02/8f1e0209976c302db8c6bd9dbe54ce61.jpg", desc: "One of India’s longest limestone caves." }

  ],
  "Mizoram": [
    { name: "Aizawl", img: "https://i.pinimg.com/736x/af/6a/31/af6a312ddd121e1bc1ec91d2069a660f.jpg", desc: "Capital city with hills." },
    { name: "Vantawng Falls", img: "https://i.pinimg.com/736x/42/4a/ae/424aaeeb7847e6cb0aacbf4beeb6b747.jpg", desc: "Tallest waterfall in Mizoram." },
    { name: "Champhai", img: "https://th.bing.com/th/id/OIP.ynnatSxpIKy32HLqKaaRRwHaEK?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3", desc: "Border town with vineyards and scenic views." },
{ name: "Lunglei", img: "https://i.pinimg.com/1200x/bf/ce/e3/bfcee37326d41e1638a98c562eefef07.jpg", desc: "Second-largest town known for nature and trekking." },
{ name: "Reiek", img: "https://i.pinimg.com/736x/c6/2d/f2/c62df2583ed07775273f0526285baab9.jpg", desc: "Hilltop viewpoint with traditional Mizo village." },
{ name: "Phawngpui (Blue Mountain)", img: "https://i.pinimg.com/1200x/2c/db/be/2cdbbe8b04cc73ea821526e0caed093f.jpg", desc: "Highest peak in Mizoram." },
{ name: "Tam Dil Lake", img: "https://live.staticflickr.com/856/42899865405_343850ca21_b.jpg", desc: "Serene lake surrounded by forests." },
{ name: "Hmuifang", img: "https://i0.wp.com/aravindgundumane.com/wp-content/uploads/2022/12/Hmuifang-view1.jpg?resize=1140%2C760&ssl=1", desc: "Beautiful hill station ideal for adventures." },
{ name: "Serchhip", img: "https://i.pinimg.com/1200x/28/af/07/28af0796a6a5801fc8694d1cb60cbd63.jpg", desc: "Home to natural attractions and heritage sites." },
{ name: "Murlen National Park", img: "https://aryango.com/wp-content/uploads/2022/12/Murlen-National-Park-Mizoram.webp", desc: "Dense forest park with diverse wildlife." }

  ],
  "Nagaland": [
    { name: "Kohima", img: "https://i.pinimg.com/736x/04/72/60/0472606f0be4443e6a86ee169254d7fd.jpg", desc: "Capital city with cultural heritage." },
    { name: "Dzukou Valley", img: "https://i.pinimg.com/1200x/88/3e/ad/883eadc9260aca7cd7d2773d9c26f48a.jpg", desc: "Scenic valley and trekking." },
    { name: "Dimapur", img: "https://i.pinimg.com/1200x/ec/34/38/ec34381ab902a264313594c4fa846d29.jpg", desc: "Gateway city with ancient ruins and markets." },
{ name: "Mokokchung", img: "https://i.pinimg.com/1200x/b1/a8/ae/b1a8aebe80714f8f84c755ef0a6edaaa.jpg", desc: "Cultural hub of the Ao tribe." },
{ name: "Wokha", img: "https://i.pinimg.com/1200x/e5/f2/3d/e5f23de3e92ad484283be231061d23d7.jpg", desc: "Known for scenic landscapes and Lotha tribe culture." },
{ name: "Tuophema Village", img: "https://i.pinimg.com/1200x/36/4b/94/364b94f560ec85eaa56270094fdc4591.jpg", desc: "Heritage village showcasing Naga traditions." },
{ name: "Mon", img: "https://i.pinimg.com/1200x/43/63/36/43633655165884516862a550ebfcd282.jpg", desc: "Famous for Konyak tribe and tattooed warriors." },
{ name: "Japfu Peak", img: "https://i.pinimg.com/1200x/b4/9d/09/b49d09b34adb4ada3e03c35fe4684129.jpg", desc: "Second-highest peak in Nagaland with great trekking." },
{ name: "Khonoma Village", img: "https://i.pinimg.com/1200x/b4/f0/ce/b4f0ce56b2bafa6b5392e92911b5da9b.jpg", desc: "Asia’s first green village." },
{ name: "Pfutsero", img: "https://i.pinimg.com/1200x/a9/ff/7e/a9ff7efdb68fdde1de3504bf8b662d4d.jpg", desc: "Coldest town in Nagaland with beautiful vistas." }

  ],
  "Odisha": [
    { name: "Konark Sun Temple", img: "https://i.pinimg.com/736x/63/4a/70/634a701100574c4c72906355a89780ff.jpg", desc: "UNESCO World Heritage site." },
    { name: "Puri Beach", img: "https://i.pinimg.com/736x/e6/5a/17/e65a177aae112d7424f860c482dbd791.jpg", desc: "Famous seaside destination." },
    { name: "Chilika Lake", img: "https://i.pinimg.com/1200x/c2/e5/7c/c2e57c3bf901f29256d543dad48a0d50.jpg", desc: "Asia’s largest brackish water lagoon." },
{ name: "Bhubaneswar", img: "https://i.pinimg.com/1200x/32/a1/d4/32a1d4185a9f1180802dfac79c2d1685.jpg", desc: "Temple city of India." },
{ name: "Similipal National Park", img: "https://i.pinimg.com/736x/51/8d/20/518d2066be052ae2ce52d0134d2bed75.jpg", desc: "Tiger reserve with waterfalls and forests." },
{ name: "Cuttack", img: "https://i.pinimg.com/1200x/a9/44/d4/a944d4e326aeb65ab7a4699650e83f45.jpg", desc: "Historic city known for silver filigree work." },
{ name: "Raghurajpur", img: "https://i.pinimg.com/1200x/50/6c/a9/506ca9a1420732033d94a511afa8dca7.jpg", desc: "Crafts village famous for Pattachitra art." },
{ name: "Gopalpur Beach", img: "https://i.pinimg.com/736x/ea/c3/27/eac32798f59f6f8e4fde9bfc2dd33216.jpg", desc: "Quiet and clean beach town." },
{ name: "Hirakud Dam", img: "https://i.pinimg.com/736x/ae/08/ea/ae08ead95655315b7ce9d44a92855653.jpg", desc: "One of the world’s longest earthen dams." },
{ name: "Daringbadi", img: "https://i.pinimg.com/736x/8f/a5/3a/8fa53a844134224e0d9546fabed5868d.jpg", desc: "Known as the Kashmir of Odisha." }

  ],
  "Punjab": [
    { name: "Golden Temple", img: "https://i.pinimg.com/1200x/d2/dc/98/d2dc98e2bce754c4a5d6ce7b41a467f8.jpg", desc: "Sacred Sikh shrine." },
    { name: "Jallianwala Bagh", img: "https://i.pinimg.com/1200x/07/2d/8d/072d8d6bfa3e6bb84eb571c31d2b65ff.jpg", desc: "Historic site." },
    { name: "Wagah Border", img: "https://i.pinimg.com/736x/e4/d2/54/e4d25482c95e901a4950ff415605c75f.jpg", desc: "Famous for the daily beating retreat ceremony." },
{ name: "Amritsar Market", img: "https://i.pinimg.com/1200x/a8/f7/13/a8f713c4caeb13bb7f0313bdcb9c0a07.jpg", desc: "Vibrant bazaars for food and shopping." },
{ name: "Anandpur Sahib", img: "https://i.pinimg.com/736x/34/03/e5/3403e582a3065159d4e4fd8be1095d1d.jpg", desc: "One of the holiest Sikh towns." },
{ name: "Patiala", img: "https://i.pinimg.com/1200x/71/18/cc/7118cc815eb6e386aa58c1dd2eae8da2.jpg", desc: "Royal city known for forts and heritage." },
{ name: "Chandigarh Rock Garden", img: "https://i.pinimg.com/1200x/6f/77/a9/6f77a94c097ad2def55f12ab5e1993a5.jpg", desc: "Unique garden made from recycled materials." },
{ name: "Sukhna Lake", img: "https://i.pinimg.com/1200x/1c/5c/95/1c5c95b88bc44f24add7a2d3901a502c.jpg", desc: "Beautiful lake for boating and relaxation." },
{ name: "Ludhiana", img: "https://i.pinimg.com/736x/39/b4/2a/39b42aaadce57a12607cad9b35cb5d8f.jpg", desc: "Industrial city with museums and parks." },
{ name: "Bathinda Fort", img: "https://i.pinimg.com/736x/40/12/ec/4012ec4c1884b1a89740f4204a11fe19.jpg", desc: "Historic fort with archaeological importance." }

  ],
  "Rajasthan": [
    { name: "Jaipur", img: "https://i.pinimg.com/1200x/ac/2a/e6/ac2ae60f8bfcc2412ada49c9c0ec735b.jpg", desc: "Pink City and forts." },
    { name: "Udaipur", img: "https://i.pinimg.com/1200x/50/52/c9/5052c904ec34e5ae77444ab851098a22.jpg", desc: "City of lakes." },
    { name: "Jodhpur", img: "https://i.pinimg.com/1200x/7a/4d/3c/7a4d3c77aa6d230b861d94b69cb06d84.jpg", desc: "Blue City known for Mehrangarh Fort." },
{ name: "Jaisalmer", img: "https://i.pinimg.com/1200x/29/0c/13/290c13ac88652adbbc6ccb52a19ed1cd.jpg", desc: "Golden City with desert and sandstone forts." },
{ name: "Mount Abu", img: "https://i.pinimg.com/1200x/e5/41/e8/e541e8fe3aa5335931d01705a5fd6636.jpg", desc: "Only hill station of Rajasthan." },
{ name: "Pushkar", img: "https://i.pinimg.com/1200x/ea/29/02/ea29026f249fd060b12a51ef6f68e218.jpg", desc: "Sacred town famous for Brahma Temple." },
{ name: "Bikaner", img: "https://i.pinimg.com/736x/f5/a5/c3/f5a5c32c42d7f19463d36874d0164f99.jpg", desc: "Historic city known for Junagarh Fort." },
{ name: "Chittorgarh", img: "https://i.pinimg.com/1200x/28/41/83/284183d714911783280b3fc913e9b25e.jpg", desc: "Massive fort symbolizing Rajput valor." },
{ name: "Ranthambore National Park", img: "https://i.pinimg.com/736x/0a/0f/a4/0a0fa46271109be3b00f52b52178a0e7.jpg", desc: "Tiger reserve with ancient fort." },
{ name: "Ajmer", img: "https://i.pinimg.com/736x/64/b6/15/64b615c9ee7e7b3f7b32e0ba7a5aa827.jpg", desc: "Famous for Ajmer Sharif Dargah." }

  ],
  "Sikkim": [
    { name: "Gangtok", img: "https://i.pinimg.com/736x/7c/ec/b4/7cecb4b6d5885929dc127a4700595a21.jpg", desc: "Capital city in the hills." },
    { name: "Tsomgo Lake", img: "https://i.pinimg.com/1200x/01/91/30/019130a0991233722be307c5ec2be35a.jpg", desc: "Glacial lake surrounded by mountains." },
    { name: "Rumtek Monastery", img: "https://i.pinimg.com/1200x/25/4e/c8/254ec8dfc3a39973c384f2b180d92cdf.jpg", desc: "One of the largest monasteries in Sikkim." },
    { name: "Nathula Pass", img: "https://i.pinimg.com/1200x/8e/28/9b/8e289b2443404cd55d7067d54832cee6.jpg", desc: "Mountain pass on the Indo-China border." },
    { name: "Yumthang Valley", img: "https://i.pinimg.com/1200x/83/7b/a8/837ba82a96a7d482a51ef5a0d281650e.jpg", desc: "Scenic valley known as the 'Valley of Flowers'." },
    { name: "Pelling", img: "https://i.pinimg.com/736x/8d/c8/50/8dc850f859e7d5d95f1ef5a7336de482.jpg", desc: "Town with views of the Kanchenjunga peak." },
    { name: "Seven Sisters Waterfalls", img: "https://i.pinimg.com/1200x/2b/a2/d4/2ba2d403404226820cfe4233f548ee7c.jpg", desc: "Beautiful cascading waterfalls near Gangtok." },
    { name: "Namchi", img: "https://i.pinimg.com/1200x/8b/b0/8a/8bb08a4e65d45659eeca448f50613a3c.jpg", desc: "Town famous for Char Dham pilgrimage sites." },
    { name: "Tsongmo Lake", img: "https://i.pinimg.com/736x/51/94/6d/51946dbdccc1abac7b65a6c52f8f7ea3.jpg", desc: "High-altitude lake with serene surroundings." },
    { name: "Ravangla", img: "https://i.pinimg.com/736x/01/3f/fc/013ffc7f5a9ff51314944b2bb56ebd2f.jpg", desc: "Small town known for Buddha Park and scenic views." }
],

  "Tamil Nadu": [
    { name: "Meenakshi Temple", img: "https://i.pinimg.com/736x/0d/c7/bb/0dc7bb9e45d5c26ed0fd894431a90ffd.jpg", desc: "One of the oldest and most famous temples in India." },
    { name: "Ooty", img: "https://i.pinimg.com/736x/a6/04/17/a60417f9086ed1c82bc8f5f5eaffa626.jpg", desc: "Queen of hill stations." },
    { name: "Mahabalipuram", img: "https://i.pinimg.com/736x/13/74/fb/1374fb15d768256a8ba028ec569e88ab.jpg", desc: "Famous for rock-cut temples and shore temples." },
    { name: "Kanyakumari", img: "https://i.pinimg.com/736x/6d/9d/77/6d9d777ea762794a11857f5863ce9b95.jpg", desc: "Southernmost tip of India, known for sunrise and sunset views." },
    { name: "Rameswaram", img: "https://i.pinimg.com/736x/c9/2a/65/c92a65476fa07b42cc7deb5872fe2979.jpg", desc: "Pilgrimage town with historic temples and Pamban Bridge." },
    { name: "Chidambaram", img: "https://i.pinimg.com/1200x/7d/d8/cf/7dd8cfd213bdc8808342ff1d39e539d5.jpg", desc: "Temple town famous for the Nataraja Temple." },
    { name: "Madurai", img: "https://i.pinimg.com/736x/61/44/5b/61445b2d67d840a6a38892997ffc5ca2.jpg", desc: "Historic city known for Meenakshi Amman Temple and cultural heritage." },
    { name: "Kodaikanal", img: "https://i.pinimg.com/1200x/da/cb/91/dacb91131592ba255ce7f49ef6626c51.jpg", desc: "Hill station with scenic landscapes and lakes." },
    { name: "Thanjavur", img: "https://i.pinimg.com/1200x/6b/d5/96/6bd59623f1190d7e0cc515010f9ee7ba.jpg", desc: "Known for Brihadeeswarar Temple and classical arts." },
    { name: "Hogenakkal Falls", img: "https://i.pinimg.com/736x/8c/ed/a3/8ceda33efef9a75625894ddcdd4794a1.jpg", desc: "Picturesque waterfalls on the Kaveri river." }
],

  "Telangana": [
    { name: "Charminar", img: "https://i.pinimg.com/1200x/6f/65/be/6f65be65df7d422493344a00b97ad6cb.jpg", desc: "Iconic monument in Hyderabad." },
    { name: "Golconda Fort", img: "https://i.pinimg.com/1200x/b2/68/5e/b2685e195bf41b3814146c9a428797d2.jpg", desc: "Historic fortress." },
    { name: "Ramoji Film City", img: "https://i.pinimg.com/736x/0b/08/b6/0b08b60cd821d0e108aa1f0466c4e2ad.jpg", desc: "One of the largest film cities in the world." },
    { name: "Hussain Sagar Lake", img: "https://i.pinimg.com/736x/8a/10/16/8a10166a39adcd857cf8424f577fcebb.jpg", desc: "Man-made lake with Buddha statue in the middle." },
    { name: "Salar Jung Museum", img: "https://i.pinimg.com/1200x/36/16/da/3616da88255ceb15b0cc558782bb4bc9.jpg", desc: "Museum housing rare art and artifacts." },
    { name: "Birla Mandir", img: "https://i.pinimg.com/736x/d4/4a/a9/d44aa92d149bb20d64036e3b1daadc69.jpg", desc: "Marble temple dedicated to Lord Venkateswara." },
    { name: "Medak Fort", img: "https://i.pinimg.com/736x/b0/28/cb/b028cb5dd0c7a1c9f6bf24c70869cd49.jpg", desc: "Fort with historic significance and scenic views." },
    { name: "Kakatiya Kala Thoranam", img: "https://i.pinimg.com/1200x/74/f0/5c/74f05cae5726149da6b3c88e8d5b81fa.jpg", desc: "Ancient arch in Warangal symbolizing Kakatiya dynasty." },
    { name: "Bhongir Fort", img: "https://i.pinimg.com/736x/c5/15/78/c51578e27cae43c9ba429a76e68494bc.jpg", desc: "Hilltop fort with panoramic views." },
    { name: "Pocharam Wildlife Sanctuary", img: "https://i.pinimg.com/736x/2b/5a/5e/2b5a5eed48e0608855551cfdf6fa69c2.jpg", desc: "Sanctuary with diverse flora and fauna." }
],

  "Tripura": [
    { name: "Ujjayanta Palace", img: "https://i.pinimg.com/1200x/a2/ba/88/a2ba88f906728c871670d77376d45768.jpg", desc: "Royal palace in Agartala." },
    { name: "Neermahal", img: "https://i.pinimg.com/736x/a6/90/ac/a690ac431caa07aaae7cd4ca74ef166a.jpg", desc: "Palace in the middle of a lake." },
    { name: "Tripura Sundari Temple", img: "https://i.pinimg.com/1200x/ce/1e/8c/ce1e8cc92e4f6989ebc3f217412397ce.jpg", desc: "One of the 51 Shakti Peethas in India." },
    { name: "Jampui Hills", img: "https://i.pinimg.com/1200x/b0/cb/8e/b0cb8e5155f0f79568c864a35cea1dbf.jpg", desc: "Scenic hill range known for orange orchards." },
    { name: "Unakoti", img: "https://i.pinimg.com/736x/a1/f1/a6/a1f1a627d42610dc79949bcfd6cea960.jpg", desc: "Archaeological site with rock-cut sculptures." },
    { name: "Sepahijala Wildlife Sanctuary", img: "https://i.pinimg.com/736x/40/46/58/404658f685534ecdf721131d6efe3dc6.jpg", desc: "Sanctuary with diverse wildlife and bird species." },
    { name: "Ambassa", img: "https://i.pinimg.com/564x/cb/ae/68/cbae686d28275bb8478849e157dff471.jpg", desc: "Town famous for tribal culture and scenic surroundings." },
    { name: "Belonia", img: "https://i.pinimg.com/originals/5a/71/78/5a7178e75fd52d8f3a73042795886532.jpg", desc: "Town near the Bangladesh border with natural beauty." },
    { name: "Muktinagar", img: "https://i.pinimg.com/1200x/0c/64/05/0c6405d4fee1e7283edadfb22045acf1.jpg", desc: "Place known for religious and historical significance." },
    { name: "Pilak", img: "https://tse1.mm.bing.net/th/id/OIP.h00z1mkIZh1XBCZ-9WDT4wAAAA?rs=1&pid=ImgDetMain&o=7&rm=3", desc: "Ancient archaeological site with sculptures and ruins." }
],
  "Uttar Pradesh": [
    { name: "Taj Mahal", img: "https://i.pinimg.com/1200x/e9/1a/b6/e91ab6d60ffd80c74e6364c96f293a84.jpg", desc: "Symbol of love and UNESCO site." },
    { name: "Varanasi", img: "https://i.pinimg.com/1200x/f6/49/4b/f6494b21125e2862287342978e856c1e.jpg", desc: "Spiritual city on the Ganges." },
    { name: "Agra Fort", img: "https://i.pinimg.com/736x/0a/5e/a7/0a5ea7d77384821285977a4c04bbeaf6.jpg", desc: "Historic fort near the Taj Mahal." },
    { name: "Fatehpur Sikri", img: "https://i.pinimg.com/1200x/20/66/7c/20667c1aa5c117e47d1964ba168fc6fd.jpg", desc: "UNESCO heritage city built by Akbar." },
    { name: "Mathura", img: "https://i.pinimg.com/1200x/d0/af/c1/d0afc1be28a2b7508b7a697dd33d6645.jpg", desc: "Birthplace of Lord Krishna." },
    { name: "Vrindavan", img: "https://i.pinimg.com/736x/4a/50/dc/4a50dc120504e4bd1b1f3fb328baaedb.jpg", desc: "Town associated with Krishna's life and temples." },
    { name: "Lucknow", img: "https://i.pinimg.com/1200x/87/af/38/87af38c2a49dcd554793d3d8ec856717.jpg", desc: "Capital city known for Nawabi culture and cuisine." },
    { name: "Sarnath", img: "https://i.pinimg.com/736x/e5/a6/1b/e5a61b7cb3e03ec91545a7292d444add.jpg", desc: "Buddhist pilgrimage site where Buddha gave his first sermon." },
    { name: "Jhansi Fort", img: "https://i.pinimg.com/736x/19/1e/8c/191e8c97eb485c371ac95a1e69e3574d.jpg", desc: "Historic fort associated with Rani Lakshmibai." },
    { name: "Allahabad (Prayagraj)", img: "https://i.pinimg.com/1200x/90/41/31/9041315ca62ca0e9e791c3cf24b3ce9c.jpg", desc: "City famous for Triveni Sangam and Kumbh Mela." }
],
  "Uttarakhand": [
    { name: "Rishikesh", img: "https://i.pinimg.com/1200x/10/b8/16/10b816273afa1a1c49c7960ffe8c1637.jpg", desc: "Yoga capital of the world." },
    { name: "Nainital", img: "https://i.pinimg.com/736x/4c/cf/e2/4ccfe220ef7d6beb22b1af45e1c890b8.jpg", desc: "Beautiful hill station." },
    { name: "Haridwar", img: "https://i.pinimg.com/1200x/35/ab/c7/35abc7d10942973ea5410f7e954c4ef6.jpg", desc: "Holy city on the banks of the Ganges." },
    { name: "Mussoorie", img: "https://i.pinimg.com/736x/76/6d/e3/766de33e31011f35056c1eb2aa2e7769.jpg", desc: "Popular hill station known as 'Queen of Hills'." },
    { name: "Jim Corbett National Park", img: "https://i.pinimg.com/736x/69/82/88/69828863b4856121cdd496b6a61c5877.jpg", desc: "Famous wildlife sanctuary and tiger reserve." },
    { name: "Dehradun", img: "https://i.pinimg.com/736x/bb/8f/78/bb8f78d2a10f80179f015f3f452a74cc.jpg", desc: "Capital city surrounded by hills and rivers." },
    { name: "Auli", img: "https://i.pinimg.com/1200x/07/3f/63/073f635c4fd92ea42001de94274aaf14.jpg", desc: "Skiing destination with stunning Himalayan views." },
    { name: "Kedarnath", img: "https://i.pinimg.com/736x/cd/ae/4d/cdae4dfb1ddab9f8e7c1819ee1ab5bb5.jpg", desc: "Famous Hindu pilgrimage town in the Himalayas." },
    { name: "Badrinath", img: "https://i.pinimg.com/1200x/d7/65/27/d76527dc6b5816a005e3379eeea36fed.jpg", desc: "Sacred town and one of the Char Dham sites." },
    { name: "Valley of Flowers", img: "https://i.pinimg.com/1200x/91/6a/19/916a19a1da186ca091d3c6a7efaef660.jpg", desc: "UNESCO World Heritage site with alpine flowers." }
],
  "West Bengal": [
    { name: "Kolkata", img: "https://i.pinimg.com/1200x/a7/c3/9d/a7c39de0686bc65f1ab69b4861e587e5.jpg", desc: "City of joy with colonial architecture." },
    { name: "Darjeeling", img: "https://i.pinimg.com/736x/bd/3b/bd/bd3bbd9a2f1b1e3fb5dcb4b7848821bc.jpg", desc: "Famous for tea gardens and mountains." },
    { name: "Sundarbans", img: "https://i.pinimg.com/1200x/a0/61/fa/a061fa144924f1855ff04e06f72c9d3d.jpg", desc: "Largest mangrove forest and home of the Royal Bengal Tiger." },
    { name: "Shantiniketan", img: "https://i.pinimg.com/1200x/46/9e/b2/469eb22e26b9f3aa9a1dbd06dfb7a546.jpg", desc: "Cultural town founded by Rabindranath Tagore." },
    { name: "Digha", img: "https://i.pinimg.com/736x/0e/89/a9/0e89a9a5ce58d6055baab94389e61750.jpg", desc: "Popular seaside resort town." },
    { name: "Kalimpong", img: "https://i.pinimg.com/1200x/ee/b0/b7/eeb0b7681a277aa618294b852c25abf8.jpg", desc: "Hill station with monasteries and scenic views." },
    { name: "Cooch Behar", img: "https://i.pinimg.com/1200x/cf/6a/71/cf6a71b0f3d1bd3d2256c2b472bd4ef2.jpg", desc: "Town known for its palaces and historic architecture." },
    { name: "Murshidabad", img: "https://i.pinimg.com/736x/9d/bb/3d/9dbb3d3f76675b9c160d6e71be2b0c07.jpg", desc: "Historic city with Nawabi heritage." },
    { name: "Bishnupur", img: "https://i.pinimg.com/736x/a5/da/1a/a5da1a930384c86181f3cd0d6052ffae.jpg", desc: "Famous for terracotta temples and crafts." },
    { name: "Santiniketan", img: "https://i.pinimg.com/1200x/78/9c/46/789c469a5d3000f8d2bf68f56a771a59.jpg", desc: "Town known for Visva Bharati University and cultural heritage." }
]

}; export default visitingPlaces;
