'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "407dbde95f7807e3b973d418ffd0da24",
"index.html": "c0ca36a433431aed1b95f2283c4d36ca",
"/": "c0ca36a433431aed1b95f2283c4d36ca",
"CNAME": "5bd80b7cf5c6741a7caab7c9f9d8e1c6",
"main.dart.js": "dcf5ed3c336c1b8b778b4e0164030ba2",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"README.md": "b4548be9f4730d3f7118efd866821eed",
"favicon.png": "c7c3d5c97140a98e5cacbe6ca00356df",
"main-icon.png": "c1e436b1c29204d242c34a8417f01c11",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "5cf83f9e3f5d8a084cfa8c54e111da4a",
".git/config": "ec46c98bca626019a3775790effd2f25",
".git/objects/95/aef6555c95267e590fa3870efe21440cc3aef1": "e5c0f6e610f34bcb903d951da547ee4d",
".git/objects/0c/600ad1b0c8067212308fefbadbbb1e765be5c5": "870e4e91b21322fb7a7b973cddd3c267",
".git/objects/50/da32a7c278a2b4a487abed4a62273dcbfca140": "84c830555bf310ad30e895cdadc0d2c4",
".git/objects/57/7818a823e1f964b734c19c1c68f5dbf57d2523": "3ffb4e5345819a95ba4f926dd3afa25a",
".git/objects/57/e02e544441d12bdeadf1c303f7acfa1ea9ee44": "6ef08969da622f365c1ca63b02dc933f",
".git/objects/3b/dcd5eeb88fa03c9ecbf5826ff6fe99453ebe9c": "fea76808728366f1eb6a7bb530cb4549",
".git/objects/9c/7ddb92fd4e2402e6e9185a92ae32229966dc99": "c41b3525903eb84c9c4df39bc3e04b8a",
".git/objects/ac/71f27f1b72f5a8a04cbdee6e40bacf139f743e": "f340f2d3a110a0a7c3fdd2e23e6dd585",
".git/objects/ac/a14dcddd61853aee555cbf38173b85d87245f9": "f871335f0cc7e7153cf051a6fbfc5592",
".git/objects/ae/0604a39d57b708613acc651070db59353d6eda": "da1606451c2a533867d0aeb5f0580cdd",
".git/objects/e2/bdfe09277c1d7b7bbb47a49aeddbc2ad65a93e": "a5c5716540ffaa786de4a4a613642200",
".git/objects/c7/1e88214e300eaaa72c480424037c9a166688de": "465efa5ad480015d01188df7bc7df551",
".git/objects/c9/fd44257aa7da44e32e6e38004b810cfe30eb16": "c59fdb8dc01a639f5e7ef0618389d15c",
".git/objects/cf/3cc7df9ffdf98ee4aa5046c96ff2f093325327": "a8af15a88daf3da93e92e0fe8b74cc80",
".git/objects/ed/bf6518cd54db1e6de9727086e716bec99f86e7": "1c52fa19e07736c7284264f7bf05fda7",
".git/objects/4e/acbf7bbc302089c927fc05c507183494807b9f": "7b7c4d17cba4ec5047504adb43ccdaad",
".git/objects/pack/pack-55d56bc5956267dd53821a70ed086bf130e986b0.idx": "9f7e7c7d31c4f9c9c76000a14523fe0f",
".git/objects/pack/pack-55d56bc5956267dd53821a70ed086bf130e986b0.pack": "b726cd8b4d6932eda3419b9436a90471",
".git/objects/29/323ac8acb2a31737bdae176c7a167b74850458": "35571f7df1cda116831a4e5232c36459",
".git/objects/1a/bcad36e38d25dda751249bf546d1d4f7b5323b": "0f5f359812dcb2e5c7e0d5f0b63143bf",
".git/objects/8f/97a60d7d74ecc299280578c6ab727dfcbb28ef": "61a3ed758fe100a8119ab1841826735d",
".git/objects/8f/db55ed17d9ccdcae51e6535eccbc4d8f3e7632": "ef29700771cd2c4991fcecee0955ca06",
".git/objects/19/7da6d216a2b58e6b209470fd87ae613ec4ce43": "ae0f94e2aa764b96cc4d003c12498b85",
".git/objects/26/af094322f49040df04674068cf81e975f8a8e5": "ed13f68a962b87103eef7bf97766288c",
".git/objects/86/d48f2ab4df59bf5c05069e9f8fe97b2b32da6b": "f2049e8de741247487ea4eeedf64f3a2",
".git/objects/88/4934232def73c218d8d7a17f3b5f86d72c00fc": "bd1a747c55b2679dfceecb94192465c6",
".git/objects/6b/4af8a58bba3a02043234ed00b118b443f471ab": "f39e2573922c469b9483dff834f27d11",
".git/objects/6b/3a85124096dfb47192dccafb310078d05590ad": "3d7bd325a001ea2047168923b7321cd5",
".git/objects/31/d0abf6003e599e0886b4e9e8efbb0d2486c1b7": "8fbb54f10ac1acd8e5b2a452e0660623",
".git/objects/91/f906583f9f93788de674e863012e98c6471208": "024ce1deef01b97cd21a7e2973601b0c",
".git/objects/98/aef1bf37b1f5e00a14f310ad34877dbf4b7c4e": "34a03c30b15eb933a8796c9243e5e9d2",
".git/objects/08/3c3f009d652bd51e5099e5cfdd9a415a370927": "4e0de9fe14dee077431697409e42d379",
".git/objects/63/1ee9ce0fbd95f1ef1f94c1bc43bbbdf77fae5c": "806db8187c885a0d3efee9b07c8992cf",
".git/objects/0a/e2bcf59318ad2c48d3f1619fbf8844f7bab733": "9335ff49554c8ca840c5e1c83fd470c3",
".git/objects/a9/4b265f99da2598204a7afa27bb7b0b03fa59cb": "d0bf120e64358eeb0b9f96d5f4820429",
".git/objects/d5/d078601a98ba3a806cf4037ce8c74ab84fac54": "ff9d3d3e80c795b066ad89bbfec1bcb0",
".git/objects/de/36497cfa6b275345dd90f8d4381cbc9dea01ed": "b04820a0bf7d6f6e5e40d80e67807568",
".git/objects/de/1cb9c7c9ef9d260634e076cfd3197f1ba73229": "4d961701ca050873aaf3d13348f2b5c2",
".git/objects/ea/1898239bc7ad2c535a96905ccb2917f84dcdcc": "c4ad0c214d4f006041272f5c3ef624b0",
".git/objects/c5/6a84cc9b70059942511a6785dc2834107216b5": "b2e52ab951f27be9288e7019f67de81e",
".git/objects/23/3b268bf1fc66dfd1006d3b35d98aa181f2b30a": "fb893679b4e0241b398234ee2e391346",
".git/objects/71/832b4d996893133dafb9221ec5fd28a00182f4": "d9b4846a6101208eef1f54afa90cf28c",
".git/objects/76/9c9f9de799432bf884e4e6e7bccd089be3767a": "f916c0fbfc4010a3d3359b9bac5172a4",
".git/objects/2b/43d3c395aa49ed12a860bff266529300774cef": "946a28f87890ccc83fe5b27f29f0046f",
".git/objects/78/88e12b3e44b9f14c9c5a26eabcfcbc57002b8e": "b90345d196688ec0d581bee9c76a1cc0",
".git/objects/8b/2a9f3aced6da96b56d1e71b613b6f4f226d456": "c278ac25c24db6f167aa8ce74552b0aa",
".git/objects/7f/33962a139ae6da527397c4262bdd82c067db55": "f047d77103828013101b30a12e4a7efe",
".git/objects/14/2a51f61c05c4b5c8268842cdefdb26cafd1d1a": "5a184aa11b949c88e1afa01f0cb4463e",
".git/objects/22/1effc70dc2a311584adcca4f218c0c4b33fd8d": "70f9bfd45ce798ba16afc27cdee70817",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/logs/HEAD": "5bd1f20c1309740bb66f4b119d6a83e9",
".git/logs/refs/heads/main": "27d4b00a7e638f9df865c0de13507de5",
".git/logs/refs/remotes/origin/HEAD": "a479a168b00ab6403eb1afe8537a779f",
".git/logs/refs/remotes/origin/main": "1ac4d83cfd8bb89c07408d3b14c76a2c",
".git/refs/heads/main": "c2c953fc5fc32a2f12daab0a267af452",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "c2c953fc5fc32a2f12daab0a267af452",
".git/index": "4904a0472d5d28a07c91b1cb8d8b4c49",
".git/packed-refs": "5a0f5221686486ee902054aea28d7468",
".git/COMMIT_EDITMSG": "246a957187545ba1ee6cff5fb35cace9",
".git/FETCH_HEAD": "95609aa5eedcb76fae74b51b263a8472",
".git/sourcetreeconfig": "7a5bf655dac6c0739a70bf4e5d865a70",
"assets/AssetManifest.json": "d75a021edb3d512b00d5cf9c1086c59e",
"assets/NOTICES": "ff79710503f1e47594fcd16069af4478",
"assets/FontManifest.json": "69e2464094de5750789aa1e06c347c4a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.smcbin": "a317bbbac5a77f494fbdb0f9a0e8efd1",
"assets/fonts/MaterialIcons-Regular.otf": "44e3be21bc11cac2ec58b76155a2dbb6",
"assets/assets/images/ic_ratio_win_game.png": "83737ad0505fed2c5161f9a1770b8943",
"assets/assets/json/opener-loading.json": "844c5e128d8a678dd4b770d44aed97ad",
"assets/assets/json/ratio_win_game.json": "054821cd45ed12070d8ced2d3e924725",
"assets/assets/json/background_winner.json": "3637f2b8ef3a296b527a59ba77ba2452",
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
