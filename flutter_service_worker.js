'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "407dbde95f7807e3b973d418ffd0da24",
"index.html": "b72eb380c0fb2ae57d9d184e70736c16",
"/": "b72eb380c0fb2ae57d9d184e70736c16",
"main.dart.js": "b295172876b90664e77f145ae62721b2",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"README.md": "b4548be9f4730d3f7118efd866821eed",
"favicon.png": "c7c3d5c97140a98e5cacbe6ca00356df",
"main-icon.png": "c1e436b1c29204d242c34a8417f01c11",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "5cf83f9e3f5d8a084cfa8c54e111da4a",
".git/ORIG_HEAD": "bb98474651387ca7984d62abd2629e33",
".git/config": "ec46c98bca626019a3775790effd2f25",
".git/objects/95/6a66c59d9e39625b02ed64168c674d55f95317": "a8581bae5cf0e6f233ae059393a51688",
".git/objects/32/307d0befceb2fde5be2532a76373dbae94b306": "3dffe906bbb627131d3cae53316735a6",
".git/objects/32/6c924962bce48b82f9f429cad71d886c651110": "07eac179fe196ccd48b85b99572ca6dd",
".git/objects/3c/cc790ef686fe8dfff8db6339f9f98828a93baa": "8c6b409598ffde52e4e8ab5ff1e5040c",
".git/objects/58/97bb08940ab93b100dba980c1dc4deccae261f": "eab4881382c184ae6a4fb74ba96eea9a",
".git/objects/34/27dfb0c9c19d7b38b09819fd59aa832e03bb92": "98b3bc7e43e5067f2a405cd13a04e912",
".git/objects/9d/be703fdf623982cceffc3045f468cd29a01098": "d74c9df0c115d83d9fcc57377957ce3d",
".git/objects/b2/1c7652634bd8f5d7cdc2b86347ae6d000a9ff0": "1a7a98ee63c7d7146f58a5f7a8ded4b4",
".git/objects/b2/f5e822d8a69f55f5d025cc1e3a08fb00859c45": "013545a2240d0241126fd03e54ebc46f",
".git/objects/d0/c77205def725df04d0aa3b788331e152880531": "ebe3198ea5af579c6f18983c40c1fe14",
".git/objects/d1/617728af173bd736768134ed3e20b26960a223": "1ee94d39c15ce0f7de8f63d3498d9c55",
".git/objects/d6/710148e691dda3cdb99bdc1bf2fbdd2d0f1254": "6ba68eda573b294941800a76821f979b",
".git/objects/bc/3bf11ae55ab41008561fc4e2dab8c1d0d3851b": "363f8c0527963769b3ed140d13b15303",
".git/objects/f4/2849737ad30d710b3719622bdf47b75fe296d3": "e484d98b0e70843189760b9e4d9bd871",
".git/objects/eb/9788ccda270bfc8a33bca98b223bcfc769ae1a": "f678099121ff0ac9fef18ce7246cf242",
".git/objects/c0/e754429b938e96962f7bcaabe183372be50b40": "36effc8c08141c13b2b4e8da32ea38f6",
".git/objects/c0/9cc479612ad9be6323759e002c3830a8b01c1a": "8e55f15f27f1ff15fbb880b3dc679156",
".git/objects/f2/508d58072d2eece9c02af5288150385fdd41df": "91bd1182496ee39145893da5371e6d21",
".git/objects/f2/02350bbd121f1eae09d6a0822e54dfaa580e8c": "7fb184c62b9088940708f632175506c7",
".git/objects/f2/4604b9727c0829a70595e15830a23195f890de": "050e4def9ac64edd629657e53d5fc208",
".git/objects/e3/5539ab8dc0158f687d00878acbfc47d90ab560": "e1d5911b38e9d3a1a97ef6ebce71c72b",
".git/objects/cf/af7776cbcdae37dadfc42923d4d3b7e4f895a3": "62e722c4ddc91a731b7579f51c315d83",
".git/objects/cf/b322ecd78b70b1823be35ff36328c324cdf914": "2baab9df32762edd6f37db8218b85818",
".git/objects/ed/0976ebbd0318c4700ba5c4c0f33b9bc4cd3f1c": "ebdf6c599a823ddf28ad2035385b14a8",
".git/objects/4b/21f9fdfc7851fceb9cd7f0e2429db86e972e40": "3fc648a3c6b71479eb219569b7eb8e52",
".git/objects/pack/pack-4acc078300439e2e9beb2044eedd64cc689ba329.pack": "105864b182fa85d89bd8d2181be8544c",
".git/objects/pack/pack-4acc078300439e2e9beb2044eedd64cc689ba329.idx": "7c92423485b6062732cdc0a966646da2",
".git/objects/7d/5ec16509b410897a9a1ccdb04679cf6ba50f2d": "9302fde4766be94bace8d62669c6f4f0",
".git/objects/45/687233ab930ce3bf585d66c5aa0742271f1298": "2e1e623a2aaa42da27b351694556f21f",
".git/objects/73/e8d0970b22af36d512ad1a8902376ad14ec4a7": "5cc6f08be2403818b39f70fc87c4d9e5",
".git/objects/80/075f593252a01b870ce4407f526e33223db723": "1c79f8718d941b83a5215fb278b9f9a9",
".git/objects/28/3fc6979c3a8f33469c6fc23c8a3a8abea37b25": "e1f01ee48c280da39b1c295172ee4bfa",
".git/objects/7b/39399b96d8f5fb6b1bce84e678d2a89e78c425": "32eb7618ead77e4046569507adf7bbb4",
".git/objects/7b/83697eb6bd475469173ef64f89cae38acdb8a6": "2b22414af2019494d9f08261c901f505",
".git/objects/4c/dda523fd66c3beefd933c0d4b9ea5aa8163456": "8e2eb20d73b56499a79d2f7c756b8ca5",
".git/objects/86/c81b6f5e91bc1c8ac77368e20219daa9a044bc": "5a72a008e5e1e9e8a7f5aa0ef09829dc",
".git/objects/86/7e9bdffd240125aa42ef92a4f05b29b31ef0a8": "3a70e7b55f60c9b09cf78f870a6e018f",
".git/objects/2f/55a26a5e385155f487be48b0a4b30adbc255c4": "abe845c6b6fb6691dc0f2a7bc52b2e4a",
".git/objects/43/02436df22c480d58731fb48cc8ae570dd12a5a": "cafecfcfe99c20f0554a5d86f0033d83",
".git/objects/6b/9c9d0fd1a7bd2eb85245001da4f1d905f3c6bb": "b40f738bc46076be15546c9ff5f35d92",
".git/objects/38/f2dbde69ccb13df7d535b17f7da6fac494c500": "efefbc6dd6a8d9c7dd6c081cb13cf31a",
".git/objects/5d/0682447ec2dbfad4ed972e901fbd87ed771fda": "ff2be71a7768fbba4afddc6e8f3f4821",
".git/objects/91/8ee95caaf3405260bcb405ee161965ee81699e": "918e850c26f870d970daa63b186cb45c",
".git/objects/65/725ca49c68ddc6d7f251110dc5160f2f3b66f8": "175992e09e6ced37788556b85a2a1fc4",
".git/objects/98/9183384580fcb15ddc98af3b2ee4e6547f999d": "9af1f267a17fae54fb4513e1c2b03ee6",
".git/objects/5e/6804e3d6109843d49fcddbd6988bfc9e946395": "0da2f227cbcbb558d7edd1a55748cd7b",
".git/objects/06/786ecc3dccb3ef1b2547d6a8d7c2efab303c19": "bed9c87f9f3c41018a2ade644c17c64d",
".git/objects/97/6741344773830478ac9e57255287ce85041895": "41b2c5494e5b216c5952c500dc7a6085",
".git/objects/63/20e366472e10dfcec19d7fcdec1248ade48a21": "14e835062947a290f62fc971af8504d8",
".git/objects/0a/21e69c60d282107197de16e9544fc90e707951": "090b2eb86054264760a879b816e92774",
".git/objects/bf/5a100911cc4442dbb9238724fc7826aa9b06c8": "b59bc7c7ecfb0b0a66a5d56b7690bde6",
".git/objects/bf/b82c8d5ff4a574042c2835ec29f488af580459": "859e0b8631eee7a7ec9c06444fd2d072",
".git/objects/a0/6217e1ad1e931670e397553117e79c23022b20": "d3f71d4b6b0f297ce420035fe34f1f9d",
".git/objects/b8/40c5e7ff15b9ba1630cfad2929ad3cab639825": "64d66048fd92828456880ad845cd6dff",
".git/objects/dc/0d403f10cfde94f4ac5c85f984ed1fd6f2e00a": "1099ab0d4b5c1c3aae92ec33d058d345",
".git/objects/a9/7901ab3127de790faf70acc75962d8e758cb19": "7cd534d9cf47b767562ec66515cb7b58",
".git/objects/d5/f19aa2b11072d1ab8e1345fd5ede473eecef79": "be80fbb181a7376e142c34b4019420ea",
".git/objects/b7/1b9ddd177c96b0ed5d74a934e879853ca64057": "83c8e4fc87d5e5ac73350c32c8bce8c4",
".git/objects/b9/338de6b033f710fec800cc1aea4f9519f2b56d": "95ddd94818eb8bc99de3e0d8eb36d022",
".git/objects/f0/12a012ff59c1a103b541bd048536bf1a181faa": "83b37e6d4ae101fd023c99b092b56209",
".git/objects/fa/9d12e2ce80c47a72dfed03d0c94183a076a27d": "6f5525a3d12241da4925a6723739c0c4",
".git/objects/cb/e64d6ae2b98bdb9922ff76d509d0782e196394": "2e6385c70964de0e89c54db381b52d07",
".git/objects/e0/e799d1fca06f26d478b6375e0c48c7cb82fdda": "99001c071235c7f9375a41cf4b815f1f",
".git/objects/2c/a179161b3828a4c41ef0a5efe1310ebb3c9681": "feb1fb8ef5f4e7bac43cffeccfd1f9bc",
".git/objects/4f/24dc8bb58a292d3e5ca494f40749f4c64ed391": "a4aa922298a555a25dbdc986db7a852e",
".git/objects/8d/edbb5ac7a46a43af6e2099926e3ddafbace3c8": "886f616ea149683918e08d2d253d8c59",
".git/objects/15/0b5c525a5162659373e7e65527d2c1f7b104bb": "539cc18d21c2178abfcbbcf41f390a7c",
".git/objects/15/7d45befc2673450b645c6c46d8b4f7330dd93f": "9483820e46d61a18803d6e0f4e2e2a78",
".git/objects/12/ea766d364a7292751c1780132f2f41023242d1": "a2ca315f06e9bb01ac904891897d3dd8",
".git/objects/8c/47b191c5d132159886b1b20d923142a85b0d52": "d381e1a97502062644caf2e264730661",
".git/objects/8c/3240a55b0c363a1488d74ba2a14b03d21c7975": "38e3e9899fd5bd41fdcd19b263ef4ce6",
".git/objects/1d/fdf529a13b871659f5d056f619e407787913b3": "2be8a7fd5faa68f84d84194a6bc1aa4d",
".git/objects/1d/cbb77e5b84f8aeab1201425a920f6f2e11ac09": "09da72e5fee3fb57c1569fee1e5b2192",
".git/objects/7f/1b4d667658ed993f61ad10d3cd73d381c37f4f": "f52ee21e2560ede9a6aa8156b1134583",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/logs/HEAD": "f4711ab18d147b86a0aceb4d32b461a2",
".git/logs/refs/heads/main": "9b0b17b0ad25ca08bb1ad50795534f3e",
".git/logs/refs/remotes/origin/HEAD": "91b7b6a37eff7d81d5a0d9b378afb6d3",
".git/logs/refs/remotes/origin/main": "ce313677b30bdd070198f54d1f2ee36f",
".git/refs/heads/main": "2826c8c54a295136849aa121116cbca6",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "d7143cd5e63d57b326ba34b849700af9",
".git/index": "eeb7d1bd4d7e78a863be11ad46fa9012",
".git/packed-refs": "b176e77724f8a3ff11aade8ac160794b",
".git/COMMIT_EDITMSG": "0f0a2cddcfec7ad089725824b8b76546",
".git/FETCH_HEAD": "e156b4bf4ffad9a8b39dbda36964f63d",
".git/sourcetreeconfig": "efaa4c7d9b6a73594dc253a2c1716f36",
"assets/AssetManifest.json": "04c48c914253e744b829b5ca28524475",
"assets/NOTICES": "ab0bf6c325ad50276c6ee68be61d750a",
"assets/FontManifest.json": "69e2464094de5750789aa1e06c347c4a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.smcbin": "ee1cf057e0cca00df8593e2fb2b92633",
"assets/fonts/MaterialIcons-Regular.otf": "44e3be21bc11cac2ec58b76155a2dbb6",
"assets/assets/json/opener-loading.json": "62dddaecbd819bce0e2d594a0b613c0f",
"assets/assets/icons/ic_profile.svg": "93640292f6b8c06c9a4915b4b7e7aa6b",
"assets/assets/icons/ic_previous.svg": "369be0a4231373bdd76cfc4d8808f0fd",
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
"assets/assets/icons/ic_next.svg": "c098f1b33f5f795d3580a164e1b58044",
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
