let path = CONFIG.root + searchPath;
// Use CDN to accelerate the speed of loading search.xml
if ('cdn' in CONFIG.localsearch && CONFIG.localsearch.cdn.enable === true && CONFIG.localsearch.cdn.url !== null){
  path = CONFIG.localsearch.cdn.url;
}