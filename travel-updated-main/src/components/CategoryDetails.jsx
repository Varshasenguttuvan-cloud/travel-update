import React from "react";
import { useParams } from "react-router-dom";
import "./CategoryDetails.css";

const categoryData = {
  Temples: [

  { "id": 1, "name": "Tirupati Balaji Temple (Andhra Pradesh)", "img": "https://i.pinimg.com/736x/d1/30/a0/d130a02f124fcaa342a5f377f5079837.jpg" },
  { "id": 2, "name": "Golden Temple (Punjab)", "img": "https://i.pinimg.com/1200x/d2/dc/98/d2dc98e2bce754c4a5d6ce7b41a467f8.jpg" },
  { "id": 3, "name": "Kashi Vishwanath Temple (Uttar Pradesh)", "img": "https://i.pinimg.com/736x/08/58/a7/0858a75ac36c0009640a96918a31be16.jpg" },
  { "id": 4, "name": "Somnath Temple (Gujarat)", "img": "https://i.pinimg.com/1200x/11/f7/1f/11f71f5f61a1c80a027eae755a48543a.jpg" },
  { "id": 5, "name": "Kedarnath Temple (Uttarakhand)", "img": "https://i.pinimg.com/1200x/17/25/a6/1725a63d387194b7b70ecb8d0bf2fcfe.jpg" },
  { "id": 6, "name": "Badrinath Temple (Uttarakhand)", "img": "https://i.pinimg.com/736x/71/bd/bc/71bdbc07b5c12801e37c0344233fc385.jpg" },
  { "id": 7, "name": "Jagannath Temple (Odisha)", "img": "https://i.pinimg.com/1200x/bb/c0/26/bbc0260c19a18691a47bbb67bcb69fcd.jpg" },
  { "id": 8, "name": "Meenakshi Amman Temple (Tamil Nadu)", "img": "https://i.pinimg.com/736x/fb/76/d3/fb76d3ece5b52c30e81728de0d810b9a.jpg" },
  { "id": 9, "name": "Ramanathaswamy Temple (Tamil Nadu)", "img": "https://i.pinimg.com/1200x/dc/bd/40/dcbd404e19e45e8bf9ed94a10b37d107.jpg" },
  { "id": 10, "name": "Sri Ranganathaswamy Temple (Tamil Nadu)", "img": "https://i.pinimg.com/736x/d0/4b/6b/d04b6b7b593b5df8a0125067a68ec844.jpg" },
  { "id": 11, "name": "Vaishno Devi Temple (Jammu & Kashmir)", "img": "https://i.pinimg.com/1200x/d9/81/5e/d9815ee84e081b4fc0959f3c8235d690.jpg" },
  { "id": 12, "name": "Akshardham Temple (Delhi)", "img": "https://i.pinimg.com/1200x/5a/99/58/5a99588e823609eaa37dcb303ff7d00b.jpg" },
  { "id": 13, "name": "Shirdi Sai Baba Temple (Maharashtra)", "img": "https://i.pinimg.com/736x/bd/35/a0/bd35a089c09d463bf06e6fc13f88cd8a.jpg" },
  { "id": 14, "name": "Siddhivinayak Temple (Maharashtra)", "img": "https://i.pinimg.com/736x/e9/cf/17/e9cf17d4f0be99946b4c44e2c65125ca.jpg" },
  { "id": 15, "name": "Kamakhya Temple (Assam)", "img": "https://i.pinimg.com/1200x/1c/3e/bd/1c3ebd028d7cca834bbdad25cc122eeb.jpg" },
  { "id": 16, "name": "Padmanabhaswamy Temple (Kerala)", "img": "https://i.pinimg.com/1200x/ce/d4/07/ced407aef75a217ba72dddc2ab003a32.jpg" },
  { "id": 17, "name": "Guruvayur Temple (Kerala)", "img": "https://i.pinimg.com/736x/17/f7/43/17f743e84eef75a260ecfdb0e495fd1a.jpg" },
  { "id": 18, "name": "Khajrana Ganesh Temple (Madhya Pradesh)", "img": "https://i.pinimg.com/1200x/ad/57/a2/ad57a216f91ccffbed60ef8a5d6b9ef7.jpg" },
  { "id": 19, "name": "Mahakaleshwar Temple (Madhya Pradesh)", "img": "https://i.pinimg.com/1200x/e1/b2/cd/e1b2cd821ad0080ef6d5f6c0e56efc76.jpg" },
  { "id": 20, "name": "Lingaraja Temple (Odisha)", "img": "https://i.pinimg.com/1200x/46/c9/79/46c9795df32d787166cfc09b2b8a1cea.jpg" }


  ],

  Nature: [
    { "id": 1, "name": "Himalayas (Jammu & Kashmir)", "img": "https://i.pinimg.com/736x/7e/43/ad/7e43adc06c1cb8353e385e87afb51a2e.jpg" },
{ "id": 2, "name": "Valley of Flowers (Uttarakhand)", "img": "https://i.pinimg.com/1200x/91/6a/19/916a19a1da186ca091d3c6a7efaef660.jpg" },
{ "id": 3, "name": "Backwaters of Kerala (Kerala)", "img": "https://i.pinimg.com/1200x/18/71/a4/1871a4f83e483432e48e9a098a6be0aa.jpg" },
{ "id": 4, "name": "Sundarbans (West Bengal)", "img": "https://i.pinimg.com/1200x/56/ed/e6/56ede656911f9623a2cd2adb979936b7.jpg" },
{ "id": 5, "name": "Thar Desert (Rajasthan)", "img": "https://i.pinimg.com/1200x/4b/37/cf/4b37cf39264416ccbc25a01468825acd.jpg" },
{ "id": 6, "name": "Chilika Lake (Odisha)", "img": "https://i.pinimg.com/1200x/cc/25/d4/cc25d4eadbff4e368cfc88e1caac9b4d.jpg" },
{ "id": 7, "name": "Andaman Islands (Andaman & Nicobar)", "img": "https://i.pinimg.com/1200x/4a/66/c1/4a66c174d100e6cb5d24a8378da8f2f8.jpg" },
{ "id": 8, "name": "Coorg (Karnataka)", "img": "https://i.pinimg.com/1200x/e9/4b/a7/e94ba748c2fb095cdc13ede9a6f05de7.jpg" },
{ "id": 9, "name": "Jim Corbett National Park (Uttarakhand)", "img": "https://i.pinimg.com/736x/26/8a/0f/268a0f85afe48409554da726f59d8efd.jpg" },
{ "id": 10, "name": "Sikkim Himalayas (Sikkim)", "img": "https://i.pinimg.com/1200x/13/58/2c/13582c4a84b8fdce5a0ff82119ed17fb.jpg" },
{ "id": 11, "name": "Meghalaya Living Root Bridges (Meghalaya)", "img": "https://i.pinimg.com/1200x/43/90/c0/4390c0c0380065f5c7fe20705c0fdf88.jpg" },
{ "id": 12, "name": "Kaziranga National Park (Assam)", "img": "https://i.pinimg.com/1200x/65/1a/21/651a21dd447793eee4ce62b5ab43b0f4.jpg" },
{ "id": 13, "name": "Rann of Kutch (Gujarat)", "img": "https://i.pinimg.com/736x/5e/12/e8/5e12e8969fdbc3faf9f0d0f0ed38ef23.jpg" },
{ "id": 14, "name": "Nanda Devi National Park (Uttarakhand)", "img": "https://i.pinimg.com/1200x/dc/1b/a0/dc1ba036719ee509470428da3180804a.jpg" },
{ "id": 15, "name": "Bhimtal Lake (Uttarakhand)", "img": "https://i.pinimg.com/1200x/47/d8/ec/47d8ec1524c7be1ece6a92426bd3a8e0.jpg" },
{ "id": 16, "name": "Loktak Lake (Manipur)", "img": "https://i.pinimg.com/1200x/a0/14/4e/a0144eed065d1150c4ac4acdd66da769.jpg" },
{ "id": 17, "name": "Dzukou Valley (Nagaland)", "img": "https://i.pinimg.com/736x/4a/25/ab/4a25ab2f423800786b1337c68411312a.jpg" },
{ "id": 18, "name": "Coastal Goa (Goa)", "img": "https://i.pinimg.com/1200x/56/87/69/5687697952c6e340e294eded0a199bae.jpg" },
{ "id": 19, "name": "Munnar Hills (Kerala)", "img": "https://i.pinimg.com/736x/f9/40/d5/f940d5c69f65448d3a923bdd47464b43.jpg" },
{ "id": 20, "name": "Valley of Spiti (Himachal Pradesh)", "img": "https://i.pinimg.com/736x/91/c6/47/91c647dc7a52ee95ce5b7a4bbaec49d2.jpg" }

  ],

  Beaches: [
   { "id": 1, "name": "Baga Beach (Goa)", "img": "https://i.pinimg.com/736x/d2/b8/15/d2b81568c49658bf0244696360de60a9.jpg" },
{ "id": 2, "name": "Palolem Beach (Goa)", "img": "https://i.pinimg.com/736x/a6/0c/b2/a60cb25f0e12c2264d444c94156a3ffb.jpg" },
{ "id": 3, "name": "Radhanagar Beach (Andaman & Nicobar)", "img": "https://i.pinimg.com/1200x/f1/f1/ad/f1f1adb4db534c08e0e2e149b37a52fb.jpg" },
{ "id": 4, "name": "Varkala Beach (Kerala)", "img": "https://i.pinimg.com/1200x/20/36/73/2036731bcd33beee4af60c3ddf54e9c5.jpg" },
{ "id": 5, "name": "Marina Beach (Tamil Nadu)", "img": "https://i.pinimg.com/1200x/4e/c4/4d/4ec44d903ca63cddcd4564da1a5af044.jpg" },
{ "id": 6, "name": "Kovalam Beach (Kerala)", "img": "https://i.pinimg.com/736x/6d/e5/dc/6de5dca799c899da49436b0f08e35c8e.jpg" },
{ "id": 7, "name": "Om Beach (Karnataka)", "img": "https://i.pinimg.com/1200x/13/e0/56/13e056b3dc3745eb8a9f4f3f887c1f7d.jpg" },
{ "id": 8, "name": "Puri Beach (Odisha)", "img": "https://i.pinimg.com/1200x/c2/e5/7c/c2e57c3bf901f29256d543dad48a0d50.jpg" },
{ "id": 9, "name": "Gokarna Beach (Karnataka)", "img": "https://i.pinimg.com/1200x/93/89/04/93890407b584b0cb9cbf66de284efd41.jpg" },
{ "id": 10, "name": "Mandarmani Beach (West Bengal)", "img": "https://i.pinimg.com/1200x/ea/48/67/ea4867fb9bdca9063de58ae98c6b1dab.jpg" },
{ "id": 11, "name": "Agonda Beach (Goa)", "img": "https://i.pinimg.com/1200x/bd/3e/36/bd3e36eb07b7d0b0a53d77c3df7f9913.jpg" },
{ "id": 12, "name": "Auroville Beach (Puducherry)", "img": "https://i.pinimg.com/1200x/8d/0f/4a/8d0f4a8e0c06c45072c8836cd6e6fb80.jpg" },
{ "id": 13, "name": "Tarkarli Beach (Maharashtra)", "img": "https://i.pinimg.com/1200x/15/8a/08/158a08512d690384d8c36daee9516ba4.jpg" },
{ "id": 14, "name": "Bheemili Beach (Andhra Pradesh)", "img": "https://i.pinimg.com/1200x/bf/af/70/bfaf70cddad1b4b12ca0fa9fe08c1f57.jpg" },
{ "id": 15, "name": "Kalingapatnam Beach (Andhra Pradesh)", "img": "https://i.pinimg.com/1200x/08/6f/c5/086fc5ccfe55cf8a3de99d46082812f4.jpg" },
{ "id": 16, "name": "Murud Beach (Maharashtra)", "img": "https://i.pinimg.com/1200x/6e/d1/b0/6ed1b0cf9605569e97259344436c8bd9.jpg" },
{ "id": 17, "name": "Rushikonda Beach (Andhra Pradesh)", "img": "https://i.pinimg.com/1200x/e2/6c/5e/e26c5ed13f9c9c653e90a3f90cd2696c.jpg" },
{ "id": 18, "name": "Cherai Beach (Kerala)", "img": "https://i.pinimg.com/736x/70/b5/3d/70b53d0fa5353e2c5309d60102d13adf.jpg" },
{ "id": 19, "name": "Havelock Beach (Andaman & Nicobar)", "img": "https://i.pinimg.com/1200x/f9/2d/b6/f92db6364ae901c0aad8ba92af68079e.jpg" },
{ "id": 20, "name": "Vishakhapatnam Beach (Andhra Pradesh)", "img": "https://i.pinimg.com/736x/fc/03/d2/fc03d2468b695f72f1c22ec6910346c0.jpg" }

  ],

  "Hill Stations": [
    { "id": 1, "name": "Shimla (Himachal Pradesh)", "img": "https://i.pinimg.com/1200x/a6/24/a3/a624a319b3027a55144932bcaf5a3239.jpg" },
{ "id": 2, "name": "Manali (Himachal Pradesh)", "img": "https://i.pinimg.com/1200x/11/f5/f6/11f5f62399d85d5d778d79d85e5c2063.jpg" },
{ "id": 3, "name": "Darjeeling (West Bengal)", "img": "https://i.pinimg.com/736x/86/d0/1c/86d01c9ad9df94afea8bd655b364f0bf.jpg" },
{ "id": 4, "name": "Munnar (Kerala)", "img": "https://i.pinimg.com/1200x/d3/f7/96/d3f7962c2cf0be0a6da93f2b476a1c25.jpg" },
{ "id": 5, "name": "Ooty (Tamil Nadu)", "img": "https://i.pinimg.com/1200x/4f/11/fb/4f11fb991d01ce3b0cb942703df03d89.jpg" },
{ "id": 6, "name": "Coorg (Karnataka)", "img": "https://i.pinimg.com/1200x/e9/4b/a7/e94ba748c2fb095cdc13ede9a6f05de7.jpg" },
{ "id": 7, "name": "Nainital (Uttarakhand)", "img": "https://i.pinimg.com/1200x/3a/6c/08/3a6c08fddfbe1f4c4d17726ca450f0ce.jpg" },
{ "id": 8, "name": "Mussoorie (Uttarakhand)", "img": "https://i.pinimg.com/736x/d3/f2/17/d3f2170fb882740d26ca3c934d8329ad.jpg" },
{ "id": 9, "name": "Mount Abu (Rajasthan)", "img": "https://i.pinimg.com/736x/ed/e7/eb/ede7ebd7680adc9daa658516c31ca076.jpg" },
{ "id": 10, "name": "Kodaikanal (Tamil Nadu)", "img": "https://i.pinimg.com/736x/26/da/d1/26dad1d4c6f1a9304b5a4cb3035838f7.jpg" },
{ "id": 11, "name": "Leh-Ladakh (Jammu & Kashmir)", "img": "https://i.pinimg.com/1200x/0f/ce/2a/0fce2ad2d465777c7cf5229e13f90852.jpg" },
{ "id": 12, "name": "Gangtok (Sikkim)", "img": "https://i.pinimg.com/736x/7c/ec/b4/7cecb4b6d5885929dc127a4700595a21.jpg" },
{ "id": 13, "name": "Mahabaleshwar (Maharashtra)", "img": "https://i.pinimg.com/1200x/01/46/3d/01463d9678dbce50f8839da5dc0719a3.jpg" },
{ "id": 14, "name": "Chikmagalur (Karnataka)", "img": "https://i.pinimg.com/1200x/d7/89/2e/d7892ea88131df3b58dba3ef16c2e3cf.jpg" },
{ "id": 15, "name": "Srinagar (Jammu & Kashmir)", "img": "https://i.pinimg.com/1200x/b2/de/a1/b2dea1e4021b339954a0192c53ff1d9c.jpg" },
{ "id": 16, "name": "Darjeeling Tea Gardens (West Bengal)", "img": "https://i.pinimg.com/1200x/9a/28/61/9a2861ff188800fbe4f2cf5e912b40b6.jpg" },
{ "id": 17, "name": "Tawang (Arunachal Pradesh)", "img": "https://i.pinimg.com/736x/24/f3/5c/24f35cd5187a15c6d6b1c14f75fe825f.jpg" },
{ "id": 18, "name": "Shillong (Meghalaya)", "img": "https://i.pinimg.com/736x/e2/fd/a1/e2fda1b2176f06c3dec2412d42b747fd.jpg" },
{ "id": 19, "name": "Pelling (Sikkim)", "img": "https://i.pinimg.com/736x/8d/c8/50/8dc850f859e7d5d95f1ef5a7336de482.jpg" },
{ "id": 20, "name": "Mount Harriet (Andaman & Nicobar)", "img": "https://i.pinimg.com/1200x/cd/1b/18/cd1b18df4e71b400d2abb713cc9b82f9.jpg" }

  ],

    "Heritage Sites" : [
    { "id": 1, "name": "Taj Mahal (Uttar Pradesh)", "img": "https://i.pinimg.com/736x/0e/56/15/0e5615c79628a17f86b25bc805b63167.jpg" },
{ "id": 2, "name": "Qutub Minar (Delhi)", "img": "https://i.pinimg.com/1200x/fb/18/f1/fb18f1d1fad1fd56cd2b69352de10836.jpg" },
{ "id": 3, "name": "Red Fort (Delhi)", "img": "https://i.pinimg.com/736x/42/c5/c1/42c5c1eb9062b5317d303e41d1fc09eb.jpg" },
{ "id": 4, "name": "Fatehpur Sikri (Uttar Pradesh)", "img": "https://i.pinimg.com/736x/9e/3c/91/9e3c91603c3ac8a5ec48edd047a74565.jpg" },
{ "id": 5, "name": "Amber Fort (Rajasthan)", "img": "https://i.pinimg.com/1200x/b2/0b/97/b20b977813320fcb9524cc8d37a3049c.jpg" },
{ "id": 6, "name": "City Palace Jaipur (Rajasthan)", "img": "https://i.pinimg.com/736x/5e/44/52/5e445254d28ae37db36e6f3cc363f1f5.jpg" },
{ "id": 7, "name": "Jaisalmer Fort (Rajasthan)", "img": "https://i.pinimg.com/1200x/7c/f9/a4/7cf9a4e798828e604ba5bc7f3ef2bec4.jpg" },
{ "id": 8, "name": "Hampi (Karnataka)", "img": "https://i.pinimg.com/736x/f4/56/a6/f456a63ac6043b43780403a434c174f8.jpg" },
{ "id": 9, "name": "Mysore Palace (Karnataka)", "img": "https://i.pinimg.com/1200x/8e/68/a6/8e68a6474ec9ec55bbeddb5ebbef8af1.jpg" },
{ "id": 10, "name": "Konark Sun Temple (Odisha)", "img": "https://i.pinimg.com/1200x/65/a0/4a/65a04ac39fe54013561c9dc75602f5de.jpg" },
{ "id": 11, "name": "Ajanta Caves (Maharashtra)", "img": "https://i.pinimg.com/736x/20/e9/e5/20e9e5115a8ed1fed84542f4923d393e.jpg" },
{ "id": 12, "name": "Ellora Caves (Maharashtra)", "img": "https://i.pinimg.com/1200x/c1/59/bd/c159bd08cfa3760e3f5050973e4bd567.jpg" },
{ "id": 13, "name": "Mahabalipuram (Tamil Nadu)", "img": "https://i.pinimg.com/1200x/64/92/d9/6492d9c665fefe1cc57638510dd3e31e.jpg" },
{ "id": 14, "name": "Sanchi Stupa (Madhya Pradesh)", "img": "https://i.pinimg.com/736x/7a/29/20/7a2920e3d878835e64355e5fedec5ead.jpg" },
{ "id": 15, "name": "Khajuraho Temples (Madhya Pradesh)", "img": "https://i.pinimg.com/1200x/e0/c8/a7/e0c8a721c33988bb87a58d5a49332c78.jpg" },
{ "id": 16, "name": "Golconda Fort (Telangana)", "img": "https://i.pinimg.com/1200x/b2/68/5e/b2685e195bf41b3814146c9a428797d2.jpg" },
{ "id": 17, "name": "Charminar (Telangana)", "img": "https://i.pinimg.com/1200x/6f/65/be/6f65be65df7d422493344a00b97ad6cb.jpg" },
{ "id": 18, "name": "Red Fort Agra (Uttar Pradesh)", "img": "https://i.pinimg.com/1200x/8e/36/7b/8e367bb741526df5f366ad1a19533fbb.jpg" },
{ "id": 19, "name": "Chittorgarh Fort (Rajasthan)", "img": "https://i.pinimg.com/736x/1e/c6/00/1ec60040d4caae641c227a87f731d56f.jpg" },
{ "id": 20, "name": "Rani ki Vav (Gujarat)", "img": "https://i.pinimg.com/736x/06/39/9b/06399b596c4228607baca63c3d914d1c.jpg" }

  ],

  "Adventure" : [
    { "id": 1, "name": "River Rafting in Rishikesh (Uttarakhand)", "img": "https://i.pinimg.com/736x/6d/21/dd/6d21dd6213bd2471b016ac9a5f69bd76.jpg" },
{ "id": 2, "name": "Paragliding in Bir Billing (Himachal Pradesh)", "img": "https://i.pinimg.com/736x/41/ea/85/41ea8531ba0056877f58e661ab9b40f4.jpg" },
{ "id": 3, "name": "Trekking in Valley of Flowers (Uttarakhand)", "img": "https://i.pinimg.com/736x/7f/74/aa/7f74aab7b8889ca699917142dfb93213.jpg" },
{ "id": 4, "name": "Scuba Diving in Andaman Islands (Andaman & Nicobar)", "img": "https://i.pinimg.com/1200x/03/5e/9d/035e9d696eb67ae4294efd97aced1f9a.jpg" },
{ "id": 5, "name": "Camel Safari in Thar Desert (Rajasthan)", "img": "https://i.pinimg.com/736x/6e/5d/cc/6e5dcce6b714a41abd45cd219d3ce0a2.jpg" },
{ "id": 6, "name": "Mountaineering in Leh-Ladakh (Jammu & Kashmir)", "img": "https://i.pinimg.com/1200x/87/7c/f9/877cf92b22626b4251e5a224549d0faf.jpg" },
{ "id": 7, "name": "Bungee Jumping in Rishikesh (Uttarakhand)", "img": "https://i.pinimg.com/1200x/f9/15/a3/f915a356c686516973d6b322fc8974ef.jpg" },
{ "id": 8, "name": "Skiing in Auli (Uttarakhand)", "img": "https://i.pinimg.com/736x/fe/20/1c/fe201ce99fb46c61e265dc73843f0430.jpg" },
{ "id": 9, "name": "Camping in Coorg (Karnataka)", "img": "https://i.pinimg.com/1200x/14/4c/ec/144cecf347716ee7bdcd60730c80446f.jpg" },
{ "id": 10, "name": "Rock Climbing in Hampi (Karnataka)", "img": "https://i.pinimg.com/736x/44/b7/3c/44b73cee05d1ac6aa6f1612ea2e16941.jpg" },
{ "id": 11, "name": "Zip-lining in Neemrana (Rajasthan)", "img": "https://i.pinimg.com/736x/62/1b/15/621b155931948d627b2618504c7ff490.jpg" },
{ "id": 12, "name": "Kayaking in Zanskar River (Ladakh)", "img": "https://i.pinimg.com/736x/92/59/fc/9259fc3a0f9e7669ce403d0015f513b5.jpg" },
{ "id": 13, "name": "Paragliding in Manali (Himachal Pradesh)", "img": "https://i.pinimg.com/736x/a3/84/84/a38484ba152f3d26ecb066978ca75597.jpg" },
{ "id": 14, "name": "White Water Rafting in Teesta River (Sikkim)", "img": "https://i.pinimg.com/736x/de/86/7d/de867d5b2f6bb56401c935f0ac6ccc0b.jpg" },
{ "id": 15, "name": "Trekking in Spiti Valley (Himachal Pradesh)", "img": "https://i.pinimg.com/1200x/83/90/ee/8390ee82df9b658a86d592635630c628.jpg" },
{ "id": 16, "name": "Mountain Biking in Leh (Jammu & Kashmir)", "img": "https://i.pinimg.com/1200x/1c/b7/16/1cb716f8b18e808ed257ff5b85016ba5.jpg" },
{ "id": 17, "name": "Caving in Meghalaya (Meghalaya)", "img": "https://i.pinimg.com/1200x/94/e7/f0/94e7f0ae0b5d7745679632938cac56e0.jpg" },
{ "id": 18, "name": "Wild Camping in Andaman (Andaman & Nicobar)", "img": "https://tse3.mm.bing.net/th/id/OIP.SoDUjpfHVH30FQRzJwIk-gHaEb?rs=1&pid=ImgDetMain&o=7&rm=3" },
{ "id": 19, "name": "Rock Scrambling in Araku Valley (Andhra Pradesh)", "img": "https://i.pinimg.com/736x/11/58/fe/1158fe014aa61b4545bc11f127315f14.jpg" },
{ "id": 20, "name": "Zip-line Adventure in Rishikesh (Uttarakhand)", "img": "https://i.pinimg.com/736x/11/58/fe/1158fe014aa61b4545bc11f127315f14.jpg" }

  ],

  "Wildlife" : [
    { "id": 1, "name": "Jim Corbett National Park (Uttarakhand)", "img": "https://i.pinimg.com/736x/a7/70/7d/a7707de6e87bf9b01aea3727aa4fb9e1.jpg" },
{ "id": 2, "name": "Ranthambore National Park (Rajasthan)", "img": "https://i.pinimg.com/736x/42/8d/cf/428dcfe6684c27edf2dc9460b5fb6bb5.jpg" },
{ "id": 3, "name": "Kaziranga National Park (Assam)", "img": "https://i.pinimg.com/736x/79/1e/b3/791eb3542db30ad273bc1fb28e0e7c2b.jpg" },
{ "id": 4, "name": "Gir National Park (Gujarat)", "img": "https://i.pinimg.com/1200x/3a/4b/34/3a4b34cc5593cce43bab51a586af2214.jpg" },
{ "id": 5, "name": "Periyar Wildlife Sanctuary (Kerala)", "img": "https://i.pinimg.com/1200x/5d/d2/f1/5dd2f10ea0ba20008775aa89b0da1126.jpg" },
{ "id": 6, "name": "Bandhavgarh National Park (Madhya Pradesh)", "img": "https://i.pinimg.com/1200x/9c/64/c6/9c64c6b1a8692af550bd118216995c23.jpg" },
{ "id": 7, "name": "Kanha National Park (Madhya Pradesh)", "img": "https://i.pinimg.com/1200x/18/1f/54/181f5420e6e9bfaa837fab476cc5f77a.jpg" },
{ "id": 8, "name": "Sundarbans National Park (West Bengal)", "img": "https://i.pinimg.com/1200x/54/b9/70/54b9708923682f86807bce6d6e5f9f75.jpg" },
{ "id": 9, "name": "Nagarhole National Park (Karnataka)", "img": "https://i.pinimg.com/1200x/01/cd/e6/01cde69f6da9339e5252364d832b5529.jpg" },
{ "id": 10, "name": "Hemis National Park (Ladakh)", "img": "https://i.pinimg.com/736x/47/62/6d/47626dc47858aa7d0f3e24266491e80c.jpg" },
{ "id": 11, "name": "Mudumalai National Park (Tamil Nadu)", "img": "https://i.pinimg.com/1200x/14/3a/5d/143a5d33aedfa5d780a422cb2bf3cfb1.jpg" },
{ "id": 12, "name": "Pench National Park (Madhya Pradesh)", "img": "https://i.pinimg.com/736x/39/84/3a/39843aa03349e4c87dddd284d563995a.jpg" },
{ "id": 13, "name": "Valmiki Tiger Reserve (Bihar)", "img": "https://i.pinimg.com/736x/59/2a/0f/592a0f526bf50738b8603d5a0ede69c1.jpg" },
{ "id": 14, "name": "Satpura Tiger Reserve (Madhya Pradesh)", "img": "https://i.pinimg.com/1200x/5e/10/37/5e10370c5053e155a752d54af166ad5a.jpg" },
{ "id": 15, "name": "Manas Wildlife Sanctuary (Assam)", "img": "https://i.pinimg.com/1200x/71/ac/65/71ac657e3666858818c7650371e8cf97.jpg" },
{ "id": 16, "name": "Dudhwa National Park (Uttar Pradesh)", "img": "https://i.pinimg.com/1200x/10/6f/f5/106ff5981bf6441e870d0f7981d682f0.jpg" },
{ "id": 17, "name": "Simlipal National Park (Odisha)", "img": "https://i.pinimg.com/736x/51/8d/20/518d2066be052ae2ce52d0134d2bed75.jpg" },
{ "id": 18, "name": "Keoladeo Bird Sanctuary (Rajasthan)", "img": "https://i.pinimg.com/736x/ff/bc/e3/ffbce34552aae0cb82490226c5b9fb48.jpg" },
{ "id": 19, "name": "Great Himalayan National Park (Himachal Pradesh)", "img": "https://i.pinimg.com/736x/c2/2b/f1/c22bf1f32e2626f2f311397de99d5d52.jpg" },
{ "id": 20, "name": "Anamalai Tiger Reserve (Tamil Nadu)", "img": "https://i.pinimg.com/1200x/17/38/c6/1738c6065d50f5fa5dbe9e052ff8e6da.jpg" }
  ],

  "Waterfalls" : [
    { "id": 1, "name": "Athirappilly Waterfalls (Kerala)", "img": "https://i.pinimg.com/736x/14/cc/43/14cc438dbddb68264c33ff28976ef20b.jpg" },
{ "id": 2, "name": "Dudhsagar Waterfalls (Goa)", "img": "https://i.pinimg.com/736x/7d/8f/f0/7d8ff03aaf6aec5413a031baf06c1cf9.jpg" },
{ "id": 3, "name": "Jog Falls (Karnataka)", "img": "https://i.pinimg.com/736x/1d/3b/1f/1d3b1fd13070edd96937e35089f85ea3.jpg" },
{ "id": 4, "name": "Hogenakkal Falls (Tamil Nadu)", "img": "https://i.pinimg.com/736x/e4/66/ba/e466ba60a919b74ec3145cc8b810da51.jpg" },
{ "id": 5, "name": "Shivanasamudra Falls (Karnataka)", "img": "https://i.pinimg.com/1200x/9d/89/6f/9d896fa40adebb8d42fa37ef0feb207b.jpg" },
{ "id": 6, "name": "Kunchikal Falls (Karnataka)", "img": "https://i.pinimg.com/736x/6f/da/b5/6fdab5d46c9e2085e4d5bde7ebfd4cc9.jpg" },
{ "id": 7, "name": "Bhagsu Waterfall (Himachal Pradesh)", "img": "https://i.pinimg.com/736x/7e/eb/03/7eeb03c83680f3c4a0f02d3978d245ec.jpg" },
{ "id": 8, "name": "Nohkalikai Falls (Meghalaya)", "img": "https://i.pinimg.com/736x/4e/d3/03/4ed3037141c216a0d3e8a04678241bb4.jpg" },
{ "id": 9, "name": "Nohsngithiang (Seven Sisters) Falls (Meghalaya)", "img": "https://i.pinimg.com/1200x/77/99/6d/77996d7eb8250443df68f8c74b52c3af.jpg" },
{ "id": 10, "name": "Chitrakote Falls (Chhattisgarh)", "img": "https://i.pinimg.com/1200x/27/1c/5a/271c5a18bf0b78971575e728cf0c9ca2.jpg" },
{ "id": 11, "name": "Iruppu Falls (Karnataka)", "img": "https://i.pinimg.com/1200x/1f/0c/92/1f0c9207bf88855c796987c777f87ac1.jpg" },
{ "id": 12, "name": "Mallalli Falls (Karnataka)", "img": "https://i.pinimg.com/736x/7b/80/a4/7b80a4b5f367b69028ce8be0780a61f7.jpg" },
{ "id": 13, "name": "Talakona Waterfalls (Andhra Pradesh)", "img": "https://i.pinimg.com/1200x/1c/13/98/1c1398d785d2259312bec1720bb01179.jpg" },
{ "id": 14, "name": "Soochipara Falls (Kerala)", "img": "https://i.pinimg.com/736x/6d/32/e4/6d32e42a2dd3fc7133a03ab2c88999b6.jpg" },
{ "id": 15, "name": "Katarniaghat Falls (Uttar Pradesh)", "img": "https://travelothon.com/wp-content/uploads/2023/10/Rajdari-Waterfall-500x266.jpg" },
{ "id": 16, "name": "Khandadhar Falls (Odisha)", "img": "https://i.pinimg.com/1200x/aa/e4/b2/aae4b2625faaf8ce12f98b206cb363b3.jpg" },
{ "id": 17, "name": "Hebbe Falls (Karnataka)", "img": "https://i.pinimg.com/1200x/9a/06/a6/9a06a6a8ba4440d07d0b823cc0dcc0d2.jpg" },
{ "id": 18, "name": "Barehipani Falls (Odisha)", "img": "https://i.pinimg.com/1200x/3f/48/01/3f4801529c821a6c412b11b11a5a8e8f.jpg" },
{ "id": 19, "name": "Pykara Falls (Tamil Nadu)", "img": "https://i.pinimg.com/1200x/9a/6e/56/9a6e567dcc1199c92c39d157a52984c6.jpg" },
{ "id": 20, "name": "Courtallam Falls (Tamil Nadu)", "img": "https://i.pinimg.com/1200x/69/15/0b/69150be7e47c1d7327d246b6ba53aeb0.jpg" }
  ],

  "Lakes" : [
    { "id": 1, "name": "Dal Lake (Jammu & Kashmir)", "img": "https://i.pinimg.com/736x/01/aa/ae/01aaaeb9a45a746721a43878b7cb5550.jpg" },
{ "id": 2, "name": "Vembanad Lake (Kerala)", "img": "https://i.pinimg.com/736x/d0/57/56/d05756a2275f21a533bdb32a2d7e1197.jpg" },
{ "id": 3, "name": "Chilika Lake (Odisha)", "img": "https://i.pinimg.com/736x/15/a4/06/15a40677de246923758dea7ee562ec11.jpg" },
{ "id": 4, "name": "Pangong Lake (Ladakh)", "img": "https://i.pinimg.com/1200x/1b/17/50/1b175061405598193c4fb29836d0b749.jpg" },
{ "id": 5, "name": "Naini Lake (Uttarakhand)", "img": "https://i.pinimg.com/1200x/e0/e0/6a/e0e06a49acac157840b8408885f18423.jpg" },
{ "id": 6, "name": "Loktak Lake (Manipur)", "img": "https://i.pinimg.com/736x/9a/7e/5f/9a7e5f87158cafcbf76298427b88a87d.jpg" },
{ "id": 7, "name": "Sambhar Salt Lake (Rajasthan)", "img": "https://i.pinimg.com/1200x/24/cf/d2/24cfd29b82e22455fb8ea2d110b1b8a2.jpg" },
{ "id": 8, "name": "Tsongmo Lake (Sikkim)", "img": "https://i.pinimg.com/736x/51/94/6d/51946dbdccc1abac7b65a6c52f8f7ea3.jpg" },
{ "id": 9, "name": "Bhimtal Lake (Uttarakhand)", "img": "https://i.pinimg.com/1200x/47/d8/ec/47d8ec1524c7be1ece6a92426bd3a8e0.jpg" },
{ "id": 10, "name": "Kodaikanal Lake (Tamil Nadu)", "img": "https://i.pinimg.com/1200x/3a/55/0e/3a550e56963310256b8340b3ccf22b50.jpg" },
{ "id": 11, "name": "Wular Lake (Jammu & Kashmir)", "img": "https://i.pinimg.com/1200x/60/27/ab/6027ab5c97d4e8e1b5f0e0bc818243f7.jpg" },
{ "id": 12, "name": "Pichola Lake (Rajasthan)", "img": "https://i.pinimg.com/1200x/50/ee/80/50ee80f216a1e6fa989b7d67215912b1.jpg" },
{ "id": 13, "name": "Hussain Sagar Lake (Telangana)", "img": "https://i.pinimg.com/736x/84/97/7c/84977ca0d982a829d9e72ff116313586.jpg" },
{ "id": 14, "name": "Pushkar Lake (Rajasthan)", "img": "https://i.pinimg.com/1200x/64/b6/15/64b615c9ee7e7b3f7b32e0ba7a5aa827.jpg" },
{ "id": 15, "name": "Shivaji Sagar Lake (Maharashtra)", "img": "https://live.staticflickr.com/7201/6890084347_a6a6f565a5_b.jpg" },
{ "id": 16, "name": "Upper Lake (Madhya Pradesh)", "img": "https://i.pinimg.com/736x/b1/0b/94/b10b94a0e540d98973e5c43d170ca89c.jpg" },
{ "id": 17, "name": "Sattal Lake (Uttarakhand)", "img": "https://i.pinimg.com/736x/e9/d1/78/e9d17822f5434e90720f09e7fabc997c.jpg" },
{ "id": 18, "name": "Nakki Lake (Rajasthan)", "img": "https://i.pinimg.com/736x/02/5b/6a/025b6a3ec567f7db5cffbff9922da1f1.jpg" },
{ "id": 19, "name": "Chandratal Lake (Himachal Pradesh)", "img": "https://i.pinimg.com/736x/cc/33/3d/cc333ddc4ef8be877a491189cb42793b.jpg" },
{ "id": 20, "name": "Ashtamudi Lake (Kerala)", "img": "https://i.pinimg.com/736x/1e/8a/a3/1e8aa317e396520df9a616455a8bec14.jpg" }

  ],

  "Caves" : [
    { "id": 1, "name": "Ajanta Caves (Maharashtra)", "img": "https://i.pinimg.com/736x/20/e9/e5/20e9e5115a8ed1fed84542f4923d393e.jpg" },
{ "id": 2, "name": "Ellora Caves (Maharashtra)", "img": "https://i.pinimg.com/1200x/c1/59/bd/c159bd08cfa3760e3f5050973e4bd567.jpg" },
{ "id": 3, "name": "Elephanta Caves (Maharashtra)", "img": "https://i.pinimg.com/1200x/b3/ac/95/b3ac957b1ffe6b4925243ca79cae58d6.jpg" },
{ "id": 4, "name": "Badami Caves (Karnataka)", "img": "https://i.pinimg.com/736x/e5/71/e5/e571e51c10c1d1d982ec68206d837932.jpg" },
{ "id": 5, "name": "Belum Caves (Andhra Pradesh)", "img": "https://i.pinimg.com/1200x/65/e1/73/65e173d18948db024785f0035964aa09.jpg" },
{ "id": 6, "name": "Borra Caves (Andhra Pradesh)", "img": "https://i.pinimg.com/1200x/c8/11/67/c811675afb4fc6bb61a78131bc2c62c5.jpg" },
{ "id": 7, "name": "Kanheri Caves (Maharashtra)", "img": "https://i.pinimg.com/736x/63/4f/ae/634fae78b606fe4b6c092e617cd3a10c.jpg" },
{ "id": 8, "name": "Amarnath Cave (Jammu & Kashmir)", "img": "https://i.pinimg.com/736x/6c/5a/de/6c5adefe98ece43b5ba6797a043ecf70.jpg" },
{ "id": 9, "name": "Tabo Caves (Himachal Pradesh)", "img": "https://i.pinimg.com/1200x/d0/dd/7a/d0dd7a0e64fac3f477ff14ab90c52f94.jpg" },
{ "id": 10, "name": "Undavalli Caves (Andhra Pradesh)", "img": "https://i.pinimg.com/1200x/2c/22/ca/2c22ca371295e26cf22963137ce6be5d.jpg" },
{ "id": 11, "name": "Pandavleni Caves (Maharashtra)", "img": "https://i.pinimg.com/1200x/65/6f/0f/656f0f2908a3edc22fc7c4af686e4d38.jpg" },
{ "id": 12, "name": "Udayagiri Caves (Odisha)", "img": "https://i.pinimg.com/736x/bb/05/9a/bb059a020e62eae2058eb8bdf8471bda.jpg" },
{ "id": 13, "name": "Bhimbedka Rock Shelters (Madhya Pradesh)", "img": "https://i.pinimg.com/1200x/0c/a7/e9/0ca7e9fa734bce99676dd90dad941451.jpg" },
{ "id": 14, "name": "Khandagiri Caves (Odisha)", "img": "https://i.pinimg.com/1200x/64/7d/c5/647dc55f91bbe2a6f99509c44695d4da.jpg" },
{ "id": 15, "name": "Mawsmai Cave (Meghalaya)", "img": "https://i.pinimg.com/1200x/94/e7/f0/94e7f0ae0b5d7745679632938cac56e0.jpg" },
{ "id": 16, "name": "Siju Cave (Meghalaya)", "img": "https://i.pinimg.com/1200x/8f/1e/02/8f1e0209976c302db8c6bd9dbe54ce61.jpg" },
{ "id": 17, "name": "Edakkal Caves (Kerala)", "img": "https://i.pinimg.com/736x/96/8b/5e/968b5ebb951da22bde544887fa4c4018.jpg" },
{ "id": 18, "name": "Krem Liat Prah Cave (Meghalaya)", "img": "https://i.pinimg.com/736x/4e/a6/72/4ea672eb2b3210ad651f616ac1001e2d.jpg" },
{ "id": 19, "name": "Patal Bhuvaneshwar Cave (Uttarakhand)", "img": "https://i.pinimg.com/736x/4b/51/ec/4b51ec7cbf7c927ff2ae18bf3fb16faa.jpg" },
{ "id": 20, "name": "Kotumsar Cave (Chhattisgarh)", "img": "https://th.bing.com/th/id/R.03d07f3d2d527b738f346aa069211109?rik=P7dba05SQsRLaA&riu=http%3a%2f%2fbastariya.com%2fwp-content%2fuploads%2f2017%2f09%2fkutmsawr-cave.jpg&ehk=%2f15yHgRKzkUsTVopgjbTR%2f2oHJpycSpLH9Z%2bpWSbRmM%3d&risl=&pid=ImgRaw&r=0" }

  ],

  "Desert Tours" : [
    { "id": 1, "name": "Thar Desert Safari – Jaisalmer (Rajasthan)", "img": "https://i.pinimg.com/1200x/6b/fc/64/6bfc64a500e9ac50581ec4d5d5dd0b24.jpg" },
{ "id": 2, "name": "Camel Safari – Bikaner (Rajasthan)", "img": "https://i.pinimg.com/736x/94/2e/04/942e04af751dbe81470dfea0762c3bca.jpg" },
{ "id": 3, "name": "Desert Camping – Sam Sand Dunes (Rajasthan)", "img": "https://i.pinimg.com/736x/4c/20/ed/4c20edfbcbc3a6dabb61958be3d2d827.jpg" },
{ "id": 4, "name": "Dune Bashing – Jodhpur (Rajasthan)", "img": "https://i.pinimg.com/736x/f7/5f/75/f75f753baa711458bbfcf13c3a101761.jpg" },
{ "id": 5, "name": "White Desert – Great Rann of Kutch (Gujarat)", "img": "https://i.pinimg.com/736x/e9/d3/a9/e9d3a94780ac12463e0b71479ebbaa05.jpg" },
{ "id": 6, "name": "Black Desert – Little Rann of Kutch (Gujarat)", "img": "https://www.clubmahindra.com/blog/images/Best-Time-to-Visit-Little-Rann-of-Kutch-resized.jpg" },
{ "id": 7, "name": "Desert Jeep Safari – Barmer (Rajasthan)", "img": "https://i.pinimg.com/1200x/6b/fc/64/6bfc64a500e9ac50581ec4d5d5dd0b24.jpg" },
{ "id": 8, "name": "Sand Dune Walk – Khuri Village (Rajasthan)", "img": "https://i.pinimg.com/736x/0e/7f/87/0e7f87f84834db72db78d0ba074bc300.jpg" },
{ "id": 9, "name": "Moonland Desert – Lamayuru (Ladakh)", "img": "https://i.pinimg.com/1200x/bc/f2/42/bcf242117ccbe527fd97e2f5c1ad8895.jpg" },
{ "id": 10, "name": "Cold Desert – Hunder, Nubra Valley (Ladakh)", "img": "https://i.pinimg.com/736x/76/c0/77/76c077b144a3365e89d6a52c85e21bd8.jpg" },
{ "id": 11, "name": "Spiti Cold Desert Safari (Himachal Pradesh)", "img": "https://i.pinimg.com/736x/e6/34/52/e63452ba01dee1ab2c3b4a014db1b7ac.jpg" },
{ "id": 12, "name": "Mohan Singh Desert Park – Jaisalmer (Rajasthan)", "img": "https://i.pinimg.com/736x/b0/c5/b3/b0c5b3065d63e7c2d0113e2ae0055e88.jpg" },
{ "id": 13, "name": "Dholavira Desert Drive (Gujarat)", "img": "https://th.bing.com/th/id/R.43f4a6060765e7112d17bd0a84140ea1?rik=j5KY%2bSgnvydr6Q&riu=http%3a%2f%2fi.huffpost.com%2fgen%2f1657082%2fimages%2fo-HARAPPA-facebook.jpg&ehk=mcSKPiP8g5Acvy6q499zwwkUqg1o0m%2fTh9nOoyrRkeQ%3d&risl=&pid=ImgRaw&r=0" },
{ "id": 14, "name": "Osian Desert Safari (Rajasthan)", "img": "https://i.pinimg.com/1200x/c7/4b/27/c74b2722f653436b7bb3d8b3be5b0a92.jpg" },
{ "id": 15, "name": "Sam Dunes Night Camping (Rajasthan)", "img": "https://i.pinimg.com/1200x/13/06/56/1306563ea125ca185738fedceab769f4.jpg" }

  ],

  "City Tours" : [
 
  { "id": 1, "name": "Delhi City Tour (Delhi)", "img": "https://i.pinimg.com/736x/0f/f1/1b/0ff11b8c82bc82b1a0b64d27a2aa099f.jpg" },
  { "id": 2, "name": "Mumbai City Tour (Maharashtra)", "img": "https://i.pinimg.com/736x/2d/c1/66/2dc1661722c7cb591bd6dca055680635.jpg" },
  { "id": 3, "name": "Bengaluru City Tour (Karnataka)", "img": "https://i.pinimg.com/736x/21/09/8e/21098edc530c1b5e06661ee34a4f9d23.jpg" },
  { "id": 4, "name": "Chennai City Tour (Tamil Nadu)", "img": "https://i.pinimg.com/1200x/eb/f7/c9/ebf7c903e486a3cb52f8937bbb338f05.jpg" },
  { "id": 5, "name": "Kolkata City Tour (West Bengal)", "img": "https://i.pinimg.com/1200x/0b/05/80/0b0580ed904de778253b3e40b03332bf.jpg" },
  { "id": 6, "name": "Hyderabad City Tour (Telangana)", "img": "https://i.pinimg.com/736x/fc/44/05/fc44054a77f4b2e36346e28751bb4d6f.jpg" },
  { "id": 7, "name": "Jaipur City Tour (Rajasthan)", "img": "https://i.pinimg.com/736x/dd/63/e3/dd63e30807aecb1d2c8abadefb488025.jpg" },
  { "id": 8, "name": "Ahmedabad City Tour (Gujarat)", "img": "https://i.pinimg.com/736x/3c/e4/96/3ce496229e6839923bf0b6bbad6fa9a3.jpg" },
  { "id": 9, "name": "Pune City Tour (Maharashtra)", "img": "https://i.pinimg.com/1200x/30/12/46/30124665e7f3a1bdf64b7b18fdb0fc90.jpg" },
  { "id": 10, "name": "Lucknow City Tour (Uttar Pradesh)", "img": "https://i.pinimg.com/1200x/87/af/38/87af38c2a49dcd554793d3d8ec856717.jpg" },
  { "id": 11, "name": "Surat City Tour (Gujarat)", "img": "https://tse3.mm.bing.net/th/id/OIP.ugyE8D-Nlqz4ZkjXKwLjQgHaFj?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3" },
  { "id": 12, "name": "Kanpur City Tour (Uttar Pradesh)", "img": "https://i.pinimg.com/736x/60/67/07/60670744a0aa0a65170b3fbcc9ff7f00.jpg" },
  { "id": 13, "name": "Nagpur City Tour (Maharashtra)", "img": "https://i.pinimg.com/736x/e7/75/85/e77585852c459d80b4883f409a1361a5.jpg" },
  { "id": 14, "name": "Visakhapatnam City Tour (Andhra Pradesh)", "img": "https://i.pinimg.com/1200x/fa/5a/98/fa5a983787ca3da08a6272548f65c9f4.jpg" },
  { "id": 15, "name": "Bhopal City Tour (Madhya Pradesh)", "img": "https://i.pinimg.com/736x/0d/b4/d7/0db4d7893f73d37c8c9fd23254b1e1ba.jpg" },
  { "id": 16, "name": "Patna City Tour (Bihar)", "img": "https://i.pinimg.com/736x/de/04/d6/de04d6deb3adcb0812db0be0f86538db.jpg" },
  { "id": 17, "name": "Vadodara City Tour (Gujarat)", "img": "https://i.pinimg.com/736x/2b/bc/76/2bbc76b7024a539ee6b810768b1a3c44.jpg" },
  { "id": 18, "name": "Coimbatore City Tour (Tamil Nadu)", "img": "https://i.pinimg.com/1200x/e8/14/5b/e8145b7d167df2df3810229f73eef89d.jpg" },
  { "id": 19, "name": "Indore City Tour (Madhya Pradesh)", "img": "https://i.pinimg.com/1200x/7f/d3/65/7fd365e73d7d973e9b0e714a17eee1fc.jpg" },
  { "id": 20, "name": "Thiruvananthapuram City Tour (Kerala)", "img": "https://i.pinimg.com/736x/0a/0a/52/0a0a52bd2ad45a31fc298dd83787f0f8.jpg" }
  ],


};

function CategoryDetails() {
  const { categoryName } = useParams();
  const items = categoryData[categoryName] || [];

  return (
    <section className="category-details">
      <h2>{categoryName}</h2>

      <div className="details-grid">
        {items.map((item) => (
          <div key={item.id} className="details-card">
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CategoryDetails;