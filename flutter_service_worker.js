'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "407dbde95f7807e3b973d418ffd0da24",
"index.html": "423f825950008be5d50a42a6707ee2c2",
"/": "423f825950008be5d50a42a6707ee2c2",
"CNAME": "a5834ff61e1ee0c8721a259b2a728d1a",
"main.dart.js": "1ddf257965010aa63f6047d663f01435",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"README.md": "b4548be9f4730d3f7118efd866821eed",
"favicon.png": "c7c3d5c97140a98e5cacbe6ca00356df",
"main-icon.png": "c1e436b1c29204d242c34a8417f01c11",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "5cf83f9e3f5d8a084cfa8c54e111da4a",
".git/ORIG_HEAD": "b4b10bad9c6f981b4b050a934c8c50ad",
".git/config": "ec46c98bca626019a3775790effd2f25",
".git/objects/95/6a66c59d9e39625b02ed64168c674d55f95317": "a8581bae5cf0e6f233ae059393a51688",
".git/objects/32/6c924962bce48b82f9f429cad71d886c651110": "07eac179fe196ccd48b85b99572ca6dd",
".git/objects/3c/cc790ef686fe8dfff8db6339f9f98828a93baa": "8c6b409598ffde52e4e8ab5ff1e5040c",
".git/objects/58/97bb08940ab93b100dba980c1dc4deccae261f": "eab4881382c184ae6a4fb74ba96eea9a",
".git/objects/34/27dfb0c9c19d7b38b09819fd59aa832e03bb92": "98b3bc7e43e5067f2a405cd13a04e912",
".git/objects/9d/be703fdf623982cceffc3045f468cd29a01098": "d74c9df0c115d83d9fcc57377957ce3d",
".git/objects/d1/617728af173bd736768134ed3e20b26960a223": "1ee94d39c15ce0f7de8f63d3498d9c55",
".git/objects/eb/9788ccda270bfc8a33bca98b223bcfc769ae1a": "f678099121ff0ac9fef18ce7246cf242",
".git/objects/f2/508d58072d2eece9c02af5288150385fdd41df": "91bd1182496ee39145893da5371e6d21",
".git/objects/f2/4604b9727c0829a70595e15830a23195f890de": "050e4def9ac64edd629657e53d5fc208",
".git/objects/e3/5539ab8dc0158f687d00878acbfc47d90ab560": "e1d5911b38e9d3a1a97ef6ebce71c72b",
".git/objects/pack/pack-4acc078300439e2e9beb2044eedd64cc689ba329.pack": "105864b182fa85d89bd8d2181be8544c",
".git/objects/pack/pack-4acc078300439e2e9beb2044eedd64cc689ba329.idx": "7c92423485b6062732cdc0a966646da2",
".git/objects/73/e8d0970b22af36d512ad1a8902376ad14ec4a7": "5cc6f08be2403818b39f70fc87c4d9e5",
".git/objects/7b/39399b96d8f5fb6b1bce84e678d2a89e78c425": "32eb7618ead77e4046569507adf7bbb4",
".git/objects/43/02436df22c480d58731fb48cc8ae570dd12a5a": "cafecfcfe99c20f0554a5d86f0033d83",
".git/objects/5d/0682447ec2dbfad4ed972e901fbd87ed771fda": "ff2be71a7768fbba4afddc6e8f3f4821",
".git/objects/06/786ecc3dccb3ef1b2547d6a8d7c2efab303c19": "bed9c87f9f3c41018a2ade644c17c64d",
".git/objects/0a/21e69c60d282107197de16e9544fc90e707951": "090b2eb86054264760a879b816e92774",
".git/objects/dc/0d403f10cfde94f4ac5c85f984ed1fd6f2e00a": "1099ab0d4b5c1c3aae92ec33d058d345",
".git/objects/b7/1b9ddd177c96b0ed5d74a934e879853ca64057": "83c8e4fc87d5e5ac73350c32c8bce8c4",
".git/objects/b9/338de6b033f710fec800cc1aea4f9519f2b56d": "95ddd94818eb8bc99de3e0d8eb36d022",
".git/objects/cb/e64d6ae2b98bdb9922ff76d509d0782e196394": "2e6385c70964de0e89c54db381b52d07",
".git/objects/e0/e799d1fca06f26d478b6375e0c48c7cb82fdda": "99001c071235c7f9375a41cf4b815f1f",
".git/objects/4f/24dc8bb58a292d3e5ca494f40749f4c64ed391": "a4aa922298a555a25dbdc986db7a852e",
".git/objects/8d/edbb5ac7a46a43af6e2099926e3ddafbace3c8": "886f616ea149683918e08d2d253d8c59",
".git/objects/15/0b5c525a5162659373e7e65527d2c1f7b104bb": "539cc18d21c2178abfcbbcf41f390a7c",
".git/objects/15/7d45befc2673450b645c6c46d8b4f7330dd93f": "9483820e46d61a18803d6e0f4e2e2a78",
".git/objects/12/ea766d364a7292751c1780132f2f41023242d1": "a2ca315f06e9bb01ac904891897d3dd8",
".git/objects/8c/3240a55b0c363a1488d74ba2a14b03d21c7975": "38e3e9899fd5bd41fdcd19b263ef4ce6",
".git/objects/1d/fdf529a13b871659f5d056f619e407787913b3": "2be8a7fd5faa68f84d84194a6bc1aa4d",
".git/objects/1d/cbb77e5b84f8aeab1201425a920f6f2e11ac09": "09da72e5fee3fb57c1569fee1e5b2192",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/logs/HEAD": "14d79e507af2330ceaf01fa33a9a0873",
".git/logs/refs/heads/main": "90805dcf849453217f3e00fe97e50feb",
".git/logs/refs/remotes/origin/HEAD": "91b7b6a37eff7d81d5a0d9b378afb6d3",
".git/logs/refs/remotes/origin/main": "1dc1bcb6b4400b2a80c59921e39449b1",
".git/refs/heads/main": "bc16fa88721edd0e4a464577d3a48b96",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "bc16fa88721edd0e4a464577d3a48b96",
".git/index": "c6889f1af24b0043c6f82ed3105d0fba",
".git/packed-refs": "b176e77724f8a3ff11aade8ac160794b",
".git/COMMIT_EDITMSG": "0f0a2cddcfec7ad089725824b8b76546",
".git/FETCH_HEAD": "3e7990c391708a6391c4bbf97e1a1487",
".git/sourcetreeconfig": "1a818a3dd018406a8834894de3e258f3",
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
