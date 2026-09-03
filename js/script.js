
function filterCatalog(){
  const q = (document.getElementById('q')?.value||'').toLowerCase();
  const active = document.querySelector('.filters button.active')?.dataset.filter||'all';
  document.querySelectorAll('.card[data-type]').forEach(c=>{
    const type = c.dataset.type.toLowerCase();
    const cat = (c.dataset.cat||'').toLowerCase();
    const title = (c.dataset.title||'').toLowerCase();
    const matchText = !q || title.includes(q) || cat.includes(q) || type.includes(q);
    const matchFilter = active==='all' || type===active || cat.includes(active);
    c.style.display = (matchText && matchFilter) ? '' : 'none';
  });
}
document.addEventListener('DOMContentLoaded',()=>{
  document.getElementById('q')?.addEventListener('input', filterCatalog);
  document.querySelectorAll('.filters button').forEach(b=>b.addEventListener('click',()=>{
    document.querySelectorAll('.filters button').forEach(x=>x.classList.remove('active'));
    b.classList.add('active'); filterCatalog();
  }));
});
