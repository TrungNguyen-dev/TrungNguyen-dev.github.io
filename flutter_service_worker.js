'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "407dbde95f7807e3b973d418ffd0da24",
"index.html": "aaec44f017b5e5ee30249cd5bb55550e",
"/": "aaec44f017b5e5ee30249cd5bb55550e",
"main.dart.js": "1dcf68c936a607842c6d69e824dbbaf6",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"README.md": "b4548be9f4730d3f7118efd866821eed",
"favicon.png": "c7c3d5c97140a98e5cacbe6ca00356df",
"main-icon.png": "c1e436b1c29204d242c34a8417f01c11",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "5cf83f9e3f5d8a084cfa8c54e111da4a",
".git/ORIG_HEAD": "ce09728ea34f951a2692366c0d6e79d7",
".git/config": "ec46c98bca626019a3775790effd2f25",
".git/objects/0c/b5c7d69ec1aa93d9c171159667270de36b6295": "f9b9b2b93b2991a6d1bbef314120eb2c",
".git/objects/9b/097b18622c62669e890ab0a426ea2f31ed3eb3": "031e544ca3989f624008cf96901b02cd",
".git/objects/32/c14d54032058e05632675b82f374afff634364": "98da3a9512d0a79a60ba71cf6e18040e",
".git/objects/3c/31ff081e4334c844ec36679a211481ca6d5c0a": "9444ece333ff339178f34b8028176a2f",
".git/objects/9c/af185bab3b182c41524142b4288764ba5cd1f3": "952968369c8363d56fa73ad8b41fdeac",
".git/objects/e5/1070f3740f543eee5eb0b3637a31e5e2ff81ea": "3bd4bbbea5c823f146f4e8ebb4f9d689",
".git/objects/f4/b5e5a58e794a1805fb962d7e92b6604d9e1f3f": "ffc2a2a9aca53c94a7532a0c5089a757",
".git/objects/eb/e7b00f170e564b4e957df27d438ffe077fefa1": "0148bfd05b21aa03bd073dbffeeb2e6c",
".git/objects/cf/42f25ae0f0b297c815e524e5d5d9deb1dc5e91": "630b4259ed7bafae73df69d49c334899",
".git/objects/fe/5bf7423c575a63687fcc34f9c0cb4009824215": "44436b539222f3dcc030f99ff2c1529e",
".git/objects/fb/a63b46c02163671337cdb9164c07f9832f8a25": "897147c3971e704912950f2c6c8493ec",
".git/objects/c1/d7efc03015e5a467a3d2817deda755ff9aba43": "08f3f3a61b01eae02305119705d69e08",
".git/objects/pack/pack-c41e7f3a3eb9409f9163c87acb24fc7e2acd565b.idx": "d7f20d1bbd326548e514b192e441b808",
".git/objects/pack/pack-c41e7f3a3eb9409f9163c87acb24fc7e2acd565b.pack": "ca580dee1511835d541c9dab32f3062f",
".git/objects/7e/79d7b03c93baf00dc8f0412d24928c0c518505": "4f71c8e39d60325a6a6f1c539347708c",
".git/objects/19/6817c3c68a9336564d35a440ec24e543a4fbc6": "49d4b11883f9531cb0c8253f7e4f0ba1",
".git/objects/43/b45c6785b304eb157900c14cb361639116422e": "c54c54ff58be54672e5d9023c9d2d3f8",
".git/objects/31/d648733931cd7cab6fafcfb61d2995c4e093ad": "3a7ddd0d3e147c0079e52a5863cf4476",
".git/objects/01/6b13bcf477c2cae71f73046b767c6416eace2f": "bf22021a40ed31d7274bb715e27428bb",
".git/objects/b0/247723e4f8a7e881b19394bd3b5711120813c4": "a6c2655d094e76a9a88c92200aab8ffb",
".git/objects/f9/8c67f5e2fbc0df8330c15fdce14cb81bf61c8e": "8609fd9af982233848ad66af8b9a823c",
".git/objects/fa/c8ea672da709fc87a6eb81578f5d0c3921161d": "e2947385b09aaba3be8a3a3f9aed4add",
".git/objects/77/994057bc051b0eec4794baffb364f7f05bf4f8": "483155db50bcd8ad2d40a4cf33721969",
".git/objects/4f/8796594294be1395033655f15bcfb8c762aa32": "6fdae620962fb4643cb4c1667415960c",
".git/objects/8c/61dacfcb56cf945deb822dbbd31d7c206db610": "fdeac18cf215dee630c0951c5f8578c8",
".git/objects/1d/0abcb15b9659207c1afba3c69cafd6a9493188": "f56b6fbdf470a033a8b6e1ed69cb6d4b",
".git/objects/22/22ebd04f99bc3617616670fe707e924761310b": "36f7f2c576a8f05cec52f5ce62c7abd0",
".git/objects/22/0fda4967a50b9e8f16d3586f207102579e0809": "785a613d61bc5616dcf36bfbab8a9e66",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/logs/HEAD": "25397d9dfee2aed233ccde35aa1321bc",
".git/logs/refs/heads/main": "ff34cd12b86843957b6d14a77ff58adc",
".git/logs/refs/remotes/origin/HEAD": "ad46941b027d94f358a4248f0b5cea1b",
".git/logs/refs/remotes/origin/main": "60ce6daeafe565e3f941bebe176453ed",
".git/refs/heads/main": "ce09728ea34f951a2692366c0d6e79d7",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "ce09728ea34f951a2692366c0d6e79d7",
".git/index": "681535bb14b3fea58dd7e3624078d0f2",
".git/packed-refs": "a6563a99adc62ea270cbe628875d944c",
".git/COMMIT_EDITMSG": "0f0a2cddcfec7ad089725824b8b76546",
".git/FETCH_HEAD": "5159068b35a626866e237ac1ffacb0be",
".git/sourcetreeconfig": "1a4f9df76a2e48a2bd65f94b7a49420a",
"assets/AssetManifest.json": "91093a1fd9af7933ab1df8d104875572",
"assets/NOTICES": "a2d245e10af9f020ded4ee41d3e77481",
"assets/FontManifest.json": "69e2464094de5750789aa1e06c347c4a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.smcbin": "dd4250637b2e5302040e46b41b582abd",
"assets/fonts/MaterialIcons-Regular.otf": "44e3be21bc11cac2ec58b76155a2dbb6",
"assets/assets/json/opener-loading.json": "62dddaecbd819bce0e2d594a0b613c0f",
"assets/assets/icons/ic_profile.svg": "93640292f6b8c06c9a4915b4b7e7aa6b",
"assets/assets/icons/ic_delete.svg": "855901422bcefed3f5bb7011e54934b9",
"assets/assets/icons/ic_success.svg": "7ffbd42d375f15cf4d89b948e6a59ce9",
"assets/assets/icons/info_circle_1.svg": "350549b91afc7aa379caf27469f25542",
"assets/assets/icons/ic_failure.svg": "fd709cf9d61a34bd6fd7da1280f2e016",
"assets/assets/icons/ic_transaction.svg": "ca29c4ae205736854e09de875f9b9c2d",
"assets/assets/icons/ic_deleted_on_error.svg": "04b7d4b70a23e0eb6f12f9bfe1c30310",
"assets/assets/icons/info_circle.svg": "755a96a6ecc458c2fa0cb63ddda0f527",
"assets/assets/icons/ic_withdraw.svg": "68a89bd667559c647a2ed865700579f7",
"assets/assets/icons/info_circle_red.svg": "05ae973751a3393842af912fe3383b97",
"assets/assets/icons/ic_search.svg": "e59d48d43480e3f2dd166ba631362e95",
"assets/assets/icons/ic_logout.svg": "76ac7cb3d277571f8a1cc032adaf456f",
"assets/assets/fonts/Nunito-Medium.ttf": "b500fbae7078c1679bf7c67e59575953",
"assets/assets/fonts/Nunito-Regular.ttf": "2cd487d187b602d1fa522f8af05f1fbd",
"assets/assets/fonts/Nunito-SemiBold.ttf": "1daa68f825ef4e54773c787b70678647",
"assets/assets/fonts/Nunito-Bold.ttf": "9772667f53d0a85e7b09b879821ef01b",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
