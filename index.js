import{a as p,i as f,S as h}from"./assets/vendor-vwbIfzmB.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();const g="50500162-d9264b458cdacee071354b362",y="https://pixabay.com/api/";function v(e){const n={key:g,q:e,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:21,min_width:640,min_height:480};return p.get(y,{params:n}).then(t=>{const r=t.data;if(r.hits.length===0)throw new Error("No images found");return r})}function b(e){return`
    <li class="gallery-item">
      <a class="gallery-link" href="${e.largeImageURL}">
        <img
          class="gallery-image"
          src="${e.webformatURL}"
          alt="${e.tags}"
          loading="lazy"
        />
        <div class="info">
          <div class="info-item">
            <span class="info-label">Likes</span>
            <span class="info-value">${e.likes}</span>
          </div>
          <div class="info-item">
            <span class="info-label">Views</span>
            <span class="info-value">${e.views}</span>
          </div>
          <div class="info-item">
            <span class="info-label">Comments</span>
            <span class="info-value">${e.comments}</span>
          </div>
          <div class="info-item">
            <span class="info-label">Downloads</span>
            <span class="info-value">${e.downloads}</span>
          </div>
        </div>
      </a>
    </li>
  `}function w(e,n){const t=e.map(b).join("");n.insertAdjacentHTML("beforeend",t)}function L(e){e.innerHTML=""}function S(e){e.style.display="flex"}function c(e){e.style.display="none"}function i(e){f.error({title:"Error",message:e,position:"topRight",timeout:5e3})}function E(e){f.success({title:"Success",message:e,position:"topRight",timeout:3e3})}const m=document.getElementById("search-form"),u=m.querySelector('input[name="searchQuery"]'),d=document.getElementById("gallery"),l=document.getElementById("loader");let I=new h(".gallery a",{captionsData:"alt",captionDelay:250});m.addEventListener("submit",P);function P(e){e.preventDefault();const n=u.value.trim();if(!n){i("Please enter a search query!");return}L(d),S(l),v(n).then(t=>{c(l),w(t.hits,d),I.refresh(),E(`Found ${t.totalHits} images!`),u.value=""}).catch(t=>{c(l),t.message==="No images found"?i("Sorry, there are no images matching your search query. Please try again!"):(i("Something went wrong. Please try again later."),console.error("Search error:",t))})}
//# sourceMappingURL=index.js.map
