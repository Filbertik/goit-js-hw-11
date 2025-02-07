import{a as m,S as p,i as n}from"./assets/vendor-DEenWwFD.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const g="48709944-704d63a27b5727393d509020c",f="https://pixabay.com/api/";async function y(o){try{return(await m.get(f,{params:{key:g,image_type:"photo",orientation:"horizontal",q:o,safesearch:!0}})).data.hits}catch(r){throw console.error(" Sorry, there are no images matching your search query. Please try again!",r),r}}function h(o){const r=document.getElementById("gallery"),i=o.map(({webformatURL:a,largeImageURL:e,tags:t,likes:s,views:l,comments:d,downloads:u})=>`
        <div class="gallery-item">
            <a href="${e}">
                <img src="${a}" alt="${t}" loading="lazy"/>
            </a>
            <div class="info">
                <p>❤️ ${s}</p>
                <p>👁️ ${l}</p>
                <p>💬 ${d}</p>
                <p>⬇️ ${u}</p>
            </div>
        </div>
    `).join("");r.innerHTML=i}const L=document.getElementById("search-form"),E=document.getElementById("gallery"),c=document.getElementById("loader");let v=new p(".gallery a",{captionsData:"alt",captionDelay:250});L.addEventListener("submit",async o=>{o.preventDefault();const r=o.target.elements["search-input"].value.trim();if(!r){n.error({title:"❌ Error",message:"Type the request !",position:"topRight"});return}E.innerHTML="",c.classList.remove("hidden");try{const i=await y(r);if(i.length===0){n.warning({title:"❌ Attention",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(i),v.refresh()}catch{n.error({title:"❌ Error",message:"Can not load the images!",position:"topRight"})}finally{c.classList.add("hidden")}});
//# sourceMappingURL=index.js.map
