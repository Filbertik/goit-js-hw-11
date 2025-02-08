import{a as d,S as m,i as s}from"./assets/vendor-DEenWwFD.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const y="48709944-704d63a27b5727393d509020c",g="https://pixabay.com/api/";async function f(o){try{return(await d.get(g,{params:{key:y,image_type:"photo",orientation:"horizontal",q:o,safesearch:!0}})).data.hits}catch(r){throw console.error(" Sorry, there are no images matching your search query. Please try again!",r),r}}function h(o){const r=document.getElementById("gallery"),a=o.map(({webformatURL:n,largeImageURL:e,tags:t,likes:i,views:l,comments:p,downloads:u})=>`
        <div class="gallery-item">
            <a href="${e}">
                <img src="${n}" alt="${t}" loading="lazy"/>
            </a>
            <div class="info">
                <p>❤️ ${i}</p>
                <p>👁️ ${l}</p>
                <p>💬 ${p}</p>
                <p>⬇️ ${u}</p>
            </div>
        </div>
    `).join("");r.innerHTML=a}const E=document.getElementById("search-form"),L=document.getElementById("gallery"),c=document.getElementById("loader");let b=new m(".gallery a",{captionsData:"alt",captionDelay:250});E.addEventListener("submit",async o=>{o.preventDefault();const r=o.target.elements["search-input"].value.trim();if(!r){s.error({title:"❌ Error",message:"Type the request !",position:"topRight"});return}L.innerHTML="",c.style.display="block";try{const a=await f(r);if(a.length===0){s.warning({title:"❌ Attention",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(a),b.refresh()}catch{s.error({title:"❌ Error",message:"Can not load the images!",position:"topRight"})}finally{c.style.display="none"}});
//# sourceMappingURL=index.js.map
