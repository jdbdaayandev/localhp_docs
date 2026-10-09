document.addEventListener('DOMContentLoaded',()=>{
 const menu=document.querySelector('.mobilemenu'), sidebar=document.querySelector('.sidebar');
 if(menu&&sidebar) menu.addEventListener('click',()=>sidebar.classList.toggle('open'));
 const search=document.querySelector('.search');
 if(search){search.addEventListener('input',()=>{const q=search.value.trim().toLowerCase();let shown=0;document.querySelectorAll('[data-nav-item]').forEach(a=>{const yes=!q||a.textContent.toLowerCase().includes(q);a.style.display=yes?'block':'none';if(yes)shown++;});const status=document.querySelector('.search-status');if(status)status.textContent=q?`${shown} matching page${shown===1?'':'s'}`:'';});}
});