'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/objects/05/3fb55e1bbb5af2fcf326d0754adda43d1e26d2": "cfc9147889565cbc221fbf817fe49e2b",
".git/objects/07/684c833f74bbeccc06fed46de7dc7e370c28dc": "c0eac2f237623bed3ddb01e17e9c704d",
".git/objects/0c/c3b8caefb823af43d61deff26ebb853ad0c897": "e29f5d02015b03758e23e8c228401563",
".git/objects/17/7f0180bdade73aaafc181581f68767ad92f467": "71954988875e6f1b315b429a8f46a166",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/23/8a14f317668d83b1b10902b9e46f6c5711473b": "cb385156cd3cb36f4c1803756301c00d",
".git/objects/34/4f602fc93d11fe02216afa7affe5b58346176d": "bdc590eba50ece7916db101c523132ff",
".git/objects/35/6540509cd3e8ed40021771bbc064512614cd8d": "690d6d7ff63aeb62802bd470397792ba",
".git/objects/47/19d80e94a56029ca7f01f5821a4878a23da02d": "863027a6a63f004f63747da8717154a8",
".git/objects/5c/6f1f5adc4a25e0e30fa9fbe7910f55b7854c92": "f5db012e326f54e2f824cc846544611a",
".git/objects/63/7608cafdf2af05c2fd72ba956af9a704d267a1": "b09e1f91099d9ff95d9a994d0facf492",
".git/objects/67/39b9269121239e518dc71e5bcd04fa2a56fbb6": "87fcd124a4e8418d4c2e7353316fc8fd",
".git/objects/67/c7a41cfad89c2b8da56ab66d28adf8c5c80214": "c324720074f19d52da60a407cb59be14",
".git/objects/70/396643c9e3ba4e9b6cbd0ac54f93c64b1085e5": "c19606ad3ef504013706f0c184699a8e",
".git/objects/72/ed0e988540bda3074737459f813a0b45077000": "841f3f546898e99233f7f4ece7c6d227",
".git/objects/78/3ae8486865119f501ca4800abd19e083c81aaa": "27610eba2e9027e86bfd7eecfa3b719f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/86/236c6967068dd74fe22e3e86393e5ea68536b8": "1ef6400d259c3ed3b00f8a9f4a692b5d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/1150178ecb4aefb8dd6f8757f688732d20ed93": "d5c7c55d343069bf22c468dad3ca7c18",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d56378a5d58a0c07ca8e9d9db843441b5292f9": "d6885ffc5a8d2241077cf73be3c66b7b",
".git/objects/94/cebaf81b0b58c08987e4559a8b26564901da8b": "1458e028d91247f709f2608184180050",
".git/objects/96/176bd9cf15bd68904c1aba829d73d216e608c4": "c975cb1e839e2d9a8fec66782e9f41f8",
".git/objects/9b/200488949f6e70578fe83c4702e6866ebbd87d": "6520821327a8f492b6145dee1e879b6b",
".git/objects/9e/14eafea0e73bda68955b304af854f9a1f115ee": "6657d708564bfd70e603672bb36a5b6f",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/aa/9686c3cb7f7e5635a6c1e993266900d3b056a7": "6a4f9f2318b44d13892096b0c88c1b3e",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b0/8b514b402dd8f998410425288254606fe865ad": "314ce0bea3f39b44b169a8cc76645cc6",
".git/objects/b4/539cdc31d68899d09d5f07049acfbdee15d04d": "7837148e289f04ab6ffe1fc266f467eb",
".git/objects/b6/1ccef069355c5c2588ce2f869817339b3cd528": "47a4d5a263eee63f1ecc6dba4dbbf536",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bf/760faa8f1a7ac1de8ce109bb01081d9da4886d": "2c57145184c1e6659220bfc52dbb1129",
".git/objects/c8/c90b7c2c97e1f78ab3c09687d0d7f9a2a60cae": "4d51cc92b66c7944539ec97202c36527",
".git/objects/d1/b3c37d204658f8ec60410c2dddf9bd1ab4e6d9": "d7af66e99e86a295945945022844c9eb",
".git/objects/d2/589756baef21ea18b81c94a05d224aadd355d6": "19b1c5ac22060ee37887fedb4089437e",
".git/objects/d4/32d6edaea462eb89dd51c7df369bc76ed9c5f3": "bb52ee5680219cf3befc160d0a9e5779",
".git/objects/d8/0e3856ea151433abee0a02523220b1bac17486": "4b73fd3fa5fd7ae22012a3172e88b829",
".git/objects/d9/a48e46321623ebec2f2db4f9542c4d7c26e71b": "d714db98b482a4289c980ac7f7d2ad76",
".git/objects/da/cc23f236ff08013e149c26114fb4f7960927e8": "2abb0ecc00d57f4befcf40a58c51b6af",
".git/objects/e3/79e7156c6d5fbd04e1b0b3e8a1c81b03987a39": "2ac0a08e2091befbdb68ec6bb381d664",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
"assets/AssetManifest.json": "2e9dd5256139fe90458a1032612e313d",
"assets/assets/book.jpeg": "3583cc7fe3c343b7891efc292fd5d694",
"assets/assets/calc.jpeg": "3f1633a1f1abbf0042b376a069267f4d",
"assets/assets/dumbbell.jpeg": "8f517cc8610735247a042b40a8006942",
"assets/assets/phone.jpeg": "3b9785fb64d8d9aeec50fed2f15c9a20",
"assets/assets/phoneicon.jpeg": "0cc42c4e9e943b38a0d5b9f95a4b9062",
"assets/assets/pizza.jpeg": "8e9ff853031675f91e0c9f28e189bf40",
"assets/assets/records.jpeg": "51aa66bf5cb423ace6dca85ecb98d530",
"assets/assets/ruler.jpeg": "a9d7463ed86da0b6f45ae700f59a6628",
"assets/assets/stopwatch.jpeg": "29e12fe36fcfca1e2033a6f3d141f385",
"assets/assets/Univ.jpeg": "299c6b4f71bf6657a4b097a3ee754578",
"assets/assets/university.jpeg": "0a60c057ebcbddeed378224b2ce599dc",
"assets/FontManifest.json": "43aae9de76ea2b61fc6fd8c42d373b51",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/fonts/Nunito-Regular.ttf": "d8de52e6c5df1a987ef6b9126a70cfcc",
"assets/NOTICES": "72621df5b115637069ac32af2064fa78",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "00bb2b684be61e89d1bc7d75dee30b58",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "4b6a9b7c20913279a3ad3dd9c96e155b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dffd9504fcb1894620fa41c700172994",
"favicon.png": "df239137bc9bf96ccf61889e81cd0e4e",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "7cc3cf52ab945f1e68ed6f3a6114a6fc",
"/": "7cc3cf52ab945f1e68ed6f3a6114a6fc",
"main.dart.js": "6cfca8c6a5f36ee6f26026aed370ca48",
"manifest.json": "045ad21d1f271755a7577cdcf7d2252d",
"version.json": "d6c8c7e798cb0c538f94938b25c11a2f"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
