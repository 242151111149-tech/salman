// Simple navigation highlight
document.querySelectorAll('.menu a').forEach(a=>{
  a.addEventListener('click', (e)=>{
    document.querySelectorAll('.menu a').forEach(x=>x.classList.remove('active'));
    a.classList.add('active');
  });
});

// Quiz checking logic
document.querySelectorAll('.quiz .q').forEach(function(q){
  const btn = q.querySelector('.check-btn');
  const input = q.querySelector('.answer');
  const fb = q.querySelector('.feedback');
  const correct = q.getAttribute('data-answer').trim().toLowerCase();

  btn.addEventListener('click', function(){
    const val = input.value.trim().toLowerCase();
    if(!val){
      fb.style.color = '#b91c1c';
      fb.textContent = 'Isi jawaban terlebih dahulu.';
      return;
    }

    // normalize comma/space for multi-answer comparisons
    const norm = v => v.replace(/\s+/g,'').replace(/；|，/g,',');
    if(norm(val) === norm(correct)){
      fb.style.color = '#065f46';
      fb.textContent = 'Benar ✓';
    } else {
      fb.style.color = '#b91c1c';
      fb.textContent = 'Masih kurang tepat ✗ (jawaban: '+ correct +')';
    }
  });
});

// Optional: add simple scrollspy to update active menu link on scroll
const sections = Array.from(document.querySelectorAll('main .card'));
window.addEventListener('scroll', function(){
  let fromTop = window.scrollY + 100;
  document.querySelectorAll('.menu a').forEach(link=>{
    const section = document.querySelector(link.getAttribute('href'));
    if(!section) return;
    if(section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop){
      document.querySelectorAll('.menu a').forEach(x=>x.classList.remove('active'));
      link.classList.add('active');
    }
  });
});
